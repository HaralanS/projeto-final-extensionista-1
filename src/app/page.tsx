import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import HomeSection from "@/Components/HomeSection/HomeSection";
import Main from "@/Components/Main/Main";
import NavBar from "@/Components/NavBar/NavBar";

export default function Home() {
  return (
    <div>
      <Header>
        <NavBar />
      </Header>
      <Main>
        <HomeSection />

      </Main>
      <Footer/>
    </div>
  );
}
