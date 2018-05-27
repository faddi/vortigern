import * as React from 'react';
// import { getStars } from '../../redux/modules/stars';
import { IStars, IStarsAction } from '../../models/stars';
const { connect } = require('react-redux');
// const { asyncConnect } = require('redux-connect');
import { ActionCreator, Dispatch } from 'redux';
import { getStars } from '../../redux/modules/stars';
const style = require('./style.css');

interface IProps {
  stars: IStars;
  getStars: ActionCreator<IStarsAction>;
  dispatch: Dispatch;
}

// @asyncConnect([
//   {
//     promise: ({ store: { dispatch } }) => {
//       return dispatch(getStars());
//     },
//   },
// ])

@connect(
  state => {
    return { stars: state.stars };
  },
  (d: Dispatch) => ({ dispatch: d })
)
class Stars extends React.Component<IProps, {}> {
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
