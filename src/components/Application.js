import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Chart from './Chart';

class Application extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        testing
        <Chart />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

export default connect(
  mapStateToProps
)(Application);
