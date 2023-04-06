import "./Main.css";
import { base } from "../Base/Base";
import Cards from "../Cards/Cards";
import Search from "../Search/Search";
import { useEffect, useState } from "react";

export interface product {
  idDrink: string;
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
  const [api, setApi] = useState<product[]>([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsloaded] = useState(false);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsloaded(true);
          setApi(result.drinks);
          console.log(api);
        },
        (error) => {
          setIsloaded(true);
          setError(error);
        }
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (error) {
    return <div>Ошибка. Пофиксите{")"}</div>;
  } else if (!isLoaded) {
    return <div>Зарузка...</div>;
  } else {
    return (
      <div className="Main">
        <h1>Main</h1>
        <div className="Search-container">
          <Search />
        </div>
        <div className="Cards-container">
          {api.map((item) => (
            <Cards key={item.idDrink} card={item} />
          ))}
        </div>
      </div>
    );
  }
}
// {base.products.map((item: product) => (
//   <Cards key={item.id} card={item} />
// ))}
export default Main;
