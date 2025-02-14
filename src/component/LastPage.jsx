import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LastPage() {
  const videoRef = useRef(null);
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
    <div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center p-8 text-center text-white"
    >
      <h1 className="text-4xl font-bold drop-shadow-lg fade-in">
        A Special Moment With You ❤️🎥
      </h1>

      <p className="text-xl mt-4 fade-in">
        Here's a little video for you. Enjoy this special moment! 💖
      </p>

      <div className="mt-6 fade-in">
        {/* Video Element */}
        <video
          src="/images/v.mp4"
          controls
          autoPlay
          loop
          muted
          className="rounded-lg shadow-lg w-full max-w-2xl"
        >
          <source
            src="/path/to/your-video.mp4" // Replace with your video path
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <p className="mt-8 text-xl fade-in">
        I hope you love it as much as I do! 💖
      </p>
    </div>
  );
}
