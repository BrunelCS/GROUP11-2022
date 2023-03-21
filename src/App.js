
import './App.css';

function App() {
 return (
    <div className="box1">
     <div className="form-box1">
      <div className="button-box1">
                <div id="btn1"></div>
                <button type="button" className="toggle-btn1" > Donation </button> 
            </div>
            <form id="submit" className="input-group">
                <input type="text" className="input-field" placeholder="User ID"  required/>
                <input type="text" className="input-field" placeholder="Donation Value"  required/>
                <input type="text" className="input-field" placeholder="Charity Address"  required/>
                <input type="text" className="input-field" placeholder="Charity Name"  required/>
                <p>---------------Payment Details---------------</p>
                <input type="text" maxLength="16" className="input-field" placeholder="Card Number" required/>
                <input type="text" className="input-field" placeholder="Card Holder" required/> 
                <input type="number" maxLength="2" min="1" max="12" className="input-field" placeholder="expiration mm"/>
                <input type="number" maxLength="4" min="2023" max="2028" className="input-field" placeholder="expiration yy" required/>
                <input type="text" maxLength="3" className="input-field" placeholder="CVV" required/>
                <input type="checkbox" className="check-box1"/><span>I agree to the terms & conditions</span>
                <button type="submit" className="submit-btn1" >Submit</button>
              </form>
     </div>

    
    </div>
 );
};

export default App;
