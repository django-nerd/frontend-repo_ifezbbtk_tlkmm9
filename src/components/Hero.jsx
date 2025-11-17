import { Download, Map, Sparkles } from "lucide-react"

export default function Hero() {
  const handleDownload = () => {
    window.location.href = "#download" // Replace with real installer link when ready
  }

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-sky-50 via-indigo-50 to-purple-50" />
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />

      <div className="mx-auto max-w-6xl px-6 pt-24 pb-16">
        <div className="flex flex-col-reverse items-center gap-10 md:flex-row md:gap-14">
          <div className="w-full md:w-1/2">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/70 px-3 py-1 text-xs font-medium text-indigo-700 shadow-sm backdrop-blur">
              <Sparkles size={14} /> Nou: compatibil cu ultimele versiuni CAD
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-800 sm:text-5xl">
              CadHelp
              <span className="block bg-gradient-to-r from-indigo-600 to-sky-500 bg-clip-text text-transparent">
                utilitarul tău pentru topografie și cadastru
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
              Instrumente rapide pentru puncte, polilinii, profile și tabele. Lucrează direct în mediul tău CAD preferat
              pentru un flux de lucru mai simplu și mai precis.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={handleDownload}
                className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-700"
              >
                <Download size={18} /> Descarcă pentru Windows
              </button>
              <a
                href="#compatibilitate"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3 text-slate-700 transition hover:bg-slate-50"
              >
                <Map size={18} /> Vezi compatibilitatea
              </a>
            </div>

            <p className="mt-4 text-xs text-slate-500">Funcționează pe Windows 10/11, 64-bit</p>
          </div>

          <div className="w-full md:w-1/2">
            <div className="relative rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-xl backdrop-blur">
              <div className="aspect-[16/10] w-full overflow-hidden rounded-xl bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900">
                <div className="flex h-full w-full items-center justify-center">
                  <div className="text-center text-slate-100">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600/80">
                      <Map />
                    </div>
                    <p className="text-lg font-semibold">Topografie + Cadastru, integrat</p>
                    <p className="mt-1 text-sm text-slate-300">Generare puncte, DTM, cote, liste, export/import</p>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute -inset-1 rounded-2xl ring-1 ring-black/5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
