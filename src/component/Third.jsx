import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import this
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Third() {
  const navigate = useNavigate(); // ✅ Now it will work
  const containerRef = useRef(null);

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
    <div ref={containerRef} className="min-h-screen bg-red-100 p-8">
      <h1 className="text-4xl font-bold text-red-600 text-center fade-in">
        Love is in the Air! ❤️
      </h1>

      <p className="text-lg text-gray-700 text-center mt-4 fade-in">
        Here’s a little happiness for you. Scroll down and enjoy!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
        <div className="fade-in">
          <img src="/images/3.png" alt="Love 1" className="w-full rounded-lg shadow-lg" />
        </div>
        <div className="fade-in">
          <img src="/images/4.png" alt="Love 2" className="w-full rounded-lg shadow-lg" />
        </div>
        <div className="fade-in">
          <img src="/images/6.png" alt="Love 3" className="w-full rounded-lg shadow-lg" />
        </div>
        <div className="fade-in">
          <img src="/images/5.png" alt="Love 4" className="w-full rounded-lg shadow-lg" />
        </div>
      </div>

      <p className="text-xl font-semibold text-center text-red-500 mt-8 fade-in">
        Life is beautiful, and so are YOU! 💖
      </p>

      {/* ✅ Button to Navigate to Fourth.jsx */}
      <button
        onClick={() => navigate("/fourth")}
        className="mt-6 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
      >
        Next →
      </button>
    </div>
  );
}
