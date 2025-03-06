import { useState } from "react";
import "./App.css";

// GreetingApp Component - A simple React app to fetch and display a greeting message
export default function GreetingApp() {
  // State variables to store user input, success message, and error message
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Function to fetch greeting from the backend API
  const fetchGreeting = async () => {
    // Reset messages before making the request
    setMessage("");
    setError("");

    // Validate user input
    if (!name.trim()) {
      setError("Name is required.");
      return;
    }

    try {
      // Fetch the greeting from the backend
      const response = await fetch(
        `${
          import.meta.env.VITE_BACKEND_URL
        }/api/greet?name=${encodeURIComponent(name)}`
      );
      const data = await response.json();

      // Update state based on response status
      if (response.ok) {
        setMessage(data.message);
      } else {
        setError(data.error);
      }
    } catch (error) {
      setError("Failed to fetch greeting. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Greeting App</h1>
      {/* Input field for entering name */}
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded mb-4 w-64 shadow-sm"
      />
      {/* Button to fetch greeting */}
      <button
        onClick={fetchGreeting}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Get Greeting
      </button>
      {/* Display success or error message */}
      {message && <p className="mt-4 text-lg text-green-600">{message}</p>}
      {error && <p className="mt-4 text-lg text-red-600">{error}</p>}
    </div>
  );
}
