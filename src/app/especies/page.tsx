import CardSection from "@/Components/CardsSection/CardsSection";
import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import Main from "@/Components/Main/Main";
import NavBar from "@/Components/NavBar/NavBar";

export default function Especies() {
  return (
    <div>
      <Header>
        <NavBar />
      </Header>
      <Main>
        <CardSection/>

      </Main>
      <Footer/>
    </div>
  );
}
