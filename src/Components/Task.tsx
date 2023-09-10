import React, { useState } from 'react';

interface ITask {
  name: string;
  done: boolean;
}

export const Task = () => {
  const [newTask, setNewTask] = useState<string>('');
  const [tasks, setTasks] = useState<ITask[]>([]);

  const addTask = (name: string) => {
    const newTasks: ITask[] = [...tasks, { name: name, done: false }];
    setTasks(newTasks);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTask(newTask);
    setNewTask('');
  };

  const toggleDoneTask = (index: number) => {
    const newTasks: ITask[] = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  };

  const removeTask = (index: number) => {
    const newTasks: ITask[] = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="card">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <input
            className="form-control"
            type="text"
            placeholder="note"
            autoFocus
            onChange={(e) => setNewTask(e.target.value)}
            value={newTask}
          />
          <button className="btn btn-warning btn-block mt-2">Save</button>
        </form>
        {tasks.map((t: ITask, index: number) => (
          <div className="card card-body mt-2" key={index}>
            <h2 style={{ textDecoration: t.done ? 'line-through' : '' }}>
              {t.name}
            </h2>
            <div>
              <button
                className="btn btn-info"
                onClick={() => toggleDoneTask(index)}
              >
                {t.done ? '✔' : '✗'}
              </button>
              <button
                className="btn btn-danger"
                onClick={() => removeTask(index)}
              >
                🗑np
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
