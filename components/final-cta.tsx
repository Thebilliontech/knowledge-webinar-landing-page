import { ArrowRight, PlayCircle } from "lucide-react"

const WATCH_URL = "https://youtu.be/D-OcG0lv-Yo?si=hH2xrIo7TKFarkzh"

export function FinalCta() {
  return (
    <section className="px-5 pb-20 md:px-8">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center text-primary-foreground md:px-12 md:py-20">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground/70">
          One click away
        </p>
        <h2 className="mx-auto mt-4 max-w-2xl text-balance font-serif text-3xl leading-tight tracking-tight md:text-5xl">
          Your future product starts with pressing play
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-primary-foreground/75">
          It&apos;s completely free, and everything you need to begin is inside.
          The only thing standing between you and your first digital product is
          the next few minutes.
        </p>
        <a
          href={WATCH_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
        >
          <PlayCircle className="h-5 w-5" aria-hidden="true" />
          Access the webinar free
          <ArrowRight
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </a>
        <p className="mt-5 text-xs text-primary-foreground/60">
          No sign-up required &middot; Watch instantly on YouTube
        </p>
      </div>
    </section>
  )
}
