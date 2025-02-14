import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export default function RightAnswer() {
  const containerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    gsap.fromTo(
      ".fade-in",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.5,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-blue-100 p-8 text-center">
      <h1 className="text-4xl font-bold text-blue-700 fade-in">Right Answer! 🎉</h1>

      <p className="text-lg text-gray-700 mt-4 fade-in">
        You've made the right choice, and I’m so happy for you! 💖 
        Now for you gift, click on next button
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
        <div className="fade-in">
          <img src="/images/2.gif" alt="Right Answer" className="w-full rounded-lg shadow-lg" />
        </div>
      </div>

      <p className="text-xl font-semibold text-center text-blue-500 mt-8 fade-in">
        You’re amazing! Keep up the good work! 🌟
      </p>

      <button
        onClick={() => navigate("/lastpage")}
        className="mt-6 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
      >
        Next →  
      </button>
    </div>
  );
}
