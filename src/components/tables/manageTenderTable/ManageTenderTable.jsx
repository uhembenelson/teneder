import { useNavigate, useParams } from 'react-router-dom';
import CompanyNav from '../../OrganizationNav/OrganizationNav';
import './manageTenderTable.css';

import backArrow from '../../../assets/Shape.png';
import exportPdf from '../../../assets/Export Pdf.png';
import lightApprove from '../../../assets/approval-1.png';
import darkApprove from '../../../assets/Approval.png';
import x from '../../../assets/x.png';
import { useEffect, useState } from 'react';
import CancelOrder from '../tenderTable/CancelOrder';
import { selectBidder } from '../../../Redux/Organization/Action';
import { useSelector, useDispatch } from 'react-redux';
import useSWR from 'swr';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { CircularProgress } from '@mui/material';
import { toast } from 'react-toastify';

function ManageTenderTable() {
	const [showModal, setShowModal] = useState(false);
	const [reasons, setReasons] = useState('others')

	const [isLoading, setIsLoading] = useState(false)

	const dispatch = useDispatch()

	const {
		getValues,
		register,

		formState: { errors },
	} = useForm({

		criteriaMode: "all",
		reValidateMode: "onSubmit",
		mode: "onChange",
	});

	const [isBidderSelected, setIsBidderSelected] = useState(false)
	const [selectedCompany, setSelectedCompany] = useState(null)

	const selectABidder = (id) => {
		setSelectedCompany(id)
		setIsBidderSelected(true)
		dispatch(selectBidder(id))
	}

	const handleChange = (option) => {
		setReasons(option)
		console.log(option)
	}



	const [pdfLink, setPdfLink] = useState('')

	const id = useParams()
	console.log(id)

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

	const formData = {
		select_bid_reason: reasons,
		bidder_id: selectedBidder?.id,
		tender_id: selectedTender.tender_id
	}

	const createSelectBid = async () => {
		try {
			setIsLoading(true)
			const res = await fetch('https://school-project-production-459d.up.railway.app/v9/bid/selected', {
				method: 'POST',
				headers: {
					'Authorization': `${token}`
				},
				body: JSON.stringify(formData)
			})
			const data = res.json()
			console.log(data)
			setIsLoading(false)

			if (res.ok) {
				toast.success('Success', {
					position: toast.POSITION.TOP_RIGHT,
					autoClose: 3000,
					hideProgressBar: true,

				});

			}
		}
		catch (err) {
			setIsLoading(false)
			console.log(err)
		}

	}

	// console.log(data)

	// const downloadLink = () => {
	// fetch(`https://school-project-production-459d.up.railway.app/v3/download/${data?.upload_document}`)
	// 	.then(res => setPdfLink(res.url)).then(data => console.log(data))
	// }

	// useEffect(() => {
	// 	if (data) {
	// fetch(`https://school-project-production-459d.up.railway.app/v3/download/${data?.upload_document}`)
	// 	.then(res => setPdfLink(res.url))
	// 	}

	// }, [data?.upload_document])
	// console.log(pdfLink)

	// let selectOption = 

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
							<th >company name</th>
							<th>tender id</th>
							<th>porposal </th>
							<th>dos</th>
							<th>selected bid</th>
						</thead>

						<tbody>
							{
								data?.map((datum, id) => {
									console.log(id)
									return (
										<tr key={datum?.bidder_id} >
											<td>{id + 1} {datum?.name_of_company}</td>
											<td>{datum?.tender_id}</td>
											<td >
												<div target='_blank' >
													<img style={{ cursor: 'pointer' }}
														src={exportPdf}
														alt='exportPdf'
													/>
												</div>

											</td>
											<td>13-sept-2023</td>
											<td style={{ cursor: 'pointer' }}>
												{selectedCompany !== datum.id && isBidderSelected ?
													<form key={id} className='optionSelectParent' ><select
														className='optionSelect'
														onChange={e => handleChange(e.target.value)}
														// value={reasons}
														name='reason__cancellation'
														id=''>
														<option>
															Non-Competitive Pricing
														</option>
														<option>Criterion Not Fullfiled </option>
														<option>Less work experience</option>
														<option>Incorrect-Documentation</option>
														<option>Others</option>
													</select>
													</form>
													:
													<img onClick={() => selectABidder(datum.id)}
														src={selectedCompany === datum.id ? darkApprove : lightApprove}
														alt='lightApprove'
													/>
												}
											</td>
										</tr>
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
