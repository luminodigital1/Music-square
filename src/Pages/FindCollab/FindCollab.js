import React from "react";
import HomepageNavBar from "../../components/Homepage1/Homepage1Navbar/HomepageNavBar";
import FindCollabSearchbar from "../../components/FindCollabPage/FindCollabSearchbar/FindCollabSearchbar";
import FindCollabFilterPannel from "../../components/FindCollabPage/Filter/FindCollabFilterPannel";
import CollabResult from "../../components/FindCollabPage/CollabResult/CollabResult";

const FindCollab = () => {
    
    return (
    <div style={{overflowX: 'hidden'}}>
      <HomepageNavBar/>
      <FindCollabSearchbar/>
      <div className="d-flex" style={{backgroundColor: '#e8eaed', marginTop:30}}>
        <div className="col-md-3" style={{backgroundColor: '#e8eaed', paddingTop: 20, marginTop:30, paddingBottom: 20, paddingLeft: 50}}>
          <FindCollabFilterPannel/>
        </div>
        <div className="col-md-6" style={{
          marginLeft: 30, marginTop: 50, paddingTop: 20, backgroundColor: "white",
          paddingLeft: 10, paddingRight: 10
          }}>
          <p>256 Collab Results</p>
          <CollabResult/>
        </div>
      </div>
    </div>

    )
  }
  
  export default FindCollab