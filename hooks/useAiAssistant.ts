import { useState } from "react";

export function useAiAssistant() {
  const [loading, setLoading] = useState(false);
  const [reply, setReply] = useState("");

  const askAI = async (prompt: string) => {
    setLoading(true);
    const res = await fetch("/api/ai", {
      method: "POST",
      body: JSON.stringify({ prompt }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setReply(data.result || "");
    setLoading(false);
  };

  return { askAI, loading, reply };
}
