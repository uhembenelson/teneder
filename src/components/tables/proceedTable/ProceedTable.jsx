import { Link } from 'react-router-dom';
import CompanyNav from '../../OrganizationNav/OrganizationNav';
import './proceedTable.css';

import backArrow from '../../../assets/Shape.png';
import exportPdf from '../../../assets/Export Pdf.png';
import approve from '../../../assets/Approval.png';

function ProceedTable() {
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
								<td className='end'>Non-competitive Pricing</td>
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
								<td className='end'>Incorrect Documentation</td>
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
								<td className='end'>Non-competitive Pricing</td>
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
										src={approve}
										alt='approve'
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
								<td className='end'>Less Work Experience</td>
							</tr>
						</tbody>
					</table>

					{/* using the same class name as the provide reason table because the have the same styles */}

					<button className='proceed__btn'>proceed to smart contract</button>
				</section>
			</div>
		</section>
	);
}

export default ProceedTable;
