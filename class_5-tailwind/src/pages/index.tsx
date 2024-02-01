import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <main className="dark:bg-gray-800 bg-gray-100">
      <Hero />
      <Pricing />
    </main>
  );
}
