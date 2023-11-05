import { makeAutoObservable } from 'mobx';
import Athlete from '../../Components/Athlete';
import { createContext, useContext, useRef } from 'react';

export default class TeamStore {
  constructor(players: Athlete[]) {
    this.players = players;
    makeAutoObservable(this);
  }

  state: string = '';
  players: Athlete[] = [];
  salary: number = 0;
  age: number = 0;
  name: string = '';

  setPlayers = (players: Athlete[]) => {
    this.players = players;
  };

  setState = (state: string) => {
    this.state = state;
  };

  addPlayer = (player: Athlete) => {
    this.players.push(player);
  };

  get totalYearlyCost(): number {
    return this.players.reduce(
      (totalSalary, currentAthlete) => totalSalary + currentAthlete.salary,
      0
    );
  }
}

// 1 Here React context for the store
const TeamStoreContext = createContext<TeamStore>(null as unknown as TeamStore);

// 1. a custom hook for the store for use in the app
export const useTeamStore = () => useContext(TeamStoreContext);

// 1. b define the provider allows wrap component for access the store

type Props = {
  children: React.ReactNode;
  players: Athlete[];
};

export function TeamStoreProvider({ children, players }: Props) {
  const store = useRef(new TeamStore(players));

  return (
    <TeamStoreContext.Provider value={store.current}>
      {children}
    </TeamStoreContext.Provider>
  );
}
