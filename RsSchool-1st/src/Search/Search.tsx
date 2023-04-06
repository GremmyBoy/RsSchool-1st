import { ChangeEvent, useEffect, useRef } from "react";
import "./Search.css";

export const Search = () => {
  const inputValue = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const currentRef = inputValue.current;
    if (currentRef !== null) {
      currentRef.value = localStorage.getItem("inputValue") || "";
    }
    return () => {
      if (currentRef !== null) {
        localStorage.setItem("inputValue", currentRef.value);
      }
    };
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (inputValue.current !== null) {
      inputValue.current.value = e.target.value;
    }
  };

  return (
    <div className="Search__wrapper">
      <input
        onChange={handleChange}
        type="text"
        className="Search__input"
        ref={inputValue}
      />
    </div>
  );
};

export default Search;
