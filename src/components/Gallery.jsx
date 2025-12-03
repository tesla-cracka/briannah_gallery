import React, { useEffect, useState, useRef } from "react";
import { Card } from "@/components/ui/card";

export default function Gallery() {
  const [media, setMedia] = useState([]);
  const [visible, setVisible] = useState(12); // items per page
  const loaderRef = useRef(null);

  // Load manifest.json
  useEffect(() => {
    fetch("/assets/manifest.json")
      .then((r) => r.json())
      .then((data) => {
        // auto-sort by filename number (DESC)
        const sorted = data.sort((a, b) => {
          const na = parseInt(a.name.match(/\d+/)?.[0] || 0);
          const nb = parseInt(b.name.match(/\d+/)?.[0] || 0);
          return nb - na;
        });
        setMedia(sorted);
      });
  }, []);

  // Infinite scroll observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisible((prev) => prev + 12);
      }
    });
    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, []);

  const visibleItems = media.slice(0, visible);

  return (
    <div className="p-6 flex flex-col gap-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {visibleItems.map((file, i) => (
          <Card key={i} className="rounded-2xl shadow p-3 flex flex-col items-center">
            {file.type === "image" ? (
              <img
                src={file.src}
                alt={file.name}
                loading="lazy"
                className="w-full h-auto rounded-xl"
              />
            ) : (
              <video controls className="w-full h-auto rounded-xl">
                <source src={file.src} type="video/mp4" />
              </video>
            )}
          </Card>
        ))}
      </div>

      {/* infinite scroll trigger */}
      <div ref={loaderRef} style={{ height: "80px" }}></div>
    </div>
  );
}
