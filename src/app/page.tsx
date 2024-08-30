import Image from "next/image";
import Header from "@/components/Header";
import FDD from "@/components/FDD";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <FDD/>
        <section id="Neighborhodds">Section 2 content - neighborhoods</section>
        <section id="LateNight">Section 3 content - late night</section>
      </main>
    </>
  );
}
