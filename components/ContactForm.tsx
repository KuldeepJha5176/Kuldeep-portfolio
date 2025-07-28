"use client";
import React from "react";
import { toast } from "sonner";

const ContactForm = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      toast.error("Please fill all the fields");
      return;
    }
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        toast.success("Message sent successfully");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex max-w-lg flex-col gap-5 py-10"
    >
      <div className="flex flex-col gap-2">
        <label
          htmlFor="name"
          className="text-sm font-medium tracking-tight text-neutral-600 dark:text-neutral-300"
        >
          Full Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="Kuldeep Jha"
          className="shadow-custom focus:ring-primary rounded-md px-2 py-1 text-sm focus:ring-2 focus:outline-none"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="text-sm font-medium tracking-tight text-neutral-600 dark:text-neutral-300"
        >
          Email Address
        </label>
        <input
          id="email"
          type="email"
          placeholder="Kuldeep@gmail.com"
          className="shadow-custom focus:ring-primary rounded-md px-2 py-1 text-sm focus:ring-2 focus:outline-none"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-sm font-medium tracking-tight text-neutral-600 dark:text-neutral-300"
        >
          Message
        </label>
        <textarea
          rows={5}
          id="message"
          placeholder="You are crazy good at this,never change."
          className="shadow-custom focus:ring-primary resize-none rounded-md px-2 py-1 text-sm focus:ring-2 focus:outline-none"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        className="bg-primary rounded-md px-4 py-2 text-white"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
