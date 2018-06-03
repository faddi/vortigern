import * as React from 'react';
const { connect } = require('react-redux');
import { ActionCreator, Dispatch } from 'redux';
import { getStars, IStarsAction, IStars } from '../../redux/modules/stars';
import { IStore } from '../../redux/IStore';
const style = require('./style.css');

interface IProps {
  stars: IStars;
  getStars: ActionCreator<IStarsAction>;
  dispatch: Dispatch;
}

@connect(
  (state: IStore) => {
    return { stars: state.stars };
  },
  (d: Dispatch<IStarsAction>) => ({ dispatch: d })
)
class Stars extends React.Component<IProps> {
  public componentDidMount() {
    console.log('mount');
    getStars()(this.props.dispatch);
  }

  public render() {
    const { stars } = this.props;

    return <div className={style.Stars}>{stars.isFetching ? 'Fetching Stars' : stars.count}</div>;
  }
}

export { Stars };
