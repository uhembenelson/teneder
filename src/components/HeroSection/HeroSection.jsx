import React from 'react';
import './HeroSection.css';
import CustomBtn from '../CustomBtn/CustomBtn';
import HeroImage from '../../assets/heroImage.png';
import pdf from '../../assets/Learn_More.pdf'


const HeroSection = ({ setShowLoginModal }) => {
	return (
		<div className='heroSectionContainer'>
			<div className='herotextbox' >
				<div>
					<h1 className='heroTitle'>WELCOME TO E-TENDER LET’S GET STARTED</h1>
					<p className='heroDesc'>
						We make sure that our platform ensures trust , transparency and
						provides confidentiality in the entire tender allotment process.
					</p>
				</div>
				<div className='btnContainer'>
					<div className='btnHolder'>
						<CustomBtn onClick={setShowLoginModal}>Get Started</CustomBtn>
					</div>

					<a href={pdf} download >
						<CustomBtn>Learn More</CustomBtn>
					</a>


				</div>
			</div>
			<img
				className='heroImage'
				src={HeroImage}
				alt='hero'
			/>
		</div>
	);
};

export default HeroSection;
