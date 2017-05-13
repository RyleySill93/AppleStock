import React from 'react';
import { connect } from 'react-redux';
import Highcharts from 'highcharts';

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

  options(){
    let { stockData } = this.props;
    const data = stockData.map(day => {
        return [Date.parse(day.Date), parseInt(day.Close)];
    }).reverse();
    const options = {
        title: {
            text: 'Apple'
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
            yAxis: 0,
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
        <div ref="chart"></div>
    );
  }
}

const mapStateToProps = (state) => ({
  stockData: state.default.stockData || []
});

export default connect(
  mapStateToProps
)(Chart);
