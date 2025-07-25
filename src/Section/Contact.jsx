import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "@emailjs/browser";
import EarthCanvas from "../assets/Canvas/Earth";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const form = useRef();
  const formRef = useRef();
  const canvasRef = useRef(null);
  const successMessageRef = useRef(null);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Send email function
  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        "service_rmsexkg",
        "template_21uu2o6",
        form.current,
        "fvp5rJKKCXSjdBsFC"
      );

      // Show success message with animation
      setShowSuccess(true);

      // Animate success message
      gsap.fromTo(
        successMessageRef.current,
        { opacity: 0, y: -20, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "back.out(1.7)" }
      );

      // Clear form data
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      // Hide success message after 4 seconds
      setTimeout(() => {
        if (successMessageRef.current) {
          gsap.to(successMessageRef.current, {
            opacity: 0,
            y: -20,
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => setShowSuccess(false),
          });
        }
      }, 4000);
    } catch (error) {
      console.error("Email send error:", error);
      alert("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: formRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    // Set initial states
    gsap.set(formRef.current, { opacity: 0, x: -100 });
    gsap.set(canvasRef.current, { opacity: 0, x: 100 });

    tl.to(formRef.current, {
      opacity: 1,
      x: 0,
      duration: 1.2,
      ease: "power3.out",
    }).to(
      canvasRef.current,
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
      },
      "-=0.8"
    );

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="sm:px-16 px-6 sm:py-16 py-6 relative" id="contact">
      {showSuccess && (
        <div
          ref={successMessageRef}
          className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 bg-zinc-600 text-white px-8 py-4 rounded-lg shadow-2xl border border-zinc-700"
        >
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-zinc-500 rounded-full flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div>
              <p className="font-semibold">Message Sent Successfully! ✨</p>
              <p className="text-sm text-gray-100">
                Thank you for reaching out. I`ll get back to you soon!
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="flex xl:flex-row flex-col-reverse gap-16 overflow-hidden">
        <div
          ref={formRef}
          className="flex-1 bg-zinc-900 border-zinc-800 border p-8 rounded-2xl relative"
        >
          <h1 className="heading">Contact Me</h1>
          <p className="grid-subtext">Reach out to me quickly!</p>

          <form className="flex flex-col gap-5" onSubmit={sendEmail} ref={form}>
            <label className="mt-4 flex flex-col gap-3">
              <span className="text-white font-medium mb-2">Your Name</span>
              <input
                type="text"
                name="name"
                placeholder="What is your name?"
                className="bg-zinc-800 py-4 px-6 placeholder:text-zinc-400 text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-zinc-500 transition-all duration-300"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </label>

            <label className="mt-4 flex flex-col gap-3">
              <span className="text-white font-medium mb-2">Your Email</span>
              <input
                type="email"
                name="email"
                placeholder="What is your email?"
                className="bg-zinc-800 py-4 px-6 placeholder:text-zinc-400 text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-zinc-500 transition-all duration-300"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </label>

            <label className="mt-2 flex flex-col gap-3">
              <span className="text-white font-medium mb-2">Your Message</span>
              <textarea
                name="message"
                placeholder="What do you want to say?"
                rows="5"
                className="bg-zinc-800 py-4 px-6 placeholder:text-zinc-400 text-white rounded-lg outline-none border-none font-medium resize-none focus:ring-2 focus:ring-zinc-500 transition-all duration-300"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`py-3 px-8 mt-8 rounded-xl outline-none w-full font-bold shadow-lg transition-all duration-300 transform hover:scale-105 ${
                isSubmitting
                  ? "bg-zinc-500 text-zinc-400 cursor-not-allowed"
                  : "btn"
              }`}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-zinc-400 border-t-transparent rounded-full animate-spin"></div>
                  Sending...
                </div>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>

        <div
          ref={canvasRef}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[450px]"
        >
          <EarthCanvas />
        </div>
      </div>
    </section>
  );
};

export default Contact;
