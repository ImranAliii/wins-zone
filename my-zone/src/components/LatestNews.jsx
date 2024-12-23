import React from "react";
import "./LatestNews.css";
const LatestNews = () => {
  return (
    <>
    
<div className="container-fluid mt-5">
  <div className="container">
      <div className="row">
        <div className="col text-center">

      <h1>Latest News</h1>
        </div>
      </div>
      <div className="row mt-4">
          <div className="col-md-3 text-center">
          <img src="https://www.winzmedia.org/media/app/uploads/news/us-agrees-to-pay-116-million-to-settle-sexual-abuse-claims-at-californi_OgRqfr7.jpg" alt="News"className='img-thumnal w-100 rounded-pill mb-2'/>
            <h6>U.S. Agrees to Pay $116 <br/>Million to Settle Sexual <br/>Abuse Claims</h6>
          </div>
          <div className="col-md-3 text-center">
          <img src="https://www.winzmedia.org/media/app/uploads/news/trump-picks-herschel-walker-to-be-ambassador-to-the-bahamas-03341c3e.jpg" alt="News"className="sidebar-image w-100 rounded-pill mb-2"/>
            <h6>Trump Picks Herschel Walker<br/> to Be Ambassador to <br/>the Bahamas</h6>
          </div>
          <div className="col-md-3 text-center">
          <img
            src="https://www.winzmedia.org/media/app/uploads/news/uk-police-chiefs-were-too-slow-to-respond-to-summer-riots-report-says-8acdae08.jpg"
            alt="News"
            className="sidebar-image w-100 rounded-pill mb-2"/>
            <h6>U.K. Police Chiefs Were <br/>Too Slow to Respond<br/> to Riots</h6>
          </div>
          <div className="col-md-3 text-center">
          <img src="https://www.winzmedia.org/media/app/uploads/news/wednesday-briefing-be072a5f.jpg" alt="News"  className="sidebar-image w-100 rounded-pill  mb-2"/>
            <h6>Americas 🇺🇸 / The <br/> York Times Wednesday<br/> Briefing</h6>
          </div>

      </div>
  </div>
</div>
    
    </>
  );
};

export default LatestNews;
