import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BlogLayoutProps {
  children: ReactNode;
  className?: string;
}

/**
 * BlogLayout - A reusable wrapper for blog-style content pages.
 * Constrains max width for readability and provides consistent spacing.
 * Used for personal project detail pages and other blog-style content.
 */
const BlogLayout = ({ children, className }: BlogLayoutProps) => {
  return (
    <div className={cn("mx-auto max-w-3xl px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
};

export default BlogLayout;

