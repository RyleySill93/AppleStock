import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class Application extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        testing

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
