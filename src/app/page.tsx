import { CreateCountdown } from "@/components/create-countdown";

export default function Home() {
  return (
    <main className="h-screen overflow-auto bg-gradient-to-bl from-neutral-900 to-neutral-800 text-neutral-50">
      <div className="container mx-auto h-full">
        <CreateCountdown />
      </div>
    </main>
  )
}
