import { ArrowUpRight, Clock, Signal, Users } from "lucide-react"

const VIDEO_ID = "D-OcG0lv-Yo"
const WATCH_URL = "https://youtu.be/D-OcG0lv-Yo?si=hH2xrIo7TKFarkzh"
const EMBED_URL = `https://www.youtube.com/embed/${VIDEO_ID}?rel=0`

export function WebinarAccess() {
  return (
    <section id="access" className="scroll-mt-20 px-5 py-8 md:px-8 md:py-12">
      <div className="mx-auto max-w-4xl">
        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          {/* Player */}
          <div className="relative aspect-video w-full bg-primary">
            <iframe
              className="absolute inset-0 h-full w-full"
              src={EMBED_URL}
              title="Turn Your Knowledge Into Digital Products — Free Masterclass"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

          {/* Caption bar */}
          <div className="flex flex-col gap-4 border-t border-border p-5 sm:flex-row sm:items-center sm:justify-between md:p-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-accent-foreground">
                <Signal className="h-3.5 w-3.5" aria-hidden="true" />
                Now streaming
              </div>
              <p className="mt-1.5 font-serif text-lg text-foreground">
                The Digital Product Masterclass
              </p>
            </div>
            <a
              href={WATCH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Open on YouTube
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Meta row */}
        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <MetaCard
            icon={<Clock className="h-4 w-4" aria-hidden="true" />}
            label="Runtime"
            value="Watch anytime"
          />
          <MetaCard
            icon={<Users className="h-4 w-4" aria-hidden="true" />}
            label="Attendees"
            value="12,000+ enrolled"
          />
          <MetaCard
            icon={<Signal className="h-4 w-4" aria-hidden="true" />}
            label="Access"
            value="100% free"
          />
        </div>
      </div>
    </section>
  )
}

function MetaCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-accent-foreground">
        {icon}
      </span>
      <div>
        <p className="text-xs uppercase tracking-wide text-muted-foreground">
          {label}
        </p>
        <p className="text-sm font-medium text-foreground">{value}</p>
      </div>
    </div>
  )
}
