import Image from "next/image"
import { Quote } from "lucide-react"

export function HostSection() {
  return (
    <section id="host" className="scroll-mt-20 px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-5 md:gap-14">
        <div className="md:col-span-2">
          <div className="relative mx-auto max-w-sm overflow-hidden rounded-2xl border border-border bg-card">
            <Image
              src="/host-portrait.png"
              alt="Portrait of the masterclass host"
              width={640}
              height={800}
              className="h-full w-full object-cover"
              priority={false}
            />
          </div>
        </div>

        <div className="md:col-span-3">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent-foreground">
            Your host
          </p>
          <h2 className="mt-4 text-balance font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
            Learn from someone who has done it
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            Your host has spent Years helping everyday experts turn
            quiet expertise into digital products that have generated millions
            in combined sales. No hype, no fluff &mdash; just the practical
            playbook that actually works.
          </p>

          <figure className="mt-8 rounded-2xl border border-border bg-card p-6">
            <Quote className="h-6 w-6 text-accent-foreground" aria-hidden="true" />
            <blockquote className="mt-3 text-pretty font-serif text-lg leading-relaxed text-foreground">
              &ldquo;I sat on my idea for two years. I followed this exact
              framework and made Lots of money in a single weekend.&rdquo;
            </blockquote>
            <figcaption className="mt-4 text-sm text-muted-foreground">
              &mdash; Jane
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
