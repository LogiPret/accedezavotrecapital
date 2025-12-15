"use client";

import { useEffect, useRef } from "react";
import { trackSectionView } from "@/lib/tracking";

export function useSectionTracking(sectionId: string) {
  const sectionRef = useRef<HTMLElement>(null);
  const hasTracked = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTracked.current) {
            trackSectionView(sectionId);
            hasTracked.current = true;
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of section is visible
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, [sectionId]);

  return sectionRef;
}
