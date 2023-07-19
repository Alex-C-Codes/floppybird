import React, { useState } from 'react';

import Homepage from './pages/Homepage';
import About from './pages/About';

// import mainLogo from '../assets/images/spaghettisites.png';

// Define the homepage component
export default function PortfolioContainer() {
  const [activeTab, setActiveTab] = useState('');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="App-header">
      <nav className='nav-bar'>
        <div className='nav-header'>
          <h1 className='nav-title'>
            <div 
              className={activeTab === 'home' ? 'active' : ''}
              onClick={() => handleTabChange('home')}
            >
              TownDefense
            </div>
          </h1>
          <ul className='nav-list'>
            <li
              className={activeTab === 'home' ? 'active' : ''}
              onClick={() => handleTabChange('home')}
            >
              Home
            </li>
            <li
              className={activeTab === 'about' ? 'active' : ''}
              onClick={() => handleTabChange('about')}
            >
              About
            </li>
          </ul>
        </div>
      </nav>

      <div className='content-wrapper'>
        <div className='column-left'></div>

        <div className="content">
          {activeTab === '' && <Homepage />}
          {activeTab === 'home' && <Homepage />}
          {activeTab === 'about' && <About />}
        </div>
        
        <div className='column-right'></div>
      </div>
      
      <footer className='footer'>
        <p>&copy; 2023 Alex C Studios. All rights reserved.</p>
        {/* <div><img src={mainLogo} alt='logo' style={{height:50, width:50}}/></div> */}
      </footer>
    </div>
  );
}



// const pagesContainer = () => {
  
// };

// export default pagesContainer;

// export default function PortfolioContainer() {
//   const [currentPage, setCurrentPage] = useState('Homepage');

//   const renderPage = () => {
//     if (currentPage === 'Homepage') {
//       return <Homepage />;
//     }
//     if (currentPage === 'About') {
//       return <About />;
//     }
//     return <Homepage />
//   };

//   const handlePageChange = (page) => setCurrentPage(page);

//   return (
//     <div>

//       <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />

//       {renderPage()}
//       {/* <Homepage /> */}
//       {/* <div className='m-5'><Footer /></div> */}
//     </div>
//   );
// }