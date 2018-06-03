import * as React from 'react';
import { increment, decrement, ICounter, ICounterAction } from '../../redux/modules/counter/';
import { ActionCreator, Dispatch } from 'redux';
import { IStore } from '../../redux/IStore';
const { connect } = require('react-redux');
const style = require('./style.css');

export interface IProps {
  counter: ICounter;
  increment: ActionCreator<ICounterAction>;
  decrement: ActionCreator<ICounterAction>;
}

@connect(
  (state: IStore) => ({ counter: state.counter }),
  (dispatch: Dispatch) => ({
    decrement: () => dispatch(decrement()),
    increment: () => dispatch(increment()),
  })
)
class Counter extends React.Component<IProps> {
  public render() {
    const { increment, decrement, counter } = this.props;

    return (
      <div className={style.Counter}>
        <h4>Counter Example</h4>
        <button name="incBtn" onClick={increment}>
          INCREMENT
        </button>
        <button name="decBtn" onClick={decrement} disabled={counter.count <= 0}>
          DECREMENT
        </button>
        <p>{counter.count}</p>
      </div>
    );
  }
}

export { Counter };
