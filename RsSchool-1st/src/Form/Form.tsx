import React from "react";
import "./Form.css";
import { options } from "../Base/Options";
import { checkBox } from "../Base/Checkbox";
import { radio } from "../Base/Radio";

interface params {
  id: number;
  value: string;
  title: string;
}

interface check {
  id: string;
  value: string;
  title: string;
}

interface sType {
  nameInput: string;
  dateInput: string;
  selectOption: string;
  showData: [
    {
      id: "";
      name: string;
      date: string;
      select: string;
    }
  ];
}

class Form extends React.Component<sType> {
  state: sType = {
    nameInput: "ffff",
    dateInput: "",
    selectOption: "",
    showData: [
      {
        id: "",
        name: "",
        date: "",
        select: "",
      },
    ],
  };

  nameRef = React.createRef<HTMLInputElement>();
  dateRef = React.createRef<HTMLInputElement>();
  selectRef = React.createRef<HTMLSelectElement>();

  handleChange = () => {
    this.setState({
      nameInput: this.nameRef.current?.value,
      dateInput: this.dateRef.current?.value,
      selectOption: this.selectRef.current?.value,
    });
  };

  // handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault();
  //   this.setState({
  //     nameInput: this.nameRef.current?.value,
  //   });
  // };

  handleShow = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { nameInput, dateInput, selectOption } = this.state;
    this.setState({
      nameInput: "",
      dateInput: "",
      selectOption: "",
      showData: [
        {
          id: nameInput,
          name: nameInput,
          date: dateInput,
          select: selectOption,
        },
      ],
    });
  };

  render(): React.ReactNode {
    return (
      <div className="Form">
        <h1>Form</h1>
        <div className="Form-wrapper">
          <form className="Form-container">
            <label>
              Name:
              <input
                onChange={this.handleChange}
                ref={this.nameRef}
                type="text"
                name="name"
                value={this.state.nameInput}
              />
            </label>
            <label>
              Date:
              <input
                onChange={this.handleChange}
                ref={this.dateRef}
                type="date"
                name="date"
                value={this.state.dateInput}
              />
            </label>
            <label htmlFor="direction">Select your direction</label>
            <select
              onChange={this.handleChange}
              ref={this.selectRef}
              name="direction"
              id="direction"
              value={this.state.selectOption}
            >
              {options.map((item: params) => (
                <option key={item.id} value={item.value}>
                  {item.title}
                </option>
              ))}
            </select>
            <div className="Hobbies">
              <h3>Choose your hobbies</h3>
              <div className="Hobbies-container">
                {checkBox.map((item: check) => (
                  <>
                    <input
                      type="checkbox"
                      key={item.id}
                      id={item.id}
                      value={item.value}
                    />
                    <label htmlFor={item.id}>{item.title}</label>
                  </>
                ))}
              </div>
            </div>
            <div className="Level">
              <h3>Choose your IT level</h3>
              <div className="Level-container">
                {radio.map((item: check) => (
                  <>
                    <input
                      type="radio"
                      key={item.id}
                      id={item.id}
                      name="radio"
                      value={item.value}
                    />
                    <label htmlFor={item.id}>{item.title}</label>
                  </>
                ))}
              </div>
            </div>
            <label htmlFor="avatar">
              Choose your favorite picture:
              <input
                type="file"
                id="avatar"
                name="image"
                accept="image/png, image/jpeg"
              />
            </label>
            <input type="textarea" />
            <button onClick={this.handleShow}>Create card</button>
          </form>
        </div>
        {this.state.showData.map((card) => (
          <div key={card.id} className="new-Card">
            <h2>{card.name}</h2>
            <p>{card.date}</p>
          </div>
        ))}
      </div>
    );
  }
}

// state: sType = {
//   nameInput: "ffff",
//   dateInput: "",
//   selectOption: "",
//   showData: {
//     name: "",
//     date: "",
//     select: "",
//   },
// };

// interface sType {
//   nameInput: string;
//   dateInput: string;
//   selectOption: string;
//   showData: {
//     name: string;
//     date: string;
//     select: string;
//   };
// }
export default Form;
