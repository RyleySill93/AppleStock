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
      return (<div className='loader'></div>);
    } else {
      return (
        <ReactGridLayout className="layout" cols={20} rowHeight={30} width={1440}>
          <div key="b" data-grid={{x: 10, y: 0, w: 6, h: 12}}>
            {this.state.loading ? "" : <Table stockData={stockData}/>}
          </div>
          <div key="a" data-grid={{x: 0, y: 0, w: 10, h: 10, isResizable: false}}>
            {this.state.loading ? "" : <Chart stockData={stockData}/>}
          </div>
        </ReactGridLayout>
      );
    }
  }

  render() {
    return (
      <div id="main">
        <header className="header">
          <h1> Apple Tracker</h1>
          <a href="https://github.com/RyleySill93/twitch_roulette" target="_blank">
            <i className="fa fa-github" id="git" aria-hidden="true"></i>
          </a>
        </header>
        <div id='main-content'>
          {this.content()}
        </div>


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
