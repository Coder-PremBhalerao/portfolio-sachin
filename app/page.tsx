import Certificates from "@/components/Certificates";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import Techstack from "@/components/Techstack";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Whychoose from "@/components/Whychoose";
import { navItems } from "@/Data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Whychoose />
        <Overview />
        <Experience />
        <Certificates />
        <Techstack />
        <Clients />
        <Footer />
      </div>
    </main>
  );
}
