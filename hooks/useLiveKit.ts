import { useEffect } from "react";
import { Room } from "livekit-client";

export function useLiveKit(token: string, url: string) {
  useEffect(() => {
    const room = new Room();

    room.connect(url, token)
      .then(() => {
        console.log("✅ Connected to LiveKit");
        // You can now use room.localParticipant, tracks, etc.
      })
      .catch((err) => {
        console.error("❌ Connection failed:", err);
      });

    return () => {
      room.disconnect();
    };
  }, [token, url]);
}
