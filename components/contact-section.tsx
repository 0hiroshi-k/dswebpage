import { MapPin, Phone } from "lucide-react";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 22v-8h2.7l.4-3.1h-3.1V7.5c0-.9.3-1.5 1.6-1.5H17V3.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.4V11H8v3.1h2.3v8h3.2Z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M15.4 3.3c.6 1.4 1.7 2.4 3 2.9v2.8c-1.1 0-2.3-.3-3.3-.8v6.1c0 2.7-2.2 4.9-4.9 4.9s-4.9-2.2-4.9-4.9 2.2-4.9 4.9-4.9c.3 0 .6 0 .9.1v2.9a2.8 2.8 0 0 0-.9-.1c-1.6 0-2.8 1.3-2.8 2.9s1.3 2.9 2.9 2.9 2.8-1.3 2.8-2.9V3.3h2.3Z" />
    </svg>
  );
}

const socials = [
  { label: "Facebook", href: "https://www.facebook.com/DSDAILYSHINE/", icon: FacebookIcon },
  { label: "Instagram", href: "https://www.instagram.com/dsdailyshine/", icon: InstagramIcon },
  { label: "TikTok", href: "https://www.tiktok.com/@daily.shine02", icon: TikTokIcon },
];

export function ContactSection() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
      <div className="card-surface p-5 sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-black/60">Kontakt</p>
        <h3 className="mt-3 text-3xl text-black sm:text-4xl">Zapraszamy do kontaktu</h3>

        <div className="mt-6 space-y-4">
          <a
            href="tel:+48794566787"
            className="flex items-center gap-4 rounded-2xl border border-black/10 bg-black p-4 text-white transition hover:border-black/20 hover:bg-[#1a1a1a]"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f5b301] text-[#0A0A0A]">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.16em] text-white/60">Telefon</div>
              <div className="mt-1 text-base font-semibold text-white sm:text-lg">+48 794 566 787</div>
            </div>
          </a>

          <a
            href="tel:+48733891226"
            className="flex items-center gap-4 rounded-2xl border border-black/10 bg-white p-4 text-black transition hover:border-black/20 hover:bg-black/5"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-black text-white">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.16em] text-black/60">Telefon</div>
              <div className="mt-1 text-base font-semibold text-black sm:text-lg">+48 733 891 226</div>
            </div>
          </a>

          <div className="flex items-start gap-4 rounded-2xl border border-black/10 bg-white p-4 text-black">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f5b301] text-[#0A0A0A]">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.16em] text-black/60">Adres</div>
              <p className="mt-1 text-base font-semibold text-black sm:text-lg">ul. Sublańska 83, 43-100 Tychy</p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-black text-white transition hover:-translate-y-0.5 hover:bg-[#f5b301] hover:text-black"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>

      <div className="overflow-hidden rounded-[24px] border border-black/10 bg-white shadow-[0_18px_45px_rgba(0,0,0,0.1)]">
        <iframe
          title="Mapa do Daily Shine"
          src="https://www.google.com/maps?q=Subla%C5%84ska%2083%2C%2043-100%20Tychy&output=embed"
          width="100%"
          height="420"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
