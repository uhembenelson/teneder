import CompanyNav from '../OrganizationNav/OrganizationNav';
import './reasonForCancellation.css';

function ReasonForCancellation() {
	return (
		<section className='cancellation'>
			<CompanyNav />
			<div className='cancellation__container'>
				<div className='cancellation__heading'>
					<h1>reason for cancellation of tender</h1>
				</div>

				<div className='cancellation__body'>
					<h2>Tender</h2>

					<div className='cancellation__inner'>
						<ul>
							<li>
								<b>Name of Organization:</b> Panjim Municipal Council
							</li>
							<li>
								<b>GST Number:</b> 035468276265
							</li>
							<li>
								<b>Tender ID:</b> 4567832
							</li>
							<li>
								<b>Name of Bidder:</b> L & T
							</li>
							<li>
								<b>Amount:</b> <span>0.90 ETH</span>
							</li>
							<li>
								<b>Duration:</b> 26/10/2023 - 29/11/2023
							</li>
							<li>
								<b>Status:</b>{' '}
								<span>
									<b>Cancelled</b>
								</span>
							</li>
						</ul>

						<form className='cancellation__form'>
							<select
								name='reason__cancellation'
								id=''>
								<option>
									Work not getting done according to contract clauses
								</option>
								<option>Improper use of funds</option>
								<option>Lack of skilled labours</option>
								<option>Others</option>
							</select>

							<button>Submit</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ReasonForCancellation;
