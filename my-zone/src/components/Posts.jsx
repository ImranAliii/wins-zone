

import React from 'react';
import "./Post.css";
import { FaLongArrowAltRight } from 'react-icons/fa';

const Posts = () => {
  return (
    <div className="container-fluid mt-5">
      <div className="container">
        {/* Header Row */}
        <div className="row mt-2 align-items-center">
          <div className="col-md-4">
            <h1 style={{color:'#647D87'}}>New Stories Posts</h1>
          </div>
          <div className="col-md-8 text-end mt-sm-4">
            <button className="btn-all border-info rounded-circle text-info bg-info text-white border-0 mx-1 px-3 py-2">All</button>
            <button className="btn border-info rounded-pill text-info bg-white mx-1">Sports</button>
            <button className="btn border-info rounded-pill text-info bg-white mx-1">Technology</button>
            <button className="btn border-info rounded-pill text-info bg-white mx-1">Politics</button>
            <button className="btn border-info rounded-pill text-info bg-white mx-1">Business</button>
            <button className="btn border-info rounded-pill text-info bg-white mx-1">Education</button>
          </div>
        </div>


<div class="card-group mt-3">
  <div className="col-sm-6 col-lg-3">
  <div class="card mx-2 border-0"style={{background:'#EEEDEB'}}>
    <img src="https://www.winzmedia.org/media/app/uploads/news/woman-who-stowed-away-on-paris-flight-tries-to-flee-by-bus-to-canada-00f1b69d.jpg" className="img-fluid rounded-top"/>
    <div class="card-body">
      <p class="card-title"> 8 hour(s) ago</p>
      <h5 class="card-text">Asia 🇲🇲 / The New York Times</h5>
      <h6 className="mt-2">Myanmar’s War Has Pushed Doctors and Nurses Into Prostitution</h6>
      <p>#MandalayMyanmar, #WomensRights, #Prostitution</p>
      <button type="button" class="btn btn-info rounded-pill px-4" style={{ display: "block", margin: "0 auto" }}>Read More <FaLongArrowAltRight /></button>
    </div>
   
  </div>
  </div>
  <div className="col-sm-6 col-lg-3">
  <div class="card mx-2 border-0"style={{background:'#EEEDEB'}}>
    <img src="https://www.winzmedia.org/media/app/uploads/news/review-in-eureka-day-holding-space-for-those-you-hate-99e701fa.jpg"className="img-fluid rounded-top"/>
    <div class="card-body">
    <p class="card-title"> 8 hour(s) ago</p>
      <h5 class="card-text">Asia 🇲🇲 / The New York Times</h5>
      <h6 className="mt-2">Myanmar’s War Has Pushed Doctors and Nurses Into Prostitution</h6>
      <p>#MandalayMyanmar, #WomensRights, #Prostitution</p>
      <button type="button" class="btn btn-info rounded-pill px-4" style={{ display: "block", margin: "0 auto" }}>Read More <FaLongArrowAltRight /></button>
    </div>
   
  </div>
  </div>

  <div className="col-sm-6 col-lg-3">
  <div class="card mx-2 border-0"style={{background:'#EEEDEB'}}>
    <img src="https://www.winzmedia.org/media/app/uploads/news/florida-man-sentenced-to-death-for-killing-5-in-sebring-bank-shooting-6aa18b5f.jpg"className="img-fluid rounded-top"/>
    <div class="card-body">
    <p class="card-title"> 8 hour(s) ago</p>
      <h5 class="card-text">Asia 🇲🇲 / The New York Times</h5>
      <h6 className="mt-2">Myanmar’s War Has Pushed Doctors and Nurses Into Prostitution</h6>
      <p>#MandalayMyanmar, #WomensRights, #Prostitution</p>
      <button type="button" class="btn btn-info rounded-pill px-4" style={{ display: "block", margin: "0 auto" }}>Read More <FaLongArrowAltRight /></button>
    </div>
   
  </div>
  </div>

<div className="col-sm-6 col-lg-3">
  <div class="card mx-2 border-0" style={{background:'#EEEDEB'}}>
    <img src="https://www.winzmedia.org/media/app/uploads/news/an-excruciating-wait-for-abundant-life-christian-school-families-after-_6nh1h4f.jpg"className="img-fluid rounded-top"/>
    <div class="card-body">
    <p class="card-title"> 8 hour(s) ago</p>
      <h5 class="card-text">Asia 🇲🇲 / The New York Times</h5>
      <h6 className="mt-2">Myanmar’s War Has Pushed Doctors and Nurses Into Prostitution</h6>
      <p>#MandalayMyanmar, #WomensRights, #Prostitution</p>
      <button type="button" class="btn btn-info rounded-pill px-4" style={{ display: "block", margin: "0 auto" }}>Read More <FaLongArrowAltRight /></button>
    </div>
   
  </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default Posts;

