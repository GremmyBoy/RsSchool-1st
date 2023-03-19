import React from "react";
import "./Search.css";

interface IState {
  input: string;
}

interface Props {
  props: number;
}

class Search extends React.Component<Props, IState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      input: localStorage.getItem("inputValue") || "",
    };
  }

  componentWillUnmount() {
    localStorage.setItem("inputValue", this.state.input);
    console.log(this.state.input);
  }

  // componentDidMount(): void {
  //   const value = localStorage.getItem("inputValue") || "";
  //   this.setState({ input: value });
  //   console.log(value);
  // }
  render() {
    return (
      <div className="Search__wrapper">
        <input
          onChange={(e) => {
            this.setState({ input: e.currentTarget.value });
            localStorage.setItem("inputValue", e.currentTarget.value);
          }}
          type="text"
          className="Search__input"
          value={this.state.input}
        />
      </div>
    );
  }
}
// onInput={(e) => this.setState({ input: e.currentTarget.value })}
// state: state = {
//   input: localStorage.getItem("inputValue") || "",
// };

// localStorage.getItem("inputValue") || ""

// onInput={(e) =>
//   localStorage.setItem(
//     "inputValue",
//     (e.target as HTMLInputElement).value
//   )

export default Search;
