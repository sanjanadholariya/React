const Users = ({ users }) => {

    return (
        <>
            <h1 align="center">USERS</h1>

            <div style={{display:'flex', flexWrap:'wrap'}}>
            {
                users.map((val , index) => {
                    return (
                            <div key={index} style={{
                                
                                border: '1px solid #ddd',
                                borderRadius: '10px',
                                padding: '20px',
                                width: '334px',
                                boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                            }}>
                                <img src={val.image} alt="" />
                                <p><b>Id:- </b>{val.id}</p>
                                <p><b>First name :- </b>{val.firstName}</p>
                                <p><b>Mid name :- </b>{val.maidenName}</p>
                                <p><b>Last name :- </b>{val.lastName}</p>
                                <p><b>Age :- </b>{val.age}</p>
                                <p><b>Gender :- </b>{val.gender}</p>
                                <p><b>Email :- </b>{val.email}</p>
                                <p><b>Phone :- </b>{val.phone}</p>
                                <p><b>Username :- </b>{val.username}</p>
                                <p><b>Password :- </b>{val.password }</p>
                                <p><b>Birthdate :-</b>{val.birthDate}</p>
                                
                                
                            </div>

                    )
                })
            }
            </div>



        </>
    )
}
export default Users;