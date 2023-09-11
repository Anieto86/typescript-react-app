import React from 'react';

import './App.css';
import { Task } from './Components/Task';
import { Roster } from './Components/Roster';

function App(): JSX.Element {
  return (
    <div className="container p-4">
      <div className="col-md-6 offset-md-3">
        <Roster />
      </div>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <Task />
        </div>
      </div>
    </div>
  );
}

export default App;
