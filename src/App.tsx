import React, { useState } from 'react';

import './App.css';

//buscar que es esto
type FormElement = React.FormEvent<HTMLFormElement>

interface ITask {
  name: string;
  done: boolean;
}

function App(): JSX.Element {
  //Hooks
  //     [initial value, fuction that actualizate de state] = inizializate the state | <string> para especificar strings 
  const [newTask, setNewTask] = useState<string>('');

  //New state for new list of taskSSSS
  const [tasks, setTasks] = useState<ITask[]>([])

  //! Function for submit
  const handleSubmit = (e: FormElement) => {
    e.preventDefault();
    addTask(newTask)
    setNewTask("");
  }

  //!This function takes the name of the new Task 
  const addTask = (name: string) => {
    //spare operato | vas a tomar la tareas y vas a agregar la nueva tarea
    const newTasks = [...tasks, { name: name, done: false }];
    setTasks(newTasks);
  }

  //!Fuction para Alterar el estado el estado de true to false = si es (?)| caso contrario (:) 
  const toggleDoneTask = (index: number) => {
    const newTasks: ITask[] = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks)
  }

  //!Function para eliminar tareas | SPLICE method
  const removeTask = (index: number) => {
    const newTasks: ITask[] = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks)
  }

  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit} >
                <input className="form-control" type="text" placeholder="note" autoFocus
                  // autofocus | pone el cursor en el imput
                  //                                          para representar la nueva tarea al inicio esta en blanco y luego se actualiza
                  onChange={e => setNewTask(e.target.value)} value={newTask} />
                <button className="btn btn-warning btn-block mt-2" >Save </button>
              </form>
            </div>
          </div>
          {tasks.map((t: ITask, index: number) => (
            <div className="card card-body mt-2" key={index}>
              <h2 style={{ textDecoration: t.done ? 'line-through' : '' }}>{t.name}</h2>
              <div className = "">
                <button className="btn btn-info" style={{ alignItems: "center"}} onClick={() => toggleDoneTask(index)} >
                  {t.done ? "✔" : "✗"}
                </button>
                <button className="btn btn-danger"  style={{ alignItems: "center"}} onClick={() => removeTask(index)}>
                  🗑
                 </button>
              </div>
            </div>
          ))};
        </div>
      </div>
    </div>
  );
}

export default App;



