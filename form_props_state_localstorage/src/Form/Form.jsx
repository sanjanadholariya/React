const Form = ({handleSubmit , handleChange ,formInput , checkId}) => {
  return (
    <div align="center"> 
    <h1>Form</h1>
        <form onSubmit={handleSubmit}>
            <table border={1}>
                <tbody>
                    <tr>
                        <td>Name : -</td>
                        <td>
                            <input type="text" onChange={handleChange} name="name" value={formInput.name} placeholder="Enter Your Name..." />
                        </td>
                    </tr>
                    <tr>
                        <td>Email :-</td>
                        <td>
                            <input type="text" onChange={handleChange} name="email" value={formInput.email} placeholder="Enter Your Email..." />
                        </td>
                    </tr>
                    <tr>
                        <td>Password :-</td>
                        <td>
                            <input type="password" onChange={handleChange} name="password" value={formInput.password} placeholder="Enter Your Password..." />
                        </td>
                    </tr>
                    <tr>
                        <td>Gender :-</td>
                        <td>
                            <input type="radio" checked={formInput.gender=="male"} onChange={handleChange} name="gender" value="male" />Male
                            <input type="radio" checked={formInput.gender=="female"} onChange={handleChange} name="gender" value="female" />Female
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Course :-
                        </td>
                        <td>
                            <input type="checkbox" checked={formInput.course.includes("c")} onChange={handleChange} name="course" value="c" />C
                            <input type="checkbox" checked={formInput.course.includes("c++")} onChange={handleChange} name="course" value="c++" />C++
                            <input type="checkbox" checked={formInput.course.includes("python")} onChange={handleChange} name="course" value="python" />Python
                            <input type="checkbox" checked={formInput.course.includes("java")} onChange={handleChange} name="course" value="java" />Java
                            <input type="checkbox" checked={formInput.course.includes("dart")} onChange={handleChange} name="course" value="dart" />Dart
                        </td>
                    </tr>
                    <tr>
                        <td>City</td>
                        <td>
                            <select name="city" onChange={handleChange} value={formInput.city}>
                                <option value="">----Select City----</option>
                                <option selected={formInput.city=="surat"} value="surat">Surat</option>
                                <option selected={formInput.city=="vapi"} value="vapi">Vapi</option>
                                <option selected={formInput.city=="tapi"} value="tapi">Tapi</option>
                                <option selected={formInput.city=="bharuch"} value="bharuch">Bharuch</option>
                                <option selected={formInput.city=="rajkot"} value="rajkot">Rajkot</option>
                                <option selected={formInput.city=="amreli"} value="amreli">Amreli</option>
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
    </div>
  )
}
export default Form