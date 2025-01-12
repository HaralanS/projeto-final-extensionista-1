import DicasSection from "@/Components/DicasSection/DicasSection";
import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import Main from "@/Components/Main/Main";
import NavBar from "@/Components/NavBar/NavBar";

export default function Dicas() {
  return (
    <div>
      <Header>
        <NavBar />
      </Header>
      <Main>
        <DicasSection />

      </Main>
      <Footer/>
    </div>
  );
}
