import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Sixth() {
  const [showNextButton, setShowNextButton] = useState(false); // State for showing the "Next" button
  const [noText, setNoText] = useState("No 😢");
  const navigate = useNavigate();
  const containerRef = useRef(null);

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
    <div ref={containerRef} className="min-h-screen bg-red-100 p-8 flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold text-red-600 fade-in">
        Will you promise me to be with me till the very end and tie the knot with me in the future? 💍❤️
      </h1>

      <div className="mt-6 space-x-4 fade-in">
        {/* YES Button */}
        <button
          onClick={() => setShowNextButton(true)} // Show "Next" button after clicking "Yes"
          className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition"
        >
          Yes, Forever ❤️
        </button>

        {/* NO Button - Changes Text on Click */}
        <button
          onClick={() => setNoText("Click Yes, You Idiot! 😡")}
          className="px-6 py-3 bg-gray-300 text-gray-700 font-semibold rounded-lg shadow-md hover:bg-gray-400 transition"
        >
          {noText}
        </button>
      </div>

      {/* Conditionally render the "Next" button */}
      {showNextButton && (
        <button
          onClick={() => navigate("/rightanswer")} // Navigate to the RightAnswer page
          className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          Next →  
        </button>
      )}
    </div>
  );
}
