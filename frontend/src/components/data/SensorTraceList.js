import React, { Component } from 'react';
import axios from 'axios';
import '../../App.css';

import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory, { PaginationProvider } from 'react-bootstrap-table2-paginator';

import {
    Chart,
    BarSeries,
    Title,
    ArgumentAxis,
    ValueAxis,
  } from '@devexpress/dx-react-chart-bootstrap4';
  import '@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css';
  import { Animation } from '@devexpress/dx-react-chart';

const SensorTrace = props => (
    <tr>
        <td>{ props.sensorTrace.sensorId }</td>
        <td>{ props.sensorTrace.action }</td>        
    </tr>
)


const columns = [{
    dataField: 'sensorId',
    text: 'SensorId'
  }, {
    dataField: 'action',
    text: 'Action'
  }, {
    dataField: 'name',
    text: 'Name'
  }];


const paginationOption = (legth) =>({
    custom: true,
    totalSize: legth,
    sizePerPage: 25
    
})

var data = [
    { year: '1950', population: 2.525 },
    { year: '1960', population: 3.018 },
    { year: '1970', population: 3.682 },
    { year: '1980', population: 4.440 },
    { year: '1990', population: 5.310 },
    { year: '2000', population: 6.127 },
    { year: '2010', population: 6.930 },
  ];

var totalPages = 0;
export default class SensorTraceList extends Component {

    constructor(props) {
        super(props);

        this.state = { sensorTraces: [] }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/sensorTraces/')
            .then(response => {
                this.setState({ sensorTraces: response.data })
            })
            .catch((error) => {
                console.log(error);
            })

    }

    sensorTraceList() {
        return this.state.sensorTraces.map(currentsensorTrace => {
            return <SensorTrace sensorTrace={ currentsensorTrace } />
        })
    }


    pages() {
        var l = this.state.sensorTraces.length;
        while (l > 25)
        {
          totalPages++;
          l = l - 25;
        }
    }

    handleNextPage = ({
        page,
        onPageChange
      }) => () => {
        if (page < totalPages + 1) {
            onPageChange(page + 1);
        }else
        {
            onPageChange(page);
        }
       
      }
    
      handlePrevPage = ({
        page,
        onPageChange
      }) => () => {
        if (page !== 1) {
            onPageChange(page - 1);
        }else
        {
            onPageChange(page);
        }
       
      }

    render() {

        data = [
             { year: '60e9cc5814da195c48f2fa9c', population: this.state.sensorTraces.filter(el => el.sensorId === '60e9cc5814da195c48f2fa9c').length },
             { year: '60e9cca414da195c48f2faa5', population: this.state.sensorTraces.filter(el => el.sensorId === '60e9cca414da195c48f2faa5').length },
             { year: '60e9ccbd14da195c48f2faa8', population: this.state.sensorTraces.filter(el => el.sensorId === '60e9ccbd14da195c48f2faa8').length },
             { year: '60e9cccf14da195c48f2faab', population: this.state.sensorTraces.filter(el => el.sensorId === '60e9cccf14da195c48f2faab').length },
             { year: '60e9cce314da195c48f2faae', population: this.state.sensorTraces.filter(el => el.sensorId === '60e9cce314da195c48f2faae').length },
             { year: '60e9ccf414da195c48f2fab1', population: this.state.sensorTraces.filter(el => el.sensorId === '60e9ccf414da195c48f2fab1').length },
             { year: '60e9cd0414da195c48f2fab4', population: this.state.sensorTraces.filter(el => el.sensorId === '60e9cd0414da195c48f2fab4').length },
            ]

        return (
           

        <div className="trace-list">
            
            {totalPages = 0,
            this.pages()}                
               
            <PaginationProvider
            pagination={ paginationFactory(paginationOption(this.state.sensorTraces.length)) }
            >
            {
            ({
                paginationProps,
                paginationTableProps
            }) => (
                <div style={{ height: "80vh"}}>                                
                    <div className="btn-group" role="group">                
                    <button className="btn btn-success" onClick={ this.handlePrevPage(paginationProps) }>Prev Page</button>
                    <button className="btn btn-primary" onClick={ this.handleNextPage(paginationProps) }>Next Page</button>   
  
                    </div>  
                    <div>
                        <p>Current Page: { paginationProps.page }</p>                 
                    </div> 
                    <BootstrapTable
                        keyField="id"
                        data={ this.state.sensorTraces}
                        columns={ columns }
                        { ...paginationTableProps }
                    />                                            

                </div>
                )
                }
            </PaginationProvider>


        </div>
        )
    }
}


  
export class SensorTraceListChart extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = { data }
    }     
      

    render() {
        const { data: chartData } = this.state;
        console.log(data);
        return (
           

        <div >
            
            <Chart
          data={chartData}
        >
          <ArgumentAxis />
          <ValueAxis max={7} />

          <BarSeries
            valueField="population"
            argumentField="year"
          />
          <Title text="World population" />
          <Animation />
        </Chart>


        </div>
        )
    }
}