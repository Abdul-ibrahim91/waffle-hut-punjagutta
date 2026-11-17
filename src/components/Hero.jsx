import { business, heroImage } from '../data.js'
import { ArrowIcon, StarIcon, WhatsAppIcon } from './Icons.jsx'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-24 sm:pt-28">
      {/* Ambient warm glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-amber-600/20 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-40 h-72 w-72 rounded-full bg-amber-900/40 blur-[100px]"
      />

      <div className="relative mx-auto max-w-6xl px-4 pb-8 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
          {/* Copy */}
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/25 bg-cocoa/70 px-3.5 py-1.5 text-[11px] font-medium tracking-wide text-amber-200/90 backdrop-blur-md sm:text-xs">
              ✨ Narayanguda • Opp. Deepak Theatre, Hyderabad
            </span>

            <h1 className="mt-5 font-serif text-[2.6rem] font-bold leading-[1.04] tracking-tight text-amber-50 sm:text-6xl lg:text-[4.2rem]">
              Decadent Belgian
              <br className="hidden sm:block" />{' '}
              <span className="gold-text italic">Waffles</span> & Creamy{' '}
              <span className="gold-text italic">Shakes.</span>
            </h1>

            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-amber-100/60 sm:text-base">
              Freshly baked, crispy-outside waffles loaded with rich chocolate and premium
              toppings. Find us right opposite Deepak Theatre in Narayanguda, open till
              midnight.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={business.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-br from-amber-300 via-amber-400 to-amber-600 px-6 py-4 text-sm font-bold text-[#1a1008] shadow-gold-lg transition hover:from-amber-200 hover:to-amber-500 active:scale-[0.98] sm:text-[15px]"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Order Direct on WhatsApp
                <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-amber-500/25 bg-cocoa/60 px-6 py-4 text-sm font-semibold text-amber-100 backdrop-blur-md transition hover:border-amber-400/50 hover:bg-cocoa active:scale-[0.98] sm:text-[15px]"
              >
                Explore Menu
              </a>
            </div>

            {/* Trust row */}
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-amber-100/50">
              <span className="flex items-center gap-1.5">
                <StarIcon className="h-3.5 w-3.5 text-amber-400" />
                <strong className="font-semibold text-amber-100/80">{business.rating} ★</strong>
                (Google Reviews)
              </span>
              <span className="hidden h-3 w-px bg-amber-500/20 sm:block" />
              <span>{business.serviceModes.join(' • ')}</span>
            </div>
          </div>

          {/* Visual showcase card */}
          <div className="relative animate-fade-up [animation-delay:140ms]">
            <div className="relative overflow-hidden rounded-[1.75rem] border border-amber-500/20 bg-cocoa shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)]">
              <div className="aspect-[4/5] w-full sm:aspect-[5/5] lg:aspect-[4/5]">
                <img
                  src={heroImage}
                  alt="Loaded Belgian chocolate waffle topped with ice cream at Keep Wafflin - Waffle Hut, Narayanguda"
                  loading="eager"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Darkening gradient for the frosted card */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/25 to-transparent"
              />

              {/* Frosted glass rating card */}
              <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-amber-500/25 bg-black/35 p-4 backdrop-blur-md sm:inset-x-5 sm:bottom-5">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-amber-400/30 bg-amber-500/15 text-amber-300">
                    <StarIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-serif text-base font-semibold text-amber-50 sm:text-lg">
                      4.7 ★ Rated by Dessert Lovers
                    </p>
                    <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-amber-400/80">
                      in Narayanguda
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating hours chip */}
              <div className="absolute right-4 top-4 rounded-full border border-amber-500/25 bg-black/40 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-amber-200 backdrop-blur-md">
                Open Daily • Closes 12:00 AM
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee-free detail strip */}
      <div className="relative mx-auto mt-4 max-w-6xl px-4 sm:px-6">
        <div className="glass flex flex-wrap items-center justify-center gap-x-6 gap-y-2 rounded-2xl px-5 py-3.5 text-center text-[11px] font-medium uppercase tracking-[0.18em] text-amber-200/70 sm:text-xs">
          <span>Belgian Chocolate</span>
          <span className="text-amber-500/40">◆</span>
          <span>Mini Pancakes</span>
          <span className="text-amber-500/40">◆</span>
          <span>Thick Shakes</span>
          <span className="text-amber-500/40">◆</span>
          <span>Peri Peri Fries</span>
        </div>
      </div>
    </section>
  )
}
