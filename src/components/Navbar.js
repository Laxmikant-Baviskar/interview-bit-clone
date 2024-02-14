
import React from 'react';
import './Navbar.css'; 


const Navbar = () => {
  return (
    <nav>
      <div className="nav-left">
        <img src="https://www.interviewbit.com/blog/wp-content/uploads/2021/09/IB-Logo.png" alt="InterviewBit" />
        <a href="#">Scaler</a>
        <a href="#">Practice</a>
        <a href="#">Interview Questions</a>
        <a href="#">Contests</a>
        <a href="#">Mock Interviews</a>
        <div className="dropdown">
          <button className="dropbtn">
            <a href="#">Online Compilers <i class="fa fa-angle-down"></i></a>
          </button>
          <div className="dropdown-content">
            <a href="#">online C Compiler</a>
            <a href="#">online C++ Compiler</a>
            <a href="#">online Java Compiler</a>
          </div>
        </div> 
      </div>
      <div className="nav-right">
        <button className="button-in">Sign in</button>
        <a href="#"><i className="fa fa-search"></i></a>
      </div>
    </nav>
  );
}

export default Navbar;
