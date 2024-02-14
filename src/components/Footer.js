import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">

        <div className="footer-left">
            <img src="https://www.interviewbit.com/blog/wp-content/uploads/2021/09/IB-Logo.png" alt="" /> <br />
            <span>© 2021 InterviewBit</span>
        </div>

        <div className="footer-links">
          <a href="/python-course">Best Free Python Course</a>
          <a href="/javascript-course">Top Free JavaScript Courses</a>
          <a href="/c-plus-plus-course">Best Free C++ Course</a>
          <a href="/c-plus-plus-course">Top Free JavaScript Courses</a>
          <a href="/c-plus-plus-course">Best Data Science Courses - Free & Paid</a>
          <a href="/c-plus-plus-course">Best Courses for Data Structures & Algorithms- Free & Paid</a>
          <a href="/c-plus-plus-course">Best Machine Learning Courses – Free & Paid</a>
          <a href="/c-plus-plus-course">Best System Design Courses – Free & Paid</a>
          <a href="/c-plus-plus-course">Best Full Stack Developer Courses – Free & Paid</a>
          <a href="/c-plus-plus-course">Best Web Development Courses – Free & Paid</a>
  
        </div>

        <div className="footer-social">
          <a href="#" className="social-icon"><i className="fa fa-facebook-f"></i></a>
          <a href="#" className="social-icon"><i className="fa fa-linkedin"></i></a>
          <a href="#" className="social-icon"><i className="fa fa-twitter"></i></a>
          <a href="#" className="social-icon"><i className="fa fa-instagram"></i></a>
          <a href="#" className="social-icon"><i className="fa fa-youtube-square"></i></a>
        </div>

      </div>

    </footer>
  );
}

export default Footer;
