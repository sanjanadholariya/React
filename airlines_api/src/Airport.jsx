const Airport = ({ airport }) => {
    return (
        <>
            <h1 align="center">Airport</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Code</th>
                        <th>Location</th>
                        <th>City</th>
                        <th>Country</th>
                        <th>Time-zone</th>
                        <th>Terminals</th>
                        <th>Airlines</th>
                        <th>Services</th>
                        <th>Contact</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        airport.map((val, index) => {
                            return (
                                <tr key={index}>
                                    <td>{val.id}</td>
                                    <td>{val.name}</td>
                                    <td>{val.code}</td>
                                    <td>Latitude :- {val.location.latitude} <br /> longitude :- {val.location.longitude}</td>
                                    <td>{val.city}</td>
                                    <td>{val.country}</td>
                                    <td>{val.timezone}</td>
                                    <td>
                                        <table border={1}>
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Gate_name</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    val.terminals.map((val, index) => {
                                                        return (
                                                            <tr key={index}>
                                                                <td>{val.name}</td>
                                                                <td>
                                                                    <table border={1}>
                                                                        <thead>
                                                                            <tr>
                                                                                <th>Gate_no.</th>
                                                                                <th>Airlines</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            {
                                                                                val.gates.map((val , index)=>{
                                                                                    return(
                                                                                        <tr key={index}>
                                                                                            <td>{val.gate_number}</td>
                                                                                            <td>{val.airlines}</td>
                                                                                        </tr>
                                                                                    )
                                                                                })
                                                                            }
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>

                                    </td>
                                    <td>
                                        {
                                            val.airlines.map((val ,  index)=>{
                                                return(
                                                    <ul key={index}>
                                                        <li>{val}</li>
                                                    </ul>
                                                )
                                            })
                                        }
                                    </td>
                                    <td>
                                        {
                                            val.services.map((val,index) => {
                                                return(
                                                    <ul key={index}>
                                                        <li>{val}</li>
                                                    </ul>
                                                )
                                            })
                                        }
                                    </td>
                                    <td>
                                        <p>- Phone :- {val.contact_info.phone}</p>
                                        <p>- Email :- {val.contact_info.email}</p>
                                        <p>- Website :- {val.contact_info.website}</p>

                                        
                                    </td>

                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}
export default Airport;