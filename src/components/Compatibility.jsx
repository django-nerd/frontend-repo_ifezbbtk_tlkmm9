import { Check, ChevronDown, Monitor } from "lucide-react"

const cadApps = [
  { name: "AutoCAD", versions: "2017 - 2025", note: "Full support" },
  { name: "BricsCAD", versions: "V18 - V24", note: "Platinum/Pro" },
  { name: "GstarCAD", versions: "2020 - 2024", note: "Standard/Professional" },
  { name: "ZWCAD", versions: "2020 - 2025", note: "Pro" },
  { name: "progeCAD", versions: "2020 - 2025", note: "Professional" },
]

export default function Compatibility() {
  return (
    <section id="compatibilitate" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl">Compatibilitate</h2>
            <p className="mt-2 text-slate-600">Funcționează pe cele mai populare platforme CAD de pe Windows.</p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cadApps.map((app) => (
            <div key={app.name} className="rounded-xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600/10 text-indigo-700">
                  <Monitor size={20} />
                </div>
                <div>
                  <p className="font-semibold text-slate-800">{app.name}</p>
                  <p className="text-xs text-slate-500">{app.note}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm text-slate-700">
                <Check size={16} className="text-emerald-600" /> Versiuni: {app.versions}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-lg border border-slate-200 bg-slate-50 p-4 text-xs text-slate-600">
          Notă: Necesită Windows 10/11 (64-bit) și o licență validă a aplicației CAD. Interfață în limba română.
        </div>
      </div>
    </section>
  )
}
