import { useNavigate } from 'react-router-dom';
import CompanyNav from '../../OrganizationNav/OrganizationNav';
import './manageTenderTable.css';

import backArrow from '../../../assets/Shape.png';
import x from '../../../assets/x.png';
import { useState } from 'react';
import CancelOrder from '../tenderTable/CancelOrder';
import { selectBidder } from '../../../Redux/Organization/Action';
import { useSelector, useDispatch } from 'react-redux';
import useSWR from 'swr';
import { CircularProgress } from '@mui/material';
import { toast } from 'react-toastify';
import ManageTenderTableRow from './ManageTenderTableRow';

function ManageTenderTable() {
	const [showModal, setShowModal] = useState(false);
	const [reasons, setReasons] = useState('others')

	const [isLoading, setIsLoading] = useState(false)

	const dispatch = useDispatch()

	const [isBidderSelected, setIsBidderSelected] = useState(false)
	const [selectedCompany, setSelectedCompany] = useState(null)

	const selectABidder = (datum) => {

		setSelectedCompany(datum.bidder_id)
		setIsBidderSelected(true)
		dispatch(selectBidder(datum))
	}

	const handleChange = (option) => {
		setReasons(option)
	}


	const navigate = useNavigate()

	function handleShowModal() {
		setShowModal(!showModal);
	}

	const selectedTender = useSelector(state => state.organization.selectedTender)

	const { selectedBidder } = useSelector(state => state.organization)

	const fetchAllBidApplicants = async (url, token) => {
		const headers = new Headers();

		if (token) {
			headers.append('Authorization', `${token}`);
		}

		const response = await fetch(url, { headers });
		const data = await response.json();
		return data;
	};

	const { token } = useSelector(state => state.organization.user)
	const url = `https://school-project-production-459d.up.railway.app/v4/tender/manage/${selectedTender.tender_id}`


	const { data } = useSWR([url, token], () => fetchAllBidApplicants(url, token));
	console.log(data)

	const formData = {
		select_bid_reason: reasons,
		bidder_id: selectedBidder?.id,
		tender_id: selectedTender.tender_id
	}

	const createSelectBid = async () => {
		try {
			if (data?.length <= 1) {
				dispatch(selectBidder(selectedBidder))
				navigate(`/organization/smart-contract/${selectedTender.tender_id}`)
			}
			else {
				setIsLoading(true)
				const res = await fetch('https://school-project-production-459d.up.railway.app/v9/bid/selected', {
					method: 'POST',
					headers: {
						'Authorization': `${token}`
					},
					body: JSON.stringify(formData)
				})
				const data = await res.json()
				console.log(data)
				setIsLoading(false)

				if (res.ok) {
					toast.success('Success', {
						position: toast.POSITION.TOP_RIGHT,
						autoClose: 3000,
						hideProgressBar: true,


					});
					dispatch(selectBidder(selectedBidder))
					navigate(`/organization/smart-contract/${selectedTender.tender_id}`)

				}
			}

		}
		catch (err) {
			setIsLoading(false)
			console.log(err)
		}


	}


	return (
		<section>
			<CompanyNav />

			{/* still giving them same class name as other table names to avoid too much styling */}
			<div className='table__container manage__container'>
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

				<div className='description'>
					<p>
						<b>tender description:</b> {selectedTender?.description_tender}
					</p>

					<p className='description__inner'>
						<span>NO. {selectedTender.tender_id}</span>
						<span>TYPE: {selectedTender.type_of_tender}</span>
						<span>DOC: {selectedTender.duration_of_bidding}</span>
					</p>
				</div>

				<section className='table__body'>
					<table className='tender__table'>
						<thead>
							<th style={{ textAlign: 'center' }}>company name</th>
							<th style={{ textAlign: 'center' }}>tender id</th>
							<th style={{ textAlign: 'center' }}>porposal </th>
							<th style={{ textAlign: 'center' }}>dos</th>
							<th style={{ textAlign: 'center' }}>selected bid</th>
						</thead>

						<tbody>
							{
								data?.map((datum, id) => {
									return (
										<ManageTenderTableRow
											reasons={reasons}
											selectedCompany={selectedCompany}
											isBidderSelected={isBidderSelected}
											datum={datum}
											selectABidder={selectABidder}
											handleChange={handleChange}
											id={id} key={id} />
									)
								})
							}
						</tbody>
					</table>


				</section>


				<div className='manage__btn__cont' >
					{isBidderSelected ?
						<button onClick={createSelectBid} className='evalButton' > {isLoading ? <CircularProgress color="primary" thickness={10} size={18} /> : 'PROCEED TO SMART CONTRACT'}</button> :
						<button
							className='cancel__btn act__btn manage__btn'
							onClick={handleShowModal}>
							<img
								src={x}
								alt='x'
							/>
							cancel the tender
						</button>
					}
				</div>

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
