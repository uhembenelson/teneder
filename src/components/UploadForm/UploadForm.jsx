import React from 'react'
import './UploadForm.css'
import Arrow from '../../assets/arrow.png'
import { useDropzone } from 'react-dropzone'

const UploadForm = ({ closeModal }) => {


    const { getRootProps, getInputProps } = useDropzone({
        onDrop: (acceptedFiles) => {
            // if (title === "Identity Verification") {
            //     dispatch(setIdentityVerification(acceptedFiles));
            //     dispatch(
            //         setIdentityVerificationUrl(URL.createObjectURL(acceptedFiles[0]))
            //     );
            // } else if (title === "Proof of Address") {
            //     dispatch(setProofOfAddress(acceptedFiles));
            //     dispatch(setProofOfAddressUrl(URL.createObjectURL(acceptedFiles[0])));
            // }
            console.log(acceptedFiles)
        },
    });

    return (
        <div className="uploadFormContainer">
            <div className='uploadFormBox' >
                <div className='uploadFormInputContainer'>
                    <label htmlFor='name' >Name</label>
                    <input id='name' placeholder='Name' className='uploadFormInput' />
                </div>
                <div className='uploadFormInputContainer'>
                    <label htmlFor='title' >Tender Document Title</label>
                    <input id='title' placeholder='Tender Document Title' className='uploadFormInput' />
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
                    <button className='evalButton uploadFormBtn'>Submit</button>
                    <button onClick={closeModal} className='evalButton uploadFormBtn'>Cancel</button>
                </div>
            </div>


        </div>
    );
}

export default UploadForm