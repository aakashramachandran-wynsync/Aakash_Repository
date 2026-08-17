import { Sidebar, MobileHeader, MobileNav } from "@/components/portfolio/Navigation";
import {
  Hero,
  About,
  Skills,
  Projects,
  Experience,
  QuoteBlock,
  Progress,
  Contact,
  Footer,
} from "@/components/portfolio/sections";

function App() {
  return (
    <div className="atmosphere grain min-h-screen">
      <Sidebar />
      <MobileHeader />
      <div className="lg:pl-[248px]">
        <main className="mx-auto w-full max-w-6xl px-5 pb-28 sm:px-8 lg:pb-8">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <QuoteBlock />
          <Experience />
          <Progress />
          <Contact />
          <Footer />
        </main>
      </div>
      <MobileNav />
    </div>
  );
}

export default App;
