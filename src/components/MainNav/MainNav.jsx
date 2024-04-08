import React, { useState } from 'react'
import './MainNav.css'
import logo from '../../assets/SYMBOL2.png';
import { Link } from 'react-router-dom';

const MainNav = ({ setShowLoginModal, setShowSignUpModal }) => {

    const [isNavOpen, setIsNavOpen] = useState(false)

    const toggleNavIcon = () => {
        setIsNavOpen(prev => !prev)
    }

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className='mainHeader' >
            <nav className='mainNav' >
                <img
                    src={logo}
                    alt='logo'
                    className='nav__logo'
                />
                <ul className='mainNavListParent' >

                    <Link to='/' >
                        <li>HOME</li>
                    </Link>
                    {/*<Link to='/about' >*/}
                    <li style={{ cursor: 'pointer' }} onClick={() => scrollToSection('footer')}>ABOUT</li>
                    {/*</Link>*/}
                    {/*<Link to='/contact' >
                        <li>CONTACT US</li>
    </Link>*/}
                    <li style={{ cursor: 'pointer' }} onClick={() => scrollToSection('testimonials')}>TESTIMONIALS</li>
                    <li style={{ cursor: 'pointer' }} onClick={() => scrollToSection('footer')}>CONTACT US</li>

                    <button onClick={() => setShowLoginModal(true)} className='HomeBtn' >
                        Login
                        <svg className='svg' width="25" height="25" viewBox="0 0 36 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.6514 28.3035H4.3897V8.36769H15.2492L19.7016 4.38053H4.3897C1.99309 4.38053 -3.05176e-05 6.16541 -3.05176e-05 8.36769V28.3035C-3.05176e-05 30.5058 1.99309 32.2907 4.3897 32.2907H26.5888C29.0473 32.2907 30.9785 30.5058 30.9785 28.3035L30.9782 14.5914L26.5885 18.578V28.3035H26.6514ZM34.6378 3.02177L32.6808 1.26867C31.3764 0.100549 29.2623 0.100549 27.9586 1.26867L25.2719 3.6753L31.9511 9.65667L34.6378 7.25004C35.9457 6.08317 35.9457 4.18989 34.6378 3.02177ZM10.2473 17.4883L8.92273 23.4205C8.806 23.9436 9.32101 24.4048 9.90503 24.3002L16.53 23.114C16.8532 23.0561 17.15 22.9138 17.3829 22.7052L30.3781 11.0676L23.6989 5.08626L10.6995 16.7283C10.4699 16.9339 10.3099 17.2018 10.2473 17.4883Z" fill="white" />
                        </svg>


                    </button>


                    <button onClick={() => setShowSignUpModal(true)} className='HomeBtn' >
                        Sign Up
                        <svg className='svg' width="25" height="25" viewBox="0 0 36 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.6514 28.3035H4.3897V8.36769H15.2492L19.7016 4.38053H4.3897C1.99309 4.38053 -3.05176e-05 6.16541 -3.05176e-05 8.36769V28.3035C-3.05176e-05 30.5058 1.99309 32.2907 4.3897 32.2907H26.5888C29.0473 32.2907 30.9785 30.5058 30.9785 28.3035L30.9782 14.5914L26.5885 18.578V28.3035H26.6514ZM34.6378 3.02177L32.6808 1.26867C31.3764 0.100549 29.2623 0.100549 27.9586 1.26867L25.2719 3.6753L31.9511 9.65667L34.6378 7.25004C35.9457 6.08317 35.9457 4.18989 34.6378 3.02177ZM10.2473 17.4883L8.92273 23.4205C8.806 23.9436 9.32101 24.4048 9.90503 24.3002L16.53 23.114C16.8532 23.0561 17.15 22.9138 17.3829 22.7052L30.3781 11.0676L23.6989 5.08626L10.6995 16.7283C10.4699 16.9339 10.3099 17.2018 10.2473 17.4883Z" fill="white" />
                        </svg>

                    </button>
                </ul>
                {!isNavOpen ? <i onClick={toggleNavIcon} className="ri-menu-line homeNavIcon"></i> :
                    <i onClick={toggleNavIcon} className="ri-close-line homeNavIcon"></i>}
            </nav>
            {isNavOpen && <div className='mobileNavListParent'>

                <i onClick={toggleNavIcon} className="ri-close-line closeHomeIcon homeNavIcon"></i>
                <ul className='mobileListParent' >

                    <Link to='/' >
                        <li>HOME</li>
                    </Link>
                    <Link to='/about' >
                        <li>ABOUT</li>
                    </Link>
                    <Link to='/about' >
                        <li>TESTIMONIALS</li>
                    </Link>
                    <Link to='/contact' >
                        <li>CONTACT US</li>
                    </Link>

                    <button onClick={() => setShowLoginModal(true)} className='HomeBtn' >
                        Login
                        <svg className='svg' width="25" height="25" viewBox="0 0 36 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.6514 28.3035H4.3897V8.36769H15.2492L19.7016 4.38053H4.3897C1.99309 4.38053 -3.05176e-05 6.16541 -3.05176e-05 8.36769V28.3035C-3.05176e-05 30.5058 1.99309 32.2907 4.3897 32.2907H26.5888C29.0473 32.2907 30.9785 30.5058 30.9785 28.3035L30.9782 14.5914L26.5885 18.578V28.3035H26.6514ZM34.6378 3.02177L32.6808 1.26867C31.3764 0.100549 29.2623 0.100549 27.9586 1.26867L25.2719 3.6753L31.9511 9.65667L34.6378 7.25004C35.9457 6.08317 35.9457 4.18989 34.6378 3.02177ZM10.2473 17.4883L8.92273 23.4205C8.806 23.9436 9.32101 24.4048 9.90503 24.3002L16.53 23.114C16.8532 23.0561 17.15 22.9138 17.3829 22.7052L30.3781 11.0676L23.6989 5.08626L10.6995 16.7283C10.4699 16.9339 10.3099 17.2018 10.2473 17.4883Z" fill="white" />
                        </svg>


                    </button>


                    <button onClick={() => setShowSignUpModal(true)} className='HomeBtn' >
                        Sign Up
                        <svg className='svg' width="25" height="25" viewBox="0 0 36 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.6514 28.3035H4.3897V8.36769H15.2492L19.7016 4.38053H4.3897C1.99309 4.38053 -3.05176e-05 6.16541 -3.05176e-05 8.36769V28.3035C-3.05176e-05 30.5058 1.99309 32.2907 4.3897 32.2907H26.5888C29.0473 32.2907 30.9785 30.5058 30.9785 28.3035L30.9782 14.5914L26.5885 18.578V28.3035H26.6514ZM34.6378 3.02177L32.6808 1.26867C31.3764 0.100549 29.2623 0.100549 27.9586 1.26867L25.2719 3.6753L31.9511 9.65667L34.6378 7.25004C35.9457 6.08317 35.9457 4.18989 34.6378 3.02177ZM10.2473 17.4883L8.92273 23.4205C8.806 23.9436 9.32101 24.4048 9.90503 24.3002L16.53 23.114C16.8532 23.0561 17.15 22.9138 17.3829 22.7052L30.3781 11.0676L23.6989 5.08626L10.6995 16.7283C10.4699 16.9339 10.3099 17.2018 10.2473 17.4883Z" fill="white" />
                        </svg>

                    </button>
                </ul>
            </div>
            }
        </header>
    )
}

export default MainNav