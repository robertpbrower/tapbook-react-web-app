import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavigationSidebar() {
  const active = useLocation().pathname
  return (
    <div className="list-group">
      <Link
        to="#"
        className="list-group-item list-group-item-action disabled"
        tabIndex="-1"
        aria-disabled="true"
      >
        <i className="fab fa-untappd text-black pe-1" />
        <span className='d-none d-xl-inline ps-1'>theTapBook</span>
      </Link>

      <Link to="/" className={`list-group-item list-group-item-action ${active === '/' ? 'active' : ''}`}>
        <i className="fa fa-home pe-1" />
        <span className="d-none d-xl-inline ps-1">Home</span>
      </Link>
      <Link to="/search" className={`list-group-item list-group-item-action ${active.includes('/search') ? 'active' : ''}`}>
        <i className="fas fa-search pe-1" />
        <span className="d-none d-xl-inline ps-1">Search</span>
      </Link>
      <Link to="/profile" className={`list-group-item list-group-item-action ${active.includes('/profile') ? 'active' : ''}`}>
        <i className="fa fa-user pe-1" />
        <span className="d-none d-xl-inline ps-1">Profile</span>
      </Link>

    </div>
  );
}
export default NavigationSidebar;
