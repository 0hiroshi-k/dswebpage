import { PhoneCall } from "lucide-react";

export function FloatingCall() {
  return (
    <a
      href="tel:+48794566787"
      aria-label="Zadzwoń do Daily Shine"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full border border-[#f5b301]/70 bg-[#f5b301] text-[#0A0A0A] shadow-[0_0_30px_rgba(245,179,1,0.35)] transition hover:scale-105 md:hidden"
    >
      <PhoneCall className="h-6 w-6" />
    </a>
  );
}
