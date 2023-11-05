import { action, computed, observable, toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import { useTeamStore } from '../services/store/TeamStore';

import Athlete from './Athlete';

type FormState = {
  total: number;
  years: number;
  salary: number;
  name: string;
  age: number;
};

const initialState: FormState = {
  total: 0,
  years: 0,
  salary: 0,
  name: '',
  age: 0,
};

let formState: FormState = observable({
  total: 0,
  years: 0,
  salary: 0,
  name: '',
  age: 0,
});

// const calculateTotal = action((formState: FormState) => {
//   formState.total = formState.years * formState.salary;
// });

const totalValue = computed(() => formState.salary * formState.years);

console.log(toJS(totalValue));

export const MoneyForm = observer(() => {
  const { totalYearlyCost, addPlayer } = useTeamStore();

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1 style={{ textAlign: 'center' }}>Money Talks</h1>
      {/* <h2 style={{ textAlign: 'center', padding: 6 }}>
        Total:{formState.total}
      </h2> */}
      <h2 style={{ textAlign: 'center', padding: 6 }}>
        Total:{toJS(totalValue)}
      </h2>
      <h2 style={{ textAlign: 'center', padding: 6 }}>
        Total:{totalYearlyCost} from the store
      </h2>
      <input
        type="text"
        placeholder="Player..."
        style={{ height: '40px' }}
        onChange={action((e) => {
          formState.name = e.target.value;
        })}
      />
      <input
        type="number"
        placeholder="Years..."
        style={{ height: '40px' }}
        onChange={action((e) => {
          formState.years = Number(e.target.value);
        })}
      />
      <input
        type="number"
        placeholder="Years Salary..."
        style={{ height: '40px' }}
        onChange={action((e) => {
          formState.salary = Number(e.target.value);
        })}
      />
      {/* <button type="button" onClick={() => calculateTotal(formState)}>
        Calculate Total
      </button> */}

      <button
        type="button"
        onClick={action((e) => {
          addPlayer(
            new Athlete(formState.name, formState.age, formState.salary)
          );
          formState = initialState;
        })}
      >
        Add Player
      </button>
    </div>
  );
});
