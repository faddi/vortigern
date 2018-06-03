import * as React from 'react';
import { increment, decrement, ICounter, IDecrementAction, IIncrementAction } from '../../redux/modules/counter/';
import { Dispatch, bindActionCreators } from 'redux';
import { IStore } from '../../redux/IStore';
import { connect } from 'react-redux';
const style = require('./style.css');

export interface IProps {
  counter: ICounter;
  increment: () => IIncrementAction;
  decrement: () => IDecrementAction;
}

class CounterC extends React.Component<IProps> {
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

export const Counter = connect(
  (state: IStore) => ({ counter: state.counter }),
  (dispatch: Dispatch) => ({
    decrement: bindActionCreators(decrement, dispatch),
    increment: bindActionCreators(increment, dispatch),
  })
)(CounterC);
