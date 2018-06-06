import * as React from 'react';
const style = require('./style.css');

const img = require('./barbar.png');

class Home extends React.Component {
  public render() {
    return (
      <div className={style.Home}>
        <img src={img} />
        <p>Hello!</p>
      </div>
    );
  }
}

export { Home };
