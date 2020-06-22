import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EmployeeList from './EmployeeList';

function App() {

  const [ employees, setEmployees ] = useState(null);

  useEffect( () => {
    const fetchEmployees = async (e) => {
      try {
        const response = await axios.get("/employee/list");
        setEmployees(response.data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchEmployees();

    // axios.get("/employee/list")
    //      .then( (response) => setEmployees(response.data) )
    //      .catch( (e) => console.log(e) );
    
  }, []);

  if (!employees) {
    return null;
  }

  return (
    <div>
      <EmployeeList employees={ employees } />      
    </div>
  );
}

export default App;
