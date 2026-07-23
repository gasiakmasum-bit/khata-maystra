import { FaViber, FaTelegramPlane } from "react-icons/fa";

export default function MobileSocial() {
  return (
    <div className="mobile-social">
      <a href="viber://chat?number=%2B380970775613" aria-label="Viber" className="mobile-social__btn mobile-social__btn--viber">
        <FaViber />
      </a>
      <a href="#" aria-label="Telegram" className="mobile-social__btn mobile-social__btn--telegram">
        <FaTelegramPlane />
      </a>
    </div>
  );
}
