import React from 'react';
import ReactTable from 'react-table';

class Table extends React.Component {
  render () {

    let { stockData } = this.props;

    const data = stockData.map(day => {
        return { date: day.Date, price: `$ ${parseInt(day.Close)}` };
      }).reverse();

    const columns = [{
      Header: 'Name',
      columns: [{
        Header: 'Date',
        accessor: 'date'
      }, {
        Header: 'Price',
        accessor: 'price'
      }]
    }];

    return (
      <div>
        <div className='table-wrap'>
          <ReactTable
            className='-striped -highlight'
            data={data}
            columns={columns}
            defaultPageSize={10}
          />
        </div>
        <div style={{textAlign: 'center'}}></div>
      </div>
    );
  }
}

export default Table;
