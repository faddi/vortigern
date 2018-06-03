/** Action Types */
export const INCREMENT = 'counter/INCREMENT';
export const DECREMENT = 'counter/DECREMENT';

export interface ICounter {
  count: number;
}

export interface IIncrementAction {
  type: typeof INCREMENT;
}

export interface IDecrementAction {
  type: typeof DECREMENT;
}

export type ICounterAction = IIncrementAction | IDecrementAction;

/** Counter: Initial State */
const initialState: ICounter = {
  count: 0,
};

/** Reducer: CounterReducer */
export function counterReducer(state = initialState, action: ICounterAction) {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1,
      };

    case DECREMENT:
      return {
        count: state.count - 1 > 0 ? state.count - 1 : 0,
      };

    default:
      return state;
  }
}

/** Action Creator: Increments the Counter */
export function increment(): IIncrementAction {
  return {
    type: INCREMENT,
  };
}

/** Action Creator: Decrements the Counter */
export function decrement(): IDecrementAction {
  return {
    type: DECREMENT,
  };
}
