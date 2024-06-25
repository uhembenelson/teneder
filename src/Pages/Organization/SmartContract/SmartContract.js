// import React, { useEffect, useState } from 'react'
import CompanyNav from '../../../components/OrganizationNav/OrganizationNav'
import './SmartContract.css'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import icons from '../../../assets/Icons.png'
import bitCoin from '../../../assets/Money Bag Bitcoin.png'
import verified from '../../../assets/ID Verified.png'
import stats from '../../../assets/Statistics Report.png'
import timer from '../../../assets/Sand Timer.png'
import { toast } from 'react-toastify'
import { CircularProgress } from '@mui/material'
import { ethers } from 'ethers'
import useSWR from 'swr'




import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import { useSelector } from 'react-redux';


const PaymentContract = () => {
  const user = useSelector(state => state.organization.user)
  const { token, organization_id, } = user
   const url = `https://school-project-production-459d.up.railway.app/V11/contract/${user?.organization_id}`
 

  const selectedTender = useSelector(state => state.organization.selectedTender)
  console.log("check seleted tender",selectedTender)
  // console.log("this is selected tender", selectedTender)

  //to call selected

  //https://school-project-production-459d.up.railway.app/V11/contract/single/b551cfd3
  


  const { selectedBidder } = useSelector(state => state.organization)
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [account, setAccount] = useState('');
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalPaid, setTotalPaid] = useState(0);
  const [depositAmount, setDepositAmount] = useState('');
  const [contractAddress, setContractAddress] = useState();
  const[contract_state, setContract_state] = useState('')
  const [contract_status, setContract_status] = useState()
  const [beneficiary, setBeneficiary] = useState(selectedBidder.wallet_address);
  const [message, setMessage] = useState('')
  const [isLoading, setIsloading] = useState(false)
  const[balance, setBalance] = useState('')
  const [paymentPercentage, setPaymentPercentage] = useState('');
  const [paymentIntervalInSeconds, setPaymentIntervalInSeconds] = useState('');
  const[myContractData, setMyContractData] = useState('')
  const[reload, setReload] = useState('')
  const[total_amount_paid, setTotal_amount_paid] = useState()
  const[contract_worth, setContract_worth] = useState()
  // const [success, setSuccess] = useState(false)
  useEffect(()=>{
    setReload('reloaded')
  },[])

 
  const updateContractPayload = {
    bidder_id: selectedTender?.bidder_id,
    tender_id: selectedTender?.tender_id,
    organization_id: user?.organization_id,
    name_of_organization: user?.name_of_organization,
    name_of_bidder: selectedTender?.name_of_bidder || selectedBidder?.name_of_company,
    contract_address:contractAddress,
    total_amount_paid,
    contract_state,
    contract_status,
    wallet_address: beneficiary,
    contract_id:selectedTender?.tender_id,
    balance,
    contract_worth

  }

  
  const getContractData = async () => {
    console.log("new check",selectedTender?.tender_id)
    
    const res = await fetch(`https://school-project-production-459d.up.railway.app/V11/contract/tender/${selectedTender?.tender_id}`, {
      method: 'GET',
      headers: {
        'Authorization': `${token}`,
        'Content-Type': 'application/json'
      },
    });
    const data = await res.json();
    console.log("this is response", data[0]);
    setMyContractData(data[0]);
    setContractAddress(data[0].contract_address)
  };

  useEffect(() => {
    getContractData();
  }, []); 


  
 


  const updateContract = async () => {
    console.log("new check",)
    
    const res = await fetch(`https://school-project-production-459d.up.railway.app/V11/contract/${myContractData?.contract_id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updateContractPayload)
    });
    const data = await res.json();
    console.log("this is response", data[0]);
    setMyContractData(data[0]);
    setContractAddress(data[0].contract_address)
  };




  const changeContractToCompleted = async()=>{
    
    if(myContractData?.total_amount_paid == myContractData?.contract_worth){
      updateContractPayload.contract_status = "completed"
      const response =  await updateContract(updateContractPayload)
      console.log("check if contract is completed",response)
      
    }
  }

  //changeContractToCompleted()

  useEffect(()=>{
    changeContractToCompleted()
  },[reload])






    const createSmartContract = async (updateContractPayload) => {
      console.log("check to backend",updateContractPayload)
    try {

      const res = await fetch('https://school-project-production-459d.up.railway.app/V11/contract', {
        method: 'POST',
        headers: {
          'Authorization': `${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateContractPayload)
      })
      const data = await res.json()
      console.log("this is response",data)


      if (res.ok) {
        toast.success('Success', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
          hideProgressBar: true,
        });
        console.log(updateContractPayload)
      }
    }
    catch (err) {
      console.log(err)
    }


  }

  const contractABI = [
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
          "name": "from",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Deposit",
      "type": "event"
    },
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
      "name": "getBalance",
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
    },
    {
      "inputs": [],
      "name": "lastDistributionTime",
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
      "name": "paymentIntervalInSeconds",
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
      "name": "paymentPercentage",
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
      "name": "startTime",
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
      "name": "totalAmount",
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
      "name": "totalPaid",
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

  const contractBytecode = '608060405234801561000f575f80fd5b5060405161106e38038061106e8339818101604052810190610031919061016f565b335f806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508360018190555082600381905550816004819055508060075f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555042600581905550600554600681905550505050506101d3565b5f80fd5b5f819050919050565b6100f4816100e2565b81146100fe575f80fd5b50565b5f8151905061010f816100eb565b92915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f61013e82610115565b9050919050565b61014e81610134565b8114610158575f80fd5b50565b5f8151905061016981610145565b92915050565b5f805f8060808587031215610187576101866100de565b5b5f61019487828801610101565b94505060206101a587828801610101565b93505060406101b687828801610101565b92505060606101c78782880161015b565b91505092959194509250565b610e8e806101e05f395ff3fe6080604052600436106100f2575f3560e01c806375b1735011610089578063de3a697811610058578063de3a6978146102b2578063e2c41dbc146102ee578063e7b0f666146102f8578063eed271fd14610322576100f2565b806375b173501461021e57806378e9792514610248578063c264a06314610272578063dc77532c14610288576100f2565b80633f5a1072116100c55780633f5a10721461018a57806355be04ad146101a057806365ac4341146101ca5780636793141f146101f4576100f2565b8063022fe1eb146100f657806312065fe01461010c5780631a39d8ef1461013657806338af3eed14610160575b5f80fd5b348015610101575f80fd5b5061010a61034c565b005b348015610117575f80fd5b506101206103e3565b60405161012d91906109c6565b60405180910390f35b348015610141575f80fd5b5061014a6103ea565b60405161015791906109c6565b60405180910390f35b34801561016b575f80fd5b506101746103f0565b6040516101819190610a1e565b60405180910390f35b348015610195575f80fd5b5061019e610415565b005b3480156101ab575f80fd5b506101b4610707565b6040516101c19190610a51565b60405180910390f35b3480156101d5575f80fd5b506101de610713565b6040516101eb91906109c6565b60405180910390f35b3480156101ff575f80fd5b5061020861071c565b60405161021591906109c6565b60405180910390f35b348015610229575f80fd5b50610232610725565b60405161023f91906109c6565b60405180910390f35b348015610253575f80fd5b5061025c61072b565b60405161026991906109c6565b60405180910390f35b34801561027d575f80fd5b50610286610731565b005b348015610293575f80fd5b5061029c610823565b6040516102a991906109c6565b60405180910390f35b3480156102bd575f80fd5b506102d860048036038101906102d39190610a98565b610829565b6040516102e591906109c6565b60405180910390f35b6102f661083e565b005b348015610303575f80fd5b5061030c6109a2565b60405161031991906109c6565b60405180910390f35b34801561032d575f80fd5b506103366109a8565b60405161034391906109c6565b60405180910390f35b5f8054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146103d9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103d090610b43565b60405180910390fd5b6103e1610415565b565b5f47905090565b60015481565b60075f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b5f8054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146104a2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161049990610b43565b60405180910390fd5b6005544210156104e7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104de90610bd1565b60405180910390fd5b6001546002541061052d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161052490610c39565b60405180910390fd5b5f60045460065461053e9190610c84565b9050804210610704575f60646003546002544761055b9190610c84565b6105659190610cb7565b61056f9190610d25565b9050600154816002546105829190610c84565b111561059b576002546001546105989190610d55565b90505b60075f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc8290811502906040515f60405180830381858888f193505050501580156105ff573d5f803e3d5ffd5b508060025f8282546106119190610c84565b925050819055508060085f60075f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8282546106859190610c84565b9250508190555060075f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167fd4f43975feb89f48dd30cabbb32011045be187d1e11c8ea9faa43efc35282519826040516106f391906109c6565b60405180910390a242600681905550505b50565b5f600154471015905090565b5f600154905090565b5f600254905090565b60065481565b60055481565b5f8054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146107be576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107b590610b43565b60405180910390fd5b5f8054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc4790811502906040515f60405180830381858888f19350505050158015610820573d5f803e3d5ffd5b50565b60045481565b6008602052805f5260405f205f915090505481565b5f8054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146108cb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108c290610b43565b60405180910390fd5b5f341161090d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161090490610dd2565b60405180910390fd5b600154471015610952576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161094990610e3a565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff167fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c3460405161099891906109c6565b60405180910390a2565b60025481565b60035481565b5f819050919050565b6109c0816109ae565b82525050565b5f6020820190506109d95f8301846109b7565b92915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f610a08826109df565b9050919050565b610a18816109fe565b82525050565b5f602082019050610a315f830184610a0f565b92915050565b5f8115159050919050565b610a4b81610a37565b82525050565b5f602082019050610a645f830184610a42565b92915050565b5f80fd5b610a77816109fe565b8114610a81575f80fd5b50565b5f81359050610a9281610a6e565b92915050565b5f60208284031215610aad57610aac610a6a565b5b5f610aba84828501610a84565b91505092915050565b5f82825260208201905092915050565b7f4f6e6c7920746865206f776e65722063616e2063616c6c20746869732066756e5f8201527f6374696f6e000000000000000000000000000000000000000000000000000000602082015250565b5f610b2d602583610ac3565b9150610b3882610ad3565b604082019050919050565b5f6020820190508181035f830152610b5a81610b21565b9050919050565b7f5061796d656e7420706572696f6420686173206e6f74207374617274656420795f8201527f6574000000000000000000000000000000000000000000000000000000000000602082015250565b5f610bbb602283610ac3565b9150610bc682610b61565b604082019050919050565b5f6020820190508181035f830152610be881610baf565b9050919050565b7f416c6c2066756e64732068617665206265656e206469737472696275746564005f82015250565b5f610c23601f83610ac3565b9150610c2e82610bef565b602082019050919050565b5f6020820190508181035f830152610c5081610c17565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f610c8e826109ae565b9150610c99836109ae565b9250828201905080821115610cb157610cb0610c57565b5b92915050565b5f610cc1826109ae565b9150610ccc836109ae565b9250828202610cda816109ae565b91508282048414831517610cf157610cf0610c57565b5b5092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b5f610d2f826109ae565b9150610d3a836109ae565b925082610d4a57610d49610cf8565b5b828204905092915050565b5f610d5f826109ae565b9150610d6a836109ae565b9250828203905081811115610d8257610d81610c57565b5b92915050565b7f4d7573742073656e6420736f6d652065746865720000000000000000000000005f82015250565b5f610dbc601483610ac3565b9150610dc782610d88565b602082019050919050565b5f6020820190508181035f830152610de981610db0565b9050919050565b7f43616e6e6f742065786365656420746f74616c20616d6f756e740000000000005f82015250565b5f610e24601a83610ac3565b9150610e2f82610df0565b602082019050919050565b5f6020820190508181035f830152610e5181610e18565b905091905056fea2646970667358221220083e7f0c6209c4c7ad9b48ce7b91e228149513e371020ef85ec8a9fa3c54a32864736f6c634300081a0033'
  useEffect(() => {
    const initWeb3 = async () => {
      if (window.ethereum) {
        try {
          const web3Instance = new Web3(window.ethereum);
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          const accounts = await web3Instance.eth.getAccounts();
          setWeb3(web3Instance);
          setAccount(accounts[0]);
        } catch (error) {
          console.error('Error initializing web3:', error);
        }
      } else {
        console.error('Please install MetaMask!');
      }
    };

    initWeb3();
  }, []);

  useEffect(() => {
    console.log("came here")
    const loadContractData = async () => {
      if (web3 && contractAddress) {
        try {
          const contractInstance = new web3.eth.Contract(contractABI, contractAddress);
          setContract(contractInstance);

          const totalAmount = await contractInstance.methods.getTotalAmount().call();
          const totalPaid = await contractInstance.methods.getTotalPaid().call();
          const getb = await contract.methods.getBalance().call();
          const b = getb.toString()
          setBalance(b)
          console.log("this is me",totalPaid.toString())
         
          setTotalAmount(totalAmount);
          setTotalPaid(totalPaid);
          
        } catch (error) {
          console.error('Error loading contract data:', error);
        }
      }
    };

    loadContractData();
  }, [web3, contractAddress, reload]);



  const deployContract = async () => {
    if (!web3) {
      alert('Web3 is not initialized');
      return;
    }

    console.log("here", totalAmount, paymentPercentage, paymentIntervalInSeconds, beneficiary)

    const contract = new web3.eth.Contract(contractABI);

    const deployOptions = {
      data: contractBytecode,
      arguments: [totalAmount, paymentPercentage, paymentIntervalInSeconds, beneficiary],
    };

    try {
      const newContractInstance = await contract.deploy(deployOptions).send({
        from: account,
        gas: 1500000,
        gasPrice: '30000000000',
      });

     

      alert(`Contract deployed at address: ${newContractInstance.options.address}`);
      setContractAddress(newContractInstance.options.address);
      setContract(newContractInstance);
      setContract_state("Contract created")
      //update the database with contract_state == "Contract created"
      // update updateContractPayload object
      updateContractPayload.contract_state = "Contract created"
      updateContractPayload.contract_address = newContractInstance.options.address
      updateContractPayload.contract_status = "ongoing"
      updateContractPayload.contract_worth = `${totalAmount}`
      await createSmartContract(updateContractPayload)
      // setReload('reloaded')
    } catch (error) {
      console.error('Error deploying contract:', error);
    }
  };

  const depositFunds = async () => {
    if (!contract) {
      alert('Contract is not initialized');
      return;
    }

    try {
      setMessage("Funding contract please Wait... ")
      setIsloading(true)
      await contract.methods.depositFunds().send({ from: account, value: depositAmount });
      alert("Funds deposited successfully")
      document.getElementById('my_modal_3').close();
      setContract_state("Contract Funded")
      updateContractPayload.contract_state = "Contract Funded"
    
       await updateContract(updateContractPayload)


      setIsloading(false)
      setMessage('')
      setReload('reloaded')

    } catch (error) {
      console.error('Error depositing funds:', error);
    }
  };

  const distributeFundsAutomatically = async () => {
    if (!contract) {
      alert('Contract is not initialized');
      return;
    }

    try {
      setMessage("Distributing funds please Wait... ")
      setIsloading(true)
      await contract.methods.distributeFundsAutomatically().send({ from: account });
     
     // setContract_state("Contract in progress")
       //update the database with contract_state == "Contract in progress"
       const totalAmount = await contract.methods.getTotalAmount().call();
       const getB = await contract.methods.getBalance().call();
       const totalPaid = await contract.methods.getTotalPaid().call();
       const b = getB.toString()
       console.log("this is b", b)
       setTotalAmount(totalAmount.toString())
       updateContractPayload.contract_state = "Contract in progress"
       updateContractPayload.balance = `${b}`
       updateContractPayload.total_amount_paid = `${totalPaid}`
       await updateContract(updateContractPayload)
       alert('Funds distributed successfully!');
     
      

      setIsloading(false)
      setMessage('')
      setReload('reloaded')
    } catch (error) {
      console.error('Error distributing funds:', error);
    }
  };

  const manualTrigger = async () => {
    if (!contract) {
      alert('Contract is not initialized');
      return;
    }

    try {
      await contract.methods.manualTrigger().send({ from: account });
      alert('Manual trigger executed successfully!');
    } catch (error) {
      console.error('Error executing manual trigger:', error);
    }
  };

  const withdrawExcess = async () => {
    if (!contract) {
      alert('Contract is not initialized');
      return;
    }

    try {
      setIsloading(true)
      setMessage("withdrawing excess funds")
      await contract.methods.withdrawExcess().send({ from: account });
      alert('Excess funds withdrawn successfully!');
    //   setContract_state("contract is inactive")


    //   //update the database with contract_state == "contract is inactive"
    //   //also disable distrubte funds button if contract_state == "contract is inactive"


      
    //  // const getB = await contract.methods.getBalance().call();
    //   updateContractPayload.contract_state = "Contract ended"
    //  // updateContractPayload.balance = getB
    //   await updateContract(updateContractPayload)
    //   const totalAmount = await contract.methods.getTotalAmount().call();
    //   setTotalAmount(totalAmount);
    const totalAmount = await contract.methods.getTotalAmount().call();
    const getB = await contract.methods.getBalance().call();
    const totalPaid = await contract.methods.getTotalPaid().call();
    const b = getB.toString()
    console.log("this is b", b)
    setTotalAmount(totalAmount.toString())
    updateContractPayload.contract_state = "contract is inactive"
    updateContractPayload.balance = `${b}`
    updateContractPayload.total_amount_paid = `${totalPaid}`
    await updateContract(updateContractPayload)
     setIsloading(false)

      setMessage('')
     
    } catch (error) {
      console.error('Error withdrawing excess funds:', error);
    }
  };

  const checkDeposit = async () => {
    if (!contract) {
      alert('Contract is not initialized');
      return;
    }

    try {
      const getb = await contract.methods.getBalance().call();
      const b = getb.toString()
      setBalance(b)
      console.log("this is ",b)

     
    } catch (error) {
      console.error('Error checking deposit:', error);
    }
  };
 



  return (

    <>
    <CompanyNav />
    <div className='px-5 lg:px-[120px]'>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <p className="py-4">Enter an amount</p>
    <input 
     type="text"
     value={depositAmount}
     onChange={(e) => setDepositAmount(e.target.value)}
     placeholder="Amount in Wei"
     className="rounded-md input input-bordered w-full min-w-full" />
    <button 
    disabled={isLoading}
    onClick={depositFunds}
    className="btn rounded-md mt-5 min-w-full bg-black text-white hover:bg-black hover:text-white">{
      isLoading ? message : 'Fund contract'}</button>
   
  </div>
</dialog>

      {/* check if user has an active contract and update state */}
      {myContractData?.contract_status === 'ongoing' ? (
       
        <>
         
          <div className=''>

            <div className='justify-between flex py-5 '>
                 <div className='py-2'>
                  {
                    isLoading ? <div className='items-center justify-start flex gap-2 '><span className="loading loading-spinner loading-md"></span> {message}</div> : null
                  }
                </div>


                <div className='flex items-center'>
                  <div className='mr-4  font-bold'>This contract is worth {myContractData?.contract_worth} ether</div>
                  <button 
                   onClick={withdrawExcess}
                   className='btn mr-5'>
                     Withdraw Excess
                  </button>
                  <button
                   onClick={withdrawExcess}
                   className='btn '>
                     Terminate contract
                  </button>
                
                </div>

            </div>  

                
                <table className="table ">
                 {/* head */}
                 <thead>
                   <tr>
                     <th>Name of Organization</th>
                     <th>Name of bidder</th>
                     <th>Contract address</th>
                     <th>Contract Balance</th>
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
                           <div className="font-bold">{user?.name_of_organization}</div>
                           {/* <div className="text-sm opacity-50">United States</div> */}
                         </div>
                       </div>
                     </td>
                     <td>
                       {selectedTender?.name_of_bidder || selectedBidder?.name_of_company}
                      
                     </td>
                     <td>
                      {/* {selectedTender?.wallet_address || selectedBidder?.wallet_address} */}
                      {myContractData.contract_address}
                     </td>

                     <td>
                      {myContractData?.balance || 0}
                     </td>

                     <td>
                      {myContractData?.total_amount_paid === 0 ? "No amount has been paid yet" : myContractData?.total_amount_paid || 0}
                      
                    </td>
                    <th>
                      <button className="btn btn-ghost btn-xs">{myContractData.contract_state}</button>
                    </th>
                    <th>
                      {
                       myContractData?.contract_state === "Contract created" ? <button onClick={()=>document.getElementById('my_modal_3').showModal()} className="btn btn-ghost btn-xs">Fund Contract</button> :
                          <button  disabled={myContractData?.total_amount_paid == myContractData?.contract_worth} onClick={distributeFundsAutomatically} className="btn btn-xs text-black">
                            {
                              myContractData?.total_amount_paid == myContractData?.contract_worth ? "Contract Completed" : "Distribute Funds"} 
                            </button>
                      }

                    </th>
                  </tr>



                </tbody>


              </table>
          </div>
        </>
      ) : (
        <div>
               <div>{message}</div>
               <h1 className='text-md font-semibold lg:text-4xl text-center py-6' >Welcome to Smart Contract Take a step forward into the virtual world</h1>
               <div className='smartContractInputHolder' >
                 <div className='smartContractInputBox' >
                   <label htmlFor='orgName' >Name of the Organization</label>
                   <div className='smartContractInputContainer' >
                     <img className='smartContractIcons' src={icons} alt='' />
                     <input 
                     disabled={true}
                     type='text'
                     placeholder={user?.name_of_organization}
                     className='smartContractInput text-black' id='orgName' />
                   </div>
                 </div>
                 <div className='smartContractInputBox' >
                   <label htmlFor='orgName' >Ethereum Total Value </label>
                   <div className='smartContractInputContainer' >
                     <img className='smartContractIcons' src={bitCoin} alt='' />
                     <input 
                     type='text'
                     placeholder='Enter Amount'
                     required onChange={(e) => setTotalAmount(e.target.value)} className='smartContractInput' id='orgName' />
                   </div>
                 </div>
               </div>
               <div className='smartContractInputHolder' >
                 <div className='smartContractInputBox' >
                   <label htmlFor='orgName' >Tender ID</label>
                   <div className='smartContractInputContainer' >
                     <img className='smartContractIcons' src={verified} alt='' />
                     <input 
                     placeholder={selectedTender?.tender_id}
                     disabled={true}
                     className='smartContractInput' id='orgName' />
                   </div>
                 </div>
                 <div className='smartContractInputBox' >
                   <label htmlFor='orgName' >Percentage for Transaction </label>
                   <div className='smartContractInputContainer' >
                     <img className='smartContractIcons' src={stats} alt='' />
                     <input
                     type='text'
                     placeholder='Enter Percentage'
                     required value={paymentPercentage} onChange={(e) => setPaymentPercentage(e.target.value)} className='smartContractInput' id='orgName' />
                   </div>
                 </div>
               </div>
               <div className='smartContractInputHolder' >
                 <div className='smartContractInputBox' >
                   <label htmlFor='orgName' >Name of the Bidder</label>
                   <div className='smartContractInputContainer' >
                     <img className='smartContractIcons' src={icons} alt='' />
                     <input 
                     type='text'
                     disabled={true}
                     placeholder=  {selectedTender?.name_of_bidder || selectedBidder?.name_of_company}
                      className='smartContractInput' id='orgName' />
                   </div>
                 </div>
                 <div className='smartContractInputBox' >
                   <label htmlFor='orgName' >Interval of Payment </label>
                   <div className='smartContractInputContainer' >
                     <img className='smartContractIcons' src={timer} alt='' />
                     <input
                     type='text'
                      required value={paymentIntervalInSeconds} onChange={(e) => setPaymentIntervalInSeconds(e.target.value)} className='smartContractInput' id='orgName' />
                   </div>
                 </div>
               </div>
              <div className='smartContractBtnContainer' >
                 <button onClick={deployContract} className='evalButton' >{isLoading ? < CircularProgress color="primary" thickness={10} size={18} /> : 'Initiate smart contract'}</button>
               </div>

        
        </div>
      )}
    </div>
    </>


    
  );
};

export default PaymentContract;

