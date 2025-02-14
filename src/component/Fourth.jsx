import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export default function Fourth() {
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
        stagger: 0.3,
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
    <div ref={containerRef} className="min-h-screen bg-yellow-100 p-8">
      <h1 className="text-4xl font-bold text-yellow-700 text-center fade-in">
        A Special Message for You 💌
      </h1>

      <p className="text-lg text-gray-700 text-center mt-4 fade-in">
        You are special, loved, and appreciated more than you know! 💖
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
        <div className="fade-in">
          <img src="/images/one.jpeg" alt="Happy Moment" className="w-full rounded-lg shadow-lg" />
        </div>
        <p className="text-xl text-center text-gray-800 fade-in">
          🌟 You make the world a better place just by being in it!
        </p>
        <p className="text-xl text-center text-gray-800 fade-in">
          😊 Your smile is contagious, and your kindness spreads happiness!
        </p>
        <div className="fade-in">
          <img src="/images/two.jpeg" alt="Joyful Smile" className="w-full rounded-lg shadow-lg" />
        </div>
      </div>

      <div className="mt-10 space-y-4">
        <p className="text-xl text-center text-gray-800 fade-in">
          💕 Someone out there is so grateful for you!
        </p>
        <p className="text-xl text-center text-gray-800 fade-in">
          🌈 Keep shining, because you are truly amazing!
        </p>
      </div>

      <p className="text-xl font-semibold text-center text-yellow-600 mt-8 fade-in">
        Keep being YOU! You’re loved more than you know! ❤️
      </p>
      <button
        onClick={() => navigate("/fifth")}
        className="mt-6 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
      >
        Next →
      </button>
    </div>
  );
}
