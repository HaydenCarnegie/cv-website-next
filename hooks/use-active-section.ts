"use client";

import { useEffect, useRef, useState } from "react";

export function useActiveSection(ids: string[]) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const idsRef = useRef(ids);

  useEffect(() => {
    idsRef.current = ids;
  });

  useEffect(() => {
    const update = () => {
      const viewportHeight = window.innerHeight;
      const scrollBottom = window.scrollY + viewportHeight;
      const docHeight = document.body.scrollHeight;

      // Near bottom of page: activate the last present section
      if (docHeight - scrollBottom < 100) {
        const lastId = [...idsRef.current]
          .reverse()
          .find((id) => document.getElementById(id) !== null);
        if (lastId) {
          setActiveId(lastId);
          return;
        }
      }

      // Otherwise: last section whose top has crossed 60% of viewport height
      const threshold = viewportHeight * 0.6;
      let active: string | null = null;
      for (const id of idsRef.current) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= threshold) {
          active = id;
        }
      }
      setActiveId(active);
    };

    // Initialise from URL hash — handles shared / deep links
    const hash = window.location.hash.slice(1);
    if (hash && idsRef.current.includes(hash)) {
      setActiveId(hash);
    } else {
      update();
    }

    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return activeId;
}
