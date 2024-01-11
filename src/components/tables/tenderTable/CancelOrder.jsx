import './cancelOrder.css';

import sad from '../../../assets/Sad.png';

function CancelOrder({ handleShowModal }) {
	return (
		<>
			<section className='cancel__order'>
				<div className='cancel__head'>
					<h3>Are you sure you want to cancel this tender?</h3>
					<img
						src={sad}
						alt='sad'
					/>
				</div>

				<form className='cancel__form'>
					<h3>Tender data</h3>

					<label htmlFor='company-name'>Company name</label>
					<input
						type='text'
						placeholder='Smith & partners'
					/>

					<label htmlFor='tender-id'>Tender ID</label>
					<input
						type='number'
						placeholder='4567832'
					/>

					<label htmlFor='cancellation'>Cancellation reason</label>
					<select
						name='cancellation'
						placeholder='Provide reasons'>
						<option>
							Agreements with Public Administration (MMC) not finalized
						</option>
						<option>Proposal not up to the Mark / Short response period</option>
						<option>Project financially or technically not possible</option>
						<option>Others</option>
					</select>

					<div className='action__btns'>
						<button
							className='cancel__btn act__btn'
							onClick={handleShowModal}>
							cancel
						</button>
						<button className='return__btn act__btn'>Return</button>
					</div>
				</form>
			</section>

			<div className='cancel__overlay'></div>
		</>
	);
}

export default CancelOrder;
