import React, {  useState } from 'react';

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

  // Function for submit
  const handleSubmit = (e: FormElement) => {
    e.preventDefault();
    addTask(newTask)
    setNewTask("");
  }

  //This function takes the name of the new Task 
  const addTask = (name: string) => {
    //spare operato | vas a tomar la tareas y vas a agregar la nueva tarea
    const newTasks = [...tasks, { name: name, done: false }]
    setTasks(newTasks);

  }

  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <input className="form-control" type="text" name="" id="" placeholder="note"
                  //                                          para representar la nueva tarea al inicio esta en blanco y luego se actualiza
                  onChange={e => setNewTask(e.target.value)} value={newTask} />
                <button className=" btn-warning" >Save </button>
              </form>
            </div>
          </div>
          {tasks.map((t: ITask, index: number) => {
              return <h1 key={index}>{t.name}</h1>})}
        </div>
      </div>
      </div>
  );
}

export default App;
