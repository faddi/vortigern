import { ICounter } from '../redux/modules/counter';
import { IStars } from '../redux/modules/stars';
import { RouterState } from 'react-router-redux';

export interface IStore {
  router: RouterState;
  counter: ICounter;
  stars: IStars;
}
