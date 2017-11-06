import React from 'react';

export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href={"/"}>Hackerclone</a>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a className="nav-link" href={"/"}>Posts</a>
                </li>
            </ul>
        </nav>
  )
}