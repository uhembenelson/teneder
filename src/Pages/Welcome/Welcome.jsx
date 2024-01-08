import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import WhyUs from '../../components/WhyUs/WhyUs';
import Clients from '../../components/Clients/Clients';
import Dummy from '../../components/Dummy/Dummy';
import Footer from '../../components/Footer/Footer';
import Nav from '../../components/nav/Nav';

const Welcome = () => {
	return (
		<div>
			<Nav />
			<HeroSection />
			<WhyUs />
			<Clients />
			<Dummy />
			<Footer />
		</div>
	);
};

export default Welcome;
