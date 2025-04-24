const Todos = ({ todos }) => {


    return (
        <>
            <h1 align="center">TODOS</h1>
            <table border={1} align="center">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>TODO</th>
                        <th>COMPLETED</th>
                        <th>USERID</th>
                    </tr>
                </thead>

                {
                    todos.map((val, index) => {
                        return (
                            <tr key={index}>
                                <td>{val.id}</td>
                                <td>{val.todo}</td>
                                <td style={{ color: val.completed ? 'green' : 'red' }}>{val.completed ? "✅ true" : "❌ false"}</td>
                                <td>{val.userId}</td>
                            </tr>
                        )
                    })
                }


            </table>
        </>
    )
}
export default Todos;