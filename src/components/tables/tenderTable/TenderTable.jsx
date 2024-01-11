import { Link } from 'react-router-dom';
import CompanyNav from '../../OrganizationNav/OrganizationNav';
import './tenderTable.css';

import backArrow from '../../../assets/Shape.png';
import cancel from '../../../assets/Multiplication.png';
import approval from '../../../assets/Approval.png';
import flag from '../../../assets/flag.png';
import location from '../../../assets/location.png';
import { useState } from 'react';
import CancelOrder from './CancelOrder';

function TenderTable() {
	const [showModal, setShowModal] = useState(false);

	function handleShowModal() {
		setShowModal(!showModal);
	}

	return (
		<section className='table__section'>
			<CompanyNav />
			<div className='table__container'>
				<div className='table__heading'>
					<Link to='#'>
						<img
							src={backArrow}
							alt='backArrow'
						/>
						<span>return</span>
					</Link>
					<h2>manage tender</h2>
				</div>

				<section className='table__body'>
					<table className='tender__table'>
						<thead>
							<th>tender description</th>
							<th>type</th>
							<th>due date</th>
							<th>cancel</th>
						</thead>

						<tbody>
							<tr>
								<td>
									1. Contractor. Procurement and construction of multistoried
									residential finished houses for economically weaker sections
									(ews).
									<div className='table__inner'>
										<span>No. 4567832</span>
										<span>
											<img
												src={location}
												alt='location'
											/>
											Panjim
										</span>

										<span>
											<img
												src={flag}
												alt='flag'
											/>
											India
										</span>
									</div>
								</td>
								<td>Government</td>
								<td>
									22 days to go <br />
									<span className='date'>15-Feb-2024</span>
								</td>
								<td>
									<button onClick={handleShowModal}>
										<img
											src={cancel}
											alt='cancel'
										/>
									</button>
								</td>
							</tr>

							<tr>
								<td>
									2. Management Services Of An Apartment House , opp district
									court.
									<div className='table__inner'>
										<span>No. 7899020 </span>
										<span>
											<img
												src={location}
												alt='location'
											/>
											Mapusa
										</span>

										<span>
											<img
												src={flag}
												alt='flag'
											/>
											India
										</span>
									</div>
								</td>
								<td>Government</td>
								<td>
									42 days to go <br />
									<span className='date'>07-Mar-2024</span>
								</td>
								<td>
									<button onClick={handleShowModal}>
										<img
											src={cancel}
											alt='cancel'
										/>
									</button>
								</td>
							</tr>

							<tr>
								<td>
									3. Facility Management and Maintenance at the building of the
									ministry of communications and Multimedia Pernem. Plot no.
									234/2a/4
									<div className='table__inner'>
										<span>No. 48802666 </span>
										<span>
											<img
												src={location}
												alt='location'
											/>
											Pernem
										</span>

										<span>
											<img
												src={flag}
												alt='flag'
											/>
											India
										</span>
									</div>
								</td>
								<td>Government</td>
								<td className='completed'>
									concluded <br />
									<img
										src={approval}
										alt='approval'
									/>
								</td>
								<td>
									<button onClick={handleShowModal}>
										<img
											src={cancel}
											alt='cancel'
										/>
									</button>
								</td>
							</tr>
						</tbody>
					</table>
				</section>

				{showModal && (
					<CancelOrder
						show={showModal}
						handleShowModal={handleShowModal}
					/>
				)}
			</div>
		</section>
	);
}

export default TenderTable;
