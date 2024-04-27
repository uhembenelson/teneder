import Web3 from 'web3';
import PaymentContract from '../build/contracts/PaymentContract.json';

const getWeb3 = () => {
  return new Promise((resolve, reject) => {
    window.addEventListener('load', async () => {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
          await window.ethereum
          .request({ method: "eth_requestAccounts" })
          resolve(web3);
        } catch (error) {
          reject(error);
        }
      } else if (window.web3) {
        resolve(window.web3);
      } else {
        reject(new Error('No web3 provider detected'));
      }
    });
  });
};

const getContract = async (web3) => {
  const networkId = await web3.eth.net.getId();
  const deployedNetwork = PaymentContract.networks[networkId];
  return new web3.eth.Contract(
    PaymentContract.abi,
    deployedNetwork && deployedNetwork.address,
  );
};

export { getWeb3, getContract };
