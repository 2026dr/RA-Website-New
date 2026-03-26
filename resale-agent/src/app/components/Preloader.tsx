"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(true);

  const hide = useCallback(() => {
    setVisible(false);
    setTimeout(() => setMounted(false), 500);
  }, []);

  useEffect(() => {
    let minTimePassed = false;
    let pageLoaded = false;

    const tryHide = () => {
      if (minTimePassed && pageLoaded) hide();
    };

    const timer = setTimeout(() => {
      minTimePassed = true;
      tryHide();
    }, 800);

    const onLoad = () => {
      pageLoaded = true;
      tryHide();
    };

    if (document.readyState === "complete") {
      pageLoaded = true;
      tryHide();
    } else {
      window.addEventListener("load", onLoad);
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", onLoad);
    };
  }, [hide]);

  if (!mounted) return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#FAFAFA",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity 0.5s ease",
      }}
    >
      <Image
        src="/logo.webp"
        alt="ResaleAgent"
        width={200}
        height={60}
        priority
        style={{ maxWidth: 200, height: "auto" }}
      />

      <div
        style={{
          marginTop: 28,
          width: 160,
          height: 3,
          borderRadius: 2,
          background: "#E5E7EB",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            borderRadius: 2,
            background: "#4F35EB",
            animation: "preloader-progress 2s ease-in-out infinite",
          }}
        />
      </div>
    </div>
  );
}
