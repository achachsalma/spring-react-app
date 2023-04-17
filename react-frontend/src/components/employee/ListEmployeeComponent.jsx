import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import { withRouter } from 'react-router-dom';
import { useHistory } from "react-router-dom";
class ListEmployeeComponent extends Component {
   constructor(props){
    super(props)
    this.state={ 
        employees:[]
    }
    this.addEmployee=this.addEmployee.bind(this)
    this.editEmployee=this.editEmployee.bind(this)
    this.deleteEmployee=this.deleteEmployee.bind(this)
   }
   deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then(res=>{
            this.setState({employees:this.state.employees.filter(employee=>employee.id!==id)})
        })
   }
   viewEmployee(id){
    this.props.history.push(`/view-employee/${id}`)
   }
   editEmployee(id){
    this.props.history.push(`/update-employee/${id}`)
   }
   componentDidMount(){
    EmployeeService.getEmployees().then((res)=>{
        this.setState({employees:res.data})
            })
  
   }
   addEmployee(){
    
    this.props.history.push('/add-employee')
   }
   
    render() {
        return (
            <div>
                <h2 className='text-center'>Employees List</h2>
                <div className='row'>
                    <button className='btn btn-primary' onClick={this.addEmployee}>Add Employee</button>
                </div>
                <br />
                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>Employee first Name</th>
                                <th>Employee Last name</th>
                                <th>Employee Email Id</th>
                                <th>Number of paid  products </th>
                                <th>Actions</th>

                            </tr>
                        </thead>
                        <tbody>
                            {this.state.employees.map(
                                employee=>
                                <tr key={employee.id}>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.emailId}</td>
                                    <td>{employee.nbProduct}</td>
                                    <td>
                                        <button onClick= {()=>this.editEmployee(employee.id)} className='btn btn-info'>Update</button>
                                        <button onClick={()=>this.deleteEmployee(employee.id)} className="btn btn-danger" style={{marginLeft:"10px"}}>Delete</button>
                                        <button onClick={()=>this.viewEmployee(employee.id)} className="btn btn-success" style={{marginLeft:"10px"}}>View</button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}


export default withRouter (ListEmployeeComponent);