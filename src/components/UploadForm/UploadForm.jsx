import React, { useEffect, useState } from 'react'
import './UploadForm.css'
import Arrow from '../../assets/arrow.png'
import { useDropzone } from 'react-dropzone'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'
import { CircularProgress } from "@mui/material";
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

const UploadForm = ({ closeModal, tender_id }) => {

    const schema = yup.object().shape({
        names: yup.string().required('Company name is required'),
        tender_document_title: yup.string().required('Document title is required'),
    })

    const user = useSelector(state => state.bidder.user)

    const [upload_document, setUploadDocument] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const {
        getValues,
        register,
        setValue,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        criteriaMode: "all",
        reValidateMode: "onSubmit",
        mode: "onChange",
    });



    useEffect(() => {
        setValue('names', user?.name_of_company)

    }, [setValue, user])


    const { getRootProps, getInputProps } = useDropzone({
        onDrop: (acceptedFiles) => {

            setUploadDocument(acceptedFiles[0])
        },
    });

    const createBid = async () => {


        const data = getValues()

        const formData = new FormData()

        formData.append('names', data?.names)
        formData.append('bidder_id', user.bidder_id)
        formData.append('tender_id', tender_id)
        formData.append('upload_document', upload_document)
        formData.append('tender_document_title', data?.tender_document_title)

        if (!upload_document) {
            // setErr('Required')
            return
        }

        else {
            // setErr(null)
            try {
                setIsLoading(true)
                const res = await fetch('https://school-project-production-459d.up.railway.app/v4/tender/tender/document',
                    {
                        method: "POST",
                        headers: {
                            Authorization: `${user?.token}`,
                        },
                        body: formData,
                    }
                )
                const data = await res.json();

                setIsLoading(false)
                console.log(data)


                if (res.ok) {
                    toast.success(data.message, {
                        position: toast.POSITION.TOP_RIGHT,
                        autoClose: 3000,
                        hideProgressBar: true,

                    });
                    closeModal()

                }
            }
            catch (err) {
                setIsLoading(false)
                console.log(err)
            }
        }
    }




    return (
        <div className="uploadFormContainer">
            <form onSubmit={handleSubmit(createBid)} className='uploadFormBox' >
                <div className='uploadFormInputContainer'>
                    <label htmlFor='name' >Name</label>
                    <input id='name' placeholder='Name' {...register('names')} className='uploadFormInput' />
                    <p className='errorMsg'>{errors?.names?.message}</p>
                </div>
                <div className='uploadFormInputContainer'>
                    <label htmlFor='title' >Tender Document Title</label>
                    <input id='title' placeholder='Tender Document Title' {...register('tender_document_title')} className='uploadFormInput' />
                    <p className='errorMsg' >{errors?.tender_document_title?.message}</p>
                </div>
                <p>Upload Document</p>
                <div className="uploadFileBox"
                    {...getRootProps()}
                >
                    <input {...getInputProps()} />
                    <img className='arrowImage' src={Arrow} alt='pdf' />
                    <p className='dropFilesText' >You can drag and drop files here to add them.</p>

                </div>
                <div className='uploadBtnContainer' >
                    <button type='submit' className=' evalButton uploadFormBtn'>{isLoading ? <CircularProgress color="primary" thickness={10} size={18} /> : 'Submit'}</button>
                    <button onClick={closeModal} className='evalButton uploadFormBtn'>Cancel</button>
                </div>
            </form >


        </div >
    );
}

export default UploadForm