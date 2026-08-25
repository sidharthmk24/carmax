"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "outlined";
  children: string; // Enforce string for text splitting
  rightIcon?: React.ReactNode;
}

export default function Button({
  variant = "primary",
  children,
  className = "",
  rightIcon,
  ...props
}: ButtonProps) {
  // Base fixed padding as requested
  const baseStyles =
    "relative px-6 py-3 flex items-center justify-center overflow-hidden font-be-vietnam font-bold text-sm  transition-colors duration-300 cursor-pointer rounded-sm";

  const variants = {
    primary: "bg-white text-black ",
    outlined: "bg-transparent text-white border border-white/40",
  };

  const letters = children.split("");

  return (
    <motion.button
      className={`${baseStyles} ${variants[variant]} ${className} group`}
      whileTap={{ scale: 0.97 }}
      initial="initial"
      whileHover="hover"
      {...props}
    >
      {/* Background slide-up effect for 'outlined' variant */}
      {variant === "outlined" && (
        <motion.div
          className="absolute inset-0 bg-white z-0 origin-bottom"
          initial={{ scaleY: 0 }}
          variants={{
            hover: {
              scaleY: 1,
              transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
            },
          }}
        />
      )}

      {/* Background slide-up effect for 'primary' variant */}
      {variant === "primary" && (
        <motion.div
          className="absolute inset-0 bg-[#FE6700] z-0 origin-bottom"
          initial={{ scaleY: 0 }}
          variants={{
            hover: {
              scaleY: 1,
              transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
            },
          }}
        />
      )}

      <span className="relative z-10 flex items-center gap-2">
        <span className="flex overflow-hidden">
          {letters.map((letter, i) => (
            <span key={i} className="relative inline-block overflow-hidden">
              {/* The default visible letter that slides UP and out */}
              <motion.span
                className={`inline-block ${letter === " " ? "w-[0.3em]" : ""} ${
                  variant === "outlined"
                    ? "group-hover:text-black transition-colors duration-300"
                    : "text-black"
                }`}
                variants={{
                  initial: { y: 0 },
                  hover: {
                    y: "-110%",
                    transition: {
                      duration: 0.4,
                      ease: [0.76, 0, 0.24, 1],
                      delay: i * 0.015,
                    },
                  },
                }}
              >
                {letter}
              </motion.span>
              
              {/* The hidden letter that slides UP and in from the bottom */}
              <motion.span
                className={`absolute left-0 inline-block ${
                  letter === " " ? "w-[0.3em]" : ""
                } ${
                  variant === "outlined"
                    ? "text-black"
                    : "text-black"
                }`}
                variants={{
                  initial: { y: "110%" },
                  hover: {
                    y: 0,
                    transition: {
                      duration: 0.4,
                      ease: [0.76, 0, 0.24, 1],
                      delay: i * 0.015,
                    },
                  },
                }}
              >
                {letter}
              </motion.span>
            </span>
          ))}
        </span>
        {rightIcon && <span className="flex">{rightIcon}</span>}
      </span>
    </motion.button>
  );
}
