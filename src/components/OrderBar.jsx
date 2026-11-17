import { useEffect } from 'react'
import { business, rupees } from '../data.js'
import {
  BagIcon,
  CloseIcon,
  MinusIcon,
  PhoneIcon,
  PlusIcon,
  WhatsAppIcon,
} from './Icons.jsx'

/** Cart drawer listing the selection before it is sent to WhatsApp. */
function Drawer({ cart, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-[60]" role="dialog" aria-modal="true" aria-label="Your order">
      <button
        type="button"
        aria-label="Close order"
        onClick={onClose}
        className="absolute inset-0 h-full w-full cursor-default bg-black/70 backdrop-blur-sm"
      />

      <div className="absolute inset-x-0 bottom-0 animate-slide-up sm:inset-x-auto sm:bottom-6 sm:right-6 sm:w-[25rem]">
        <div className="max-h-[85vh] overflow-hidden rounded-t-[1.75rem] border border-amber-500/25 bg-cocoa shadow-[0_-20px_60px_-20px_rgba(0,0,0,0.9)] sm:rounded-[1.75rem]">
          <div className="flex items-center justify-between gap-3 border-b border-amber-500/15 px-5 py-4">
            <div>
              <h3 className="font-serif text-lg font-semibold text-amber-50">Your Order</h3>
              <p className="text-[11px] uppercase tracking-[0.16em] text-amber-500/70">
                {cart.count} {cart.count === 1 ? 'item' : 'items'} selected
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close order"
              className="grid h-9 w-9 place-items-center rounded-xl border border-amber-500/20 bg-midnight/60 text-amber-200 transition hover:border-amber-400/50 active:scale-90"
            >
              <CloseIcon className="h-4 w-4" />
            </button>
          </div>

          <div className="max-h-[42vh] overflow-y-auto px-5 py-4">
            <ul className="space-y-3">
              {cart.items.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center gap-3 rounded-2xl border border-amber-500/15 bg-midnight/50 p-3"
                >
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-amber-50">{item.name}</p>
                    <p className="mt-0.5 text-[12px] text-amber-100/50">
                      {rupees(item.price)} each &middot;{' '}
                      <span className="font-semibold text-amber-300">
                        {rupees(item.price * item.qty)}
                      </span>
                    </p>
                  </div>
                  <div className="flex shrink-0 items-center gap-1.5 rounded-xl border border-amber-500/20 bg-cocoa p-1">
                    <button
                      type="button"
                      onClick={() => cart.decrement(item.id)}
                      aria-label={`Remove one ${item.name}`}
                      className="grid h-7 w-7 place-items-center rounded-lg text-amber-200 transition hover:bg-amber-500/15 active:scale-90"
                    >
                      <MinusIcon className="h-3.5 w-3.5" />
                    </button>
                    <span className="min-w-5 text-center text-sm font-bold text-amber-100">
                      {item.qty}
                    </span>
                    <button
                      type="button"
                      onClick={() => cart.add(item)}
                      aria-label={`Add one more ${item.name}`}
                      className="grid h-7 w-7 place-items-center rounded-lg text-amber-200 transition hover:bg-amber-500/15 active:scale-90"
                    >
                      <PlusIcon className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 border-t border-amber-500/15 bg-midnight/40 px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-amber-100/60">Order total</span>
              <span className="font-serif text-xl font-bold text-amber-200">
                {rupees(cart.total)}
              </span>
            </div>

            <button
              type="button"
              onClick={cart.sendToWhatsApp}
              className="flex w-full items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-br from-amber-300 via-amber-400 to-amber-600 px-5 py-4 text-sm font-bold text-[#1a1008] shadow-gold transition hover:from-amber-200 hover:to-amber-500 active:scale-[0.98]"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Send Order to WhatsApp
            </button>

            <div className="flex items-center gap-2">
              <a
                href={business.phoneHref}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-amber-500/20 bg-cocoa/70 py-3 text-[12px] font-semibold text-amber-100 transition hover:border-amber-400/50"
              >
                <PhoneIcon className="h-4 w-4 text-amber-400" />
                Call instead
              </a>
              <button
                type="button"
                onClick={cart.clear}
                className="rounded-xl border border-amber-500/15 px-4 py-3 text-[12px] font-semibold text-amber-100/50 transition hover:border-red-400/30 hover:text-red-300/80"
              >
                Clear
              </button>
            </div>

            <p className="text-center text-[10px] leading-relaxed text-amber-100/35">
              Opens WhatsApp with your items pre-filled for {business.phoneDisplay}. Nothing is
              charged here.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * Bottom action rail.
 * Empty cart -> sticky mobile bar (Call / Order on WhatsApp).
 * Items added -> floating "View Order" bar on every breakpoint.
 */
export default function OrderBar({ cart, open, setOpen }) {
  const hasItems = cart.count > 0

  return (
    <>
      {open && hasItems && <Drawer cart={cart} onClose={() => setOpen(false)} />}

      {/* Sticky mobile bar — shown when the order is still empty */}
      <div
        className={`fixed inset-x-0 bottom-0 z-40 transition-transform duration-300 sm:hidden ${
          hasItems ? 'translate-y-full' : 'translate-y-0'
        }`}
      >
        <div className="border-t border-amber-500/20 bg-midnight/85 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-xl">
          <div className="flex items-center gap-2.5">
            <a
              href={business.phoneHref}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-amber-500/25 bg-cocoa/80 py-3.5 text-[13px] font-semibold text-amber-100 active:scale-[0.98]"
            >
              <PhoneIcon className="h-4 w-4 text-amber-400" />
              Call Caf&eacute;
            </a>
            <a
              href={business.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-[1.4] items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-amber-300 to-amber-600 py-3.5 text-[13px] font-bold text-[#1a1008] shadow-gold active:scale-[0.98]"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Order on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Floating order bar — shown once items are added */}
      <div
        className={`fixed inset-x-0 bottom-0 z-40 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 transition-all duration-300 sm:bottom-6 sm:px-6 sm:pt-0 ${
          hasItems
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-full opacity-0'
        }`}
      >
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="mx-auto flex w-full max-w-md items-center justify-between gap-3 rounded-2xl border border-amber-300/40 bg-gradient-to-br from-amber-300 via-amber-400 to-amber-600 px-4 py-3.5 text-left shadow-gold-lg transition active:scale-[0.98]"
        >
          <span className="flex items-center gap-2.5 text-[#1a1008]">
            <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-black/15">
              <BagIcon className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full border border-amber-200 bg-[#1a1008] px-1 text-[10px] font-bold text-amber-300">
                {cart.count}
              </span>
            </span>
            <span className="leading-tight">
              <span className="block text-[13px] font-bold">
                View Order ({cart.count} {cart.count === 1 ? 'item' : 'items'})
              </span>
              <span className="block text-[11px] font-semibold opacity-70">
                {rupees(cart.total)} &middot; Send to WhatsApp
              </span>
            </span>
          </span>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#1a1008] text-amber-300">
            <WhatsAppIcon className="h-5 w-5" />
          </span>
        </button>
      </div>
    </>
  )
}
