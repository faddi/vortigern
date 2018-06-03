import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { getStars, IStarsAction, IStars } from '../../redux/modules/stars';
import { IStore } from '../../redux/IStore';
const style = require('./style.css');

interface IProps {
  stars: IStars;
  dispatch: Dispatch;
}

class StarsC extends React.Component<IProps> {
  public componentDidMount() {
    getStars()(this.props.dispatch);
    return 3;
  }

  public render() {
    const { stars } = this.props;

    return <div className={style.Stars}>{stars.isFetching ? 'Fetching Stars' : stars.count}</div>;
  }
}

export const Stars = connect(
  (state: IStore) => {
    return { stars: state.stars };
  },
  (d: Dispatch<IStarsAction>) => ({ dispatch: d })
)(StarsC);
