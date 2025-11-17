export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-slate-600">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p>© {new Date().getFullYear()} CadHelp. Toate drepturile rezervate.</p>
          <div className="flex items-center gap-4">
            <a href="#download" className="hover:text-slate-800">Descărcare</a>
            <a href="#compatibilitate" className="hover:text-slate-800">Compatibilitate</a>
            <a href="#contact" className="hover:text-slate-800">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
