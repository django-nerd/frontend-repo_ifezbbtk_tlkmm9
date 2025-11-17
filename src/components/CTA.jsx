export default function CTA() {
  return (
    <section id="download" className="relative overflow-hidden bg-indigo-600 py-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.15),transparent_25%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.1),transparent_25%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="rounded-2xl border border-indigo-400/30 bg-indigo-700/40 p-6 backdrop-blur">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div>
              <h3 className="text-2xl font-bold text-white">Încearcă CadHelp gratuit</h3>
              <p className="mt-1 text-indigo-100">Instalează în câteva secunde și vezi cum îți eficientizează munca.</p>
            </div>
            <a
              href="#"
              className="rounded-lg bg-white px-5 py-3 font-semibold text-indigo-700 shadow-sm transition hover:bg-slate-100"
            >
              Descarcă instalatorul
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
