import { useRef, useState, useLayoutEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import PropTypes from "prop-types";

const GLYPHS = "!<>-_\\/[]{}—=+*^?#01";

const scrambleTo = (el, targetText, { duration = 1, onComplete } = {}) => {
  const chars = targetText.split("");
  const state = { progress: 0 };

  gsap.to(state, {
    progress: 1,
    duration,
    ease: "power2.out",
    onUpdate: () => {
      const revealCount = Math.floor(state.progress * chars.length);
      el.textContent = chars
        .map((char, i) => {
          if (char === " ") return " ";
          if (i < revealCount) return char;
          return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        })
        .join("");
    },
    onComplete,
  });
};

const GlitchText = ({
  text,
  words,
  loop = false,
  as: Tag = "span",
  className = "",
  holdDuration = 2.2,
  scrambleDuration = 0.9,
}) => {
  const ref = useRef(null);
  const measureRef = useRef(null);
  const hasRevealed = useRef(false);
  const [lockedWidth, setLockedWidth] = useState(null);

  // Measure the widest content this element will ever show, so the
  // scramble never changes the box's width and jostles surrounding layout.
  useLayoutEffect(() => {
    if (!measureRef.current) return;
    const spans = measureRef.current.querySelectorAll("span");
    let max = 0;
    spans.forEach((s) => {
      max = Math.max(max, s.getBoundingClientRect().width);
    });
    setLockedWidth(Math.ceil(max));
  }, [loop, words, text]);

  useGSAP(() => {
    const el = ref.current;
    if (!el) return;

    if (loop && words?.length > 1) {
      el.textContent = words[0];
      const tl = gsap.timeline({ repeat: -1 });
      words.forEach((_, i) => {
        tl.to(
          {},
          {
            duration: holdDuration,
            onComplete: () =>
              scrambleTo(el, words[(i + 1) % words.length], {
                duration: scrambleDuration,
              }),
          },
        );
      });
      return () => tl.kill();
    }

    el.textContent = text
      .split("")
      .map((c) =>
        c === " " ? " " : GLYPHS[Math.floor(Math.random() * GLYPHS.length)],
      )
      .join("");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRevealed.current) {
          hasRevealed.current = true;
          scrambleTo(el, text, { duration: scrambleDuration });
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [text, words, loop]);

  const measureWords = loop && words?.length > 0 ? words : [text];

  return (
    <Tag className={className}>
      {/* Hidden measurer: renders the real content once, off-screen, to lock a stable width */}
      <span
        ref={measureRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          visibility: "hidden",
          height: 0,
          overflow: "hidden",
          whiteSpace: "nowrap",
          pointerEvents: "none",
        }}
      >
        {measureWords.map((w, i) => (
          <span key={i} style={{ display: "inline-block" }}>
            {w}
          </span>
        ))}
      </span>
      <span
        ref={ref}
        aria-hidden="true"
        style={{
          display: "inline-block",
          width: lockedWidth ? `${lockedWidth}px` : "auto",
          whiteSpace: "nowrap",
        }}
      />
      <span className="sr-only">{loop ? words[0] : text}</span>
    </Tag>
  );
};

GlitchText.propTypes = {
  text: PropTypes.string,
  words: PropTypes.arrayOf(PropTypes.string),
  loop: PropTypes.bool,
  as: PropTypes.elementType,
  className: PropTypes.string,
  holdDuration: PropTypes.number,
  scrambleDuration: PropTypes.number,
};

export default GlitchText;
