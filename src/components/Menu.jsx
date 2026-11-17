import { useState } from 'react'
import { categories, menu, rupees } from '../data.js'
import { MinusIcon, PlusIcon, StarIcon } from './Icons.jsx'

function MenuCard({ item, qty, onAdd, onRemove }) {
  return (
    <article
      data-reveal
      className="reveal group flex flex-col overflow-hidden rounded-3xl border border-amber-500/20 bg-cocoa transition duration-500 hover:border-amber-400/40 hover:shadow-gold-lg"
    >
      <div className="relative aspect-[16/11] overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.06]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-cocoa via-cocoa/10 to-transparent"
        />
        {item.badge && (
          <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full border border-amber-400/30 bg-black/45 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-amber-300 backdrop-blur-md">
            <StarIcon className="h-2.5 w-2.5" />
            {item.badge}
          </span>
        )}
        <span className="absolute right-3 top-3 rounded-full border border-amber-500/20 bg-black/45 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-amber-100/70 backdrop-blur-md">
          {item.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-serif text-lg font-semibold leading-snug text-amber-50 sm:text-xl">
            {item.name}
          </h3>
          <span className="shrink-0 rounded-lg border border-amber-500/20 bg-amber-500/10 px-2.5 py-1 text-sm font-bold text-amber-300">
            {rupees(item.price)}
          </span>
        </div>

        <p className="mt-2 flex-1 text-[13px] leading-relaxed text-amber-100/55">
          {item.description}
        </p>

        {qty === 0 ? (
          <button
            type="button"
            onClick={() => onAdd(item)}
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-[13px] font-bold text-amber-200 transition hover:border-amber-400/60 hover:bg-amber-500/20 active:scale-[0.98]"
          >
            <PlusIcon className="h-4 w-4" />
            Add to WhatsApp Order
          </button>
        ) : (
          <div className="mt-4 flex items-center justify-between rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 px-2 py-2 text-[#1a1008]">
            <button
              type="button"
              onClick={() => onRemove(item.id)}
              aria-label={`Remove one ${item.name}`}
              className="grid h-9 w-9 place-items-center rounded-lg bg-black/10 transition hover:bg-black/20 active:scale-90"
            >
              <MinusIcon className="h-4 w-4" />
            </button>
            <span className="text-[13px] font-bold">
              {qty} in order • {rupees(qty * item.price)}
            </span>
            <button
              type="button"
              onClick={() => onAdd(item)}
              aria-label={`Add one more ${item.name}`}
              className="grid h-9 w-9 place-items-center rounded-lg bg-black/10 transition hover:bg-black/20 active:scale-90"
            >
              <PlusIcon className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </article>
  )
}

export default function Menu({ cart }) {
  const [active, setActive] = useState('All')
  const items = active === 'All' ? menu : menu.filter((i) => i.category === active)

  return (
    <section id="menu" className="relative scroll-mt-24 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div data-reveal className="reveal max-w-2xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-amber-500/80">
            Signature Menu
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-amber-50 sm:text-5xl">
            Crafted in-house, <span className="gold-text italic">served warm.</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-amber-100/55 sm:text-base">
            Tap <span className="font-semibold text-amber-200">+ Add to WhatsApp Order</span> to
            build your tray — we'll format it and send it straight to the counter on WhatsApp.
          </p>
        </div>

        {/* Category tabs */}
        <div
          data-reveal
          className="reveal no-scrollbar -mx-4 mt-8 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:px-0"
        >
          {categories.map((cat) => {
            const isActive = cat === active
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                aria-pressed={isActive}
                className={`shrink-0 rounded-full px-4 py-2.5 text-[13px] font-semibold transition ${
                  isActive
                    ? 'bg-gradient-to-br from-amber-300 to-amber-600 text-[#1a1008] shadow-gold'
                    : 'border border-amber-500/20 bg-cocoa/60 text-amber-100/70 backdrop-blur-md hover:border-amber-400/40 hover:text-amber-100'
                }`}
              >
                {cat}
              </button>
            )
          })}
        </div>

        {/* Grid */}
        <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <MenuCard
              key={item.id}
              item={item}
              qty={cart.qtyOf(item.id)}
              onAdd={cart.add}
              onRemove={cart.decrement}
            />
          ))}
        </div>

        <p className="mt-7 text-center text-[11px] text-amber-100/40">
          Prices in ₹ and inclusive of taxes. Toppings and availability may vary in-store.
        </p>
      </div>
    </section>
  )
}
