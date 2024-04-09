import './cancelOrder.css';
import { useSelector } from 'react-redux';
import sad from '../../../assets/Sad.png';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { CircularProgress } from '@mui/material';

// const schema = yup.object().shape({
// 	reasons: yup.string().required('Reason is required')
// })


function CancelOrder({ handleShowModal }) {

	const [isLoading, setIsLoading] = useState(false)

	const selectedTender = useSelector(state => state.organization.selectedTender)
	const user = useSelector(state => state.organization.user)

	const [reasons, setReasons] = useState('Proposal not up to the Mark / Short response period')

	const [isOthersSelected, setIsOthersSelected] = useState(false)

	const token = user.token


	const {
		getValues,
		register,
		setValue,
		handleSubmit,
		formState: { errors },
	} = useForm({
		// resolver: yupResolver(schema),
		criteriaMode: "all",
		reValidateMode: "onSubmit",
		mode: "onChange",
	});

	useEffect(() => {
		setValue('name_of_organization', user?.name_of_organization);
		setValue('tender_id', selectedTender?.tender_id)
	}, [selectedTender, user, setValue])


	const submitReason = async () => {
		const data = getValues()

		const options = {
			status: 'cancelled',
			reasons
		}


		try {
			setIsLoading(true)
			const res = await fetch(`https://school-project-production-459d.up.railway.app/v4/tender/tender/${data.tender_id}`,
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
				// navigate('/organization/manage-tender')
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
		<div className='cancel_orderContainer'>
			<section className='cancel__order'>
				<div className='cancel__head'>
					<h3>Are you sure you want to cancel this tender?</h3>
					<img
						src={sad}
						alt='sad'
					/>
				</div>

				<form onSubmit={handleSubmit(submitReason)} className='cancel__form'>
					<h3>Tender data</h3>

					<label htmlFor='company-name'>Organization Name</label>
					<input
						type='text'
						placeholder='Smith & partners'
						{...register('name_of_organization')}
					/>

					<label htmlFor='tender-id'>Tender ID</label>
					<input
						type='text'
						placeholder='4567832'
						{...register('tender_id')}
					/>

					<label htmlFor='cancellation'>Cancellation reason</label>
					<select
						onChange={e => setReasons(e.target.value)}
						value={reasons}
						name='cancellation'
						placeholder='Provide reasons'>
						<option value={'Agreements with Public Administration (MMC) not finalized'} >
							Agreements with Public Administration (MMC) not finalized
						</option>
						<option value={'Proposal not up to the Mark / Short response period'}>Proposal not up to the Mark / Short response period</option>
						<option value={'Project financially or technically not possible'} >Project financially or technically not possible</option>
						<option value={'others'}>Others</option>
					</select>
					<p className='errorMsg' >{errors?.reasons?.message}</p>

					<div className='action__btns'>
						<button
							className='cancel__btn act__btn'
							onClick={handleShowModal}>
							cancel
						</button>
						<button type='submit' className='return__btn act__btn'>{isLoading ? <CircularProgress color="primary" thickness={10} size={18} /> : 'Submit'}</button>
					</div>
				</form>
			</section>

			<div className='cancel__overlay' ></div>
		</div>
	);
}

export default CancelOrder;
