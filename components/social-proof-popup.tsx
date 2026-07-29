"use client"

import { useEffect, useState } from "react"
import { CheckCircle2, X } from "lucide-react"

const NAMES = [
  "Sam",
  "Amara",
  "Daniel",
  "Priya",
  "Chloe",
  "Marcus",
  "Fatima",
  "Lucas",
  "Zainab",
  "Ethan",
  "Sofia",
  "Noah",
  "Aisha",
  "Liam",
  "Grace",
  "Kwame",
  "Isabella",
  "Diego",
  "Mei",
  "Olivia",
]

const LOCATIONS = [
  "Port harcourt",
  "Lagos",
  "Abuja",
  "Rivers State",
  "kaduna",
  "Choba",
  "Abia",
  "Calabar",
  "Lekki",
  "Aba",
  "Austin",
  "Manila",
]

function randomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

type Notice = {
  id: number
  name: string
  location: string
  minutesAgo: number
}

export function SocialProofPopup() {
  const [notice, setNotice] = useState<Notice | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let hideTimer: ReturnType<typeof setTimeout>
    let nextTimer: ReturnType<typeof setTimeout>

    const show = () => {
      setNotice({
        id: Date.now(),
        name: randomItem(NAMES),
        location: randomItem(LOCATIONS),
        minutesAgo: Math.floor(Math.random() * 9) + 1,
      })
      setVisible(true)

      hideTimer = setTimeout(() => setVisible(false), 5000)
      // schedule the next popup somewhere between 8-16s later
      nextTimer = setTimeout(show, 8000 + Math.random() * 8000)
    }

    // first popup after a short delay
    const initial = setTimeout(show, 3500)

    return () => {
      clearTimeout(initial)
      clearTimeout(hideTimer)
      clearTimeout(nextTimer)
    }
  }, [])

  if (!notice) return null

  return (
    <div
      aria-live="polite"
      className={`fixed bottom-5 left-5 z-50 max-w-[calc(100vw-2.5rem)] transition-all duration-500 ease-out ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <div className="flex items-center gap-3 rounded-xl border border-border bg-card/95 py-3 pl-3 pr-4 shadow-lg backdrop-blur">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/20">
          <CheckCircle2 className="h-5 w-5 text-accent-foreground" aria-hidden="true" />
        </span>
        <div className="pr-2">
          <p className="text-sm font-medium leading-tight text-foreground">
            {notice.name} from {notice.location} just joined the webinar
          </p>
          <p className="mt-0.5 text-xs text-muted-foreground">
            {notice.minutesAgo} minute{notice.minutesAgo === 1 ? "" : "s"} ago
          </p>
        </div>
        <button
          type="button"
          onClick={() => setVisible(false)}
          aria-label="Dismiss notification"
          className="ml-auto text-muted-foreground transition-colors hover:text-foreground"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
