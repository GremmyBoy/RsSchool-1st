import "./Cards.css";
import { product } from "../Main/Main";

interface Props {
  card: product;
}

const Cards = ({ card }: Props) => {
  return (
    <div className="Cards">
      <img className="card__image" src={card.images[0]} alt="" />
      <div className="card__description">
        <p className="product__name">{card.title}</p>
        <p className="product__brand">{card.brand}</p>
        <p className="product__price">{card.price}$</p>
      </div>
    </div>
  );
};

export default Cards;
