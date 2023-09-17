import { observer } from 'mobx-react';
import React, { useState } from 'react';
import Athlete from './Athlete';

type Props = {
  athlete: Athlete;
};

export const TradeForm = observer(({ athlete }: Props) => {
  const [teamName, setTeamName] = useState<string>('');
  return (
    <>
      <input
        type="text"
        placeholder="Team name..."
        onChange={(e) => setTeamName(e.target.value)}
      />
      <span>
        <button type="button" onClick={() => athlete.tradePlayer(teamName)}>
          Trade
        </button>
      </span>
    </>
  );
});
