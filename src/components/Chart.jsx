import React from 'react';
import { connect } from 'react-redux';
import Highcharts from 'highcharts';

import ReactGridLayout from 'react-grid-layout';


class Chart extends React.Component {

  constructor(props) {
    super(props);
    this.options = this.options.bind(this);
  }

  componentDidMount() {
    this.chart = new Highcharts[this.props.type || "Chart"](
        this.refs.chart,
        this.options()
    );
  }

  parsePrice(day) {
    return parseFloat(parseFloat(day.Adj_Close).toFixed(2));
  }

  options(){
    let { stockData } = this.props;
    const data = stockData.map(day => {
        return [Date.parse(day.Date), this.parsePrice(day)];
    }).reverse();
    const options = {
        title: {
            text: 'Apple Stock Price'
        },
        yAxis: {
            title: {
                text: 'Stock Price ($USD)'
            }
        },
        xAxis: {
            type: 'datetime',
            title: {
                text: 'Date'
            }
        },
        chart: {
            type: 'line'
        },
        series: [{
            name: 'AAPL',
            data
        }]
    };
    return options;
  }

  componentWillUnmount() {
    this.chart.destroy();
  }

  render() {
    return (
        <div ref="chart" id="chart" style={{width: '684px'}}></div>
    );
  }
}

const mapStateToProps = (state) => ({
  stockData: state.default.stockData || []
});

export default connect(
  mapStateToProps
)(Chart);
