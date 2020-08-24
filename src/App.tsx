import React, { useState } from 'react';

import './App.css';

//buscar que es esto | es un tipo de datos 
type FormElement = React.FormEvent<HTMLFormElement>

//Aca estamos creado un tipo de dato para las tareas
interface ITask {
  name: string;
  done: boolean;
}
//Este App cuando sea creado va a retornar un elemento de JSX 
function App(): JSX.Element {
  //Hooks
  //     [initial value, fuction that actualizate de state] = inizializate the state donde se almacena el stado de la variable | <string> para especificar strings 
  const [newTask, setNewTask] = useState<string>('');

  
  //New state for new list of taskSSSS | Aca viene la lista de la interfase que viene con un [{name :string, done:boolean}]
  const [tasks, setTasks] = useState<ITask[]>([])

  //! Function for submit
  const handleSubmit = (e: FormElement) => {
    e.preventDefault();
    // Aca llamo add task cuando envie el formulario } | quiero que agregues una tarea y vas a pasar la tarea al listado
    addTask(newTask)
    //actuyalizamos para que se agregue a lista y desaparece
    setNewTask("");
  }

  //!This function takes the name of the new Task and add in the list
  const addTask = (name: string) => {
    //spare operato | vas a tomar la tareas y vas a agregar la nueva tarea | done es para decirle si la tarea fue hecha o no
    const newTasks: ITask[] = [...tasks, { name: name, done: false }];
    //Esta funcion actualiza el estado
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
              <div className="">
                <button className="btn btn-info"  onClick={() => toggleDoneTask(index)} >
                  {t.done ? "✔" : "✗"}
                </button>
                <button className="btn btn-danger"  onClick={() => removeTask(index)}>
                  🗑
                 </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;



