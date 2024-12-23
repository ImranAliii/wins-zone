// import React from "react";
// import "./Footer.css";
// import { MdOutlineFacebook } from "react-icons/md";
// import { FaInstagram } from "react-icons/fa6";
// import { RiTiktokFill } from "react-icons/ri";

// const Footer = () => {
//   return (
//     <>
//       <div className="container-fluid section-footer">
//         <div
//           className="container footer-container"
//           style={{ borderBottom: "2px solid white", paddingBottom: "30px" }}
//         >
//           <div className="row">
//             <div className="col-4">
//               <img
//                 src="https://www.winzmedia.org/static/assets/img/white_logo.png"
//                 style={{ width: "100px", fontWeight: "bold" }}
//               />
//               <div className="footer-para" style={{ lineHeight: "1.8" }}>
//                 <p>
//                   Winzone delivers reliable, unbiased news from across the
//                   globe, prioritizing truth, thorough reporting, and unwavering
//                   commitment to excellence.
//                 </p>
//                 <MdOutlineFacebook /> <FaInstagram />
//                 <RiTiktokFill />
//               </div>
//             </div>
//             <div className="col-3">
//               <h6>Foundational Principles</h6>
//               <p> Honest</p>
//               <p>Journalism</p>
//               <p> Bravery</p>
//             </div>

//             <div className="col-2">
//               <h6>Pages</h6>
//               <p> Terms And Conditions</p>
//               <p> About</p>
//               <p> Privacy Policy</p>
//             </div>
//             <div className="col-3">
//               <h6>Contact Us</h6>
//               <p>
//                 {" "}
//                 123 University Avenue, Bufflow
//                 <br /> State University
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="row subfooter">
//           <div className="col-12">
//             <p class="copyright-text text-offwhite text-center fs-15 mb-0">
//               <span class="text-white">Note:</span> This project is for
//               educational purposes only, intended for{" "}
//               <strong class="text-white">
//                 Bufflow State University students.
//               </strong>
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Footer;

// import React from "react";
// import "./Footer.css";
// import { MdOutlineFacebook } from "react-icons/md";
// import { FaInstagram } from "react-icons/fa6";
// import { RiTiktokFill } from "react-icons/ri";

// const Footer = () => {
//   return (
//     <>
//       <div className="container-fluid section-footer">
//         <div
//           className="container footer-container"
//           style={{ borderBottom: "2px solid white", paddingBottom: "30px" }}
//         >
//           <div className="row">
//             <div className="col-4">
//               <img
//                 src="https://www.winzmedia.org/static/assets/img/white_logo.png"
//                 style={{ width: "100px", fontWeight: "bold" }}
//               />
//               <div className="footer-para" style={{ lineHeight: "1.8" }}>
//                 <p>
//                   Winzone delivers reliable, unbiased news from across the
//                   globe, prioritizing truth, thorough reporting, and unwavering
//                   commitment to excellence.
//                 </p>
//                 <div style={{ fontSize: "30px", marginTop: "10px" }}>
//                   <MdOutlineFacebook style={{ marginRight: "15px" }} />
//                   <FaInstagram style={{ marginRight: "15px" }} />
//                   <RiTiktokFill />
//                 </div>
//               </div>
//             </div>
//             <div className="col-3">
//               <h6>Foundational Principles</h6>
//               <p> Honest</p>
//               <p>Journalism</p>
//               <p> Bravery</p>
//             </div>

//             <div className="col-2">
//               <h6>Pages</h6>
//               <p> Terms And Conditions</p>
//               <p> About</p>
//               <p> Privacy Policy</p>
//             </div>
//             <div className="col-3">
//               <h6>Contact Us</h6>
//               <p>
//                 123 University Avenue, Bufflow
//                 <br /> State University
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="row subfooter">
//           <div className="col-12">
//             <p className="copyright-text text-offwhite text-center fs-15 mb-0">
//               <span className="text-white">Note:</span> This project is for
//               educational purposes only, intended for{" "}
//               <strong className="text-white">
//                 Bufflow State University students.
//               </strong>
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Footer;


import React from "react";
import "./Footer.css";
import { MdOutlineFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { RiTiktokFill } from "react-icons/ri";
import { FaRegNewspaper } from "react-icons/fa";
import { IoMdDesktop } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
      <div className="container-fluid section-footer pt-5 pb-5" style={{ backgroundColor: "black" }}>
        <div
          className="container footer-container"
          style={{
            borderBottom: "2px solid white",  // White border at the bottom
            paddingBottom: "30px"
          }}
        >
          <div className="row">
            <div className="col-sm-12 col-md-4">
              <img
                src="https://www.winzmedia.org/static/assets/img/white_logo.png"
                style={{ width: "100px", fontWeight: "bold" }}
              />
              <div className="footer-para" style={{ lineHeight: "1.8" }}>
                <p>
                  Winzone delivers reliable, unbiased news from across the
                  globe, prioritizing truth, thorough reporting, and unwavering
                  commitment to excellence.
                </p>
                <div style={{ fontSize: "30px", marginTop: "10px",color:'#fff' }}>
                  <MdOutlineFacebook style={{ marginRight: "15px" }} />
                  <FaInstagram style={{ marginRight: "15px" }} />
                  <RiTiktokFill />
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-3 text-white mt-3">
              <h6>Foundational Principles</h6>
              <p><FaRegNewspaper style={{ marginRight: "1px" }}/> Honest</p>
              <p><FaRegNewspaper style={{ marginRight: "1px" }}/>Journalism</p>
              <p> <FaRegNewspaper style={{ marginRight: "1px" }}/>Bravery</p>
            </div>

            <div className="col-sm-12 col-md-3 mt-3 text-white">
              <h6>Pages</h6>
              <p><IoMdDesktop style={{ marginRight: "1px" }}/> Terms And Conditions</p>
              <p> <IoMdDesktop style={{ marginRight: "1px" }} />About</p>
              <p><IoMdDesktop style={{ marginRight: "1px" }}/> Privacy Policy</p>
            </div>
            <div className="col-sm-12 col-md-2 mt-3 text-white">
              <h6>Contact Us</h6>
              <p><FaLocationDot style={{ marginRight: "1px",fontSize: "20px",color:'white' }}/>
                123 University Avenue, Bufflow
                <br /> State University
              </p>
            </div>
          </div>
        </div>
        <div className="row subfooter">
          <div className="col-12">
            <p className="copyright-text text-offwhite text-center fs-15 mb-0">
              <span className="text-white mt-2">Note:</span> <a style={{ color: 'gray' }}>This project is for
              educational purposes only, intended for</a>
              <strong className="text-white">
                Bufflow State University students.
              </strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
