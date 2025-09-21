import { useState } from "react";
import "../../assets/Navbar.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div id="Navbar">
            <div className="container">
                {/* Burger tugma - faqat mobile/tablet */}
                <div className="burger_menu">
                    <button className="burger" onClick={() => setIsOpen(true)}>
                        ☰
                    </button>
                </div>

                {/* Logo */}
                <div className="logo_box">
                    {/*<img src="" alt="Logo"/>*/}
                    <h1>HUSAN SHER</h1>
                </div>

                {/* Desktop navigation + language */}
                <div className="desktop_nav">
                    <ul className="nav_links">
                        <a href="#Navbar"><li>Home</li></a>
                        <a href="#AboutUs"><li>About</li></a>
                        <a href="#Products"><li>Our Products</li></a>
                        <a href="#ContactForm"><li>Contact</li></a>
                    </ul>

                    <div className="lang_provider">
                        <select>
                            <option value="uz">UZ</option>
                            <option value="ru">RU</option>
                            <option value="en">EN</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Slide menyu - mobile & tablet */}
            <div className={`navigation_menu ${isOpen ? "open" : ""}`}>
                <button className="close_btn" onClick={() => setIsOpen(false)}>
                    ✕
                </button>

                <ul>
                    <a href="#Navbar"><li>Home</li></a>
                    <a href="#AboutUs"><li>About</li></a>
                    <a href="#Products"><li>Our Products</li></a>
                    <a href="#ContactForm"><li>Contact</li></a>
                </ul>

                <div className="lang_provider_mobile">
                    <select>
                        <option value="uz">UZ</option>
                        <option value="ru">RU</option>
                        <option value="en">EN</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
