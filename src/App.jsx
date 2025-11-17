import Hero from './components/Hero'
import Features from './components/Features'
import Compatibility from './components/Compatibility'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="/" className="text-lg font-extrabold tracking-tight text-slate-800">
            CadHelp
          </a>
          <nav className="hidden gap-6 text-sm text-slate-700 sm:flex">
            <a href="#compatibilitate" className="hover:text-slate-900">Compatibilitate</a>
            <a href="#download" className="hover:text-slate-900">Descărcare</a>
            <a href="/test" className="hover:text-slate-900">Status server</a>
          </nav>
          <a
            href="#download"
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
          >
            Descarcă
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <Compatibility />
        <CTA />
      </main>

      <Footer />
    </div>
  )
}

export default App
