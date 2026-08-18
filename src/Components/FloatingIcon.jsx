import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import PropTypes from "prop-types";

const FloatingIcon = ({
  children,
  className,
  animationDelay = "0s",
  style,
  glowColor = "255,255,255",
  index = 0,
}) => {
  const wrapRef = useRef(null);
  const cardRef = useRef(null);

  useGSAP(() => {
    gsap.set(wrapRef.current, { opacity: 0 });
    gsap.set(cardRef.current, { scale: 0, rotation: -30 });

    const entranceDelay = 0.3 + index * 0.08;

    gsap.to(wrapRef.current, {
      opacity: 1,
      duration: 0.5,
      delay: entranceDelay,
      ease: "power2.out",
    });

    gsap.to(cardRef.current, {
      scale: 1,
      rotation: 0,
      duration: 0.7,
      delay: entranceDelay,
      ease: "back.out(1.7)",
    });
  }, [index]);

  return (
    <div
      ref={wrapRef}
      className={`absolute pointer-events-auto ${className}`}
      style={{
        animationDelay,
        animation: "float 20s ease-in-out infinite",
        ...style,
      }}
    >
      <div
        ref={cardRef}
        className="w-14 h-14 rounded-2xl bg-white/[0.06] backdrop-blur-md border border-white/10 flex items-center justify-center hover:scale-110 hover:bg-white/10 hover:border-white/20 transition-all duration-500 ease-smooth cursor-default"
        style={{
          boxShadow: `0 8px 30px rgba(0,0,0,0.5), 0 0 24px rgba(${glowColor},0.25)`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

FloatingIcon.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  animationDelay: PropTypes.string,
  style: PropTypes.object,
  glowColor: PropTypes.string,
  index: PropTypes.number,
};

export default FloatingIcon;
