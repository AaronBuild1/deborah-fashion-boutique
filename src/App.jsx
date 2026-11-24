import { MemoryRouter, Routes, Route } from "react-router-dom";
import { StoreProvider } from "./store/cart";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import Home from "./pages/Home";
import Boutique from "./pages/Boutique";
import ProductPage from "./pages/ProductPage";
import Checkout from "./pages/Checkout";
import About from "./pages/About";

export default function App() {
  return (
    <MemoryRouter initialEntries={["/"]}>
      <StoreProvider>
        <div className="min-h-screen flex flex-col font-sans text-ink bg-paper">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/boutique" element={<Boutique />} />
              <Route path="/produit/:id" element={<ProductPage />} />
              <Route path="/commande" element={<Checkout />} />
              <Route path="/a-propos" element={<About />} />
            </Routes>
          </main>
          <Footer />
          <BackToTop />
        </div>
      </StoreProvider>
    </MemoryRouter>
  );
}
