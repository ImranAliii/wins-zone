import React from "react";
import "./Searchsection.css";
import { CiSearch } from "react-icons/ci";

const SearchSection = () => {
  return (
    <>
      <div className="container-fluid search-container-fluid">
        <div
          className="container search-container"
          style={{ boxShadow: "5px 5px green",background:'#F5F5F7' }}
        >
          {/* row-1 */}
          <div className="row">
            <div className="col-md-6">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Please enter search queries here"
                aria-label="Search"
/>
            </div>
            <div className="col-md-6">
              <select class="form-select" aria-label="Default select example">
                <option>Choose news sources</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>

        

<div className="row mt-2">
  <div className="col-md-5">
    <select className="form-select" aria-label="Default select example">
      <option selected>Choose a region</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>
  <div className="col-md-5">
    <select className="form-select" aria-label="Default select example">
      <option selected>Choose a country</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>
 

    <div className="col-md-2 mt-sm-2 mt-md-0">
      <form className="d-flex">
        <button className="btn submit-btn fw-bold w-100 mt-sm-2 mt-md-0" type="submit">
          <span>Submit <b><CiSearch /></b></span>
         
        </button>
      </form>
    </div>
   
</div>

        </div>
      </div>
    </>
  );
};

export default SearchSection;


