import React from "react";

function Nav({ currentPage, handlePageChange}) {
    return(
        <header>
        <h2>
          <a href="https://hkapk.github.io/react-portfolio/">
           Hank Kapka 
          </a>
        </h2>
        <nav>
          <ul className="flex-row">
            <li className="mx-2">
              <a href="#About"
              onClick={() => handlePageChange('About')}
              className={currentPage === 'About' ? 'nav-link-active' : 'nav-link'}
              >
                About me
              </a>
            </li>
            <li className="mx-2">
              <a href="#Portfolio"
               onClick={() => handlePageChange('Portfolio')}
               className={currentPage === 'Portfolio' ? 'nav-link-active' : 'nav-link'}>
              Portfolio</a>
            </li>
            <li className="mx-2">
              <a href="#Contact"
               onClick={() => handlePageChange('Contact')}
               className={currentPage === 'Contact' ? 'nav-link-active' : 'nav-link'}>
              Contact
              </a>
            </li>
            <li className="mx-2">
              <a href="#Resume"
               onClick={() => handlePageChange('Resume')}
               className={currentPage === 'Resume' ? 'nav-link-active' : 'nav-link'}>
                 Resume</a>
            </li>
          </ul>
        </nav>
      </header>
    );
}

export default Nav;
