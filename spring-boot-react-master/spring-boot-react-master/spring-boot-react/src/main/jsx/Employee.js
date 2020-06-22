import React from 'react';

const Employee = ({ employee }) => {

    return (
        <tr>
            <td>{ employee.firstName }</td>
            <td>{ employee.lastName }</td>
            <td>{ employee.description }</td>
        </tr>
    );
}

export default Employee;