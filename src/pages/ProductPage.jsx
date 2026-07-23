import { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { FaHeart, FaRegHeart, FaShoppingCart, FaMinus, FaPlus } from "react-icons/fa";
import { products } from "../data/products";
import { useStore } from "../context/StoreContext";
import Breadcrumbs from "../components/Breadcrumbs";
import ProductIcon from "../components/ProductIcon";
import Rating from "../components/Rating";

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));
  const { favorites, toggleFavorite, addToCart } = useStore();
  const [qty, setQty] = useState(1);

  if (!product) {
    return (
      <div className="container page">
        <p>Товар не знайдено.</p>
        <Link to="/catalog" className="btn btn--primary">До каталогу</Link>
      </div>
    );
  }

  const isFav = favorites.includes(Number(product.id));

  return (
    <div className="container page">
      <div className="product-page__top">
        <Breadcrumbs items={[{ label: "Каталог", to: "/catalog" }, { label: product.title }]} />
        <button className="btn btn--ghost" onClick={() => navigate(-1)}>
          ← До товарів
        </button>
      </div>

      <div className="product-page">
        <div className="product-page__gallery">
          <div className="product-page__main-image">
            {product.discount && <span className="product-card__badge">Акція</span>}
            <ProductIcon icon={product.icon} className="product-icon--lg" />
          </div>
        </div>

        <div className="product-page__info">
          <span className="product-page__brand">{product.brand}</span>
          <h1>{product.title}</h1>
          <Rating value={product.rating} reviewsCount={product.reviewsCount} size="lg" />
          <p className="product-page__code">Код товару: {product.code}</p>
          <p className="product-page__status">✔ {product.status}</p>

          <div className="product-page__prices">
            <span className="product-page__price">{product.price} ₴</span>
            {product.oldPrice && (
              <span className="product-page__old-price">{product.oldPrice} ₴</span>
            )}
          </div>

          <div className="product-page__actions">
            <div className="qty-control">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))}><FaMinus /></button>
              <span>{qty}</span>
              <button onClick={() => setQty((q) => q + 1)}><FaPlus /></button>
            </div>
            <button className="btn btn--primary btn--lg" onClick={() => addToCart(product.id, qty)}>
              <FaShoppingCart /> У кошик
            </button>
            <button className="btn btn--outline btn--icon" onClick={() => toggleFavorite(product.id)}>
              {isFav ? <FaHeart /> : <FaRegHeart />}
            </button>
          </div>

          <div className="product-page__specs">
            <h3>Характеристики</h3>
            <table>
              <tbody>
                {Object.entries(product.specs).map(([key, val]) => (
                  <tr key={key}>
                    <td>{key}</td>
                    <td>{val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="product-page__description">
        <h3>Опис</h3>
        <p>{product.description}</p>
        <h3>Комплектація</h3>
        <p>{product.equipment}</p>
      </div>
    </div>
  );
}
