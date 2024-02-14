// MainContent.js
import React from 'react';
import './MainContent.css'; 

const MainContent = () => {
  return (
    <div className="Container">
        
      <div className="page-header">
        <span className="page-subtitle">Browsing Category</span>
        <h1 className="page-title">Courses</h1>
        <div className="card-count">10 Posts</div>
      </div>

    <div className="main-content">

      <section className="course-list">

        <article className="course">
          
          <img className="course-image" src="https://www.interviewbit.com/blog/wp-content/uploads/2022/03/Best-Data-Structures-and-Algorithms-Courses-380x250.png" alt="Best Data Structure & Algorithm Courses" />

          <div className="course-info">
            <a href="category-tag">COURSES</a>
            <h2>15 Best Courses for Data Structures and Algorithms (2024)</h2>
            <p>Introduction The world of computer science revolves around data structures and algorithms. They serve as the bedrock for...</p>
            <div className="card-footer">
              <span className='course-date'>January 4, 2024</span>
              <button className='read-more '>Read More</button>
            </div>
          </div>

        </article>


        <article className="course">
          
          <img className="course-image" src="https://www.interviewbit.com/blog/wp-content/uploads/2022/03/Best-Data-Science-Courses-380x250.png" alt="Best Data Structure & Algorithm Courses" />

          <div className="course-info">
            <a href="category-tag">COURSES</a>
            <h2>15 Best Courses for Data Structures and Algorithms (2024)</h2>
            <p>Introduction The world of computer science revolves around data structures and algorithms. They serve as the bedrock for...</p>
            <div className="card-footer">
              <span className='course-date'>January 4, 2024</span>
              <button className='read-more '>Read More</button>
            </div>
          </div>

        </article>

        
        <article className="course">
          
          <img className="course-image" src="https://www.interviewbit.com/blog/wp-content/uploads/2022/03/Machine-Learning-Courses-380x250.png" alt="Best Data Structure & Algorithm Courses" />

          <div className="course-info">
            <a href="category-tag">COURSES</a>
            <h2>15 Best Courses for Data Structures and Algorithms (2024)</h2>
            <p>Introduction The world of computer science revolves around data structures and algorithms. They serve as the bedrock for...</p>
            <div className="card-footer">
              <span className='course-date'>January 4, 2024</span>
              <button className='read-more '>Read More</button>
            </div>
          </div>

        </article>
    
      </section>


      <aside className="sidebar">
        <h2>Categories</h2>
        <ul>
          <li><a href="#">Applications</a></li>
          <li><a href="#">Architecture</a></li>
          <li><a href="#">Books</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Characteristics</a></li>
          <li><a href="#">Coding Problems</a></li>
          <li><a href="#">Commands</a></li>
          <li><a href="#">Compare</a></li>
          <li><a href="#">Components</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Frameworks</a></li>
          
        </ul>
      </aside>

    </div>
    </div>
  );
}

export default MainContent;
