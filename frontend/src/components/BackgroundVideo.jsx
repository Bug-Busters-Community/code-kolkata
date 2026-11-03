import { useEffect, useRef } from "react";
import backgroundMedia from "../assets/VictoriaMemorial.jpg";

/**
 * The uploaded "VictoriaMemorial" asset is a still JPEG, so it is rendered as a
 * fixed background image. The component also supports a real video file: drop
 * an mp4/webm into src/assets and update the import above — playback, looping
 * and autoplay handling below stay the same.
 */
const IS_VIDEO = /\.(mp4|webm|ogv|ogg|mov|m4v)(?:[?#].*)?$/i.test(backgroundMedia);

/**
 * Plays the site-wide background loop.
 *
 * Rendered once by Layout, outside <Outlet />, so route changes never remount,
 * reload, or restart the background media.
 */
export default function BackgroundVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (!IS_VIDEO) return undefined;

    const video = videoRef.current;
    if (!video) return undefined;

    let cancelled = false;
    let gestureListenersAttached = true;

    const removeGestureListeners = () => {
      if (!gestureListenersAttached) return;
      gestureListenersAttached = false;
      document.removeEventListener("pointerdown", handleFirstGesture);
      document.removeEventListener("touchstart", handleFirstGesture);
      document.removeEventListener("keydown", handleFirstGesture);
    };

    const tryPlay = async (fromGesture = false) => {
      if (cancelled || !video.isConnected) return;

      // Autoplay policies only allow muted playback without a gesture.
      video.muted = true;

      try {
        await video.play();
        removeGestureListeners();
      } catch {
        // Autoplay can still be blocked (battery saver, data saver, iOS low
        // power mode). The poster stays visible and we retry on the first
        // user gesture instead of interrupting the visitor.
        if (fromGesture) removeGestureListeners();
      }
    };

    function handleFirstGesture() {
      void tryPlay(true);
    }

    // Attempt playback immediately on mount, before any user interaction.
    void tryPlay();

    // Mobile browsers sometimes reject the first call while metadata or the
    // first frames are still buffering, so retry as soon as data is ready.
    const handleCanPlay = () => void tryPlay();
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible" && video.paused) void tryPlay();
    };

    video.addEventListener("canplay", handleCanPlay);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    document.addEventListener("pointerdown", handleFirstGesture, { passive: true });
    document.addEventListener("touchstart", handleFirstGesture, { passive: true });
    document.addEventListener("keydown", handleFirstGesture);

    return () => {
      cancelled = true;
      video.removeEventListener("canplay", handleCanPlay);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      removeGestureListeners();

      // Intentionally do not pause or clear the source here: StrictMode and
      // route transitions must not restart or freeze the background loop.
    };
  }, []);

  return (
    <div
      className="hero-media pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {IS_VIDEO ? (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          tabIndex={-1}
        >
          <source src={backgroundMedia} />
        </video>
      ) : (
        <img
          src={backgroundMedia}
          alt=""
          fetchPriority="high"
          decoding="async"
          draggable={false}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
    </div>
  );
}
