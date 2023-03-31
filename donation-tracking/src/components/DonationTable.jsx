import React, { useState, useEffect } from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import './DonationTable.css';
import axios from 'axios';

export default function DonationTable() {
  const [dt, setdt] = useState([]);
  const [ordername, setordername] = useState('ASC');
  const [orderamount, setorderamount] = useState('ASC');
  const [orderdate, setorderdate] = useState('ASC');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3002/dt')
      .then((response) => {
        console.log(response.data);
        setdt(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const sortingName = (col) => {
    if (ordername === 'ASC') {
      const sorted = [...dt].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setdt(sorted);
      setordername('DSC');
    }
    if (ordername === 'DSC') {
      const sorted = [...dt].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setdt(sorted);
      setordername('ASC');
    }
  };
  const sortingAmount = (col) => {
    if (orderamount === 'ASC') {
      const sorted = [...dt].sort((a, b) => {
        const moneyA = typeof a[col] === 'string' ? parseFloat(a[col].replace("£", "")) : a[col];
        const moneyB = typeof b[col] === 'string' ? parseFloat(b[col].replace("£", "")) : b[col];
        return moneyA - moneyB;
      });
      setdt(sorted);
      setorderamount('DSC');
    }
    if (orderamount === 'DSC') {
      const sorted = [...dt].sort((a, b) => {
        const moneyA = typeof a[col] === 'string' ? parseFloat(a[col].replace("£", "")) : a[col];
        const moneyB = typeof b[col] === 'string' ? parseFloat(b[col].replace("£", "")) : b[col];
        return moneyB - moneyA;
      });
      setdt(sorted);
      setorderamount('ASC');
    }
  };
  const sortingDate = (col) => {
    if (orderdate === 'ASC') {
      const sorted = [...dt].sort((a, b) => {
        const dateA = new Date(a[col]);
        const dateB = new Date(b[col]);
        return dateA - dateB;
      });
      setdt(sorted);
      setorderdate('DSC');
    }
    if (orderdate === 'DSC') {
      const sorted = [...dt].sort((a, b) => {
        const dateA = new Date(a[col]);
        const dateB = new Date(b[col]);
        return dateB - dateA;
      });
      setdt(sorted);
      setorderdate('ASC');
    }
  };
  
  return (

    <div className='container'>
         <div className="search-container">
                <input
                    type="text"
                    placeholder="Search by name, amount, or date"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-bar"
                />
            </div>
    
        <table className="table table-bordered">
            <thead>
                <tr>
               <th onClick={()=>sortingDate("date")}>Date {orderdate === "ASC" ? <FaArrowDown /> : <FaArrowUp />} </th>
               <th onClick={()=>sortingName("name")}>Name {ordername === "ASC" ? <FaArrowDown /> : <FaArrowUp />}</th>
               <th onClick={()=>sortingAmount("amount")}>Amount {orderamount === "ASC" ? <FaArrowDown /> : <FaArrowUp />}</th>      
               </tr>            
            </thead>
            <tbody>
            {dt.filter((d) => {
    const amount = parseFloat(d.amount);
    const searchValue = parseFloat(searchQuery);
    return (
        d.date.toLowerCase().includes(searchQuery.toLowerCase()) ||
        d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (!isNaN(amount) && !isNaN(searchValue) && amount.toString().includes(searchQuery))
    );
       }).map((d) => (
    <tr key={d.id}>
     <td>{new Date(d.date).toISOString().substring(0, 10)}</td>
     <td>{d.name}</td>
     <td>£{parseFloat(d.amount).toFixed(2)}</td> 
    </tr>
       ))}
            </tbody>
        </table>
        
    </div>
  )
}
