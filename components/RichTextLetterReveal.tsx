"use client";

import { motion } from "motion/react";
import { createElement, useEffect, useMemo, useState, type ReactNode } from "react";

type RichTextLetterRevealProps = {
  text: string;
  baseDelay?: number;
  enabled?: boolean;
  preserveWords?: boolean;
  stepDelay?: number;
};

export default function RichTextLetterReveal({
  text,
  baseDelay = 0.2,
  enabled = true,
  preserveWords = false,
  stepDelay = 0.018,
}: RichTextLetterRevealProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const normalizedText = useMemo(() => text.replaceAll("\\n", "\n"), [text]);

  const animatedNodes = useMemo(() => {
    if (!enabled || !mounted) return null;

    const doc = new DOMParser().parseFromString(
      `<div>${normalizedText.replaceAll("\n", "<br />")}</div>`,
      "text/html",
    );
    const root = doc.body.firstElementChild;
    if (!root) return null;

    let charIndex = 0;

    const renderNode = (node: ChildNode, path: string): ReactNode => {
      if (node.nodeType === Node.TEXT_NODE) {
        const value = node.textContent ?? "";

        if (preserveWords) {
          return value.split(/(\s+)/).map((segment, i) => {
            if (/^\s+$/.test(segment)) {
              return (
                <span key={`${path}-space-${i}`}>
                  {segment.replaceAll(" ", "\u00A0")}
                </span>
              );
            }

            return (
              <span
                key={`${path}-word-${i}`}
                className="inline-block whitespace-nowrap"
              >
                {segment.split("").map((char, charIndexInWord) => {
                  const key = `${path}-word-${i}-char-${charIndexInWord}`;
                  const delay = baseDelay + charIndex * stepDelay;
                  charIndex += 1;
                  return (
                    <motion.span
                      key={key}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.16, ease: "easeOut", delay }}
                      className="inline-block"
                    >
                      {char}
                    </motion.span>
                  );
                })}
              </span>
            );
          });
        }

        return value.split("").map((char, i) => {
          const key = `${path}-char-${i}`;
          const delay = baseDelay + charIndex * stepDelay;
          charIndex += 1;

          return (
            <motion.span
              key={key}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.16, ease: "easeOut", delay }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          );
        });
      }

      if (node.nodeType === Node.ELEMENT_NODE) {
        const el = node as Element;
        const tagName = el.tagName.toLowerCase();

        if (tagName === "br") {
          return <br key={`${path}-br`} />;
        }

        const props: Record<string, string> = {};
        for (const attr of Array.from(el.attributes)) {
          const name = attr.name === "class" ? "className" : attr.name;
          props[name] = attr.value;
        }

        const children = Array.from(el.childNodes).map((child, i) =>
          renderNode(child, `${path}-${tagName}-${i}`),
        );
        return createElement(tagName, { ...props, key: `${path}-${tagName}` }, ...children);
      }

      return null;
    };

    return Array.from(root.childNodes).map((node, i) =>
      renderNode(node, `root-${i}`),
    );
  }, [baseDelay, enabled, mounted, normalizedText, preserveWords, stepDelay]);

  if (!enabled) {
    return <span className="whitespace-pre-line opacity-0">{normalizedText}</span>;
  }

  if (!mounted || !animatedNodes) {
    return <span className="whitespace-pre-line">{normalizedText}</span>;
  }

  return <>{animatedNodes}</>;
}
