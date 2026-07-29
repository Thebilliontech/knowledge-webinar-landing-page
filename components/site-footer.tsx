import { Sparkle } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-border px-5 py-10 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-border bg-card">
            <Sparkle className="h-3.5 w-3.5 text-accent-foreground" aria-hidden="true" />
          </span>
          <span className="font-serif text-base text-foreground">
            DigiHospiPro<span className="text-accent-foreground">.</span>
          </span>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Knowledge Masterclass. All rights
          reserved.
        </p>
      </div>
    </footer>
  )
}
