import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    // <footer className="footer p-3 bg-gradient-to-r from-orange-400 via-red-600 to-yellow-500">
    //   <Container className="">
    //     <Row>
    //       <Col md={4} className="footer-col">
    //         <h5>About Us</h5>
    //         <p>
    //           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at
    //           felis eu nunc commodo ullamcorper.
    //         </p>
    //       </Col>
    //       <Col md={4} className="footer-col">
    //         <h5>Links</h5>
    //         <ul className="list-unstyled">
    //           <li>
    //             <a className="text-white" href="/">
    //               Home
    //             </a>
    //           </li>
    //           <li>
    //             <a className="text-white" href="/About">
    //               About
    //             </a>
    //           </li>
    //           <li>
    //             <Link href="#">Services</Link>
    //           </li>
    //           <li>
    //             <Link href="#">Contact</Link>
    //           </li>
    //         </ul>
    //       </Col>
    //       <Col md={4} className="footer-col">
    //         <h5>Contact Us</h5>
    //         <address>
    //           123 Main Street, City
    //           <br />
    //           Country
    //           <br />
    //           <a className="text-white" href="tel:+123456789">
    //             +123 456 789
    //           </a>
    //           <br />
    //           <a className="text-white" href="mailto:info@example.com">
    //             info@example.com
    //           </a>
    //         </address>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col className="text-center">
    //         <p className="footer-bottom-text">
    //           &copy; {new Date().getFullYear()} Your Website | All rights
    //           reserved
    //         </p>
    //       </Col>
    //     </Row>
    //   </Container>
    // </footer>

    <div className="w-full h-[412px] bg-gray-800">
      <div className="max-w-[1440px] mx-auto px-4 py-8 text-white relative">
        {/* First Positioned div */}
        <div className="w-[367px] h-[200px] absolute top-[60px] left-[150px] flex flex-col justify-center items-start px-4 py-2">
          <div className="w-[226px] h-[54px] absolute top-[146px] right-[141px] flex flex-col justify-center items-start">
            {/* First Row */}
            <span className="text-white text-[14px] font-regular font-inter">
            <FontAwesomeIcon icon={faCalendar} className="pr-2"/>
              Monday - Friday / 8AM to 5PM</span>
            {/* Second Row */}
            
            <span className="text-white text-[14px] font-regular font-inter mt-2">
              <FontAwesomeIcon icon={faPhoneAlt} className="pr-2" />
              +1234567890
            </span>
          </div>
        </div>

        {/* Navigation Positioned div */}
        <div className="w-[100px] h-[189px] absolute top-[60px] left-[639px]">
          {/* Title */}
          <h1 className="text-white text-[20px] font-semibold font-intertight">Navigation</h1>

          {/* Links */}
          <ul className="text-gray-500 space-y-2 mt-4">
            <li>
              <a href="#" className="text-[16px]  font-inter hover:text-yellow-300">Home</a>
            </li>
            <li>
              <a href="#" className="text-[16px] font-regular font-inter hover:text-yellow-300">About Us</a>
            </li>
            <li>
              <a href="#" className="text-[16px] font-regular font-inter hover:text-yellow-300">Our Services</a>
            </li>
            <li>
              <a href="#" className="text-[16px] font-regular font-inter hover:text-yellow-300">Our Team</a>
            </li>
          </ul>
        </div>

        {/* Services Positioned div */}
        <div className="w-[170px] h-[189px] absolute top-[60px] left-[858px]">
          {/* Title */}
          <h1 className="text-white text-[20px] font-semibold font-intertight">Services</h1>

          {/* Links */}
          <ul className="text-gray-500 space-y-2 mt-4">
            <li>
              <a href="#" className="text-[16px]  font-inter hover:text-yellow-300">Student Visa</a>
            </li>
            <li>
              <a href="#" className="text-[16px] font-regular font-inter hover:text-yellow-300">Visa Consultation</a>
            </li>
            <li>
              <a href="#" className="text-[16px] font-regular font-inter hover:text-yellow-300">Document Preparation</a>
            </li>
            <li>
              <a href="#" className="text-[16px] font-regular font-inter hover:text-yellow-300">Visa Application</a>
            </li>
          </ul>
        </div>
        {/* Help Positioned div */}
        <div className="w-[140px] h-[189px] absolute top-[60px] left-[1150px]">
          {/* Title */}
          <h1 className="text-white text-[20px] font-semibold font-intertight">Help</h1>

          {/* Links */}
          <ul className="text-gray-500 space-y-2 mt-4">
            <li>
              <a href="#" className="text-[16px]  font-inter hover:text-yellow-300">Customer Support</a>
            </li>
            <li>
              <a href="#" className="text-[16px] font-regular font-inter hover:text-yellow-300">How It Works</a>
            </li>
            <li>
              <a href="#" className="text-[16px] font-regular font-inter hover:text-yellow-300">Terms & Condition</a>
            </li>
            <li>
              <a href="#" className="text-[16px] font-regular font-inter hover:text-yellow-300">Privacy Policy</a>
            </li>
          </ul>
        </div>
        {/* Social-Icons Positioned div */}
        <div className="w-[158px] h-[32px] bg-red-500 absolute top-[340px] left-[150px]">
          <p className="text-white">Another content here</p>
        </div>
      </div>
    </div>



  );
};

export default Footer;
