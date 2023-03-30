import React, {
  ChangeEvent,
  SyntheticEvent,
  useCallback,
  useEffect,
  useState,
  useRef,
} from "react";
import "./Search.css";

// interface IState {
//   input: string;
// }

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

// class Search extends React.PureComponent<unknown, IState> {
//   state: IState = {
//     input: localStorage.getItem("inputValue") || "",
//   };

//   componentWillUnmount = () => {
//     localStorage.setItem("inputValue", this.state.input);
//   };

//   render() {
//     return (
//       <div className="Search__wrapper">
//         <input
//           onChange={(e) => {
//             this.setState({ input: e.currentTarget.value });
//           }}
//           type="text"
//           className="Search__input"
//           value={this.state.input}
//         />
//       </div>
//     );
//   }
// }

export default Search;
