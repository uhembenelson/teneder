import React from 'react'
import { useDropzone } from "react-dropzone";
import pdf from '../../assets/Import Pdf.png'
import './UploadFile.css'


const UploadFile = ({ name, register, setFile }) => {




    let label = null
    if (!name) {
        label = 'Select Document'
    }
    else {
        label = name
    }

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
            // setValue("image", acceptedFiles[0]);

            setFile(acceptedFiles[0])


        },
    });

    return (
        <div className="uploadContainer">

            <div className="uploadBox"
                {...getRootProps()}
            >
                <input {...getInputProps()} {...register} />

                <p>{label}</p>
            </div>
            <img className='pdfImage' src={pdf} alt='pdf' />
        </div>
    );
}

export default UploadFile