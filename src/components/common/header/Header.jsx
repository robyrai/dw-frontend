import React from 'react';
import {Navbar} from "../../common";

import './Header.css';

function Header() {
    return (
        <section className="header">
            <section className="header-top">
                <section className="header-top__logo">
                    <a href="/" className="header-logo">PPdw</a>
                </section>
                <section className="header-top__navbar">
                    <section className="header-top__navigation">
                        <Navbar/>
                    </section>
                    <hr className="header-top__separator"/>
                </section>
            </section>
            <section className="header-bottom">
                <section className="header-bottom__phone">
                    866-222-2222
                </section>
                <section className="header-bottom__email">
                    info@priceplace.com
                </section>
            </section>
        </section>
    )
}

export default Header;
