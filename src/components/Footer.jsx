import { business } from '../data.js'
import { StarIcon, WaffleIcon } from './Icons.jsx'

export default function Footer() {
  return (
    <footer className="border-t border-amber-500/15 bg-cocoa/40 pb-28 pt-12 sm:pb-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-xl border border-amber-500/30 bg-cocoa text-amber-400">
              <WaffleIcon className="h-5 w-5" />
            </span>
            <div>
              <p className="font-serif text-xl font-semibold text-amber-50">{business.name}</p>
              <p className="text-[11px] uppercase tracking-[0.2em] text-amber-500/70">
                {business.locality}, Hyderabad
              </p>
            </div>
          </div>

          <div className="space-y-1.5 text-sm text-amber-100/55 sm:text-right">
            <p className="flex items-center gap-1.5 text-amber-200/80 sm:justify-end">
              <StarIcon className="h-3.5 w-3.5 text-amber-400" />
              {business.ratingLine}
            </p>
            <p>{business.addressShort}</p>
            <p>{business.hours}</p>
            <p>{business.phoneDisplay}</p>
          </div>
        </div>

        <div className="mt-9 flex flex-col gap-2 border-t border-amber-500/10 pt-6 text-[11px] text-amber-100/35 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
          <p>{business.tagline}</p>
        </div>
      </div>
    </footer>
  )
}
