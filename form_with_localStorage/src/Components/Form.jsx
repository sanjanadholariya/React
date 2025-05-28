import { use, useState } from "react";

function Form() {
  const [formInput, setFormInput] = useState({
    username: "",
    useremail: "",
    password: "",
    gender: "",
    course: [],
    city: "",
  });

  const [existing, setexisting] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );

  const [checkId , setCheckId] = useState("")


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
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

    const withId = {
      userid : Math.floor(Math.random()*100000),
      ...formInput
    }

    let updatedData;
    if(checkId != ""){
       updatedData = existing.map((val)=>{
        if(val.userid == checkId){
          return withId;
        }
        else{
          return val;
        }
      })

     
    }
    else{
       updatedData = [...existing, withId];
    }

    

    setexisting(updatedData);

    localStorage.setItem("users", JSON.stringify(updatedData));

    setFormInput({
      username: "",
      useremail: "",
      password: "",
      gender: "",
      course: [],
      city: "",
    });
     setCheckId("")
  };

  const deleteUser = (userid) => {

    let deleteData = existing.filter((val,index)=>{
      return(
        val.userid != userid
      )
    })

    localStorage.setItem('users',JSON.stringify(deleteData))
    setexisting(deleteData)

  }

  const editUser = (userid) => {
    setCheckId(userid)

    let single = existing.find(val => val.userid == userid)
    console.log(single);

    if(single){
      setFormInput({
        username : single.username,
        useremail : single.useremail,
        password : single.password,
        gender  : single.gender,
        course : single.course,
        city : single.city
      })
    }

    
  }

  return (
    <div align="center">
      <h1>Form Details</h1>
      <form onSubmit={handleSubmit}>
        <table border={1}>
          <tbody>
            <tr>
              <td>Name :-</td>
              <td>
                <input
                  type="text"
                  onChange={handleChange}
                  value={formInput.username}
                  name="username"
                />
              </td>
            </tr>
            <tr>
              <td>Email :-</td>
              <td>
                <input
                  type="text"
                  onChange={handleChange}
                  name="useremail"
                  value={formInput.useremail}
                />
              </td>
            </tr>
            <tr>
              <td>Password :-</td>
              <td>
                <input
                  type="password"
                  onChange={handleChange}
                  name="password"
                  value={formInput.password}
                />
              </td>
            </tr>
            <tr>
              <td>Gender :-</td>
              <td>
                <input
                  type="radio"
                  checked={formInput.gender === "male"}
                  onChange={handleChange}
                  name="gender"
                  value="male"
                />
                Male
                <input
                  type="radio"
                  checked={formInput.gender === "female"}
                  onChange={handleChange}
                  name="gender"
                  value="female"
                />
                Female
              </td>
            </tr>
            <tr>
              <td>Course :-</td>

              <td>
                <input
                  type="checkbox"
                  checked={formInput.course.includes("C")}
                  onChange={handleChange}
                  name="course"
                  value="C"
                />
                C
                <input
                  type="checkbox"
                  checked={formInput.course.includes("C++")}
                  onChange={handleChange}
                  name="course"
                  value="C++"
                />
                C++
                <input
                  type="checkbox"
                  checked={formInput.course.includes("java")}
                  onChange={handleChange}
                  name="course"
                  value="java"
                />
                Java
                <input
                  type="checkbox"
                  checked={formInput.course.includes("python")}
                  onChange={handleChange}
                  name="course"
                  value="python"
                />
                Python
              </td>
            </tr>
            <tr>
              <td>City :-</td>
              <td>
                <select name="city" onChange={handleChange}>
                  <option >----Select City----</option>
                  <option selected={formInput.city=="surat"} value="surat">Surat</option>
                  <option selected={formInput.city=="vapi"} value="vapi">Vapi</option>
                  <option selected={formInput.city=="tapi"} value="tapi">Tapi</option>

                  <option value="baroda">Baroda</option>
                </select>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <input type="submit" value={checkId ? "Update" : "Submit"} />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      <br /><br />
      <h2>Show Data</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Gender</th>
            <th>Course</th>
            <th>City</th>
            <th>Action</th>
          </tr>
        </thead>
        {existing.map((item, index) => {
          const {userid, username, useremail, password, gender, course, city } = item;
          return (
            <tr>
              <td>{userid}</td>
              <td>{username}</td>
              <td>{useremail}</td>
              <td>{password}</td>
              <td>{gender}</td>
              <td>{course.join(" , ")}</td>
              <td>{city}</td>
              <td>
                <button onClick={() => editUser(userid)}>Edit</button>
                <button onClick={() => deleteUser(userid)}>Delete</button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Form;
