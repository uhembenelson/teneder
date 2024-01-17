import './nav.css';
import logo from '../../assets/SYMBOL.png';
import bell from '../../assets/Doorbell.png';
import vector from '../../assets/Vector.png';
import profile from '../../assets/PROFILE.png'
import user from '../../assets/Male User.png';
import arrow from '../../assets/Expand Arrow.png';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function BidderNav() {
	const [showMenu, setShowMenu] = useState(false);
	const [isExpanded, setIsExpanded] = useState(false);

	function handleShowMenu() {
		setShowMenu(!showMenu);
		setIsExpanded(!setIsExpanded);
	}

	const navigate = useNavigate()
	return (
		<nav className='nav'>
			<div className='nav__container'>
				<Link to='/bidder/home' >
					<img
						src={logo}
						alt='logo'
						className='nav__logo'
					/></Link>

				<ul className='nav__items'>
					<Link to='/bidder/notification' >
						<li>
							notifications
							<img
								src={bell}
								alt='notification'
							/>
						</li>
					</Link>
					<li>
						wallet
						<img
							src={vector}
							alt='vector'
						/>
					</li>
					<li className='popUpContainer'>
						grp-cp09
						<img
							src={user}
							alt='user'
						/>
						<img
							src={arrow}
							alt='arrow'
						/>
						<div className='navPopUp' >
							<div className='navPopUpBox' >
								<div className='navPopUpTop' >
									<img src={profile} alt='' />
									<div className='navPopUpDetails' >
										<div className='navPopNameType'>
											<p className='navPopUpName'>GRP-CP09</p>
											<p className='navPopUpDept'>Company</p>
										</div>
										<p className='navPopUpEmail'>GRP-CP09@mail.com</p>
									</div>
								</div>
								<div className='navPopUpTop' onClick={() => navigate('/bidder/profile')} >
									<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M6.07646 2.48105C6.07646 2.13043 5.79222 1.84619 5.4416 1.84619C5.09097 1.84619 4.80673 2.13043 4.80673 2.48105V3.5466C3.26925 3.65511 2.05566 4.93675 2.05566 6.50185V7.34833C2.05566 8.91343 3.26925 10.1951 4.80673 10.3036L4.80673 14.7551C4.80673 15.1057 5.09097 15.3899 5.4416 15.3899C5.79222 15.3899 6.07646 15.1057 6.07646 14.7551V10.3036C7.61394 10.1951 8.82753 8.91343 8.82753 7.34833V6.50185C8.82753 4.93675 7.61394 3.65511 6.07646 3.5466V2.48105ZM5.86484 4.80888H5.01835C4.08335 4.80888 3.32539 5.56685 3.32539 6.50185V7.34833C3.32539 8.28333 4.08335 9.0413 5.01835 9.0413H5.86484C6.79984 9.0413 7.5578 8.28333 7.5578 7.34833V6.50185C7.5578 5.56685 6.79984 4.80888 5.86484 4.80888Z" fill="black" />
										<path fill-rule="evenodd" clip-rule="evenodd" d="M15.6 9.88754C15.6 8.32244 14.3864 7.04079 12.8489 6.93229V2.48081C12.8489 2.13018 12.5647 1.84595 12.2141 1.84595C11.8634 1.84595 11.5792 2.13018 11.5792 2.48081L11.5792 6.93229C10.0417 7.04079 8.82812 8.32244 8.82812 9.88753V10.734C8.82812 12.2991 10.0417 13.5808 11.5792 13.6893L11.5792 14.7548C11.5792 15.1054 11.8634 15.3897 12.2141 15.3897C12.5647 15.3897 12.8489 15.1054 12.8489 14.7548L12.8489 13.6893C14.3864 13.5808 15.6 12.2991 15.6 10.734V9.88754ZM12.6373 8.19457H11.7908C10.8558 8.19457 10.0978 8.95254 10.0978 9.88753V10.734C10.0978 11.669 10.8558 12.427 11.7908 12.427H12.6373C13.5723 12.427 14.3303 11.669 14.3303 10.734V9.88754C14.3303 8.95254 13.5723 8.19457 12.6373 8.19457Z" fill="black" />
									</svg>

									<div className='navPopUpDetails' >

										<p className='navPopUpName settingsText'>Profile Settings</p>

									</div>
								</div>
								<div className='navPopUpTop' onClick={() => navigate('/bidder/help-center')} >
									<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M4.70026 7.13715C4.19218 4.59673 6.13525 2.22656 8.72598 2.22656H9.25146C11.5257 2.22656 13.3569 4.09631 13.3569 6.35683C13.3569 7.62094 12.7742 8.8301 11.772 9.60961L9.59675 11.3014C9.56582 11.3255 9.54773 11.3625 9.54773 11.4017V11.8341C9.54773 12.2315 9.22559 12.5537 8.82822 12.5537C8.43085 12.5537 8.10871 12.2315 8.10871 11.8341V11.4017C8.10871 10.9184 8.33182 10.4622 8.71328 10.1655L10.8885 8.47371C11.5358 7.97024 11.9179 7.18245 11.9179 6.35683C11.9179 4.87735 10.7173 3.66558 9.25146 3.66558H8.72598C7.04334 3.66558 5.78134 5.20497 6.11134 6.85493L6.14783 7.03738C6.22576 7.42704 5.97305 7.80609 5.5834 7.88403C5.19374 7.96196 4.81468 7.70925 4.73675 7.3196L4.70026 7.13715Z" fill="black" />
										<circle cx="8.82828" cy="14.5431" r="0.50789" stroke="black" stroke-width="1.01578" />
									</svg>


									<div className='navPopUpDetails' >

										<p className='navPopUpName settingsText'>Help Center</p>

									</div>
								</div>
								<div className='navPopUpTop' >
									<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M11.3672 10.0208C11.6944 10.0208 11.9597 9.75547 11.9597 9.42822C11.9597 9.10097 11.6944 8.83568 11.3672 8.83568L11.3672 10.0208ZM2.48336 9.00923C2.25196 9.24063 2.25196 9.61581 2.48336 9.84721L6.25424 13.6181C6.48564 13.8495 6.86082 13.8495 7.09222 13.6181C7.32362 13.3867 7.32362 13.0115 7.09222 12.7801L3.74032 9.42822L7.09222 6.07632C7.32362 5.84492 7.32362 5.46975 7.09222 5.23835C6.86082 5.00694 6.48565 5.00694 6.25425 5.23835L2.48336 9.00923ZM11.3672 8.83568L2.90234 8.83568L2.90234 10.0208L11.3672 10.0208L11.3672 8.83568Z" fill="black" />
										<path d="M8.82812 6.46562V5.61914C8.82812 4.45039 9.77558 3.50293 10.9443 3.50293H12.6373C13.806 3.50293 14.7535 4.45039 14.7535 5.61914V13.2375C14.7535 14.4062 13.806 15.3537 12.6373 15.3537H10.9443C9.77558 15.3537 8.82812 14.4062 8.82812 13.2375V12.8142" stroke="black" stroke-width="1.26972" stroke-linecap="round" />
									</svg>


									<div className='navPopUpDetails' >

										<p className='navPopUpName settingsText'>Sign Out</p>

									</div>
								</div>
							</div>

						</div>
					</li>
					<Link to='/bidder/history' ><li>history</li></Link>
				</ul>

				<button
					className='toggle__btn'
					onClick={handleShowMenu}>
					{isExpanded ? 'close' : 'open'}
				</button>
			</div>

			{/* mobile nav */}

			{showMenu && (
				<>
					<ul className='mobile__nav'>
						<li>
							notifications
							<img
								src={bell}
								alt='notification'
							/>
						</li>
						<li>
							wallet
							<img
								src={vector}
								alt='vector'
							/>
						</li>
						<li>
							grp-cp09
							<img
								src={user}
								alt='user'
							/>
							<img
								src={arrow}
								alt='arrow'
							/>
						</li>
						<li>history</li>
					</ul>

					<div className='overlay'></div>
				</>
			)}
		</nav>
	);
}

export default BidderNav;
