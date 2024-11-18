import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../assets/styles/Navbar.css";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <NavLink to="/" className="logo">
                    Wedding Master
                </NavLink>
            </div>
            <div className="menu-icon" onClick={toggleMenu}>
                {/* Хамбургер икона */}
                <span className={`bar ${isOpen ? "open" : ""}`}></span>
                <span className={`bar ${isOpen ? "open" : ""}`}></span>
                <span className={`bar ${isOpen ? "open" : ""}`}></span>
            </div>
            <ul className={`nav-links ${isOpen ? "active" : ""}`}>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "nav-link nav-link-active" : "nav-link"
                        }
                        onClick={toggleMenu}
                    >
                        Начало
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/За мен"
                        className={({ isActive }) =>
                            isActive ? "nav-link nav-link-active" : "nav-link"
                        }
                        onClick={toggleMenu}
                    >
                        За мен
                    </NavLink>
                </li>
                {/* Dropdown за Услуги */}
                <li className="dropdown">
                    <span
                        className="nav-link"
                        onClick={toggleDropdown}
                    >
                        Услуги
                    </span>
                    {dropdownOpen && (
                        <ul className="dropdown-menu dropdown-menu-active">
                            <li>
                                <NavLink
                                    to="/Сватбена церемония"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "dropdown-link dropdown-link-active"
                                            : "dropdown-link"
                                    }
                                    onClick={() => {
                                        setDropdownOpen(false);
                                        setIsOpen(false);
                                    }}
                                >
                                    Сватбена церемония
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/Сватбено събитие"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "dropdown-link dropdown-link-active"
                                            : "dropdown-link"
                                    }
                                    onClick={() => {
                                        setDropdownOpen(false);
                                        setIsOpen(false);
                                    }}
                                >
                                    Сватбено събитие
                                </NavLink>
                            </li>
                        </ul>
                    )}
                </li>
                <li>
                    <NavLink
                        to="/Галерия"
                        className={({ isActive }) =>
                            isActive ? "nav-link nav-link-active" : "nav-link"
                        }
                        onClick={toggleMenu}
                    >
                        Галерия
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/Блог"
                        className={({ isActive }) =>
                            isActive ? "nav-link nav-link-active" : "nav-link"
                        }
                        onClick={toggleMenu}
                    >
                        Блог
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/Контакти"
                        className={({ isActive }) =>
                            isActive ? "nav-link nav-link-active" : "nav-link"
                        }
                        onClick={toggleMenu}
                    >
                        Контакти
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
