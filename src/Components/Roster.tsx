import { observer } from 'mobx-react';
import React from 'react';

import { TradeForm } from './TradeForm';
import { useTeamStore } from '../services/store/TeamStore';

export const Roster = observer(() => {
  // 3 usar el custom hook para llamar la data
  const { players } = useTeamStore();
  return (
    <>
      {' '}
      <h1 style={{ textAlign: 'center' }}>Roster</h1>
      <table className="table table-hover">
        <thead>
          <tr className="table-info">
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Teams</th>
            <th scope="col">Is it their birthday?</th>
            <th>Trade Form</th>

            <th scope="col">Salary</th>
          </tr>
        </thead>

        {players.map((athlete) => {
          return (
            <tbody key={athlete.name}>
              <tr>
                <td>{athlete.name}</td>
                <td>{athlete.age}</td>
                <td>{athlete.teamHistory}</td>
                <td>
                  <TradeForm athlete={athlete} />
                </td>
                <td>
                  <button
                    type="button"
                    style={{ width: '100%' }}
                    onClick={() => athlete.wishHappyBirthday()}
                  >
                    Wish happy birthday 🎊
                  </button>
                </td>
                <td>{athlete.salary}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </>
  );
});
