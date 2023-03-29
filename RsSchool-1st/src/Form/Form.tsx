import React from "react";
import "./Form.css";
import { options } from "../Base/Options";
import CreateForm from "../CreateForm/CreateForm";

interface params {
  id: number;
  value: string;
  title: string;
}

export interface dataType {
  nameInput: string;
  dateInput: string;
  selectOption: string | undefined;
  radioInput: boolean;
  checkboxInput: boolean;
  inputPhoto: string;
}

interface sType {
  nameInput: string;
  dateInput: string;
  selectOption: string;
  radioInput: boolean;
  checkboxInput: boolean;
  inputPhoto: string;
  selectOptionError: boolean;
  formSubmitted: boolean;
  nameInputError: boolean;
  data: dataType[];
}

class Form extends React.Component<unknown> {
  state: sType = {
    nameInput: "",
    dateInput: "",
    selectOption: "",
    radioInput: false,
    checkboxInput: false,
    inputPhoto: "",
    selectOptionError: false,
    nameInputError: false,
    formSubmitted: false,
    data: [],
  };

  nameRef = React.createRef<HTMLInputElement>();
  dateRef = React.createRef<HTMLInputElement>();
  selectRef = React.createRef<HTMLSelectElement>();
  checkRef = React.createRef<HTMLInputElement>();

  handleChange = () => {
    this.setState({
      nameInput: this.nameRef.current?.value,
      dateInput: this.dateRef.current?.value,
    });
  };

  handleChangeRadio = () => {
    this.setState({ radioInput: !this.state.radioInput });
  };
  handleChangeCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    // this.setState({ checkboxInput: !this.state.checkboxInput });
    const { checked } = event.target as unknown as { checked: boolean };
    this.setState({ checkboxInput: checked });
  };

  handleChangePhoto = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return;
    }
    if (event.target.files && event.target.files[0]) {
      this.setState({ inputPhoto: URL.createObjectURL(event.target.files[0]) });
    }
  };

  handleShow = (e: React.SyntheticEvent) => {
    const item: dataType = {
      nameInput: this.state.nameInput,
      dateInput: this.state.dateInput,
      selectOption: this.selectRef.current?.value,
      radioInput: this.state.radioInput,
      checkboxInput: this.state.checkboxInput,
      inputPhoto: this.state.inputPhoto,
    };
    const newState: Omit<sType, "data"> = {
      nameInput: "",
      dateInput: "",
      selectOption: "",
      radioInput: false,
      checkboxInput: false,
      inputPhoto: "",
      selectOptionError: false,
      nameInputError: false,
      formSubmitted: false,
    };

    this.setState({ formSubmitted: true });
    // if (this.selectRef.current?.value === "Make your choice") {
    //   this.setState({ selectOptionError: true });
    // } else {
    //   this.setState({ selectOptionError: false });
    // }
    if (this.selectRef.current?.value === "Make your choice") {
      this.setState((state) => ({ ...state, selectOptionError: true }));
    } else {
      this.setState((state) => ({ ...state, selectOptionError: false }));
    }

    if (
      this.state.nameInput === "" ||
      this.state.nameInput.charAt(0) !==
        this.state.nameInput.charAt(0).toUpperCase()
    ) {
      this.setState({ nameInputError: true });
    } else {
      this.setState({ nameInputError: false });
    }

    if (
      this.state.checkboxInput &&
      !this.state.selectOptionError &&
      !this.state.nameInputError
    ) {
      this.setState({
        ...this.state,
        ...newState,
        data: [...this.state.data, item],
      });
    }
    console.log(this.state);
    e.preventDefault();
  };

  render(): React.ReactNode {
    return (
      <div className="Form">
        <h1>Form</h1>
        <div className="Form-wrapper">
          <form onSubmit={this.handleShow} className="Form-container">
            <label>
              Name:
              <input
                onChange={this.handleChange}
                ref={this.nameRef}
                type="text"
                name="name"
                value={this.state.nameInput}
                placeholder="Input your name..."
                style={{
                  border: `${this.state.nameInputError ? "2px solid red" : ""}`,
                }}
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
              ref={this.selectRef}
              name="direction"
              id="direction"
              required
              style={{
                border: `${
                  this.state.selectOptionError ? "2px solid red" : ""
                }`,
              }}
            >
              {options.map((item: params) => (
                <option key={item.id} value={item.value}>
                  {item.title}
                </option>
              ))}
            </select>
            <div className="Gender">
              <h3>Choose your gender</h3>
              <div className="Gender-container">
                <>
                  <input
                    type="radio"
                    name="radio"
                    id="male"
                    checked={this.state.radioInput}
                    value={"male"}
                    onChange={this.handleChangeRadio}
                  />
                  <label htmlFor={"male"}>Male</label>
                </>
                <>
                  <input
                    type="radio"
                    name="radio"
                    id="female"
                    value={"male"}
                    checked={!this.state.radioInput}
                    onChange={this.handleChangeRadio}
                  />
                  <label htmlFor={"female"}>Female</label>
                </>
              </div>
            </div>
            <label htmlFor="avatar">
              Choose your favorite picture:
              <input
                type="file"
                id="avatar"
                name="image"
                accept="image/png, image/jpeg"
                onChange={this.handleChangePhoto}
              />
            </label>
            {!this.state.checkboxInput && this.state.formSubmitted && (
              <div style={{ color: "red" }}>Error</div>
            )}
            <label htmlFor="license">
              Accept with our politics:
              <input
                ref={this.checkRef}
                type="checkbox"
                id="license"
                name="license"
                checked={this.state.checkboxInput}
                onChange={this.handleChangeCheck}
              />
            </label>
            <button type="submit" value="Create card">
              Create card
            </button>
          </form>
        </div>
        <CreateForm data={this.state.data} />
      </div>
    );
  }
}

// showData: [
//   {
//     id: nameInput,
//     name: nameInput,
//     date: dateInput,
//     select: selectOption,
//   },
// ]

// {radio.map((item: check) => (
//   <>
//     <input
//       type="radio"
//       key={item.id}
//       id={item.id}
//       name="radio"
//       value={item.value}
//     />
//     <label htmlFor={item.id}>{item.title}</label>
//   </>
// ))}

// if (this.selectRef.current?.value === "Make your choice") {
//   this.setState((state) => ({ ...state, selectOptionError: true }));
// } else {
//   this.setState((state) => ({ ...state, selectOptionError: false }));
// }
export default Form;
