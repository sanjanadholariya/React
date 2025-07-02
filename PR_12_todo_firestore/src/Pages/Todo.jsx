import { collection, addDoc, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase_db";
import { useEffect, useState } from "react";

const Todo = () => {

    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const obj = { todo };

        try {
            await addDoc(collection(db, "todos"), obj);
            alert("Todo Added!");
            setTodo("");
            getTodoList(); 
        } catch (err) {
            console.log(err);
        }
    };

    const getTodoList = async () => {
        const allData = await getDocs(collection(db, "todos"));
        const arr = [];
        allData.forEach((doc) => {
            arr.push({ id: doc.id, ...doc.data() });
        });
        setTodoList(arr);
    };

    const handleDelete = async (id) => {
        try {
            await deleteDoc(doc(db, "todos", id));
            alert("Todo Deleted!");
            getTodoList();
        } catch (err) {
            console.log(err);
        }
    };

    const clearAll = async () => {
        for (let item of todoList) {
            await deleteDoc(doc(db, "todos", item.id));
        }
        alert("All Todos Cleared!");
        getTodoList();
    };

    useEffect(() => {
        getTodoList();
    }, []);

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100 flex-column">
            
            <div className="w-50 text-center">
                <h2 className="bg-dark text-white p-2">Todo List</h2>
                
                <form onSubmit={handleSubmit} className="d-flex mb-3">
                    <input 
                        type="text" 
                        className="form-control me-2" 
                        placeholder="Add a Todo..." 
                        value={todo} 
                        onChange={(e) => setTodo(e.target.value)} 
                    />
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </form>

                <div className="bg-light p-3 rounded shadow">
                    {todoList.map((item) => (
                        <div key={item.id} className="d-flex justify-content-between align-items-center mb-2">
                            <span>{item.todo}</span>
                            <button 
                                className="btn btn-dark btn-sm" 
                                onClick={() => handleDelete(item.id)}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>

                <button className="btn btn-danger w-100 mt-3" onClick={clearAll}>
                    Clear List
                </button>
            </div>
            
        </div>
    );
};

export default Todo;
