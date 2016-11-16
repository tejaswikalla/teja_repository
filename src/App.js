import React, { Component } from 'react';
import './App.css';

const ONE_SECOND = 1000;

class App extends Component {
  constructor() {
    // In a constructor, call `super` first if the class extends another class
    super();

    // Initialize state in the constructor; this is the only place you
    // can set the state directly without using this.setState
    this.state = { meh: false };

    // This binding is necessary to make `this` work in the callback
    this.moodSwing = this.moodSwing.bind(this);

    setInterval(this.moodSwing, 2 * ONE_SECOND);
  }

  moodSwing() {
    // To update the state, you must use setState,
    // NOT: this.state.meh = !this.state.meh;
    this.setState({
      meh: !this.state.meh,
    });
  }

  render() {
    let icon = 'mood fa fa-smile-o fa-3x';

    if (this.state.meh) {
      icon = icon.replace('smile', 'meh'); // or frown
    }

    return (
      <div className="App">
        {/* You can use Bootstrap markup */}
        <div className="alert alert-info" role="alert">
          {/* You can use FontAwesome icons */}
          <i className={icon} />
          To get started, edit src/App.js and save to reload.
        </div>
      </div>
    );
  }
}

export default App;
