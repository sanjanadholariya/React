import { useState } from "react";
import Employee from "./Employee";

function App() {
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    department: "",
    status: ""
  });

  const [allData, setAllData] = useState(
    JSON.parse(localStorage.getItem("employee")) || []
  );
  var updatedData = [];

  const [checkId, setCheckId] = useState("")
  const [formError , setFormError] = useState({
    name: "",
    email: "",
    department: "",
    status: ""
  })


  const formValidation = () => {
    let check = true;
    let error = {
      name: "",
      email: "",
      department: "",
      status: ""
    }

    if (!formInput.name) {
      error.name = "Name Is Required"
      check = false
    }
    if (!formInput.email) {
      error.email = "Email Is Required"
      check = false
    }
    if (!formInput.department) {
      error.department = "Department Is Required"
      check = false
    }
    if(!formInput.status){
      error.status = "Status Is Required"
      check = false
    }
    setFormError(error)
    return check;


  }


  const handleSubmit = (e) => {
    e.preventDefault();

    if(formValidation()){
       const withId = {
      id: Math.floor(Math.random() * 10000),
      ...formInput,
    };

    if (checkId) {
      updatedData = allData.map((val) => {
        if (val.id === checkId) {
          return withId;
        }
        else {
          return val;
        }
      })
    }
    else {
      updatedData = [...allData, withId];
    }

    localStorage.setItem("employee", JSON.stringify(updatedData));

    setAllData(updatedData);

    setFormInput({
      name: "",
      email: "",
      department: "",
      status: "",
    });
    setCheckId("")
    }

  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput({
      ...formInput,
      [name]: value,
    });
  };

  const deleteEmployee = (employeeId) => {
    // alert(employeeId);
    updatedData = allData.filter((val) => val.id != employeeId);
    localStorage.setItem("employee", JSON.stringify(updatedData));
    setAllData(updatedData);
  };

  const editEmployee = (employeeId) => {
    // alert(employeeId);
    setCheckId(employeeId)

    const single = allData.find((val) => val.id == employeeId)
    setFormInput(single)
  };
  return (
    <>
      <Employee
        handleSubmit={handleSubmit}
        formInput={formInput}
        handleChange={handleChange}
        allData={allData}
        deleteEmployee={deleteEmployee}
        editEmployee={editEmployee}
        checkId={checkId}
        formError = {formError}
      />
    </>
  );
}

export default App;
