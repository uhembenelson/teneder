import React from 'react'
import { useDropzone } from "react-dropzone";
import pdf from '../../assets/Import Pdf.png'
import './UploadFile.css'

const UploadFile = () => {
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
        <div className="uploadContainer">

            <div className="uploadBox"
                {...getRootProps()}
            >
                <input {...getInputProps()} />

                <p>Select Document</p>
            </div>
            <img className='pdfImage' src={pdf} alt='pdf' />
        </div>
    );
}

export default UploadFile