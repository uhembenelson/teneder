import React from 'react'
import './EvaluateTender.css'
import CompanyNav from '../../../components/OrganizationNav/OrganizationNav'
import EvaluateTenderCard from './EvaluateTenderCard'
import { useSelector } from 'react-redux'
import useSWR from 'swr';


const EvaluateTender = () => {

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



    const arr = [
        {
            address_one: "Address1",
            address_three: "sdsdsds",
            address_two: "gfggfffsd",
            appendices: "table-data (1).csv",
            city: "New York",
            description_tender: "Facility management and maintenance at the building of ministry of communication",
            duration_of_bidding: "2024-02-07",
            duration_of_work: "2024-02-06",
            material_required: "Shovel, Hoe",
            organization_id: "1271e477",
            postal_code: "23456789",
            state: "Kerala",
            status: "completed",
            tender_id: "dc8530ea",
            tender_motive: "Bridge tender aims to unite communities and foster growth through connectivity",
            type_of_tender: "Private",
        },
        {
            address_one: "Address1",
            address_three: "sdsdsds",
            address_two: "gfggfffsd",
            appendices: "table-data (1).csv",
            city: "New York",
            description_tender: "Facility management and maintenance at the building of ministry of communication",
            duration_of_bidding: "2024-02-07",
            duration_of_work: "2024-02-06",
            material_required: "Shovel, Hoe",
            organization_id: "1271e477",
            postal_code: "23456789",
            state: "Kerala",
            status: "ongoing",
            tender_id: "dc8530ea",
            tender_motive: "Bridge tender aims to unite communities and foster growth through connectivity",
            type_of_tender: "Private",
        },
        {
            address_one: "Address1",
            address_three: "sdsdsds",
            address_two: "gfggfffsd",
            appendices: "table-data (1).csv",
            city: "New York",
            description_tender: "Facility management and maintenance at the building of ministry of communication",
            duration_of_bidding: "2024-02-07",
            duration_of_work: "2024-02-06",
            material_required: "Shovel, Hoe",
            organization_id: "1271e477",
            postal_code: "23456789",
            state: "Kerala",
            status: "cancelled",
            tender_id: "dc8530ea",
            tender_motive: "Bridge tender aims to unite communities and foster growth through connectivity",
            type_of_tender: "Private",
        },
    ]


    return (
        <div>
            <CompanyNav />
            <div className='evaluateTender'>

                {
                    arr?.map(datum => {
                        return (
                            <EvaluateTenderCard key={datum.tender_id} data={datum} />
                        )
                    })
                }

            </div>

        </div>
    )
}

export default EvaluateTender