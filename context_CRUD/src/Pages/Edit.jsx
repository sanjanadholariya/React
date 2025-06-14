import { useContext } from 'react'
import { CrudContext } from '../context/CrudProvider'
import { Link } from 'react-router-dom'

const Edit = () => {
    const { formInput, handleSubmit, handleChange } = useContext(CrudContext)
    return (
        <div align="center">
            <form onSubmit={handleSubmit}>
                <table border={1}>
                    <tbody>
                        <tr>
                            <td>Name :-</td>
                            <td><input type="text" name='name' onChange={handleChange} value={formInput.name} placeholder='Enter Your Name..' /></td>
                        </tr>
                        <tr>
                            <td>Email :-</td>
                            <td><input type="text" name='email' onChange={handleChange} value={formInput.email} placeholder='Enter Your Email...' /></td>
                        </tr>
                        <tr>
                            <td>Password :-</td>
                            <td><input type="text" name='password' onChange={handleChange} value={formInput.password} placeholder='Enter Your Password...' /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><input type="submit" value="Update" /></td>
                        </tr>
                    </tbody>
                </table>
            </form>
            <br /><br />
            <Link to="/"><button>View</button></Link>

        </div>
    )
}

export default Edit