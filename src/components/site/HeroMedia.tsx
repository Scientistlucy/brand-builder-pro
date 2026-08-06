import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import heroPoster from "@/assets/user-photos/arrive-truck.png";

/**
 * Optional video fallback poster — uses branded Rahisi arrive shot.
 * Homepage now prefers HeroSlider; this keeps posters on-brand if reused.
 */
export function HeroMedia() {
  const reduced = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [useVideo, setUseVideo] = useState(false);

  useEffect(() => {
    if (reduced) {
      setUseVideo(false);
      return;
    }
    const el = videoRef.current;
    if (!el) return;
    const play = async () => {
      try {
        el.muted = true;
        await el.play();
        setUseVideo(true);
      } catch {
        setUseVideo(false);
      }
    };
    void play();
  }, [reduced]);

  return (
    <>
      <img
        src={heroPoster}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-30 size-full object-cover"
        width={1600}
        height={900}
      />

      {useVideo && !reduced && (
        <video
          ref={videoRef}
          className="absolute inset-0 -z-20 size-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={heroPoster}
          onError={() => setUseVideo(false)}
        >
          <source src="/videos/hero-move.mp4" type="video/mp4" />
        </video>
      )}

      <div
        className="absolute inset-0 -z-10 bg-linear-to-r from-ink/90 via-ink/55 to-ink/25 md:from-ink/85 md:via-ink/45 md:to-transparent"
        aria-hidden="true"
      />
    </>
  );
}
