
"use client";

import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [quality, setQuality] = useState("best");
  const [status, setStatus] = useState("");

  async function checkVideo() {
    if (!url.trim()) {
      setStatus("Please enter a video URL.");
      return;
    }

    try {
      new URL(url);
    } catch {
      setStatus("Please enter a valid URL.");
      return;
    }

    setStatus(
      "URL received. Connect the authorized download backend to check formats."
    );
  }

  return (
    <main className="min-h-screen bg-[#10141e] text-white flex items-center justify-center p-5">
      <div className="w-full max-w-xl">
        <div className="text-center mb-10">
          <div className="text-5xl mb-4">▶</div>
          <h1 className="text-4xl font-bold">
            Video Downloader Pro
          </h1>
          <p className="text-gray-400 mt-3">
            Your video management workspace
          </p>
        </div>

        <div className="bg-[#1c2433] border border-gray-700 rounded-2xl p-7 shadow-2xl">
          <label className="block text-sm text-gray-300 mb-3">
            VIDEO URL
          </label>

          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste your video URL here..."
            className="w-full bg-[#101827] border border-gray-700 rounded-xl p-4 outline-none focus:border-blue-500"
          />

          <label className="block text-sm text-gray-300 mt-7 mb-3">
            SELECT QUALITY
          </label>

          <select
            value={quality}
            onChange={(e) => setQuality(e.target.value)}
            className="w-full bg-[#101827] border border-gray-700 rounded-xl p-4"
          >
            <option value="best">Best available</option>
            <option value="2160">2160p (4K)</option>
            <option value="1440">1440p (2K)</option>
            <option value="1080">1080p (Full HD)</option>
          </select>

          <button
            onClick={checkVideo}
            className="w-full mt-8 bg-blue-600 hover:bg-blue-700 rounded-xl p-4 font-bold transition"
          >
            CHECK VIDEO
          </button>

          {status && (
            <p className="mt-5 text-sm text-center text-blue-300">
              {status}
            </p>
          )}

          <p className="text-xs text-gray-500 text-center mt-7">
            For videos you own or have permission to download.
          </p>
        </div>

        <p className="text-center text-gray-600 text-xs mt-7">
          VIDEO DOWNLOADER PRO · 1.0
        </p>
      </div>
    </main>
  );
}
