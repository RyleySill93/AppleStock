import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ReactGridLayout from 'react-grid-layout';

import Chart from './Chart';
import Table from './Table';

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
    const { stockData } = this.props;
    if (this.state.loading) {
      //show loading spinner
    } else {
      return (
        <ReactGridLayout className="layout" cols={12} rowHeight={30} width={1200}>
          <div key="a" data-grid={{x: 0, y: 0, w: 7, h: 2}}>
            {this.state.loading ? "" : <Chart stockData={stockData}/>}
          </div>
          <div key="b" data-grid={{x: 7, y: 0, w: 5, h: 2}}>
            {this.state.loading ? "" : <Table stockData={stockData}/>}
          </div>
        </ReactGridLayout>
      );
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
  loading: state.default.loading,
  stockData: state.default.stockData
});

const mapDispatchToProps = (dispatch) => ({
  requestStockData: () => dispatch(requestStockData())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Application);
