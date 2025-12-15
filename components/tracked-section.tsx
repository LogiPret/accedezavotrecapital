"use client";

import { useEffect, useRef, ReactNode } from "react";
import { trackSectionView } from "@/lib/tracking";

interface TrackedSectionProps {
  sectionId: string;
  children: ReactNode;
}

export default function TrackedSection({
  sectionId,
  children,
}: TrackedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
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
        threshold: 0.3,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, [sectionId]);

  return <div ref={sectionRef}>{children}</div>;
}
