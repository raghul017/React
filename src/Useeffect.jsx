import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const[id,setId] = useState(1)

  return <div>
    <button onClick={(e) => {setId(e.target.textContent)}}>1</button>
    <button onClick={(e) => {setId(e.target.textContent)}}>2</button>
    <button onClick={(e) => {setId(e.target.textContent)}}>3</button>
    <button onClick={(e) => {setId(e.target.textContent)}}>4</button>
    <Todo id={id} />
  </div>
}

function Todo({id}) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todo?id=" + id)
      .then((response) => {
        setTodo (response.data.todo);
      })
  }, [id])

  return <div>
    <h1>
      {todo.title}
    </h1>
    <h4>
      {todo.description}
    </h4>
  </div>
}

export default App;