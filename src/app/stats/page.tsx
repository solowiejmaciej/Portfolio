"use client";

import { useState } from "react";
import StatsView from "@/components/stats-view";

export default function SecureStats() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/verify-admin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        setIsAuthenticated(true);
        setError("");
      } else {
        setError("Nieprawidłowe hasło");
      }
    } catch (err) {
      setError("Wystąpił błąd podczas weryfikacji");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-2xl font-bold mb-6 text-center dark:text-white">
            Panel Administratora
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Wprowadź hasło"
                className="w-full px-4 py-2 rounded-md border border-gray-300 
                         dark:border-gray-600 dark:bg-gray-700 dark:text-white
                         focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md
                       hover:bg-indigo-700 transition-colors duration-200
                       focus:outline-none focus:ring-2 focus:ring-offset-2 
                       focus:ring-indigo-500"
            >
              Zaloguj się
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold dark:text-white">
            Panel Administratora
          </h1>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="text-sm text-gray-600 hover:text-gray-800 
                     dark:text-gray-400 dark:hover:text-gray-200"
          >
            Wyloguj
          </button>
        </div>
        <StatsView />
      </div>
    </div>
  );
}
