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
      className="shadow-section-inset dark:shadow-section-inset-dark my-4 border-y border-neutral-100 px-4 py-12 dark:border-neutral-800"
    >
      <div className="mx-auto flex max-w-lg flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="text-sm font-medium tracking-tight text-neutral-600"
          >
            Full Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Kuldeep Jha"
            className="focus:ring-primary rounded-md px-2 py-2 text-sm shadow-[var(--shadow-custom)] focus:ring-2 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200 dark:shadow-[0_2px_4px_rgba(156,163,175,0.3)] dark:focus:ring-neutral-100"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-sm font-medium tracking-tight text-neutral-600"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="Kuldeep@gmail.com"
            className="focus:ring-primary rounded-md px-2 py-2 text-sm shadow-[var(--shadow-custom)] focus:ring-2 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200 dark:shadow-[0_2px_4px_rgba(156,163,175,0.3)] dark:focus:ring-neutral-100"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="message"
            className="text-sm font-medium tracking-tight dark:text-neutral-600"
          >
            Message
          </label>
          <textarea
            rows={5}
            id="message"
            placeholder="You are crazy good at this,never change."
            className="focus:ring-primary rounded-md px-2 py-2 text-sm shadow-[var(--shadow-custom)] focus:ring-2 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200 dark:shadow-[0_2px_4px_rgba(156,163,175,0.3)] dark:focus:ring-neutral-100"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="rounded-md border border-neutral-200 bg-neutral-100 px-4 py-1.5 text-sm text-neutral-700 shadow-[0px_4px_8px_0px_var(--color-neutral-200)_inset] transition-colors hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:shadow-[0px_4px_8px_0px_var(--color-neutral-700)_inset]"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
