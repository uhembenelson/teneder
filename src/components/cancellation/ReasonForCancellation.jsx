import { CircularProgress } from '@mui/material';
import CompanyNav from '../OrganizationNav/OrganizationNav';
import './reasonForCancellation.css';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

function ReasonForCancellation() {

	const [isLoading, setIsLoading] = useState(false)

	const selectedTender = useSelector(state => state.organization.selectedTender)
	const user = useSelector(state => state.organization.user)

	const [reasons, setReasons] = useState('others')

	const token = user.token


	const {

		handleSubmit,

	} = useForm({
		// resolver: yupResolver(schema),
		criteriaMode: "all",
		reValidateMode: "onSubmit",
		mode: "onChange",
	});





	const submitReason = async () => {


		const options = {
			status: 'cancelled',
			reasons
		}


		try {
			setIsLoading(true)
			const res = await fetch(`https://school-project-production-459d.up.railway.app/v4/tender/tender/${selectedTender.tender_id}`,
				{
					method: "put",
					headers: {
						Authorization: `${token}`,
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(options),
				}
			)
			const response = await res.json();

			setIsLoading(false)


			if (res.ok) {
				toast.success(response.message, {
					position: toast.POSITION.TOP_RIGHT,
					autoClose: 3000,
					hideProgressBar: true,

				});

			}
			else {
				toast.error(response.message, {
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
								<b>Name of Organization:</b> {user?.name_of_organization}
							</li>
							<li>
								<b>GST Number:</b> 035468276265
							</li>
							<li>
								<b>Tender ID:</b> {selectedTender?.tender_id}
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

						<form onClick={handleSubmit(submitReason)} className='cancellation__form'>
							<select
								onChange={e => setReasons(e.target.value)}
								value={reasons}
								name='reason__cancellation'
								id=''>
								<option>
									Work not getting done according to contract clauses
								</option>
								<option>Improper use of funds</option>
								<option>Lack of skilled labours</option>
								<option>Others</option>
							</select>

							<button type='submit' >{isLoading ? <CircularProgress color="primary" thickness={10} size={18} /> : 'Submit'}</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ReasonForCancellation;
