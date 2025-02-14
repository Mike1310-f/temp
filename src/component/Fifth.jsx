
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export default function Fifth() {
  const navigate = useNavigate();
  const [showMessage, setShowMessage] = useState(false);
  const messageRef = useRef(null);

  useEffect(() => {
    if (showMessage) {
      gsap.fromTo(
        messageRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    }
  }, [showMessage]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex flex-col items-center justify-center p-8 text-center text-white">
      <h1 className="text-4xl font-bold drop-shadow-lg">
        Wanna know my feelings? 🥺❤️
      </h1>

      {/* Button to reveal message */}
      {!showMessage && (
        <button
          onClick={() => setShowMessage(true)}
          className="mt-6 px-8 py-3 bg-white text-pink-600 font-bold rounded-full shadow-lg hover:scale-105 transition-all duration-300"
        >
          Yes 😍
        </button>
      )}

      {/* Hidden Message (Appears on button click) */}
      {showMessage && (
        <div ref={messageRef} className="mt-6">
          <p className="text-lg bg-white text-pink-700 p-6 rounded-2xl shadow-2xl max-w-lg drop-shadow-lg">
          My love, I honestly don’t think I’ll ever find the right words to
          express just how much you mean to me. It’s a feeling so deep, so
          overwhelming, that words often fall short, but I need you to know just
          how incredibly much I love you❤️. Every moment I spend with you is a
          blessing, and with each passing day, my love for you grows stronger,
          more intense, and more beautiful than I could have ever imagined. You
          are the reason I wake up every morning, the one who fills my heart
          with warmth and purpose. You are the air I breathe, the beat of my
          heart, the reason for my smile, and without you, I feel like I would
          lose a part of myself. I can’t imagine a world where you're not by my
          side, and just the thought of losing you is enough to terrify me to my
          core. It’s something I can’t even fathom. I know I have my faults. I’m
          not a perfect person, and I’m aware of my flaws. I can be jealous,
          possessive, and even territorial at times❤️. These are things I’m
          working on, but the truth is, they stem from the love I have for you.
          I love you so fiercely, so deeply, that sometimes I fear losing you,
          and that fear turns into something I can’t control. It’s not about
          doubting you, it’s about loving you more than I ever thought possible,
          and being scared of losing the one person who truly makes me feel
          whole. I am not proud of these feelings at times, but please know that
          they come from a place of love and fear, not from a desire to control
          or hurt you❤️. You are the most precious person in my life, and I need
          you to understand that when I say I can’t live without you🥺❤️, I mean it
          with every part of me. You are my everything—my best friend, my
          confidante, my love, my soulmate. I’m constantly amazed by your
          strength, your beauty, and your kindness. You are the purest soul I
          have ever encountered, and the more I know you, the more I realize how
          truly lucky I am to have you. You’re the only person who understands
          me completely, the only one who makes me feel seen, heard, and loved.
          If anything were ever to happen between us, if I were to lose you, I
          don’t know how I would cope. The thought of losing you is so
          terrifying that it keeps me awake at night. You are my entire world,
          and I can’t bear the idea of being without you. Life would lose its
          meaning without you in it. I know I’m not perfect, and I may make
          mistakes, but please know that my love for you is unwavering and
          limitless. I would do anything to make you happy🥺❤️, to keep you safe, to
          hold you close and never let go. You are everything to me, and I need
          you to know that I will always cherish you, love you, and protect you
          with all that I have. You are my future, my present, and my past all
          rolled into one. Without you, I wouldn’t be whole, and I’m so
          incredibly grateful for the love we share. No matter what happens in
          life, I want you to know that I will always love you more than you can
          ever imagine🥺❤️. You are my everything, and I will spend the rest of my
          life trying to show you just how much you mean to me. ❤️
          </p>

          {/* Next Button */}
          <button
            onClick={() => navigate("/sixth")}
            className="mt-6 px-8 py-3 bg-blue-500 text-white font-bold rounded-full shadow-lg hover:scale-105 transition-all duration-300"
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
}
