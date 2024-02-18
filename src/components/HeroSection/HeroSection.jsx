import React from 'react';
import './HeroSection.css';
import CustomBtn from '../CustomBtn/CustomBtn';
import HeroImage from '../../assets/heroImage.png';


const HeroSection = () => {
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
						<CustomBtn>Get Started</CustomBtn>
					</div>

					<CustomBtn>Learn More</CustomBtn>


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
