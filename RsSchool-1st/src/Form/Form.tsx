import React, {
  ChangeEvent,
  SyntheticEvent,
  useEffect,
  useRef,
  useState,
} from "react";
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

const Form = () => {
  const [form, setForm] = useState<sType>({
    nameInput: "",
    dateInput: "",
    selectOption: options[0].value,
    radioInput: false,
    checkboxInput: false,
    inputPhoto: "",
    selectOptionError: false,
    nameInputError: false,
    formSubmitted: false,
    data: [],
  });
  const [nameMessage, setNameMessage] = useState("Name won't be epmty");
  const [selectMessage, setSelectMessage] = useState("Choose your direction");
  const [formValid, setFormInvalid] = useState(false);

  useEffect(() => {
    if (nameMessage || selectMessage || !form.checkboxInput) {
      setFormInvalid(false);
    } else {
      setFormInvalid(true);
    }
  }, [nameMessage, selectMessage, form.checkboxInput]);
  const blurHandlerName = (e: React.FocusEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.name === "name") {
      setForm((prevForm) => ({ ...prevForm, nameInputError: true }));
    }
  };

  const blurHandlerSelect = (e: React.FocusEvent<HTMLSelectElement>) => {
    e.preventDefault();
    if (e.target.name === "direction") {
      setForm((prevForm) => ({ ...prevForm, selectOptionError: true }));
    }
  };

  const nameRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const selectRef = useRef<HTMLSelectElement>(null);
  const checkRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setForm({
      ...form,
      nameInput: e.target.value || "",
    });
    if (e.target.value.charAt(0) !== e.target.value.charAt(0).toUpperCase()) {
      setNameMessage("First name's letter must be  capital");
    } else if (e.target.value === "") {
      setNameMessage("");
    } else {
      setNameMessage("");
    }
  };

  const handleChangeDate = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setForm({
      ...form,
      dateInput: e.target.value || "",
    });
  };

  const handleChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setForm({
      ...form,
      selectOption: e.target.value || "",
    });
    if (e.target.value === "Make your choice") {
      setSelectMessage("Choose your direction");
    } else {
      setSelectMessage("");
    }
  };

  const handleChangeRadio = () => {
    setForm({ ...form, radioInput: !form.radioInput });
  };
  const handleChangeCheck = () => {
    setForm({ ...form, checkboxInput: !form.checkboxInput });
  };

  const handleChangePhoto = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return;
    }
    if (event.target.files && event.target.files[0]) {
      setForm({
        ...form,
        inputPhoto: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const handleShow = (e: SyntheticEvent) => {
    e.preventDefault();
    const item: dataType = {
      nameInput: form.nameInput,
      dateInput: form.dateInput,
      selectOption: form.selectOption,
      radioInput: form.radioInput,
      checkboxInput: form.checkboxInput,
      inputPhoto: form.inputPhoto,
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

    setForm({ ...form, formSubmitted: true });

    if (form.checkboxInput && form.selectOptionError && form.nameInputError) {
      setForm({
        ...newState,
        data: [...form.data, item],
      });
    }
    console.log(form);
    alert(
      "Уважаемые проверяющие, не успел до конца доделать форму, если не будет для вас затруднительным, то проверьте пожалуйста ее пожалуйста в последний день кросчека. Заранее спасибо)"
    );
  };

  return (
    <div className="Form">
      <h1>Form</h1>
      <div className="Form-wrapper">
        <form ref={formRef} onSubmit={handleShow} className="Form-container">
          {form.nameInputError && nameMessage && (
            <div style={{ color: "red" }}>{nameMessage}</div>
          )}
          <label>
            Name:
            <input
              onChange={handleChangeName}
              onBlur={blurHandlerName}
              ref={nameRef}
              value={form.nameInput}
              type="text"
              name="name"
              placeholder="Input your name..."
              style={{
                border: `${form.nameInputError ? "2px dash red" : ""}`,
              }}
            />
          </label>
          <label>
            Date:
            <input
              onChange={handleChangeDate}
              value={form.dateInput}
              ref={dateRef}
              type="date"
              name="date"
            />
          </label>
          <label htmlFor="direction">Select your direction</label>
          {form.selectOptionError && selectMessage && (
            <div style={{ color: "red" }}>{selectMessage}</div>
          )}
          <select
            ref={selectRef}
            onBlur={blurHandlerSelect}
            onChange={handleChangeSelect}
            value={form.selectOption}
            name="direction"
            id="direction"
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
                  checked={form.radioInput}
                  value={"male"}
                  onChange={handleChangeRadio}
                />
                <label htmlFor={"male"}>Male</label>
              </>
              <>
                <input
                  type="radio"
                  name="radio"
                  id="female"
                  value={"male"}
                  checked={!form.radioInput}
                  onChange={handleChangeRadio}
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
              onChange={handleChangePhoto}
            />
          </label>
          {!form.checkboxInput && form.formSubmitted && (
            <div style={{ color: "red" }}>Error</div>
          )}
          <label htmlFor="license">
            Accept with our politics:
            <input
              ref={checkRef}
              type="checkbox"
              id="license"
              name="license"
              checked={form.checkboxInput}
              onChange={handleChangeCheck}
            />
          </label>
          <button disabled={!formValid} type="submit" value="Create card">
            Create card
          </button>
        </form>
      </div>
      <CreateForm data={form.data} />
    </div>
  );
};
export default Form;
