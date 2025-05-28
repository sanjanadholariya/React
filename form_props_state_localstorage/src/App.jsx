import { useState } from "react";
import Form from "./Form/Form";
import View from "./Form/View";

function App() {
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    course: [],
    city: "",
  });

  const [allData, setAllData] = useState(
    JSON.parse(localStorage.getItem("data")) || []
  );

  const [checkId, setCheckId] = useState("");

  let updateData;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type == "checkbox") {
      if (checked) {
        setFormInput({
          ...formInput,
          course: [...formInput.course, value],
        });
      } else {
        setFormInput({
          ...formInput,
          course: [...formInput.course].filter((val) => val != value),
        });
      }
    } else {
      setFormInput({
        ...formInput,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let withId = {
      id: Math.floor(Math.random() * 100000),
      ...formInput,
    };

    if (checkId) {
      updateData = allData.map((val) => {
        if (val.id == checkId) {
          return withId;
        } else {
          return val;
        }
        

      });
      alert("Form Updated");
    } else {
      updateData = [...allData, withId];
      alert("Form Submited");

    }

    localStorage.setItem("data", JSON.stringify(updateData));

    setAllData(updateData);

    setFormInput({
      name: "",
      email: "",
      password: "",
      gender: "",
      course: [],
      city: "",
    });

    setCheckId("")
  };

  const deleteUser = (id) => {
    updateData = allData.filter((val) => val.id != id);

    console.log(updateData);

    localStorage.setItem("data", JSON.stringify(updateData));

    setAllData(updateData);
  };

  const editUser = (id) => {
    setCheckId(id);

    let single = allData.find((val) => val.id == id);

    setFormInput(single);
  };

  return (
    <>
      <Form
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        formInput={formInput}
        checkId={checkId}
      />
      <View allData={allData} deleteUser={deleteUser} editUser={editUser} />
    </>
  );
}

export default App;
