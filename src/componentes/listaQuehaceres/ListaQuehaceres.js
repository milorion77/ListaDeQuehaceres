import React, { useState } from "react";

const ListaQuehaceres = () => {
    const [val, setVal] = useState("");
    const [tasks, setTasks] = useState([]);

    const addTask = (e) => {
        e.preventDefault();
        setTasks([
            ...tasks,
            {
                miniTask: val,
                done: false,
            },
        ]);
        setVal("");
    };

    const checkHandler = (index) => {
        const newTask = {
            ...tasks[index],
        };
        newTask.done = !newTask.done;
        // console.log([tasks]);
        // console.log([tasks.slice(index)]);
        console.log([...tasks.slice(0, index)]);
        setTasks(
            [...tasks.slice(0, index), newTask].concat(tasks.slice(index + 1))
        );
    };

    const deleteHandler = (index) => {
        setTasks(tasks.slice(0, index).concat(tasks.slice(index + 1)));
    };

    return (
        <div>
            <form className="" onSubmit={addTask}>
                <button className="btn btn-success">AgregaTarea</button>
                <div>
                    <input value={val} onChange={(e) => setVal(e.target.value)}/>    
                </div>
            </form>
            {tasks.map((item, i) => (
                <div className="form-check-label" key={i}>
                    <p style={{ textDecoration: item.done && "line-through" }}>
                        {item.miniTask}
                        <input type="checkbox" checked={item.done}onChange={(e) => checkHandler(i)}readOnly/>
                        <button className="btn btn-danger" onClick={(e) => deleteHandler(i)}>Borrar</button>
                    </p>
                </div>
            ))}
            
        </div>
    );
};

export default ListaQuehaceres;