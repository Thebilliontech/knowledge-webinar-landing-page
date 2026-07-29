import { Coins, Clock3, Infinity as InfinityIcon, Rocket } from "lucide-react"

const BENEFITS = [
  {
    icon: Coins,
    title: "Get paid for what you already know",
    body: "Your experience is an asset. Learn how to convert the skills, lessons and shortcuts in your head into something people gladly pay for.",
  },
  {
    icon: Clock3,
    title: "Build it once, sell it forever",
    body: "Stop trading hours for money. A digital product works while you sleep — no inventory, no shipping, no ceiling on how many you can sell.",
  },
  {
    icon: Rocket,
    title: "Start with zero audience",
    body: "You don't need thousands of followers or a fancy website. We show you the lean path from idea to first sale, even from scratch.",
  },
  {
    icon: InfinityIcon,
    title: "A repeatable, proven system",
    body: "No guesswork. Follow the same step-by-step framework thousands of creators have used to launch products that keep earning.",
  },
]

export function BenefitsSection() {
  return (
    <section className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent-foreground">
            Why join
          </p>
          <h2 className="mt-4 text-balance font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
            Your knowledge is worth more than you think
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Every day you wait, someone with less experience than you is selling
            what you could teach better. This masterclass hands you the roadmap
            to finally claim it.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {BENEFITS.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-sm md:p-7"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/15 text-accent-foreground">
                <b.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-serif text-xl text-foreground">
                {b.title}
              </h3>
              <p className="mt-2.5 leading-relaxed text-muted-foreground">
                {b.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
