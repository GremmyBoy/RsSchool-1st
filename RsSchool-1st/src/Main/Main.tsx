import "./Main.css";
import { base } from "../Base";
import Cards from "../Cards/Cards";
import Search from "../Search/Search";

export interface product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

function Main() {
  return (
    <div className="Main">
      <h1>Main</h1>
      <div className="Search-container">
        <Search />
      </div>
      <div className="Cards-container">
        {base.products.map((item: product) => (
          <Cards key={item.id} card={item} />
        ))}
      </div>
    </div>
  );
}

export default Main;
