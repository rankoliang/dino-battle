import { useReducer } from 'react';
import { useParams } from 'react-router-dom';
import { TeamNames, TeamName, Counters, MainActionButton } from './styled';
import Counter from '../Counter';
import counterReducer from '../Counter/reducer';
import './Level.css';

const Level = () => {
  const { difficulty } = useParams();
  const redCountStore = useReducer(counterReducer, 0);
  const blueCountStore = useReducer(counterReducer, 0);

  return (
    <main>
      <TeamNames>
        <TeamName background="var(--red)">Red Team</TeamName>
        <TeamName background="var(--blue)">Blue Team</TeamName>
      </TeamNames>
      <Counters>
        <Counter store={redCountStore} color="var(--red)" />
        <Counter store={blueCountStore} color="var(--blue)" reversed />
      </Counters>
      <MainActionButton>Click here to battle!</MainActionButton>
    </main>
  );
};

export default Level;
