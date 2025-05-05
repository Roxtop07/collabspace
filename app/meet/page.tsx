"use client";
import { useEffect, useState } from "react";
import { useLiveKit } from "@/hooks/useLiveKit";

export default function MeetPage() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const getToken = async () => {
      const res = await fetch("/api/meet/token", {
        method: "POST",
        body: JSON.stringify({ identity: "user123", room: "demo" }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      setToken(data.token);
    };
    getToken();
  }, []);

  useLiveKit(token, process.env.NEXT_PUBLIC_LIVEKIT_URL!);

  return (
    <div className="text-white">
      <h1>Live Meeting Room</h1>
      {/* Here you’ll render video tracks using LiveKit UI or SDK */}
    </div>
  );
}
