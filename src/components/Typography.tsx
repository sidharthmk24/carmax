"use client";

import React from "react";
import { motion } from "framer-motion";

// ─────────────────────────────────────────────
//  Variant union type
// ─────────────────────────────────────────────
type TypographyVariant =
  | "mainheading"
  | "subheading"
  | "smallhead"
  | "description"
  | "btn";

// ─────────────────────────────────────────────
//  Props
// ─────────────────────────────────────────────
interface TypographyProps {
  /** Which visual style to render */
  variant: TypographyVariant;
  /** Text / children to display */
  children: React.ReactNode;
  /** Extra Tailwind classes to merge in */
  className?: string;
  /** Animate in on mount (uses framer-motion fade + slide up) */
  animate?: boolean;
  /** For the "btn" variant: click handler */
  onClick?: () => void;
  /** For the "btn" variant: HTML button type */
  type?: "button" | "submit" | "reset";
  /** For the "btn" variant: disable the button */
  disabled?: boolean;
  /** Render as a different HTML tag (overrides the default per-variant tag) */
  as?: keyof JSX.IntrinsicElements;
}

// ─────────────────────────────────────────────
//  Style map  (Tailwind classes per variant)
// ─────────────────────────────────────────────
const variantStyles: Record<TypographyVariant, string> = {
  /**
   * mainheading
   * Large, bold, Orbitron, uppercase – used for primary section headings.
   */
  mainheading:
    "text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-normal font-orbitron " +
    "text-white leading-[1.1] tracking-wide uppercase",

  /**
   * subheading
   * Medium-weight, slightly smaller – for secondary headings / section labels.
   */
  subheading:
    "text-[20px] sm:text-[30px] md:text-[40px] font-normal font-orbitron " +
    "text-orange-500 leading-snug tracking-wider uppercase",

  /**
   * smallhead
   * Small caps-style label – for eyebrow text or card titles.
   */
  smallhead:
    "text-xs sm:text-lg " ,

  /**
   * description
   * Body copy – light weight, comfortable line-height, muted colour.
   * Font: Be Vietnam Pro
   */
  description:
    "text-base sm:text-lg md:text-sm font-light font-sans leading-relaxed text-gray-300",

  /**
   * btn
   * Button label typography – Be Vietnam Pro font
   */
  btn: "text-xs md:text-sm font-medium font-sans ",
};

// ─────────────────────────────────────────────
//  Default HTML element per variant
// ─────────────────────────────────────────────
const defaultTag: Record<TypographyVariant, keyof JSX.IntrinsicElements> = {
  mainheading: "h1",
  subheading: "h2",
  smallhead: "h3",
  description: "p",
  btn: "span",
};

// ─────────────────────────────────────────────
//  Framer-motion fade + slide-up preset
// ─────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 16 },
  },
};

// ─────────────────────────────────────────────
//  Component
// ─────────────────────────────────────────────
export default function Typography({
  variant,
  children,
  className = "",
  animate = false,
  onClick,
  type = "button",
  disabled = false,
  as,
}: TypographyProps) {
  const Tag = (as ?? defaultTag[variant]) as React.ElementType;
  const baseClasses = variantStyles[variant];
  const combinedClasses = [baseClasses, className].filter(Boolean).join(" ");

  // Shared props for the rendered element
  const sharedProps = {
    onClick,
    ...(Tag === "button" ? { type, disabled } : {}),
    className: combinedClasses,
  };

  if (animate) {
    // Wrap with motion equivalent of the tag
    const MotionTag = motion[Tag as keyof typeof motion] as React.ElementType;
    return (
      <MotionTag
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        {...sharedProps}
      >
        {children}
      </MotionTag>
    );
  }

  return <Tag {...sharedProps}>{children}</Tag>;
}
