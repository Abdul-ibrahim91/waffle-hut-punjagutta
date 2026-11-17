import { business } from '../data.js'
import { useScrolled, useStoreStatus } from '../hooks.js'
import { WaffleIcon, WhatsAppIcon } from './Icons.jsx'

export default function Navbar() {
  const scrolled = useScrolled(16)
  const status = useStoreStatus()

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-amber-500/20 bg-midnight/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-gradient-to-b from-midnight/90 to-transparent backdrop-blur-sm'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
        <a href="#top" className="group flex items-center gap-2.5" aria-label="Waffle Hut home">
          <span className="relative grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-amber-500/30 bg-cocoa text-amber-400 shadow-gold transition group-hover:border-amber-400/60">
            <WaffleIcon className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-serif text-lg font-semibold tracking-tight text-amber-50 sm:text-xl">
              {business.name}
            </span>
            <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.22em] text-amber-500/70">
              {business.locality}
            </span>
          </span>
        </a>

        <div className="flex items-center gap-2 sm:gap-3">
          <span
            className="hidden items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-500/10 px-3 py-1.5 text-[11px] font-semibold text-emerald-300 backdrop-blur-md sm:flex"
            aria-live="polite"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span
                className={`absolute inline-flex h-full w-full rounded-full ${
                  status.isOpen ? 'animate-pulse-ring bg-emerald-400' : 'bg-amber-400'
                }`}
              />
              <span
                className={`relative inline-flex h-1.5 w-1.5 rounded-full ${
                  status.isOpen ? 'bg-emerald-300' : 'bg-amber-300'
                }`}
              />
            </span>
            {status.label}
          </span>

          <a
            href={business.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 px-4 py-2 text-xs font-bold text-[#1a1008] shadow-gold transition hover:from-amber-300 hover:to-amber-500 active:scale-95 sm:text-sm"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Order
          </a>
        </div>
      </nav>

      {/* Compact status strip on the smallest screens */}
      <div className="flex items-center justify-center gap-1.5 border-t border-amber-500/10 bg-cocoa/40 py-1 text-[10px] font-medium text-emerald-300/90 sm:hidden">
        <span className="relative flex h-1.5 w-1.5">
          <span
            className={`absolute inline-flex h-full w-full rounded-full ${
              status.isOpen ? 'animate-pulse-ring bg-emerald-400' : 'bg-amber-400'
            }`}
          />
          <span
            className={`relative inline-flex h-1.5 w-1.5 rounded-full ${
              status.isOpen ? 'bg-emerald-300' : 'bg-amber-300'
            }`}
          />
        </span>
        {status.label} · {business.mall.split(' / ')[0]}
      </div>
    </header>
  )
}
