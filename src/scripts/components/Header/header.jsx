import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = { points: 0, playing: true };
  }

  componentDidMount() {
    this.container = ReactDOM.findDOMNode(this);
  }

  increase() {
    if (this.state.playing) {
      var currentPoints = this.state.points + 1;
      this.setState({ points: currentPoints });
    }
  }

  gameOver() {
    this.setState({ playing: false, points: 'GAME OVER' });
  }

  render() {
    return (
      <div className="header">
        <span className="left title">Aide le christ cosmique à voler les poules request</span>
        <span className="right score">Score cosmique: <span className="points">{this.state.points}</span></span>
      </div>
    );
  }
}

Header.defaultProps = {

};

export default Header;
