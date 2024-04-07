import { useNavigate } from 'react-router-dom';
import CompanyNav from '../../OrganizationNav/OrganizationNav';
import './tenderTable.css';
import useSWR from 'swr';
import backArrow from '../../../assets/Shape.png';
import cancel from '../../../assets/Multiplication.png';
import flag from '../../../assets/flag.png';
import location from '../../../assets/location.png';
import darkApprove from '../../../assets/Approval.png';
import { useState } from 'react';
import { selectTender } from '../../../Redux/Organization/Action';
import CancelOrder from './CancelOrder';
import cancelOrderImage from '../../../assets/Cancel Order.png'
import { useSelector, useDispatch } from 'react-redux';
import { CircularProgress } from '@mui/material';
import { formatDate } from '../../../utilities/dateFormatter';


function TenderTable() {
	const [showModal, setShowModal] = useState(false);

	const dispatch = useDispatch()

	const navigate = useNavigate()

	const user = useSelector(state => state.organization.user)
	const { token, organization_id } = user

	const fetchTenders = async (url, token) => {
		const headers = new Headers();

		if (token) {
			headers.append('Authorization', `${token}`);
		}

		const response = await fetch(url, { headers });
		const data = await response.json();
		return data;


	};
	const url = `https://school-project-production-459d.up.railway.app/v4/tender/tender/${organization_id}`
	const { data } = useSWR([url, token], () => fetchTenders(url, token));
	console.log(data)

	function handleShowModal() {
		setShowModal(!showModal);
	}
	// Edit date format


	let content = <div className='spinnerContainer' >
		<CircularProgress color="info" thickness={8} size={30} />
	</div>
	if (data?.length === 0) {
		content = <p className='emptyTenderList' >No Tender created yet</p>
	}
	else {
		content = <table className='tender__table'>
			<thead>
				<th>tender description</th>
				<th style={{ textAlign: 'center' }} >type</th>
				<th style={{ textAlign: 'center' }} >due date</th>
				<th style={{ textAlign: 'center' }} >cancel</th>
			</thead>

			<tbody>
				{data?.map(tender => {
					return (
						<tr key={tender?.tender_id} onClick={() => dispatch(selectTender(tender))} >

							<td onClick={() => { navigate(`/organization/manage-tender/${tender?.tender_id}`) }}>
								{tender?.description_tender}
								<div className='table__inner'>
									<span>No. {tender?.tender_id}</span>
									<span>
										<img
											src={location}
											alt='location'
										/>
										{tender?.state}
									</span>

									{/*<span>
										<img
											src={flag}
											alt='flag'
										/>
										India
					</span>*/}
								</div>
							</td>
							<td>{tender?.type_of_tender}</td>
							<td>
								{formatDate(tender?.duration_of_bidding_end)}
								{/*Math.ceil((new Date(tender?.duration_of_work) - presentDay) / (1000 * 60 * 60 * 24)) > 0 ? <span>{Math.ceil((new Date(tender?.duration_of_work) - presentDay) / (1000 * 60 * 60 * 24))} 'days to go'</span> : 'Concluded'*/}
								{/*Math.ceil((new Date(tender?.duration_of_work) - presentDay) / (1000 * 60 * 60 * 24)) > 0 && <span className='date'>{tender?.duration_of_work}</span>*/}
							</td>
							<td>
								{
									tender?.status === 'cancelled' ?
										<button >
											<img
												src={cancelOrderImage}
												alt='cancel'
											/>
										</button> :
										<button onClick={handleShowModal}>
											<img
												src={cancel}
												alt='cancel'
											/>
										</button>

								}
							</td>
						</tr>
					)
				})}

			</tbody>
		</table>


	}

	return (
		<div>

			<CompanyNav />
			<section className='table__section'>

				<div className='table__container'>
					<div className='table__heading'>
						<div className='arrowBack' onClick={() => navigate(-1)}>
							<img
								src={backArrow}
								alt='backArrow'
							/>
							<span>return</span>
						</div>
						<h2>manage tender</h2>
					</div>

					<section className='table__body'>
						{content}
					</section>

					{showModal && (
						<CancelOrder
							show={showModal}
							handleShowModal={handleShowModal}
						/>
					)}
				</div>
			</section>
		</div>
	);
}

export default TenderTable;
