import CompanyNav from '../CompanyNav/CompanyNav';
import './evaluateTender.css';

import backArrow from '../../../assets/Shape.png';
import { Link } from 'react-router-dom';

function EvaluateTender() {
	return (
		<section className='evaluate__section'>
			<div className='evaluate__container'>
				<CompanyNav />

				<div className='evaluate__heading'>
					<Link to='#'>
						<img
							src={backArrow}
							alt='backArrow'
						/>
						<span>return</span>
					</Link>
					<h2>evaluate tender</h2>
				</div>

				<div className='evaluate__data'>
					<article className='evaluate__details'></article>
				</div>
			</div>
		</section>
	);
}

export default EvaluateTender;
