import logo from './logo.svg';
import logo1 from './Picture1.jpg';
import logo2 from './3.webp';
import logo3 from './pic1.webp';
import logo4 from './pic2.jpg';
import logo5 from './contact.jpg';
import logo6 from './pic3png.png';
import logo7 from './pic4.webp';
import logo8 from './pic5.jpg';
import './App.css';


function App() {
  return (
    <div className="App">
      
      
        <div>
        <input className="but" type="button" value="Make a Donation"/>
        <input className="sea" type="search" value="Search" />
        <nav>
        

    
        <img className="logo" src={logo1} alt=""/>
        <a href="#home">Home</a>
        <a href="#about">About and Blogs</a>
        <a href="#contact">Fundraisers</a>
        <a href="#contact">Petitions</a>
        <a href="#contact">Headlines</a>
        <input className="but1" type="button" value="Login" />
        <input className="but2" type="button" value="Subscribe" />
        <input className="but3" type="button" value="SignUp" />
        </nav>
        
        
        
       
        </div>
        
        
        
      
    
    
  
    <div className="container s1">
        <div className="row">
            <div className="col-12">
                <h1>About Us</h1>
                <p> We will expose information about climate action in a blog/news system. It also allows a easy gateway to make a change.Every month our website  will delegate a part of the subscription fee to different charities (geo-donos)  we deem will help make a difference or impact in to conservation of the climate.
                    
                    
                </p>
            </div>
        </div>
    </div>

    
    <div className="container s2">
        <div className="row">
            <div className="col-5">
                <img src= {logo2} alt="" className="img-fluid"/>
            </div>
            <div className="col-7">
                <a href="#">What we do</a>
                <p>Educating through blogs,  discussing about climate change and comprehensively sharing other factors that affect the moderation of climate change 
                    Acting as media to connect users around the world for events, since creating a community of climate action enthusiasts are influential. 
                    A donation system which increases influence of the user in different charities by delegating their GeoDonos to different charities every month.
                    Complete transparency on who and where the GeoDonos go.
                    GeoDonos don't only help with climate action, but we will also have inclusion of charities helping other goals set out by WHO.(examples being education poverty ect)
                    
                </p>
            </div>
        </div>
    </div>
    <div className="container s2">
        <div className="row">
            <div className="col-5">
                <img src={logo3} alt="" className="img-fluid"/>
            </div>
            <div className="col-7">
                <a href="https://physicsworld.com/a/tree-loss-brings-more-warming-as-world-heats/">Losing our Trees</a>
                <p>Due to global warming trees in the world are becoming less every year.</p>
            </div>
        </div>
    </div>

    <div className="container s2">
        <div className="row">
            <div className="col-5">
                <img src={logo4} alt="" className="img-fluid"/>
            </div>
            <div className="col-7">
                <a href="https://www.nbcnews.com/slideshow/worst-drought-decades-disrupts-life-southeast-asia-s-mekong-region-n562166">Drought in Asia</a>
                <p>Situation of Drough in Asia due to climate change.</p>
            </div>
        </div>
    </div>

    <div className="container s2">
        <div className="row">
            <div className="col-5">
                <img src={logo5} alt="" className="img-fluid"/>
            </div>
            <div className="col-7">
                <a href="#">Contact us</a>
                <p>Get in touch for any queries.</p>
            </div>
        </div>
    </div>
    <label className="L1">Newsletter</label>

    <input className="sea1" type="search" placeholder="Input Feed" />

    <div className="container s3">

        <div className="row">
            <h3>Other ways to get involved</h3>
            <div className="col-4 s3c1">
                <a href="#">
                    <h4>Donation Tracking</h4>
                    <img src={logo6} alt="" className="img-fluid"/>
                </a>
            </div>
            <div className="col-4 s3c2">
                <a href="#">
                    <h4>Event Tracking</h4>
                    <img src={logo7} alt="" className="img-fluid"/>
                </a>
            </div>
            <div className="col-4 s3c3">
                <a href="#">
                    <h4>Board Topics</h4>
                    <img src={logo8} alt="" className="img-fluid"/>
                </a>
            </div>
        </div>
    </div>

    </div>
  );
}

export default App;
