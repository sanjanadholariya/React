import { useState } from "react";

function App() {

  const [formInput, setFormInput] = useState({
    username: "",
    useremail: "",
    userpassword: "",
    gender: "",
    courses: [],
    city: ""
  })

  const [formError, setFormError] = useState({
    username: "",
    useremail: "",
    userpassword: "",
    gender: "",
    courses: [],
    city: ""
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    if (type == "checkbox") {
      if (checked) {
        setFormInput({
          ...formInput,
          courses: [...formInput.courses, value]
        })
      }
      else {
        setFormInput({
          ...formInput,
          courses: [...formInput.courses].filter(val => val != value)
        })
      }

    }
    else {
      setFormInput({
        ...formInput,
        [name]: value
      })
    }
  };

  const formValidation = () => {
    let check = true;
    const error = {
      username: "",
      useremail: "",
      userpassword: "",
      gender: "",
      courses: []
    }

    if (!formInput.username) {
      error.username = "Name Is Required"
      check = false
    }
    if (!formInput.useremail) {
      error.useremail = "Email Is Required"
      check = false
    }
    if (!formInput.userpassword) {
      error.userpassword = "Password Is Required"
      check = false
    }
    if (!formInput.gender) {
      error.gender = "Gender Is Required"
      check = false
    }
    if (formInput.courses.length == 0) {
      error.courses = "Corses Is Required"
      check = false
    }
    if (!formInput.city) {
      error.city = "City Is Required"
      check = false
    }
    setFormError(error)
    return check;


  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValidation()) {
      alert("Form Submitted");
      console.log(formInput);
      setFormInput({
        username: "",
        useremail: "",
        userpassword: ""
      })
    }

  };

  return (
    <div align="center">
      <h1>Form Validation</h1>
      <form onSubmit={handleSubmit}>
        <table border={1}>
          <tbody>
            <tr>
              <td>Name :-</td>
              <td>
                <input type="text" onChange={handleChange} value={formInput.username} name="username" placeholder="Enter Your Name" />
                {
                  formError.username && (
                    <span style={{ color: "red" }}>{formError.username}</span >
                  )
                }
              </td>
            </tr>
            <tr>
              <td>Email :- </td>
              <td>
                <input type="text" onChange={handleChange} value={formInput.useremail} name="useremail" placeholder="Enter Your Email" />
                {
                  formError.useremail && (
                    <span style={{ color: "red" }}>{formError.useremail}</span>
                  )
                }
              </td>
            </tr>
            <tr>
              <td>Password :-</td>
              <td>
                <input
                  type="password"
                  onChange={handleChange}
                  name="userpassword"
                  value={formInput.userpassword}
                  placeholder="Enter Your Password"
                />
                {
                  formError.userpassword && (
                    <span style={{ color: "red" }}>{formError.userpassword}</span>
                  )
                }
              </td>
            </tr>
            <tr>
              <td>Gender :-</td>
              <td>
                <input type="radio" name="gender" value="male" onChange={handleChange} />Male
                <input type="radio" name="gender" value="female" onChange={handleChange} />Female
                {
                  formError.gender && (
                    <span style={{ color: "red" }}>{formError.gender}</span>
                  )
                }
              </td>

            </tr>
            <tr>
              <td>Courses :-</td>
              <td>
                <input type="checkbox" onChange={handleChange} name="courses" value="c" />C
                <input type="checkbox" onChange={handleChange} name="courses" value="cpp" />CPP
                <input type="checkbox" onChange={handleChange} name="courses" value="java" />java
                <input type="checkbox" onChange={handleChange} name="courses" value="python" />Python
                {
                  formError.courses && (
                    <span style={{color: "red"}}>{formError.courses}</span>
                  )
                }
              </td>

            </tr>
            <tr>
              <td>City : -</td>
              <td>
                <select name="city" onChange={handleChange} value={formInput.city}>
                  <option value="" >---Select City----</option>
                  <option value="surat"  >Surat</option>
                  <option value="ahmedabad"  >Ahmedabad</option>
                  <option value="vadodara"  >Vadodara</option>
                  <option value="vapi"  >Vapi</option>
                </select>
                {
                  formError.city && (
                    <span style={{ color: "red" }}>{formError.city}</span>
                  )
                }

              </td>
            </tr>
            <tr>

              <td></td>
              <td>
                <input type="submit" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default App;
