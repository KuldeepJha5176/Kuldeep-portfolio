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
        "relative mx-auto h-full w-full max-w-4xl bg-white dark:bg-neutral-900",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Container;
