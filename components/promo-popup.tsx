"use client";

import { useLocale } from "@/lib/locale-context";
import { Clock, X } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function PromoPopup() {
  const { t } = useLocale();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if popup was already dismissed this session
    const dismissed = sessionStorage.getItem("promo-popup-dismissed");
    if (!dismissed) {
      // Small delay before showing popup
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("promo-popup-dismissed", "true");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Popup */}
      <div className="relative w-full max-w-lg animate-in fade-in zoom-in-95 duration-300">
        <div className="relative overflow-hidden rounded-2xl">
          {/* Background */}
          <div className="absolute inset-0 bg-primary rounded-2xl border border-white/25" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30 rounded-2xl" />

          {/* Shine effect */}
          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            <div className="absolute -inset-full animate-shine bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-12" />
          </div>

          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {/* Content */}
          <div className="relative z-10 p-6 md:p-8">
            <div className="text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-4">
                <span
                  className="text-sm font-semibold uppercase tracking-wide"
                  style={{ color: "#ffcb31" }}
                >
                  {t.promo.badge}
                </span>
              </div>

              {/* Main headline */}
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 leading-tight">
                {t.promo.title}
              </h2>
              <p
                className="text-3xl sm:text-4xl font-bold mb-4"
                style={{ color: "#ffcb31" }}
              >
                {t.promo.savings}
              </p>

              {/* Deadline */}
              <div className="flex items-center justify-center gap-2 text-white/90 mb-4">
                <Clock className="w-4 h-4 shrink-0" />
                <p className="text-sm md:text-base font-medium">
                  {t.promo.deadline}
                </p>
              </div>

              {/* Partnership */}
              <div className="flex items-center justify-center gap-2 mb-6">
                <span className="text-base text-white/80">
                  {t.promo.partnershipText}
                </span>
                <Image
                  src="/eq_bank_logo.svg"
                  alt="EQ Bank"
                  width={60}
                  height={18}
                  className="h-8 w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
