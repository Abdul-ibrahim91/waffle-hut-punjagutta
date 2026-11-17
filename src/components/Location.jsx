import { business } from '../data.js'
import { ArrowIcon, ClockIcon, PhoneIcon, PinIcon } from './Icons.jsx'

export default function Location() {
  return (
    <section id="visit" className="relative scroll-mt-24 pb-20 sm:pb-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          data-reveal
          className="reveal relative overflow-hidden rounded-[2rem] border border-amber-500/20 bg-cocoa p-6 sm:p-10"
        >
          {/* Warm corner glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-600/15 blur-[90px]"
          />

          <div className="relative grid gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-amber-500/80">
                The Mall Caf&eacute; Experience
              </span>
              <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-amber-50 sm:text-4xl">
                Find us on <span className="gold-text italic">Level 5.</span>
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-amber-100/55">
                A warm, low-lit dessert lounge tucked inside Irrum Manzil Mall &mdash; the
                easiest stop for shoppers, late-evening cravings and after-dinner sweets in
                Punjagutta.
              </p>

              <div className="mt-7 space-y-4">
                <div className="flex gap-3.5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-amber-500/25 bg-amber-500/10 text-amber-400">
                    <PinIcon className="h-5 w-5" />
                  </span>
                  <div className="pt-0.5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-500/70">
                      Address
                    </p>
                    <address className="mt-1 not-italic text-sm leading-relaxed text-amber-50/85">
                      {business.addressLines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </address>
                  </div>
                </div>

                <div className="flex gap-3.5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-amber-500/25 bg-amber-500/10 text-amber-400">
                    <ClockIcon className="h-5 w-5" />
                  </span>
                  <div className="pt-0.5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-500/70">
                      Hours
                    </p>
                    <p className="mt-1 text-sm text-amber-50/85">
                      Open Daily till {business.closingLabel}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3.5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-amber-500/25 bg-amber-500/10 text-amber-400">
                    <PhoneIcon className="h-5 w-5" />
                  </span>
                  <div className="pt-0.5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-500/70">
                      Reservations &amp; Orders
                    </p>
                    <p className="mt-1 text-sm text-amber-50/85">{business.phoneDisplay}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action panel */}
            <div className="flex flex-col justify-center gap-4 rounded-3xl border border-amber-500/15 bg-midnight/60 p-5 backdrop-blur-md sm:p-7">
              <div className="flex flex-wrap gap-2">
                {business.serviceModes.map((mode) => (
                  <span
                    key={mode}
                    className="rounded-full border border-amber-500/20 bg-cocoa/80 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-amber-200/80"
                  >
                    {mode}
                  </span>
                ))}
              </div>

              <a
                href={business.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-3 rounded-2xl bg-gradient-to-br from-amber-300 via-amber-400 to-amber-600 px-5 py-4 text-left text-sm font-bold text-[#1a1008] shadow-gold transition hover:from-amber-200 hover:to-amber-500 active:scale-[0.98]"
              >
                <span className="flex items-center gap-2.5">
                  <PinIcon className="h-5 w-5 shrink-0" />
                  Open Directions in Google Maps
                </span>
                <ArrowIcon className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={business.phoneHref}
                className="group flex items-center justify-between gap-3 rounded-2xl border border-amber-500/25 bg-cocoa/70 px-5 py-4 text-left text-sm font-semibold text-amber-100 backdrop-blur-md transition hover:border-amber-400/50 hover:bg-cocoa active:scale-[0.98]"
              >
                <span className="flex items-center gap-2.5">
                  <PhoneIcon className="h-5 w-5 shrink-0 text-amber-400" />
                  Call Cafe: {business.phoneLocal}
                </span>
                <ArrowIcon className="h-4 w-4 shrink-0 text-amber-400 transition-transform group-hover:translate-x-1" />
              </a>

              <p className="text-center text-[11px] leading-relaxed text-amber-100/40">
                Parking available at the mall &bull; Lift access to Level 5
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
