import React, { useState } from 'react'
import MockData from '../MOCK_DATA.json'
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import './DonationTable.css'

export default function DonationTable() {
    const [data, setdata] = useState(MockData)
    const [ordername, setordername] = useState("ASC")
    const [orderamount, setorderamount] = useState("ASC")
    const [orderdate, setorderdate] = useState("ASC")
    const [searchQuery, setSearchQuery] = useState("");

    const sortingName =(col)=>{
        if (ordername === "ASC"){
            const sorted = [...data].sort((a,b)=>
                a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
            );
            setdata(sorted);
            setordername("DSC");
        } if (ordername === "DSC"){
            const sorted = [...data].sort((a,b)=>
                a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
            );
            setdata(sorted);
            setordername("ASC");
        }
    }
    const sortingAmount =(col)=>{
        if (orderamount === "ASC") {
            const sorted = [...data].sort((a, b) => {
                const moneyA = parseFloat(a[col].replace("£", ""));
                const moneyB = parseFloat(b[col].replace("£", ""));
                return moneyA - moneyB;
              });
            setdata(sorted);
            setorderamount("DSC");
        } if (orderamount === "DSC") {
            const sorted = [...data].sort((a, b) => {
                const moneyA = parseFloat(a[col].replace("£", ""));
                const moneyB = parseFloat(b[col].replace("£", ""));
                return moneyB - moneyA;
              });
            setdata(sorted);
            setorderamount("ASC");
        }
    }
    const sortingDate =(col)=>{
        if (orderdate === "ASC") {
            const sorted = [...data].sort((a, b) => {
                const dateA = new Date(a[col].split("/").reverse().join("-"));
                const dateB = new Date(b[col].split("/").reverse().join("-"));
                return dateA - dateB;
              });
            setdata(sorted);
            setorderdate("DSC");
        } if (orderdate === "DSC") {
            const sorted = [...data].sort((a, b) => {
                const dateA = new Date(a[col].split("/").reverse().join("-"));
                const dateB = new Date(b[col].split("/").reverse().join("-"));
                return dateB - dateA;
              });
            setdata(sorted);
            setorderdate("ASC");
            
        }
    }
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
               <th onClick={()=>sortingDate("date")}>Date {orderdate === "ASC" ? <FaArrowDown /> : <FaArrowUp />} </th>
               <th onClick={()=>sortingName("name")}>Name {ordername === "ASC" ? <FaArrowDown /> : <FaArrowUp />}</th>
               <th onClick={()=>sortingAmount("amount")}>Amount {orderamount === "ASC" ? <FaArrowDown /> : <FaArrowUp />}</th>      
            </thead>
            <tbody>
            {data.filter((d) => {
                return (
                d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                d.amount.toLowerCase().includes(searchQuery.toLowerCase()) ||
                d.date.toLowerCase().includes(searchQuery.toLowerCase())
                );
            })

            .map((d) => (
                <tr key={d.id}>
                    <td>{d.date}</td>
                    <td>{d.name}</td>
                    <td>{d.amount}</td>
                </tr>
            ))}
            </tbody>
        </table>
        
    </div>
  )
}
