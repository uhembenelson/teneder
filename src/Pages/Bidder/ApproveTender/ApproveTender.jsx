import { useNavigate } from 'react-router-dom';


import backArrow from '../../../assets/Shape.png';
import cancel from '../../../assets/Multiplication.png';
import approval from '../../../assets/Approval.png';
import flag from '../../../assets/flag.png';
import location from '../../../assets/location.png';
import useSWR from 'swr';
import { useSelector } from 'react-redux';
import { getTenderInfo } from '../../../Redux/Bidder/Action';
import { useDispatch } from 'react-redux';
import BidderNav from '../../../components/BidderNav/Nav';
import Search from '../../../components/Search/Search'

function ApproveTender() {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const fetchAllBidApplicants = async (url, token) => {
        const headers = new Headers();

        if (token) {
            headers.append('Authorization', `${token}`);
        }

        const response = await fetch(url, { headers });
        const data = await response.json();
        return data;

    };

    const { token, bidder_id } = useSelector(state => state.bidder.user)
    const url = `https://school-project-production-459d.up.railway.app/v15/approval/${bidder_id}`


    const { data } = useSWR([url, token], () => fetchAllBidApplicants(url, token));
    console.log(data)

    let option = <div>
        <p>REJECTED</p>
        <img
            src={cancel}
            alt='cancel'
        />
    </div>

    data?.map(tender => {
        if (tender?.status === 'cancelled') {
            option = <div>
                <p>CANCELLED</p>
                <img
                    src={cancel}
                    alt='cancel'
                />
            </div>
        }
        else if (tender?.status === 'rejected') {
            option = <div>
                <p>CANCELLED</p>
                <img
                    src={cancel}
                    alt='cancel'
                />
            </div>
        }
        else {
            option = <div>
                <p>SELECTED</p>
                <img
                    src={approval}
                    alt='approval'
                />
            </div>
        }
    })



    const select = (data) => {
        dispatch(getTenderInfo(data))
        navigate(`/bidder/approval/${data?.tender_id}`)
    }



    return (
        <section>
            <BidderNav />

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
                    <h2>APPROVAL CHECK</h2>
                </div>



                <section className='table__body'>
                    <Search />
                    <table className='tender__table'>
                        <thead>
                            <th>tender description</th>
                            <th>type</th>
                            <th>organization Name</th>
                            <th>status</th>
                        </thead>

                        <tbody>
                            {
                                data?.map((tender, id) => {
                                    return (
                                        <tr key={id} onClick={() => select(tender)} >
                                            <td >
                                                {id + 1} {tender?.description_tender}
                                                <div className='table__inner'>
                                                    <span>No. {tender?.tender_id}</span>
                                                    <span>
                                                        <img
                                                            src={location}
                                                            alt='location'
                                                        />
                                                        {tender?.state}
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
                                            <td>{tender?.type_of_tender}</td>
                                            <td>
                                                {tender?.name_of_organization}
                                            </td>
                                            <td>

                                                {option}
                                            </td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </section>
            </div>
        </section>
    );
}

export default ApproveTender;
