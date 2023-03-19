import React from "react";
import "./Search.css";

interface IState {
  input: string;
}

class Search extends React.Component<unknown, IState> {
  state: IState = {
    input: localStorage.getItem("inputValue") || "",
  };

  componentWillUnmount() {
    localStorage.setItem("inputValue", this.state.input);
    console.log(this.state.input);
  }
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

export default Search;
