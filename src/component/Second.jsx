import { useNavigate } from "react-router-dom";

export default function Second() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100 p-4 text-center">
      <img
        src="/images/2.gif"
        className="w-48 h-48 rounded-full shadow-lg"
      ></img>
      <h1 className="text-3xl font-bold text-green-700">
        Yay! You said YES! 🎉
      </h1>
      <p className="text-lg text-gray-700 mt-4">Best decision ever!</p>

      {/* Next Button */}
      <button
        onClick={() => navigate("/third")}
        className="mt-6 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
      >
        Next →
      </button>
    </div>
  );
}
