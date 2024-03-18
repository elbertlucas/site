import { Contacts } from "@/components/contacts";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Home } from "@/components/home";
import { Projects } from "@/components/projects";
import { Services } from "@/components/services";

export default function HomePage() {
  return (
    <main className="">
      <Header />
      <Home />
      <Services />
      <Projects />
      <Contacts />
      <Footer/>
    </main>
  );
}
