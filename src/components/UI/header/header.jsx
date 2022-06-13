import React from 'react'

import './header.scss'

import logo from '../../../assets/images/webmotors.svg';

class Header extends React.Component {

    render() {

        return (
            <header>
                <div className="logo">
                    <img src={logo} />
                </div>
            </header>
        )
    }
}

export default Header
