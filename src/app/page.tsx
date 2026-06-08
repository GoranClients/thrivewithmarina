import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Contact } from "@/components/sections/Contact";
import { GroupSlider } from "@/components/sections/GroupSlider";
import { Hero } from "@/components/sections/Hero";
import { Instructors } from "@/components/sections/Instructors";
import { Memberships } from "@/components/sections/Memberships";
import { Reviews } from "@/components/sections/Reviews";
import { Sessions } from "@/components/sections/Sessions";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Sessions />
        <Instructors />
        <Reviews />
        <GroupSlider />
        <Memberships />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
