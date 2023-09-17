import React from 'react';

import './App.css';
import { Task } from './Components/Task';
import { Roster } from './Components/Roster';
import { MoneyForm } from './Components/MoneyForm';

function App(): JSX.Element {
  return (
    <div className="container p-4">
      <Roster />
      <MoneyForm />
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <Task />
        </div>
      </div>
    </div>
  );
}

export default App;
