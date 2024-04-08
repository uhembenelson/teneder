import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import checked from '../../../assets/Checked Checkbox.png'
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

    // Search functionality
    const [searchTerm, setSearchTerm] = useState('')

    const [filteredTenders, setFilteredTenders] = useState([])

    const [searchType, setSearchType] = useState('keyword')




    const dispatch = useDispatch()

    const navigate = useNavigate()

    const fetchAllBidApplicants = async (url, token) => {
        const headers = new Headers();

        if (token) {
            headers.append('Authorization', `${token}`);
        }

        const response = await fetch(url, { headers });
        const data = await response.json();
        setFilteredTenders(data)
        return data;

    };

    const { token, bidder_id } = useSelector(state => state.bidder.user)
    const url = `https://school-project-production-459d.up.railway.app/v15/approval/${bidder_id}`


    const { data } = useSWR([url, token], () => fetchAllBidApplicants(url, token));
    console.log(data)

    const searchTenders = () => {

        let filteredTender = []
        if (searchType === 'keyword') {
            filteredTender = data?.filter(datum =>
                datum?.description_tender.toLocaleLowerCase()?.includes(searchTerm.toLocaleLowerCase())
            )
        }

        else if (searchType === 'type') {
            filteredTender = data?.filter(datum =>
                datum?.type_of_tender.toLocaleLowerCase()?.includes(searchTerm.toLocaleLowerCase())
            )
        }

        else if (searchType === 'status') {
            filteredTender = data?.filter(datum =>
                datum?.status.replace(/-/g, '/')?.includes(searchTerm.toLocaleLowerCase())
            )
        }
        else if (searchType === 'orgName') {
            filteredTender = data?.filter(datum =>
                datum?.name_of_organization.toLocaleLowerCase()?.includes(searchTerm.toLocaleLowerCase())
            )
        }
        else if (searchType === 'tender_id') {
            filteredTender = data?.filter(datum =>
                datum?.tender_id.toLocaleLowerCase()?.includes(searchTerm.toLocaleLowerCase())
            )
        }



        setFilteredTenders(filteredTender)

    }

    let option = <div>
        <p>ON-GOING</p>
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
        else if (tender?.status === 'ongoing') {
            option = <div>
                <p>ON-GOING</p>
                <img
                    src={checked}
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
                    <Search
                        approve={true}
                        setSearchType={setSearchType}
                        searchType={searchType}
                        searchTenders={searchTenders}
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                    />
                    <table className='tender__table'>
                        <thead>
                            <th>tender description</th>
                            <th>type</th>
                            <th>organization Name</th>
                            <th>status</th>
                        </thead>

                        <tbody>
                            {
                                filteredTenders?.map((tender, id) => {
                                    return (
                                        <tr key={id} onClick={() => select(tender)} >
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

                                                {tender?.status === 'ongoing' ? <div>
                                                    <p>ON-GOING</p>
                                                    <img
                                                        src={checked}
                                                        alt='cancel'
                                                    />
                                                </div> :
                                                    <div>
                                                        <p>CANCELLED</p>
                                                        <img
                                                            src={cancel}
                                                            alt='cancel'
                                                        />
                                                    </div>}
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
