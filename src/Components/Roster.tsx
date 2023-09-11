import { observer } from 'mobx-react';
import React from 'react';
import Athlete from './Athlete';

const Messi = new Athlete('Messi', 37);
const elDiego = new Athlete('El Diego', 60);

export const Roster = observer(() => {
  return (
    <table className="table table-hover">
      <thead>
        <tr className="table-info">
          <th scope="col">Name</th>
          <th scope="col">Age</th>
          <th scope="col">Teams</th>
          <th scope="col">Is it their birthday?</th>
          {/* <th>Trade Form</th> */}

          {/* <th>Salary</th> */}
        </tr>
      </thead>

      {[Messi, elDiego].map((athlete) => {
        return (
          <tbody key={athlete.name}>
            <tr>
              <td>{athlete.name}</td>
              <td>{athlete.age}</td>
              <td>{athlete.teamHistory}</td>
              {/* <td>
              <TradeForm athlete={athlete} />
            </td> */}
              <td>
                <button
                  type="button"
                  style={{ width: '100%' }}
                  onClick={() => athlete.wishHappyBirthday()}
                >
                  Wish happy birthday 🎊
                </button>
              </td>
              {/* <td>{athlete.salary}</td> */}
            </tr>
          </tbody>
        );
      })}
    </table>
  );
});
