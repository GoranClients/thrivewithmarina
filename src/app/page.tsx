import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { BookingV2 } from "@/components/sections/BookingV2";
import { Faq } from "@/components/sections/Faq";
import { FreeBreathwork } from "@/components/sections/FreeBreathwork";
import { GalleryV2 } from "@/components/sections/GalleryV2";
import { HeroWellnessStack } from "@/components/sections/HeroWellnessStack";
import { Instructors } from "@/components/sections/Instructors";
import { Memberships } from "@/components/sections/Memberships";
import { Reviews } from "@/components/sections/Reviews";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroWellnessStack />
        <Instructors />
        <FreeBreathwork />
        <Reviews />
        <GalleryV2 />
        <Memberships />
        <BookingV2 />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
