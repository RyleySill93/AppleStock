import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Chart from './Chart';

import { requestStockData } from '../actions/stockActions.js';

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.loading !== nextProps.loading) {
      this.setState({ loading: nextProps.loading });
    }
  }

  componentDidMount() {
    this.props.requestStockData();
  }

  content() {
    if (this.state.loading) {
      //show loading spinner
    } else {
      return <Chart />;
    }
  }

  render() {
    return (
      <div>
        {this.content()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.default.loading
});

const mapDispatchToProps = (dispatch) => ({
  requestStockData: () => dispatch(requestStockData())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Application);
