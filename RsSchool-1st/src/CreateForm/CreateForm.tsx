import React from "react";
import "./CreateForm.css";
import { dataType } from "../Form/Form";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Form {}

interface PropsType {
  data: dataType[];
}

class CreateForm extends React.Component<PropsType, Form> {
  constructor(props: PropsType) {
    super(props);
  }
  render() {
    return (
      <div className="Create-form">
        {this.props.data.map((item: dataType, index: number) => {
          return (
            <div className="Create-card" key={index}>
              <div>Username: {item.nameInput}</div>
              <div>Date birth: {item.dateInput}</div>
              <div>Direction: {item.selectOption}</div>
              <div>Gender:{item.radioInput ? "Male" : "Female"}</div>
              <div>Photo:</div>
              {item.inputPhoto ? (
                <div>
                  <img
                    src={item.inputPhoto}
                    alt="avatar"
                    style={{ width: "100px" }}
                  />
                </div>
              ) : (
                "no photos"
              )}
            </div>
          );
        })}
      </div>
    );
  }
}

export default CreateForm;
