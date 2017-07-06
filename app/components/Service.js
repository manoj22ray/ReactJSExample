import React from 'react'

class Service extends React.Component{
    render(){
    return (
    <div>
    <Header/>
    <Content/>
    </div>
    );
    }
}

class Header extends React.Component{
    render(){
    return (
    <div>
    <h3></h3>
    </div>
    );
    }
}

class Content extends React.Component{
constructor(){
super();
this.state = {
employees: [
    {
    id: 1,
    name: 'John',
    age: '28'
    },
    {
    id: 2,
    name: 'Akshay',
    age: '30'
    },
    {
    id: 3,
    name: 'Ravi',
    age: '38'
    },

    {
    id: 4,
    name: 'Vinay',
    age: '35'
    },
    {
    id: 5,
    name: 'Rakes',
    age: '26'
    }
]
};
this.handleUpdate = this.handleUpdate.bind(this);
}
 
handleUpdate(){
const employees = this.state.employees;
employees[3] = {
    id: 8,
    name: 'Manoj',
    age: '33'
    };
    this.setState({
    employees: employees
    });
}
 
 
render(){
    var tableRowBorderStyle = {
    borderColor: '#ccc',
    borderWidth: 1,
    borderStyle: 'solid',
    };
 
return (
<div>
    
    <table>
    <thead>
    <tr>
        <th style={tableRowBorderStyle}>Sl.No</th>
        <th style={tableRowBorderStyle}>Employee Name</th>
        <th style={tableRowBorderStyle}>Employee Age</th>
    </tr>
    </thead>
    <tbody>
    {this.state.employees.map(function(val, k){
    return (
    <tr>
        <td style={tableRowBorderStyle}>{val.id}</td>
        <td style={tableRowBorderStyle}>{val.name}</td>
        <td style={tableRowBorderStyle}>{val.age}</td>
    </tr>
    )
    })
    }
    </tbody>
    </table>
    <button type="button" onClick={this.handleUpdate}>Update</button>
    <button type="button">Submit</button>
    </div>
);
}
}



export default Service;