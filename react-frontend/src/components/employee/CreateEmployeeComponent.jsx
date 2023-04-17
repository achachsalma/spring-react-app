import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            emailId: '',
            nbProduct:0,
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this)
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this)
        this.saveEmployee=this.saveEmployee.bind(this)
    }
    saveEmployee=(e)=>{
        e.preventDefault();
        let empl = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId,nbProduct:this.state.nbProduct};
        console.log('employee => ' + JSON.stringify(empl));

        EmployeeService.createEmployee(empl).then(res =>{
            this.props.history.push('/employees');})
            console.log(empl)
    }
    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({emailId: event.target.value});
    }
    changenbproductHandler=(event)=>{
        this.setState({nbProduct: event.target.value});
    }
    cancel(){
        this.props.history.push('/employees');
    }

    render() {
        return (
            <div><br />
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md offset-md-3'>
                            <h3 className='text-center'> Add Employee</h3>
                            <div className="card-body">
                                <form>
                                    <div className='form-group'>
                                        <label > First Name :</label>
                                        <input placeholder='First Name' name='firstname' className='form-control' value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label >  Last Name :</label>
                                        <input placeholder='Last Name' name='lastname' className='form-control' value={this.state.lastName} onChange={this.changeLastNameHandler} />
                                    </div >
                                    <div className='form-group'>
                                        <label > Email Address:</label>
                                        <input placeholder='Email Address' name='emaiId' className='form-control' value={this.state.emailId} onChange={this.changeEmailHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label > number of paid product:</label>
                                        <input placeholder='nb product' name='nbproduct' className='form-control' value={this.state.nbProduct} onChange={this.changenbproductHandler} />
                                    </div>
                                    <br />
                                    <button className='btn btn-success' onClick={this.saveEmployee}>Save</button>
                                    <button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default CreateEmployeeComponent;