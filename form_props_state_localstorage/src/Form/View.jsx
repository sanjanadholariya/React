const View = ({allData, deleteUser ,editUser}) => {
    return (
       <div align="center">
        <h1>View Data</h1>
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
                <tbody>
                    {
                        allData.map((val,index)=>{
                            const {id,name,email,password,gender,course,city} = val
                            return(
                                <tr key={index}>
                                    <td>{id}</td>
                                    <td>{name}</td>
                                    <td>{email}</td>
                                    <td>{password}</td>
                                    <td>{gender}</td>
                                    <td>{course.join(" , ")}</td>
                                    <td>{city}</td>
                                    <td>
                                        <button onClick={() => deleteUser(id)}>Delete</button>
                                        <button onClick={() => editUser(id)}>Edit</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
       </div>
    )
}

export default View;
