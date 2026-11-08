import Image from "next/image";
import { ArrowRight, PhoneCall, ShieldCheck, Star } from "lucide-react";

const heroImage =
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f4f4f0]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,0,0,0.08),transparent_20%)]" />
      <div className="section-shell relative grid gap-8 py-10 sm:gap-10 sm:py-12 md:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-20">
        <div>
          <p className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[#121212] sm:mb-4 sm:text-sm sm:tracking-[0.28em]">
            SERWIS | DETAILING | KONSERWACJA
          </p>

          <h1 className="max-w-xl text-4xl leading-[0.92] text-black sm:text-5xl lg:text-[5rem]">
            PROFESJONALNIE DBAMY O <span className="text-[#121212]">TWOJE AUTO!</span>
          </h1>

          <div className="mt-5 inline-flex max-w-md items-center justify-center rounded-full border border-black/10 bg-white px-4 py-2.5 text-center text-[0.68rem] font-bold uppercase tracking-[0.12em] text-black shadow-[0_12px_24px_rgba(0,0,0,0.06)] sm:mt-6 sm:px-5 sm:py-3 sm:text-sm sm:tracking-[0.16em]">
            <span className="brush-stroke text-black">JAKOŚĆ, NA KTÓREJ MOŻESZ POLEGAĆ!</span>
          </div>

          <div className="mt-7 flex w-full flex-col gap-3 sm:mt-8 sm:flex-row">
            <a
              href="tel:+48794566787"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-black px-5 py-3.5 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#2a2a2a] sm:w-auto"
            >
              <PhoneCall className="h-4 w-4" />
              Zadzwoń teraz
            </a>
            <a
              href="#cennik"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3.5 text-sm font-bold uppercase tracking-[0.14em] text-black transition hover:border-black/20 hover:bg-black/5 sm:w-auto"
            >
              Zobacz cennik
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[560px]">
          <div className="absolute -left-6 top-10 hidden h-24 w-24 rounded-full bg-black/5 blur-3xl md:block" />
          <div className="relative overflow-hidden rounded-[26px] border border-black/10 bg-white p-2 shadow-[0_22px_50px_rgba(0,0,0,0.08)] sm:rounded-[32px] sm:p-3">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.08),transparent_30%)]" />
            <Image
              src={heroImage}
              alt="Samochód w serwisie Daily Shine"
              width={1200}
              height={900}
              priority
              className="relative z-10 h-[260px] w-full rounded-[18px] object-cover sm:h-[360px] md:h-[460px]"
            />
          </div>

          <div className="absolute -bottom-5 right-3 z-20 flex items-center gap-3 rounded-full border border-black/10 bg-white/95 px-3 py-2.5 shadow-[0_18px_32px_rgba(0,0,0,0.12)] backdrop-blur-sm sm:px-4 sm:py-3 md:right-10">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white sm:h-11 sm:w-11">
              <ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
            <div>
              <div className="text-[0.52rem] font-bold uppercase tracking-[0.12em] text-black/70 sm:text-[0.58rem] sm:tracking-[0.14em]">
                Gwarancja
              </div>
              <div className="text-[0.56rem] font-semibold uppercase tracking-[0.11em] text-black sm:text-[0.62rem] sm:tracking-[0.12em]">
                Na wykonane usługi
              </div>
              <div className="mt-1 flex gap-1 text-[#f5b301]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-3 w-3 fill-current sm:h-3.5 sm:w-3.5" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
