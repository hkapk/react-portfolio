import React from "react";

function Nav({ currentPage, handlePageChange}) {
    return(
        <header>
        <h2>
          <a href="/">
           Hank Kapka 
          </a>
        </h2>
        <nav>
          <ul className="flex-row">
            <li className="mx-2">
              <a href="#about"
              onClick={() => handlePageChange('About')}
              className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
              >
                About me
              </a>
            </li>
            <li className="mx-2">
              <a href="#portfolio"
               onClick={() => handlePageChange('Portfolio')}
               className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>
              Portfolio</a>
            </li>
            <li className="mx-2">
              <a href="#contact"
               onClick={() => handlePageChange('Contact')}
               className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
              Contact
              </a>
            </li>
            <li className="mx-2">
              <a href="#resume"
               onClick={() => handlePageChange('Resume')}
               className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>Resume</a>
            </li>
          </ul>
        </nav>
      </header>
    );
}

export default Nav;
