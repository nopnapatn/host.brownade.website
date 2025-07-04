import { Hero } from "@/app/_components/hero"
import { Announcement } from "@/components/announcement"
import Header from "@/components/layout/header"
import Image from "next/image"

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/book-edit.png"
          alt="Classical Renaissance portrait"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col backdrop-blur-sm">
        <Announcement />
        <Header />

        <Hero />
      </div>
    </div>
  )
}
