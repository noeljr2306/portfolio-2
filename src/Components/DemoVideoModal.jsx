import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import PropTypes from "prop-types";
import { RiCloseLine } from "react-icons/ri";

const DemoVideoModal = ({
  isOpen,
  onClose,
  videoSrc,
  posterSrc,
  projectName,
}) => {
  const overlayRef = useRef(null);
  const panelRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    gsap.fromTo(
      overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.3, ease: "power2.out" },
    );
    gsap.fromTo(
      panelRef.current,
      { opacity: 0, scale: 0.95, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: "power3.out" },
    );

    const onKeyDown = (e) => e.key === "Escape" && handleClose();
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  const handleClose = () => {
    if (videoRef.current) videoRef.current.pause();
    gsap.to(panelRef.current, {
      opacity: 0,
      scale: 0.95,
      y: 20,
      duration: 0.25,
      ease: "power2.in",
    });
    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.25,
      ease: "power2.in",
      onComplete: onClose,
    });
  };

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
      onClick={handleClose}
    >
      <div
        ref={panelRef}
        className="relative w-full max-w-4xl bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-black transition-all"
          aria-label="Close video"
        >
          <RiCloseLine size={22} />
        </button>

        <video
          ref={videoRef}
          src={videoSrc}
          poster={posterSrc}
          controls
          autoPlay
          className="w-full aspect-video bg-black"
        >
          Sorry, your browser doesn&apos;t support embedded video.
        </video>

        <div className="p-4 border-t border-white/5">
          <p className="text-zinc-400 text-sm font-sora">
            {projectName} — walkthrough demo
          </p>
        </div>
      </div>
    </div>
  );
};

DemoVideoModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  videoSrc: PropTypes.string.isRequired,
  posterSrc: PropTypes.string,
  projectName: PropTypes.string.isRequired,
};

export default DemoVideoModal;
