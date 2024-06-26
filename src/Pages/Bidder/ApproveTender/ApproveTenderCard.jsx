import React from 'react'
import location from '../../../assets/location.png';
import checked from '../../../assets/Checked Checkbox.png'
import cancel from '../../../assets/Multiplication.png';
import approval from '../../../assets/Approval.png';
import HourGlass from '../../../assets/Hourglass.png'
import { getTenderInfo } from '../../../Redux/Bidder/Action';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';


const ApproveTenderCard = ({ tender, id }) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const select = () => {
        console.log(tender)
        dispatch(getTenderInfo(tender))
        navigate(`/bidder/approval/${tender?.tender_id}`)
    }

    let option

    switch (tender?.contract_status) {
        case 'cancelled':
            option = <div>
                <p>CANCELLED</p>
                <img
                    style={{ margin: 'auto' }}
                    src={cancel}
                    alt='cancel'
                />
            </div>
            break;
        case 'rejected':
            option = <div>
                <p>CANCELLED</p>
                <img
                    style={{ margin: 'auto' }}
                    src={cancel}
                    alt='cancel'
                />
            </div>
            break;
        case 'ongoing':
            option = <div>
                <p>ON-GOING</p>
                <img
                    style={{ margin: 'auto' }}
                    src={checked}
                    alt='cancel'
                />
            </div>
            break
        case 'result pending':
            option = <div>
                <p>PENDING</p>
                <img
                    style={{ margin: 'auto' }}
                    src={HourGlass}
                    alt='cancel'
                />
            </div>
            break

        case 'Result pending':
            option = <div>
                <p>PENDING</p>
                <img
                    style={{ margin: 'auto' }}
                    src={HourGlass}
                    alt='cancel'
                />
            </div>
            break

        case 'Result not out yet':
            option = <div>
                <p>PENDING</p>
                <img
                    style={{ margin: 'auto' }}
                    src={HourGlass}
                    alt='cancel'
                />
            </div>
            break
        default:
            option = <div  >
                <p>COMPLETED</p>
                <img
                    style={{ margin: 'auto' }}
                    src={approval}
                    alt='approval'
                />
            </div>
    }



    return (
        <tr onClick={select}>
            <td >
                {id + 1} {tender?.description_tender}
                <div className='table__inner'>
                    <span>no. {tender?.tender_id}</span>
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
                {tender?.name_of_organization}
            </td>
            <td>

                <p>{option}</p>
            </td>
        </tr>
    )
}

export default ApproveTenderCard