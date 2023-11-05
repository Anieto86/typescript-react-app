import React from 'react';

import './App.css';
import { Task } from './Components/Task';
import { Roster } from './Components/Roster';
import { MoneyForm } from './Components/MoneyForm';
import { TeamStoreProvider } from './services/store/TeamStore';
import Athlete from './Components/Athlete';

const messi = new Athlete('Messi', 37, 20);
const elDiego = new Athlete('El Diego', 60, 30);

function getPlayersFromBackend(): Athlete[] {
  return [messi, elDiego];
}

function App(): JSX.Element {
  const players = getPlayersFromBackend();

  return (
    // 2 wrap con el provider y pasar la data
    <TeamStoreProvider players={players}>
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
    </TeamStoreProvider>
  );
}

export default App;
