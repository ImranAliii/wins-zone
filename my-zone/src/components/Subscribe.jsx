import React from 'react';
import './Subscribe.css';
import { GoArrowRight } from 'react-icons/go';

// const Subscribe = () => {
//     return (
//         <div className="SubscribeSection mt-5">
//             <div className="subscribe-box">
//                 {/* Image Section */}
//                 <div className="row">
//                       <div className="col-sm-12 col-md-5">
//                       <div className="subscribe-img">
//                     <img src="https://www.winzmedia.org/static/assets/img/subscribe.jpg" alt="Subscribe"  className="img-fluid" />
//                 </div>
//                       </div>
//                       <div className="col-sm-12 col-md-5">
//                       <div className="subscribe-content">
//                     <h3 className="fs-26 fw-medium text-white ls-5 xmb-5">
//                         Subscribe for updates
//                     </h3>
//                     <p className="text-white fw-light mb-25">
//                         This year has been a whirlwind of drama and controversy in the world.
//                     </p>
//                     {/* Form Section */}
//                     <form action="#" className="subscribe-form">
//                         <input
//                             type="email"
//                             placeholder="Enter your email"
//                             className="subscribe-input"
//                         />
//                         <button className="btn btn-info subscribe-button">
//                             Subscribe Now <GoArrowRight />
//                         </button>
//                     </form>
//                     <hr />
//                 </div>
//                       </div>
//                 </div>

//                 {/* Content Section */}

//             </div>
//         </div>
//     );
// };
// export default Subscribe;


const Subscribe = () => {
  return (
    <>
      <div className="container-fluid mt-5">
        <div className="container bg-dark rounded">
          {/* <div className="row p-5">
            <div className="col-sm-12 col-md-5">
                <img
                  src="https://www.winzmedia.org/static/assets/img/subscribe.jpg"
                  alt="Subscribe"
                  className="img-fluid w-55"
                />
            </div>
            <div className="col-sm-12 col-md-7 pt-5">
              <h3 className="fs-26 fw-medium text-white ls-5 xmb-5">
                Subscribe updates
              </h3>
              <p className="text-white fw-light mb-25">
                This year has been a whirlwind of drama and controversy in the
                world.
              </p>
            <div className="col-sm-6 col-md-6">
              <form action="#" className="subscribe-form" style={{borderBottom:'1px solid gray',padding:'10px'}}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="subscribe-input"/>
                <button className="btn btn-info subscribe-button">
                  Subscribe Now <GoArrowRight />
                </button>
              </form>
            </div>
          </div>
          </div> */}
          <div className="row p-5">
  {/* Image Section */}
  <div className="col-12 col-md-5 d-flex justify-content-center align-items-center mb-4 mb-md-0">
    <img
      src="https://www.winzmedia.org/static/assets/img/subscribe.jpg"
      alt="Subscribe"
      className="img-fluid w-75"
    />
  </div>

  {/* Content Section */}
  <div className="col-12 col-md-7 pt-4">
    <h3 className="fs-26 fw-medium text-white ls-5 mb-4">
      Subscribe updates
    </h3>
    <p className="text-white fw-light mb-4">
      This year has been a whirlwind of drama and controversy in the world.
    </p>

    {/* Form Section */}
    <div className="col-12">
      <form
        action="#"
        className="subscribe-form"
        style={{ borderBottom: '1px solid gray', padding: '10px' }}
      >
        <div className="row">
          <div className="col-12 col-sm-12 col-md-8 mb-3 mb-sm-0">
            <input
              type="email"
              placeholder="Enter your email"
              className="form-control subscribe-input"
              style={{ border: 'none', boxShadow: 'none' }}
            />
          </div>
          <div className="col-md-4 text-center">
            <button className="btn btn-info rounded-pill subscribe-button px-3 ml-4 pe-sm-0">
             <span>Subscribe Now <a className='px-1 text-dark'><GoArrowRight/></a></span> 
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
