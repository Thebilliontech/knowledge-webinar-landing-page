import { ArrowRight, PlayCircle, Star } from "lucide-react"

const WATCH_URL = "https://youtu.be/D-OcG0lv-Yo?si=hH2xrIo7TKFarkzh"

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-4xl px-5 pb-14 pt-16 text-center md:px-8 md:pb-20 md:pt-24">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          Free Live Masterclass
        </span>

        <h1 className="mx-auto mt-7 max-w-3xl text-balance font-serif text-4xl leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Turn Your Knowledge Into a Profitable Digital Product
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          You already know something people would happily pay for. In this
          masterclass you&apos;ll discover the exact system to package your
          expertise into a digital product that sells &mdash; even if
          you&apos;re starting from zero.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={WATCH_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
          >
            <PlayCircle className="h-5 w-5" aria-hidden="true" />
            Watch the webinar free
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
          <a
            href="#access"
            className="inline-flex w-full items-center justify-center rounded-full border border-border bg-card px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary sm:w-auto"
          >
            Preview inside
          </a>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6">
          <div className="flex items-center gap-1" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-accent text-accent" />
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            Loved by <span className="font-medium text-foreground">12,000+</span>{" "}
            creators, coaches &amp; experts
          </p>
        </div>
      </div>
    </section>
  )
}
