import React, { useState } from "react";
import "./Contactus.css";
import { db } from "../../components/firebase";
import { collection, getDocs, query } from "firebase/firestore";
import { getDatabase, set, ref, onValue } from "firebase/database";
import { uuidv4 } from "@firebase/util";

const Contactus = ({ isAdmin = false }) => {
  const [CUname, setName] = useState("");
  const [CUemail, setEmail] = useState("");
  const [CUmessage, setMessage] = useState("");
  const [queryLogs, setQueryLogs] = useState([]);

  const handleSubmit = async (e) => {
    const randomID = uuidv4();

    set(ref(db, "queries/" + randomID), {
      name: CUname,
      email: CUemail,
      message: CUmessage,
    })
      .then(() => {
        alert("Message has been submitted");
      })
      .catch((error) => {
        alert(error.message);
      });
    setName("");
    setEmail("");
    setMessage("");
  };

  const handleShowLogs = async (e) => {
    const contactLogs = ref(db, "queries/");

    onValue(contactLogs, (snapshot) => {
      const data = snapshot.val();
      setQueryLogs([data]);
      console.log(data);
    });
  };

  const renderLogs = () => {

const logs = queryLogs.length ? queryLogs[0] : {};
    console.log(queryLogs);
  console.log(logs)
  console.log(Object.values(logs)); 

    return (

      <div>
        <h2>Query logs</h2>

        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
            </tr>
            { 
            Object.values(logs).map((log) => 
                <tr>
                  <td>{log.name}</td>
                  <td>{log.email}</td>
                  <td>{log.message}</td>
                </tr>
                )
            }

            
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="form">
      <h1>Contact us</h1>

      <label>Name</label>
      <input
        placeholder="name"
        value={CUname}
        on
        onChange={(e) => setName(e.target.value)}
      />

      <label>Email</label>
      <input
        placeholder="Email"
        value={CUemail}
        on
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Text</label>
      <textarea
        placeholder="Message"
        value={CUmessage}
        on
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>

      {isAdmin == true && (
        <button type="submit" onClick={handleShowLogs}>
          Show logs
        </button>
      )}

      {isAdmin == true && renderLogs()}
    </div>
  );
};

export default Contactus;