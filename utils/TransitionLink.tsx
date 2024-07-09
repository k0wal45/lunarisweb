"use client";
import Link, { LinkProps } from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ReactDOM from "react-dom";
import Transition from "@/components/Transition/Transition";

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const TransitionLink: React.FC<TransitionLinkProps> = ({
  children,
  href,
  className = "",
  ...props
}) => {
  const router = useRouter();
  const [showTransition, setShowTransition] = useState(false);
  const [open, setOpen] = useState(false);

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    setShowTransition(true);
    setOpen(true);

    await sleep(1000);
    router.push(href);

    setOpen(false);
    await sleep(1000);

    setShowTransition(false);
  };

  return (
    <>
      <Link
        {...props}
        href={href}
        onClick={handleTransition}
        className={className}
      >
        {children}
      </Link>
      {showTransition &&
        ReactDOM.createPortal(<Transition open={open} />, document.body)}
    </>
  );
};
