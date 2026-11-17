import { business, reviews } from '../data.js'
import { StarIcon } from './Icons.jsx'

function Stars({ count }) {
  return (
    <div
      className="flex items-center gap-0.5 text-amber-400"
      aria-label={`${count} out of 5 stars`}
    >
      {Array.from({ length: count }).map((_, i) => (
        <StarIcon key={i} className="h-3.5 w-3.5" />
      ))}
    </div>
  )
}

function ReviewCard({ review }) {
  return (
    <figure
      data-reveal
      className="reveal group relative flex h-full flex-col overflow-hidden rounded-3xl border border-amber-500/20 bg-cocoa p-6 transition duration-500 hover:border-amber-400/40 hover:shadow-gold-lg sm:p-7"
    >
      {/* Soft gold glow that warms on hover */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-amber-500/10 blur-[60px] transition duration-500 group-hover:bg-amber-400/20"
      />

      <span
        aria-hidden="true"
        className="relative font-serif text-5xl leading-none text-amber-500/30"
      >
        &ldquo;
      </span>

      <blockquote className="relative mt-2 flex-1 text-[15px] leading-relaxed text-amber-50/80">
        {review.quote}
      </blockquote>

      <div className="relative mt-5">
        <Stars count={review.stars} />
      </div>

      <figcaption className="relative mt-4 flex items-center gap-3 border-t border-amber-500/15 pt-4">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-amber-500/25 bg-amber-500/10 font-serif text-sm font-bold text-amber-300">
          {review.initials}
        </span>
        <span className="min-w-0">
          <span className="block truncate text-sm font-semibold text-amber-50">
            {review.name}
          </span>
          <span className="block text-[11px] font-medium uppercase tracking-[0.16em] text-amber-500/70">
            {review.source}
          </span>
        </span>
      </figcaption>
    </figure>
  )
}

export default function Reviews() {
  return (
    <section id="reviews" className="relative scroll-mt-24 overflow-hidden pb-16 sm:pb-24">
      {/* Ambient warmth behind the grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-10 h-72 w-[34rem] -translate-x-1/2 rounded-full bg-amber-700/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div data-reveal className="reveal max-w-2xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-amber-500/80">
            Customer Reviews
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-amber-50 sm:text-5xl">
            What waffle lovers <span className="gold-text italic">say.</span>
          </h2>

          <div className="mt-5 inline-flex items-center gap-2.5 rounded-full border border-amber-500/25 bg-cocoa/70 px-4 py-2 backdrop-blur-md">
            <span className="flex items-center gap-1 text-amber-400">
              <StarIcon className="h-3.5 w-3.5" />
              <span className="text-[13px] font-bold text-amber-200">{business.rating} ★</span>
            </span>
            <span className="h-3.5 w-px bg-amber-500/25" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-amber-100/70">
              Verified Google Reviews
            </span>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        <p className="mt-7 text-center text-[11px] text-amber-100/40">
          Based on verified Google reviews for {business.name}, {business.locality}.
        </p>
      </div>
    </section>
  )
}
