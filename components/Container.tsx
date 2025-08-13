import { cn } from "@/lib/utils";
import React from "react";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative mx-auto w-full h-full max-w-4xl bg-white dark:bg-black  ",
        className,
      )}
    >
      {children}
     

    </div>
  );
};

export default Container;
