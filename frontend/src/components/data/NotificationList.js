import React, { Component } from 'react';
import axios from 'axios';
import '../../App.css';

import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory, { PaginationProvider } from 'react-bootstrap-table2-paginator';

import { PieChart } from 'react-minimal-pie-chart';
 

const columns = [{
    dataField: 'severity',
    text: 'Severity'
  }, {
    dataField: 'description',
    text: 'Description'
  }];


const paginationOption = (legth) =>({
    custom: true,
    totalSize: legth,
    sizePerPage: 20
    
})


const Notification = props => (
    <tr>
        <td>{ props.notification.severity }</td>
        <td>{ props.notification.description }</td>
    </tr>
)


const NotifiList = props => (
  <li>
      {props.notification.description}   
  </li>
)

export class NotifListShow extends Component{
   constructor(props) {
    super(props);

    this.state = { notifications: [] }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/notifications/')
        .then(response => {
            this.setState({ notifications: response.data })
        })
        .catch((error) => {
            console.log(error);
        })
  }

  notificationList() {
    return this.state.notifications.filter((currentnotification,idx) => idx < 7).map(currentnotification => {
      return <NotifiList notification={ currentnotification } />
        
    })
  }
  
  render() {
    return this.notificationList()
  }
}

var totalPages = 0;
export default class NotificationList extends Component {

    constructor(props) {
        super(props);

        this.state = { notifications: [] }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/notifications/')
            .then(response => {
                this.setState({ notifications: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    notificationList() {
        return this.state.notifications.map(currentnotification => {
            return <Notification notification={ currentnotification } />
        })
    }

    notificationListSeverityHigh() {
      return this.state.notifications.filter(el => el.severity === 'High').length
    }

    notificationListSeverityMedium() {
      return this.state.notifications.filter(el => el.severity === 'Medium').length
    }

    notificationListSeverityLow() {
      return this.state.notifications.filter(el => el.severity === 'Low').length
    }

    
    pages() {
        var l = this.state.notifications.length;
        while (l > 20)
        {
          totalPages++;
          l = l - 20;
        }
        console.log(totalPages);
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
        if (page != 1) {
            onPageChange(page - 1);
        }else
        {
            onPageChange(page);
        }
       
      }
    
      handleSizePerPage = ({
        page,
        onSizePerPageChange
      }, newSizePerPage) => {
        onSizePerPageChange(newSizePerPage, page);
      }

    
    render() {
       
        return (
       
          <tr style={{position: 'absolute', top: '10%', left: '0'}}>
            <td style={{width: '50vw'}}>
            <div className="notif-list">
                
               
                {totalPages = 0,
                this.pages()
                }
                <PaginationProvider
          pagination={ paginationFactory(paginationOption(this.state.notifications.length)) }
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
                  data={ this.state.notifications }
                  columns={ columns }
                  { ...paginationTableProps }
                />                                            
               
              </div>
            )
          }
        </PaginationProvider>
                          
            </div> 
            </td>
            <td style={{width: '50vw'}}>
              <div style={{margin: '100px',height: '50%', width: '50%', float: 'right', fontSize: '8px'}}>
               <PieChart data={[
               {title: 'High', value: this.notificationListSeverityHigh(), color:  '#E38627' },
               {title: 'Medium', value: this.notificationListSeverityMedium(), color:  '#C13C37' },
               {title: 'Low', value: this.notificationListSeverityLow(), color:  '#6A2135' },
               ]}
               label={({ dataEntry }) => dataEntry.title}              
              
              
               />
              </div>
              
            </td>
          </tr>
            
           
            
        
         

        )
    }
}