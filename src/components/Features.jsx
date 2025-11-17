import { Ruler, ListOrdered, Shapes, Route, Import, DownloadCloud } from "lucide-react"

const features = [
  {
    icon: Ruler,
    title: "Puncte și cote",
    desc: "Inserare/renumerotare puncte, etichetare cote și generare liste automat."
  },
  {
    icon: Shapes,
    title: "Polilinii și suprafete",
    desc: "Operatii pe polilinii, arii, perimetre, curbe de nivel și DTM."
  },
  {
    icon: Route,
    title: "Profile și trasee",
    desc: "Secțiuni longitudinale/transversale, profile teren, aliniamente."
  },
  {
    icon: ListOrdered,
    title: "Tabele și rapoarte",
    desc: "Creare tabele în desen și export în Excel/CSV cu un click."
  },
  {
    icon: Import,
    title: "Import/Export",
    desc: "Supoartă formate CSV, TXT, LandXML, SHP pentru schimb rapid de date."
  },
  {
    icon: DownloadCloud,
    title: "Actualizări ușoare",
    desc: "Instalator simplu pentru update, fără pași complicați."
  }
]

export default function Features() {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-2xl font-bold text-slate-800 sm:text-3xl">Ce poate face CadHelp</h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-slate-600">
          O suită de instrumente gândite pentru ingineri topografi și proiectanți, direct în mediul tău CAD.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600/10 text-indigo-700">
                  <Icon size={20} />
                </div>
                <p className="font-semibold text-slate-800">{title}</p>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
