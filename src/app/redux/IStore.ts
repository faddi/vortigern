import { ICounter } from '../models/counter';
import { IStars } from '../models/stars';
import { RouterState } from 'react-router-redux';

export interface IStore {
  routing: RouterState;
  counter: ICounter;
  stars: IStars;
}
