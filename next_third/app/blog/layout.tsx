import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: {
    default: "Blog Page",
    template: "%s | Blog Page",
  },
};

const Blog = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default Blog;
