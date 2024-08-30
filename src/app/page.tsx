import Image from "next/image";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section id="FDD">Section 1 content - featured deals</section>
        <section id="Neighborhodds">Section 2 content - neighborhoods</section>
        <section id="LateNight">Section 3 content - late night</section>
      </main>
    </>
  );
}
