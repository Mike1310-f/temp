import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function First() {
  const [buttonText, setButtonText] = useState("No");
  const navigate = useNavigate();

  const handleNoClick = () => {
    setButtonText("Click Yes, you idiot");
  };

  const handleYesClick = () => {
    navigate("/second");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 p-4 text-center">
      {/* Top Image */}
      <img
        src="/images/1.jpg"
        alt="Valentine"
        className="w-48 h-48 rounded-full shadow-lg"
      />

      {/* Valentine Message */}
      <h1 className="text-2xl font-bold text-pink-700 mt-6">
        Will you please be my Valentine?
      </h1>

      {/* Buttons */}
      <div className="mt-6 space-x-4">
        <button
          onClick={handleYesClick}
          className="px-6 py-2 bg-pink-500 text-white font-semibold rounded-lg shadow-md hover:bg-pink-600 transition"
        >
          Yes, of course
        </button>
        <button
          onClick={handleNoClick}
          className="px-6 py-2 bg-gray-300 text-gray-700 font-semibold rounded-lg shadow-md hover:bg-gray-400 transition"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
