import { Sparkle } from "lucide-react"

const WATCH_URL = "https://youtu.be/D-OcG0lv-Yo?si=hH2xrIo7TKFarkzh"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card">
            <Sparkle className="h-4 w-4 text-accent-foreground" aria-hidden="true" />
          </span>
          <span className="font-serif text-lg tracking-tight text-foreground">
            DigiHospiPro<span className="text-accent-foreground">.</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          <a
            href="#learn"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            What you&apos;ll learn
          </a>
          <a
            href="#host"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Your host
          </a>
          <a
            href="#access"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Watch now
          </a>
        </nav>

        <a
          href={WATCH_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Join free
        </a>
      </div>
    </header>
  )
}
