const Employee = ({ handleSubmit, formInput, handleChange, allData, deleteEmployee, editEmployee, checkId, formError }) => {
    return (
        <div className="container-fluid py-5" style={{
            minHeight: '100vh',
            background: 'linear-gradient(to right, #f9fbe7, #fce4ec)'
        }}>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card shadow-lg rounded-4 border-0">
                        <div className="card-body">
                            <h2 className="text-center mb-4" style={{ color: '#4e342e' }}>Employee Form</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Full Name</label>
                                    <input type="text" placeholder="Enter Your Name..." className="form-control" name='name' onChange={handleChange} value={formInput.name} />
                                    {formError.name && <div className="text-danger small mt-1">{formError.name}</div>}
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input type="email" placeholder="Enter Your Email..." className="form-control" name='email' onChange={handleChange} value={formInput.email} />
                                    {formError.email && <div className="text-danger small mt-1">{formError.email}</div>}
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Department</label>
                                    <select className="form-select" name="department" onChange={handleChange} value={formInput.department}>
                                        <option value="">----Select Department----</option>
                                        <option value="Human Resources (HR)">Human Resources (HR)</option>
                                        <option value="Finance">Finance</option>
                                        <option value="Marketing">Marketing</option>
                                        <option value="Sales">Sales</option>
                                        <option value="Operations">Operations</option>
                                        <option value="Customer Support">Customer Support</option>
                                        <option value="Research and Development (R&D)">Research and Development (R&D)</option>
                                        <option value="Product Management">Product Management</option>
                                    </select>
                                    {formError.department && <div className="text-danger small mt-1">{formError.department}</div>}
                                </div>

                                <div className="mb-4">
                                    <label className="form-label me-3">Status</label>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="status" value="active" onChange={handleChange} checked={formInput.status === "active"} />
                                        <label className="form-check-label">Active</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="status" value="inactive" onChange={handleChange} checked={formInput.status === "inactive"} />
                                        <label className="form-check-label">Inactive</label>
                                    </div>
                                    {formError.status && <div className="text-danger small mt-1">{formError.status}</div>}
                                </div>

                                <div className="d-grid">
                                    <input type="submit" value={checkId ? "Update" : "Submit"} className="btn rounded-pill shadow-sm"
                                        style={{
                                            background: 'linear-gradient(135deg, #26a69a, #7e57c2)',
                                            color: 'white',
                                            border: 'none'
                                        }} />
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Employee Data Section */}
                    <div className="mt-5">
                        <div className="card shadow-lg rounded-4 border-0">
                            <div className="card-body bg-light">
                                <h3 className="text-center mb-4" style={{ color: '#37474f' }}>Employee Records</h3>
                                <div className="table-responsive">
                                    <table className="table table-hover align-middle bg-white rounded shadow-sm overflow-hidden">
                                        <thead className="table-light">
                                            <tr>
                                                <th>ID</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Department</th>
                                                <th>Status</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                allData.map((val, index) => {
                                                    const { id, name, email, department, status } = val;
                                                    return (
                                                        <tr key={index}>
                                                            <td>{id}</td>
                                                            <td>{name}</td>
                                                            <td>{email}</td>
                                                            <td>{department}</td>
                                                            <td>
                                                                <span className={`badge ${status === "active" ? "bg-success" : "bg-secondary"}`}>
                                                                    {status}
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <button className="btn btn-sm btn-outline-danger me-2" onClick={() => deleteEmployee(id)}>Delete</button>
                                                                <button className="btn btn-sm btn-outline-dark" onClick={() => editEmployee(id)}>Edit</button>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )

}

export default Employee;
