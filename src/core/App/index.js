import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Header } from "./Header";
import { About } from "../../features/About";
import { Home } from "../../features/Home";
import { Pricing } from "../../features/Pricing";
import { Reviews } from "../../features/Reviews";
import { Contact } from "../../features/Contact";
import { Footer } from "./Footer";
import { Background } from "./Background";
import ScrollToTop from "./ScrollToTop";
import { HelmetProvider } from "react-helmet-async";
import { WashingMachineService } from "../../features/Services/WashingMachineService";
import { DishwasherService } from "../../features/Services/DishwasherService";
import { CoffeeMachineService } from "../../features/Services/CoffeeMachineService";
import { TelevisionService } from "../../features/Services/TelevisionService";

const App = () => (
  <Router>
    <ScrollToTop />
    <Background />
    <Header />
    <HelmetProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/o-mnie" element={<About />} />
        <Route path="/naprawa-pralek" element={<WashingMachineService />} />
        <Route path="/naprawa-zmywarek" element={<DishwasherService />} />
        <Route path="/naprawa-ekspresow" element={<CoffeeMachineService />} />
        <Route path="/naprawa-telewizorow" element={<TelevisionService />} />
        <Route path="/cennik" element={<Pricing />} />
        <Route path="/opinie" element={<Reviews />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </HelmetProvider>
    <Footer />
  </Router>
);

export default App;
