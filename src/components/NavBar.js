import React from 'react';

export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href={"/"}>Hackerclone</a>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a className="nav-link fa FaHome" href={"/"}><i className="fa fa-home"></i></a>
                </li>
            </ul>
        </nav>
  )
}