import React, { useState } from "react";
import Axios from "axios";
import './App.css';

function App() {
    
    const [author_nameReg, setauthor_nameReg] = useState("");
    const [contentReg, setcontentReg] = useState("");
    const [publish_dateReg, setpublish_dateReg] = useState("");
    const [user_idReg, setuser_idReg] = useState("");

    const submition = () => {
        Axios.post("http://localhost:3003/submition", {
            user_id: user_idReg,
            content: contentReg,
            publish_date: publish_dateReg,
            author_name: author_nameReg,
        }).then((response) => {
            console.log(response);
        });
    };


    return (
        <div className="box1">
            <div className="form-box1">
                <div className="button-box1">
                    <div id="btn1"></div>
                    <button type="button" className="toggle-btn1" > Post a Blog </button>
                </div>
                <form id="submit" className="input-group">
                    <input type="text" className="input-field" placeholder="User ID" onChange={(e) => { setuser_idReg(e.target.value) }} required />
                    <input type="text" className="input-field" placeholder="content" onChange={(e) => { setcontentReg(e.target.value) }} required />
                    <input type="text" className="input-field" placeholder="publish_date" onChange={(e) => { setpublish_dateReg(e.target.value) }} required />
                    <input type="text" className="input-field" placeholder="author_name" onChange={(e) => { setauthor_nameReg(e.target.value) }} required />
                    <button type="submit" className="submit-btn1" onClick={submition}>Submit</button>
                </form>
            </div>


        </div>
    );
}

export default App;