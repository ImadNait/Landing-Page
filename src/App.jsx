import "../src/App.css";
import Layo from "./compos/layout";
import Header from "./compos/header";
import Aboutus from "./compos/About";
import Features from "./compos/Features";
import ContactUs from "./compos/Contact";
function App() {
  return (
    <>
      <Header />
      <br />
      <Layo />
      <br />
      <Aboutus />
      <br />
      <Features />
      <br />
      <ContactUs />
    </>
  );
}

export default App;
