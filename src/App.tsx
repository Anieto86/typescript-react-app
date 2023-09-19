import React from 'react';

import './App.css';
import { Task } from './Components/Task';
import { Roster } from './Components/Roster';
import { MoneyForm } from './Components/MoneyForm';

function App(): JSX.Element {
  return (
    <div className="container p-4 mt-7 ">
      <div className="row">
        <div className="col-12 my-5">
          <Roster />
        </div>
        <div className="col-12 my-5">
          <MoneyForm />
        </div>
        <div className="col-12 my-5">
          <Task />
        </div>
      </div>
    </div>
  );
}

export default App;
