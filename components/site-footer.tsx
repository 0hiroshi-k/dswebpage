export function SiteFooter() {
  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="section-shell flex flex-col gap-4 py-7 text-center text-sm text-black/70 sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <p>© Daily Shine</p>
        <div className="flex items-center justify-center gap-5 sm:justify-end">
          <a href="#uslugi" className="transition hover:text-black">Usługi</a>
          <a href="#cennik" className="transition hover:text-black">Cennik</a>
          <a href="#kontakt" className="transition hover:text-black">Kontakt</a>
        </div>
      </div>
    </footer>
  );
}
