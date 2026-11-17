import { useState } from 'react'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import Location from './components/Location.jsx'
import Menu from './components/Menu.jsx'
import Navbar from './components/Navbar.jsx'
import OrderBar from './components/OrderBar.jsx'
import Reviews from './components/Reviews.jsx'
import { useCart, useReveal } from './hooks.js'

export default function App() {
  const cart = useCart()
  const [drawerOpen, setDrawerOpen] = useState(false)
  useReveal()

  return (
    <div className="relative min-h-screen bg-midnight">
      {/* Fine warm grain / vignette over the whole page */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(120%_80%_at_50%_0%,rgba(245,158,11,0.07),transparent_60%)]"
      />

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Menu cart={cart} />
          <Reviews />
          <Location />
        </main>
        <Footer />
        <OrderBar cart={cart} open={drawerOpen} setOpen={setDrawerOpen} />
      </div>
    </div>
  )
}
