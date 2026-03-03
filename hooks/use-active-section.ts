"use client";

import { useEffect, useRef, useState } from "react";

const TOPBAR_HEIGHT = 56; // matches top-14 (3.5rem)

export function useActiveSection(ids: string[]) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const idsRef = useRef(ids);
  const suppressScrollRef = useRef(false);

  useEffect(() => {
    idsRef.current = ids;
  });

  useEffect(() => {
    const update = () => {
      if (suppressScrollRef.current) return;

      const vh = window.innerHeight;
      const scrollBottom = window.scrollY + vh;
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

      const tops = idsRef.current
        .map((id) => ({ id, top: document.getElementById(id)?.getBoundingClientRect().top ?? null }))
        .filter((s): s is { id: string; top: number } => s.top !== null);

      // Section headers visible below the topbar — first one wins
      const inView = tops.filter(({ top }) => top >= TOPBAR_HEIGHT && top <= vh);
      if (inView.length > 0) {
        setActiveId(inView[0].id);
        return;
      }

      // All headers have scrolled above the topbar — pick the last one
      const above = tops.filter(({ top }) => top < TOPBAR_HEIGHT);
      if (above.length > 0) {
        setActiveId(above[above.length - 1].id);
        return;
      }

      setActiveId(null);
    };

    // When a hash link is clicked, honour it immediately and suppress
    // the scroll handler for ~600 ms so the animation doesn't fight it
    const onHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash && idsRef.current.includes(hash)) {
        setActiveId(hash);
        suppressScrollRef.current = true;
        setTimeout(() => {
          suppressScrollRef.current = false;
        }, 600);
      }
    };

    // Initialise from URL hash — handles shared / deep links
    const hash = window.location.hash.slice(1);
    if (hash && idsRef.current.includes(hash)) {
      setActiveId(hash);
    } else {
      update();
    }

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("hashchange", onHashChange);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return activeId;
}
