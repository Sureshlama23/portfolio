import Header from "./components/Header/Header";
import About from "./components/About";
import Banner from "./components/Banner/Banner";
import ServiceList from "./components/service-compo/ServiceList";
import ExpertiseList from "./components/Expertise/ExpertiseList";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <About></About>
      <ServiceList></ServiceList>
      <ExpertiseList></ExpertiseList>
      <Footer></Footer>
    </>
  );
}

export default App;
