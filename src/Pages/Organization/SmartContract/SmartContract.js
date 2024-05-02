import React, { useEffect, useState } from 'react'
import CompanyNav from '../../../components/OrganizationNav/OrganizationNav'
import './SmartContract.css'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useSelector } from 'react-redux'
import icons from '../../../assets/Icons.png'
import bitCoin from '../../../assets/Money Bag Bitcoin.png'
import verified from '../../../assets/ID Verified.png'
import stats from '../../../assets/Statistics Report.png'
import timer from '../../../assets/Sand Timer.png'
import { toast } from 'react-toastify'
import { CircularProgress } from '@mui/material'
import { ethers } from 'ethers'
import Web3 from 'web3';

const SmartContract = () => {

    const [isLoading, setIsLoading] = useState()

    const navigate = useNavigate()

    const user = useSelector(state => state.organization.user)

    const selectedTender = useSelector(state => state.organization.selectedTender)

    const { selectedBidder } = useSelector(state => state.organization)
    console.log(selectedBidder)

    const PaymentContract = [
        {
            "inputs": [],
            "name": "depositFunds",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "distributeFundsAutomatically",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "manualTrigger",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_totalAmount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_paymentPercentage",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_paymentIntervalInSeconds",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_beneficiary",
                    "type": "address"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "beneficiary",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "Payment",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "withdrawExcess",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "amountsPaid",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "beneficiary",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "checkDeposit",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getTotalAmount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getTotalPaid",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]
   
    const bytecode = '608060405234801561000f575f80fd5b506040516110893803806110898339818101604052810190610031919061016f565b335f806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508360018190555082600381905550816004819055508060075f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555042600581905550600554600681905550505050506101d3565b5f80fd5b5f819050919050565b6100f4816100e2565b81146100fe575f80fd5b50565b5f8151905061010f816100eb565b92915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f61013e82610115565b9050919050565b61014e81610134565b8114610158575f80fd5b50565b5f8151905061016981610145565b92915050565b5f805f8060808587031215610187576101866100de565b5b5f61019487828801610101565b94505060206101a587828801610101565b93505060406101b687828801610101565b92505060606101c78782880161015b565b91505092959194509250565b610ea9806101e05f395ff3fe608060405260043610610085575f3560e01c806365ac43411161005857806365ac4341146101095780636793141f14610133578063c264a0631461015d578063de3a697814610173578063e2c41dbc146101af57610085565b8063022fe1eb1461008957806338af3eed1461009f5780633f5a1072146100c957806355be04ad146100df575b5f80fd5b348015610094575f80fd5b5061009d6101b9565b005b3480156100aa575f80fd5b506100b3610250565b6040516100c09190610a08565b60405180910390f35b3480156100d4575f80fd5b506100dd610275565b005b3480156100ea575f80fd5b506100f3610739565b6040516101009190610a3b565b60405180910390f35b348015610114575f80fd5b5061011d610744565b60405161012a9190610a6c565b60405180910390f35b34801561013e575f80fd5b5061014761074d565b6040516101549190610a6c565b60405180910390f35b348015610168575f80fd5b50610171610756565b005b34801561017e575f80fd5b5061019960048036038101906101949190610ab3565b6108e1565b6040516101a69190610a6c565b60405180910390f35b6101b76108f6565b005b5f8054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610246576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161023d90610b5e565b60405180910390fd5b61024e610275565b565b60075f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b5f8054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610302576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102f990610b5e565b60405180910390fd5b600554421015610347576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161033e90610bec565b60405180910390fd5b6001546002541061038d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161038490610c54565b60405180910390fd5b5f60045460065461039e9190610c9f565b9050804210610736575f60646003546001546103ba9190610cd2565b6103c49190610d40565b90505f60085f60075f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054826104319190610d70565b90505f81111561072c576001548160025461044c9190610c9f565b116105b65760075f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc8290811502906040515f60405180830381858888f193505050501580156104b5573d5f803e3d5ffd5b508060085f60075f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8282546105239190610c9f565b925050819055508060025f82825461053b9190610c9f565b9250508190555060075f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167fd4f43975feb89f48dd30cabbb32011045be187d1e11c8ea9faa43efc35282519826040516105a99190610a6c565b60405180910390a261072b565b5f6002546001546105c79190610d70565b905060075f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc8290811502906040515f60405180830381858888f1935050505015801561062d573d5f803e3d5ffd5b508060085f60075f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825461069b9190610c9f565b925050819055508060025f8282546106b39190610c9f565b9250508190555060075f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167fd4f43975feb89f48dd30cabbb32011045be187d1e11c8ea9faa43efc35282519826040516107219190610a6c565b60405180910390a2505b5b4260068190555050505b50565b5f6001544714905090565b5f600154905090565b5f600254905090565b5f8054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146107e3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107da90610b5e565b60405180910390fd5b600554421015610828576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161081f90610bec565b60405180910390fd5b600154600254101561086f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161086690610ded565b60405180910390fd5b5f8054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc600154476108b69190610d70565b90811502906040515f60405180830381858888f193505050501580156108de573d5f803e3d5ffd5b50565b6008602052805f5260405f205f915090505481565b5f8054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610983576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161097a90610b5e565b60405180910390fd5b60015434146109c7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109be90610e55565b60405180910390fd5b565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6109f2826109c9565b9050919050565b610a02816109e8565b82525050565b5f602082019050610a1b5f8301846109f9565b92915050565b5f8115159050919050565b610a3581610a21565b82525050565b5f602082019050610a4e5f830184610a2c565b92915050565b5f819050919050565b610a6681610a54565b82525050565b5f602082019050610a7f5f830184610a5d565b92915050565b5f80fd5b610a92816109e8565b8114610a9c575f80fd5b50565b5f81359050610aad81610a89565b92915050565b5f60208284031215610ac857610ac7610a85565b5b5f610ad584828501610a9f565b91505092915050565b5f82825260208201905092915050565b7f4f6e6c7920746865206f776e65722063616e2063616c6c20746869732066756e5f8201527f6374696f6e000000000000000000000000000000000000000000000000000000602082015250565b5f610b48602583610ade565b9150610b5382610aee565b604082019050919050565b5f6020820190508181035f830152610b7581610b3c565b9050919050565b7f5061796d656e7420706572696f6420686173206e6f74207374617274656420795f8201527f6574000000000000000000000000000000000000000000000000000000000000602082015250565b5f610bd6602283610ade565b9150610be182610b7c565b604082019050919050565b5f6020820190508181035f830152610c0381610bca565b9050919050565b7f416c6c2066756e64732068617665206265656e206469737472696275746564005f82015250565b5f610c3e601f83610ade565b9150610c4982610c0a565b602082019050919050565b5f6020820190508181035f830152610c6b81610c32565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f610ca982610a54565b9150610cb483610a54565b9250828201905080821115610ccc57610ccb610c72565b5b92915050565b5f610cdc82610a54565b9150610ce783610a54565b9250828202610cf581610a54565b91508282048414831517610d0c57610d0b610c72565b5b5092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b5f610d4a82610a54565b9150610d5583610a54565b925082610d6557610d64610d13565b5b828204905092915050565b5f610d7a82610a54565b9150610d8583610a54565b9250828203905081811115610d9d57610d9c610c72565b5b92915050565b7f546f74616c20616d6f756e74206e6f74207061696420796574000000000000005f82015250565b5f610dd7601983610ade565b9150610de282610da3565b602082019050919050565b5f6020820190508181035f830152610e0481610dcb565b9050919050565b7f496e636f727265637420616d6f756e742073656e7400000000000000000000005f82015250565b5f610e3f601583610ade565b9150610e4a82610e0b565b602082019050919050565b5f6020820190508181035f830152610e6c81610e33565b905091905056fea264697066735822122096cf3481bb4a53c641910e6488572c946249f279c2d376a5b5e6c7c8efca267564736f6c63430008190033'
 
    const { token, organization_id } = user

    const schema = yup.object().shape({
        name_of_organization: yup.string().required('Company name is required'),
        tender_id: yup.string().required('tender id is required'),
        name_of_bidder: yup.string().required('Name of bidder is required'),
        ethereum_value: yup.string().required('Ethurium value is required'),
        percentage: yup.string().required('Percentage value is required'),
        interval_of_payment: yup.string().required('Interval of payment is required'),

    })


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
        setValue('name_of_organization', user.name_of_organization)
        setValue('tender_id', selectedTender.tender_id)
        setValue('name_of_bidder', selectedBidder?.name_of_company)
    }, [setValue, user, selectedTender])



    const [web3, setWeb3] = useState(null);
    const [contract, setContract] = useState(null);
    const [accounts, setAccounts] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [message, setMessage] = useState("")
  
    const [paymentPercentage, setPaymentPercentage] = useState('');
    const [paymentIntervalInSeconds, setPaymentIntervalInSeconds] = useState('');
    const [beneficiary, setBeneficiary] = useState('0x8B4aec938329d1A84F4F32Ce96Bb65F30cf32324');
    const [totalPaid, setTotalPaid] = useState('')
    const [contractAddress, setContractAddress] = useState()
    const [success, setSuccess] = useState(false)
    const [contractSate, setContractState] = useState()
    const [totalAmountPaid, setTotalAmountPaid] = useState()
    


      const deployContract = async () => {
        const web3Instance = new Web3(window.ethereum);
        await window.ethereum.enable();  // Request account access if needed
        const accounts = await web3Instance.eth.getAccounts();
        try {
         
          setMessage('Deploying contract...');
           // Ensure all required values are defined
         if (!totalAmount || !paymentPercentage || !paymentIntervalInSeconds || !beneficiary) {
            alert('All fields are required');
            setMessage();

           return;
          }
           console.log("here")
          const deployedContract = await new web3Instance.eth.Contract(PaymentContract)
            .deploy({
              data: bytecode,
            //   arguments: [web3Instance.utils.toWei(totalAmount), paymentPercentage, paymentIntervalInSeconds, beneficiary],
            arguments: [totalAmount, paymentPercentage, paymentIntervalInSeconds, beneficiary]
            })
            .send({ from: accounts[0] });
    
          setMessage(`Contract deployed at address: ${deployedContract.options.address}`);
          //update user details with hasContract state, and the state is going to be set as true 
          // set success as user.hasContract
            // update contraact payload 

          setSuccess(true)
          console.log("here",deployedContract)
          setContract(deployedContract);

          setContractAddress(deployedContract.options.address);
         
          
        } catch (error) {
          console.error('Error deploying contract:', error);
          setMessage('Error deploying contract.');
        }
      };


      const refreshContractData = async () => {
        try {
          // Get total amount from the contract
          const totalAmount = await contract.methods.getTotalAmount().call();
          setTotalAmount(totalAmount);
      
          // Get total paid amount from the contract
          const totalPaid = await contract.methods.getTotalPaid().call();
          setTotalPaid(totalPaid);
      
          // You can fetch and update other relevant contract data here
      
          // Optionally, display a success message or handle any other UI updates
          setMessage('Contract data refreshed successfully');
        } catch (error) {
          console.error('Error refreshing contract data:', error);
          // Display an error message if necessary
          setMessage('Error refreshing contract data');
        }
      };




    const depositFunds = async () => {
        try {
          // Get the user's account from Web3
          const web3Instance = new Web3(window.ethereum);
          await window.ethereum.enable();
          const accounts = await web3Instance.eth.getAccounts();
          const account = accounts[0]; // Assuming the first account is used
      
          // Convert totalAmount to Wei (1 Ether = 10^18 Wei)
          const amountInWei =  10n
        //   web3.utils.toWei(totalAmount.toString(), 'ether');
      
          // Send the transaction to deposit funds
          await contract.methods.depositFunds().send({ from: account, value: totalAmount });
      
          // Refresh the contract data or display a success message
          // For example:
          await refreshContractData(); // Function to refresh contract data
          checkDp()
          alert('Funds deposited successfully');
        } catch (error) {
          console.error('Error depositing funds:', error);
          // Display an error message if necessary
          // setMessage('Error depositing funds');
        }
      };


      const checkDp = async()=>{
        const res =  await contract?.methods.checkDeposit().call()

        console.log("res", res)
        if(res == false){
            setContractState("Not funded")
        }else{
            setContractState("Funded")
        }

        console.log("this is working here", res)
      }
      
    useEffect(()=>{
        checkDp()
        AmountPaid()
    },[contract])


    const distributeFunds = async()=>{
        console.log("here me")
        setIsLoading(true);
        // setError('');

        try {
            // Connect to the contract
            
            // Call the distributeFundsAutomatically function
            const web3Instance = new Web3(window.ethereum);
          await window.ethereum.enable();
          const accounts = await web3Instance.eth.getAccounts();
          const account = accounts[0];
            await contract.methods.distributeFundsAutomatically().send({ from: account });
            AmountPaid()

            setIsLoading(false);
        } catch (err) {
            console.error('Error distributing funds:', err);
            alert('Error distributing funds');
            setIsLoading(false);
        }

    }

    const AmountPaid = async()=>{
        const res =  await contract?.methods.getTotalPaid().call()
        console.log("res", res)
        setTotalAmountPaid(res)
        

        console.log("this is working here", res)
      }

   
        const updateContractPayload = {
          bider_id: selectedTender?.bidder_id,
          tender_id:selectedTender?.tender_id,
          org_id:user?.organization_id,
          nameOfOrg: user?.name_of_organization,
           nameOfBider: selectedBidder?.name_of_company,
           contractAddress,
           totalAmountPaid,
           contractSate,
           walletAddress:beneficiary
         }
   
         console.log("this is payload", updateContractPayload)
         

        //  const updateContract = async()=>{
        //   try{
        //    await axiox.post(url, updateContractPayload)

        //   }catch(error){
        //     alert("Failed to Update Contract")
        //   }

        //  }

     
         //
         
      


    




    

    


      
   
   
   













    return (
        <div>

<dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hi, dear</h3>
          <p className="py-4">MetaMask is required on this application.</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button
                onClick={() =>
                  window.open(
                    "https://chromewebstore.google.com/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",
                    "_blank"
                  )
                }
                className="btn"
              >
                Install MetaMast
              </button>
            </form>
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>


            <CompanyNav />
                 <div className='smartContractContainer' >
                    {
                        !success  ? 
                        <div>
                        <div>{message}</div>
                        <h1 className='smartContractHeading' >Welcome to Smart Contract Take a step forward into the virtual world</h1>
                        <div className='smartContractInputHolder' >
                            <div className='smartContractInputBox' >
                                <label htmlFor='orgName' >Name of the Organization</label>
                                <div className='smartContractInputContainer' >
                                    <img className='smartContractIcons' src={icons} alt='' />
                                    <input {...register('name_of_organization')} className='smartContractInput' id='orgName' />
                                </div>
                            </div>
                            <div className='smartContractInputBox' >
                                <label htmlFor='orgName' >Ethereum Total Value </label>
                                <div className='smartContractInputContainer' >
                                    <img className='smartContractIcons' src={bitCoin} alt='' />
                                    <input value={totalAmount} onChange={(e) => setTotalAmount(e.target.value)} className='smartContractInput' id='orgName' />
                                </div>
                            </div>
                        </div>
                        <div className='smartContractInputHolder' >
                            <div className='smartContractInputBox' >
                                <label htmlFor='orgName' >Tender ID</label>
                                <div className='smartContractInputContainer' >
                                    <img className='smartContractIcons' src={verified} alt='' />
                                    <input {...register('tender_id')} className='smartContractInput' id='orgName' />
                                </div>
                            </div>
                            <div className='smartContractInputBox' >
                                <label htmlFor='orgName' >Percentage for Transaction </label>
                                <div className='smartContractInputContainer' >
                                    <img className='smartContractIcons' src={stats} alt='' />
                                    <input value={paymentPercentage} onChange={(e) => setPaymentPercentage(e.target.value)} className='smartContractInput' id='orgName' />
                                </div>
                            </div>
                        </div>
                        <div className='smartContractInputHolder' >
                            <div className='smartContractInputBox' >
                                <label htmlFor='orgName' >Name of the Bidder</label>
                                <div className='smartContractInputContainer' >
                                    <img className='smartContractIcons' src={icons} alt='' />
                                    <input {...register('name_of_bidder')} className='smartContractInput' id='orgName' />
                                </div>
                            </div>
                            <div className='smartContractInputBox' >
                                <label htmlFor='orgName' >Interval of Payment </label>
                                <div className='smartContractInputContainer' >
                                    <img className='smartContractIcons' src={timer} alt='' />
                                    <input value={paymentIntervalInSeconds} onChange={(e) => setPaymentIntervalInSeconds(e.target.value)} className='smartContractInput' id='orgName' />
                                </div>
                            </div>
                        </div>
                        <div className='smartContractBtnContainer' >
                            <button onClick={deployContract}   className='evalButton' > Initiate smart contract</button>
                        </div>
    
                        </div>
                         :
                        
                        <div className="overflow-x-auto mt-10">
                           <div className='mt-5 mb-5 font-semibold'>
                            Contract created
                            </div> 
                            <div>
                                {
                                    isLoading  == true ? (<p>Distributing funds to Bidder please wait...</p>) : null
                                }
                            </div>

                    <table className="table">
                      {/* head */}
                      <thead>
                        <tr>
                          
                          <th>Name of Organization</th>
                          <th>Name of bidder</th>
                          <th>Contract address</th>
                          <th>Amount paid</th>
                          <th>Contract status</th>
                          <th>Action</th>
                        
                        </tr>
                      </thead>
                      <tbody>
                        {/* row 1 */}
                        <tr>
                          
                          <td>
                            <div className="flex items-center gap-3">
                              {/* <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                  <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                </div>
                              </div> */}
                              <div>
                                <div className="font-bold">{user.name_of_organization}</div>
                                {/* <div className="text-sm opacity-50">United States</div> */}
                              </div>
                            </div>
                          </td>
                          <td>
                          {selectedBidder?.name_of_company}
                          </td>
                          <td>{contractAddress}</td>

                          <td>
                            {totalAmountPaid == '' ? "No amount has been paid yet" : totalAmountPaid + " Ether"
                            }
                             </td>
                          <th>
                            <button className="btn btn-ghost btn-xs">{contractSate}</button>
                          </th>
                          <th>
                            {
                                contractSate == "Not funded" ?  <button onClick={depositFunds} className="btn btn-ghost btn-xs">Fund Contract</button> : 
                                <button onClick={distributeFunds} className="btn btn-ghost btn-xs">Distribute Funds</button>
                            }
                           
                          </th>
                        </tr>
                       
                       
                       
                      </tbody>
                     
                      
                    </table>
                                  </div>
                    }

                   
                    
                  
    
    
                  
    
                </div>
            

                  


        



{/* 
            <div>
      <h1>Payment Contract Deployment</h1>
      <div>
        <label>Total Amount:</label>
        <input type="text" value={totalAmount} onChange={(e) => setTotalAmount(e.target.value)} />
      </div>
      <div>
        <label>Payment Percentage:</label>
        <input type="text" value={paymentPercentage} onChange={(e) => setPaymentPercentage(e.target.value)} />
      </div>
      <div>
        <label>Payment Interval (in seconds):</label>
        <input type="text" value={paymentIntervalInSeconds} onChange={(e) => setPaymentIntervalInSeconds(e.target.value)} />
      </div>
      <div>
        <label>Beneficiaries (comma-separated addresses):</label>
        <input type="text" value={beneficiary} onChange={(e) => setBeneficiary(e.target.value)} />
      </div>
      <button onClick={deployContract}>Deploy Contract</button>
      <div>{message}</div>
    </div> */}
        </div>
    )
}

export default SmartContract






