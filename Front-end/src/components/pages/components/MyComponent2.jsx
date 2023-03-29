import React from 'react';
import axios from 'axios';

function MyComponent2() {
  const handleDummyDataSubmit = () => {
    const dummyData = {
        name: "Huzaifa",
        email: "Huzaifa@sample.com",
        address: "huzaifa",
        latitude:90.99,
        longitude:76.999
    };

    axios.post('http://localhost:8080/user', dummyData)
      .then(response => console.log(response.data))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <button onClick={handleDummyDataSubmit}>Send Dummy Data</button>
    </div>
  );
}
export default MyComponent2;
