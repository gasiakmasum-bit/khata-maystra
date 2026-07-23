import { Link } from "react-router-dom";
import { FaGasPump, FaLeaf } from "react-icons/fa";

export default function PromoBanners() {
  return (
    <section className="promo-banners">
      <div className="container promo-banners__grid">
        <div className="banner-card banner-card--dark">
          <div className="banner-card__content">
            <span className="banner-card__subtitle">ЗНИЖКИ НА</span>
            <h3>ГЕНЕРАТОРИ<br />ДО -20%</h3>
            <Link to="/promotions" className="btn btn--primary">Перейти до акції</Link>
          </div>
          <FaGasPump className="banner-card__icon" />
        </div>

        <div className="banner-card banner-card--orange">
          <div className="banner-card__content">
            <h3>ВЕСНЯНІ ЗНИЖКИ<br />НА САДОВУ ТЕХНІКУ</h3>
            <Link to="/catalog" className="btn btn--dark">Дивитись</Link>
          </div>
          <FaLeaf className="banner-card__icon" />
        </div>
      </div>
    </section>
  );
}
