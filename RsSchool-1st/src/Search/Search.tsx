import React, {
  ChangeEvent,
  SyntheticEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import "./Search.css";

// interface IState {
//   input: string;
// }

const Search = () => {
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    setInput(localStorage.getItem("inputValue") || "");
  }, []);

  useEffect(() => {
    return () => {
      console.log("useEffectrender");
      localStorage.setItem("inputValue", input);
    };
  }, []);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value);
  }, []);

  return (
    <div className="Search__wrapper">
      <input
        onChange={handleChange}
        type="text"
        className="Search__input"
        value={input}
      />
    </div>
  );
};

// localStorage.getItem("inputValue") || ""

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
