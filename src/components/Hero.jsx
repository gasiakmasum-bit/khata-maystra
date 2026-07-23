import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <section className="hero">
      <div className="hero__grid" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__text">
          <span className="hero__eyebrow">Хата Майстра · з 2017 року</span>
          <h1>
            ІНСТРУМЕНТИ ДЛЯ ДОМУ<br />
            ТА <span>ПРОФЕСІОНАЛІВ</span>
          </h1>
          <p className="hero__lead">
            Електроінструмент, садова техніка та будівельне обладнання перевірених
            брендів — з офіційною гарантією та доставкою по всій Україні.
          </p>
          <div className="hero__actions">
            <button className="btn btn--primary btn--lg" onClick={() => navigate("/catalog")}>
              Перейти в каталог
            </button>
            <button className="btn btn--ghost btn--lg" onClick={() => navigate("/promotions")}>
              Дивитись акції
            </button>
          </div>
        </div>
        <div className="hero__ruler" aria-hidden="true">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className={i % 5 === 0 ? "tick tick--major" : "tick"} />
          ))}
        </div>
      </div>
    </section>
  );
}
