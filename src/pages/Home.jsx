import Hero from "../components/Hero";
import Features from "../components/Features";
import ProductGrid from "../components/ProductGrid";
import PromoBanners from "../components/PromoBanners";
import Brands from "../components/Brands";
import { products } from "../data/products";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <section className="section">
        <div className="container">
          <h2 className="section__title">Популярні товари</h2>
          <ProductGrid items={products} />
        </div>
      </section>
      <PromoBanners />
      <Brands />
    </>
  );
}
