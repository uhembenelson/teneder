import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import backArrow from '../../../assets/Shape.png';
import useSWR from 'swr';
import { useSelector } from 'react-redux';
import { getTenderInfo } from '../../../Redux/Bidder/Action';
import { useDispatch } from 'react-redux';
import BidderNav from '../../../components/BidderNav/Nav';
import Search from '../../../components/Search/Search'
import ApproveTenderCard from './ApproveTenderCard';

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
                            <th style={{ textAlign: 'center' }}>type</th>
                            <th style={{ textAlign: 'center' }}>organization Name</th>
                            <th style={{ textAlign: 'center' }}>status</th>
                        </thead>

                        <tbody>
                            {
                                filteredTenders?.map((tender, id) => {
                                    return (
                                        <ApproveTenderCard tender={tender} key={id} id={id} />
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
