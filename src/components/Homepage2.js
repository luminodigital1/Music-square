import React, {useState} from "react";
import arrowLeft from '../Images/arrow-left.png';
import arrowRight from '../Images/arrow-right.png';
import product1 from '../Images/Product1.png';
import product2 from '../Images/Product2.png';
import Homepage2Searchbar from "./Homepage2Searchbar";
import Homepage2NavBar from "./Homepage2NavBar";
import ProfileDisplay from "../components/LandingPage/Profiles/ProfileDisplay";

const Homepage2 = () => {
  const [position, setPosition] = useState(0);

  const moveLeft = () => {
    // setPosition(position - 1);
  };

  const moveRight = () => {
    // setPosition(position + 1);
  };
    
    return (
    <div style={{overflowX: 'hidden'}}>
      <Homepage2NavBar/>
      <Homepage2Searchbar/>
      <div style={{backgroundColor: '#e8eaed', paddingTop: 30, paddingBottom: 50}}>
      <div className="">
    <div className="d-flex" style={{marginBottom: 5}}>
        <h4 style={{fontFamily: 'GilroyBold', marginLeft: 50, marginRight: 50}}>Top Artists</h4>
        <div className="col-md-1 offset-md-9">
        <a className=" " style={{}} href='#'>View all</a>
        <img style={{height:20,width: 20}} src={arrowLeft} alt="" onClick={moveLeft}/>
        <img style={{height:20,width: 20}} src={arrowRight} alt="" onClick={moveRight}/>
        </div>
    </div>
    <div className="d-flex" style={{marginLeft: 50}}>
      <div className="p-1">
        <ProfileDisplay/>
      </div>
      <div className="p-1">
        <ProfileDisplay/>
      </div>
      <div className="p-1">
        <ProfileDisplay/>
      </div>
      <div className="p-1">
        <ProfileDisplay/>
      </div>
    </div>
       
      </div>

      <div className="">
    <div className="d-flex" style={{marginBottom: 5, marginTop: 40}}>
        <h4 style={{fontFamily: 'GilroyBold', marginLeft: 50, marginRight: 20}}>Rising Artists</h4>
        <div className="col-md-1 offset-md-9">
        <a className=" " style={{}} href='#'>View all</a>
        <img style={{height:20,width: 20}} src={arrowLeft} alt="" onClick={moveLeft}/>
        <img style={{height:20,width: 20}} src={arrowRight} alt="" onClick={moveRight}/>
        </div>
    </div>
    <div className="d-flex" style={{marginLeft: 50}}>
      <div className="p-1">
        <ProfileDisplay/>
      </div>
      <div className="p-1">
        <ProfileDisplay/>
      </div>
      <div className="p-1">
        <ProfileDisplay/>
      </div>
      <div className="p-1">
        <ProfileDisplay/>
      </div>
    </div>
      </div>

      <div className="">
    <div className="d-flex" style={{marginBottom: 5, marginTop: 40}}>
        <h4 style={{fontFamily: 'GilroyBold', marginLeft: 50, marginRight: 100}}>Featured Artists</h4>
        <div className="col-md-1 offset-md-8" style={{}}>
        <a className=" " style={{}} href='#'>View all</a>
        <img style={{height:20,width: 20}} src={arrowLeft} alt="" onClick={moveLeft}/>
        <img style={{height:20,width: 20}} src={arrowRight} alt="" onClick={moveRight}/>
        </div>
    </div>
    <div className="d-flex" style={{marginLeft: 50}}>
      <div className="p-1">
        <ProfileDisplay/>
      </div>
      <div className="p-1">
        <ProfileDisplay/>
      </div>
      <div className="p-1">
        <ProfileDisplay/>
      </div>
      <div className="p-1">
        <ProfileDisplay/>
      </div>
    </div>
      </div>

      <div className="" style={{backgroundColor: "white", paddingTop: 5, marginTop: 50, marginLeft: 50}}>
    <div className="d-flex" style={{marginBottom: 10, marginTop: 40}}>
        <h4 style={{fontFamily: 'GilroyBold', marginLeft: 30}}>Trending Music</h4>
        <div className="col-md-1 offset-md-9">
        <a className=" " style={{}} href='#'>View all</a>
        <img style={{height:20,width: 20, backgroundColor: '#ccc', marginLeft: 5}} src={arrowLeft} alt="" onClick={moveLeft}/>
        <img style={{height:20,width: 20, backgroundColor: '#ccc', marginLeft: 5}} src={arrowRight} alt="" onClick={moveRight}/>
        </div>
    </div>
    <p style={{fontFamily: 'GilroyLight', color: '#717171', marginLeft: 30, marginTop: -20}}>
      Explore trending Music NFTs from Record Shop</p>

    <div className="d-flex" style={{marginLeft: 30}}>
      <div className="p-1">
        <img src={product1} alt=""/>
      </div>
      <div className="p-1">
        <img src={product1} alt=""/>
      </div>
      <div className="p-1">
        <img src={product1} alt=""/>
      </div>
      <div className="p-1">
        <img src={product2} alt=""/>
      </div>
      <div className="p-1">
        <img src={product2} alt=""/>
      </div>
      <div className="p-1">
        <img src={product2} alt=""/>
      </div>
      {/* <div className="p-1">
        <ProfileDisplay/>
      </div>
      <div className="p-1">
        <ProfileDisplay/>
      </div>
      <div className="p-1">
        <ProfileDisplay/>
      </div> */}
    </div>
      </div>

      </div>
    </div>

    )
  }
  
  export default Homepage2