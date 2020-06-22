import React from 'react';
import Employee from './Employee';

const EmployeeList = ({ employees }) => {

    return (
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
            {
                employees.map( 
                    (employee) => <Employee key={ employee.id}
                                            employee={ employee } />
                )
            }
            </tbody>
        </table>
    );
}

export default EmployeeList;