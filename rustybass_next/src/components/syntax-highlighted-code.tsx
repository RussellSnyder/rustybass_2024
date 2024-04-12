"use client";
import React from "react";
import Highlight from "react-highlight";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export function SyntaxHighlightedCode({
  className,
  children,
  ...props
}: Props) {
  if (typeof children !== "string") return null;
  const firstLineBreak = children.indexOf("\n");
  const language = children.substring(0, firstLineBreak);

  const code = children.substring(firstLineBreak + 1);

  return <Highlight className={language}>{code}</Highlight>;
}
