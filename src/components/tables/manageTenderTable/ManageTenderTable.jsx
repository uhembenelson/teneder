import { Link } from 'react-router-dom';
import CompanyNav from '../../CompanyNav/CompanyNav';
import './manageTenderTable.css';

import backArrow from '../../../assets/Shape.png';
import exportPdf from '../../../assets/Export Pdf.png';
import lightApprove from '../../../assets/approval-1.png';
import { useState } from 'react';
import CancelOrder from '../tenderTable/CancelOrder';

function ManageTenderTable() {
	const [showModal, setShowModal] = useState(false);

	function handleShowModal() {
		setShowModal(!showModal);
	}

	return (
		<section>
			<CompanyNav />

			{/* still giving them same class name as other table names to avoid too much styling */}
			<div className='table__container manage__container'>
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

				<div className='description'>
					<p>
						<b>tender description:</b> Facility Management and Maintenance at
						the building of the ministry of communications and Multimedia
						Pernem. Plot no. 234/2a/4
					</p>

					<p className='description__inner'>
						<span>NO. 48802666</span>
						<span>TYPE: Government</span>
						<span>DOC: 23-sept-2023</span>
					</p>
				</div>

				<section className='table__body'>
					<table className='tender__table'>
						<thead>
							<th>company name</th>
							<th>tender id</th>
							<th>porposal </th>
							<th>dos</th>
							<th>selected bid</th>
						</thead>

						<tbody>
							<tr>
								<td>1. YTL corporation LTD.</td>
								<td>650156</td>
								<td>
									<img
										src={exportPdf}
										alt='exportPdf'
									/>
								</td>
								<td>13-sept-2023</td>
								<td>
									<img
										src={lightApprove}
										alt='lightApprove'
									/>
								</td>
							</tr>

							<tr>
								<td>2. YTL corporation LTD.</td>
								<td>650156</td>
								<td>
									<img
										src={exportPdf}
										alt='exportPdf'
									/>
								</td>
								<td>13-sept-2023</td>
								<td>
									<img
										src={lightApprove}
										alt='lightApprove'
									/>
								</td>
							</tr>

							<tr>
								<td>3. YTL corporation LTD.</td>
								<td>650156</td>
								<td>
									<img
										src={exportPdf}
										alt='exportPdf'
									/>
								</td>
								<td>13-sept-2023</td>
								<td>
									<img
										src={lightApprove}
										alt='lightApprove'
									/>
								</td>
							</tr>

							<tr>
								<td>4. YTL corporation LTD.</td>
								<td>650156</td>
								<td>
									<img
										src={exportPdf}
										alt='exportPdf'
									/>
								</td>
								<td>13-sept-2023</td>
								<td>
									<img
										src={lightApprove}
										alt='lightApprove'
									/>
								</td>
							</tr>

							<tr>
								<td>5. YTL corporation LTD.</td>
								<td>650156</td>
								<td>
									<img
										src={exportPdf}
										alt='exportPdf'
									/>
								</td>
								<td>13-sept-2023</td>
								<td>
									<img
										src={lightApprove}
										alt='lightApprove'
									/>
								</td>
							</tr>
						</tbody>
					</table>

					<button
						className='cancel__btn act__btn manage__btn'
						onClick={handleShowModal}>
						cancel the tender
					</button>
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

export default ManageTenderTable;
