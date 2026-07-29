import { Check } from "lucide-react"

const POINTS = [
  "How to find the one profitable idea hiding in your existing knowledge",
  "The 4 digital product formats that sell best in 2026 (and which fits you)",
  "A simple way to validate demand before you build a single thing",
  "How to price with confidence so your product feels premium, not cheap",
  "The lean launch plan to make your first sales without a big audience",
  "The mistakes that keep most experts stuck — and how to skip them",
]

const WATCH_URL = "https://youtu.be/D-OcG0lv-Yo?si=hH2xrIo7TKFarkzh"

export function LearnSection() {
  return (
    <section id="learn" className="scroll-mt-20 bg-secondary/50 px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2 md:gap-16">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent-foreground">
            Inside the session
          </p>
          <h2 className="mt-4 text-balance font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
            What you&apos;ll walk away knowing
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            This isn&apos;t vague motivation. It&apos;s a clear, practical
            walkthrough you can act on the moment the video ends.
          </p>
          <a
            href={WATCH_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Watch it now &mdash; free
          </a>
        </div>

        <ul className="space-y-4">
          {POINTS.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent-foreground">
                <Check className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              <span className="leading-relaxed text-foreground">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
