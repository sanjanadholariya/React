import { ref, set } from "firebase/database";
import { db } from "../../firebase_db";
import { useState } from "react";

const Contact = () => {

    const [formInput, setFormInput] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormInput({
            ...formInput,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const obj = {
            id: Math.floor(Math.random() * 10000),
            ...formInput
        };

        set(ref(db, `contact/${obj.id}`), obj)
            .then(() => {
                alert("Message Sent Successfully!");
                setFormInput({
                    name: "",
                    company: "",
                    email: "",
                    phone: "",
                    message: ""
                });
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="row shadow w-75">
                
               
                <div className="col-md-4 bg-danger text-white p-4 d-flex flex-column justify-content-center">
                    <h3 className="fw-bold">ABC Tech Solutions</h3>
                    <p className="mb-1">123 Business Street, Surat</p>
                    <p className="mb-1">+91 98765 43210</p>
                    <p className="mb-1">info@abctech.com</p>
                </div>

                
                <div className="col-md-8 p-4">
                    <h3 className="text-danger mb-4">Email Us</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="row mb-3">
                            <div className="col">
                                <input type="text" className="form-control border-danger" placeholder="Name" name="name" onChange={handleChange} value={formInput.name} required />
                            </div>
                            <div className="col">
                                <input type="text" className="form-control border-danger" placeholder="Company" name="company" onChange={handleChange} value={formInput.company} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <input type="email" className="form-control border-danger" placeholder="Email Address" name="email" onChange={handleChange} value={formInput.email} required />
                            </div>
                            <div className="col">
                                <input type="text" className="form-control border-danger" placeholder="Phone Number" name="phone" onChange={handleChange} value={formInput.phone} />
                            </div>
                        </div>
                        <div className="mb-3">
                            <textarea className="form-control border-danger" rows="3" placeholder="Message" name="message" onChange={handleChange} value={formInput.message} required></textarea>
                        </div>
                        <button type="submit" className="btn btn-danger w-100">SUBMIT</button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Contact;
