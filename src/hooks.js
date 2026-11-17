import { useEffect, useMemo, useState } from 'react'
import { business } from './data.js'

/**
 * Live open/closed state for the outlet, evaluated in IST so the pill is
 * correct for the Narayanguda store no matter where the visitor is.
 */
export function useStoreStatus() {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 60_000)
    return () => clearInterval(id)
  }, [])

  return useMemo(() => {
    const ist = new Date(
      now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }),
    )
    const minutes = ist.getHours() * 60 + ist.getMinutes()
    const open = business.opensAt.hour * 60 + business.opensAt.minute
    const close = business.closesAt.hour * 60 + business.closesAt.minute
    const isOpen = minutes >= open && minutes < close
    return {
      isOpen,
      label: isOpen
        ? `Open till ${business.closingLabel}`
        : `Opens at ${business.opensAt.label}`,
    }
  }, [now])
}

/** Tracks whether the page has been scrolled past a threshold. */
export function useScrolled(threshold = 12) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])
  return scrolled
}

/** Reveals an element once it scrolls into view. */
export function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll('[data-reveal]')
    if (!('IntersectionObserver' in window)) {
      nodes.forEach((n) => n.classList.add('is-visible'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )
    nodes.forEach((n) => io.observe(n))
    return () => io.disconnect()
  }, [])
}

/** WhatsApp order cart. */
export function useCart() {
  const [items, setItems] = useState([])

  const add = (item) =>
    setItems((prev) => {
      const found = prev.find((i) => i.id === item.id)
      if (found) {
        return prev.map((i) => (i.id === item.id ? { ...i, qty: i.qty + 1 } : i))
      }
      return [...prev, { id: item.id, name: item.name, price: item.price, qty: 1 }]
    })

  const decrement = (id) =>
    setItems((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, qty: i.qty - 1 } : i))
        .filter((i) => i.qty > 0),
    )

  const remove = (id) => setItems((prev) => prev.filter((i) => i.id !== id))
  const clear = () => setItems([])

  const count = items.reduce((sum, i) => sum + i.qty, 0)
  const total = items.reduce((sum, i) => sum + i.qty * i.price, 0)

  const qtyOf = (id) => items.find((i) => i.id === id)?.qty ?? 0

  /** Builds the pre-filled WhatsApp message and opens the chat. */
  const sendToWhatsApp = () => {
    const lines = [
      `Hi ${business.name} ${business.locality}! I'd like to place a direct order:`,
      '',
      ...items.map((i) => `• ${i.qty} × ${i.name} — ₹${i.qty * i.price}`),
      '',
      `Order total: ₹${total}`,
      '',
      'Please confirm availability and preparation time. Thank you!',
    ]
    const url = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
      lines.join('\n'),
    )}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return { items, add, decrement, remove, clear, count, total, qtyOf, sendToWhatsApp }
}
