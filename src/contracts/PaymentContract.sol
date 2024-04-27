// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract PaymentContract {
    address payable owner;
    uint256 totalAmount;
    uint256 totalPaid;
    uint256 paymentPercentage;
    uint256 paymentInterval;
    uint256 startTime;
    uint256 lastDistributionTime; // Add this variable
    address[] beneficiaries;
    mapping(address => uint256) public amountsPaid;

    event Payment(address indexed beneficiary, uint256 amount);

    constructor(
        uint256 _totalAmount,
        uint256 _paymentPercentage,
        uint256 _paymentInterval,
        address[] memory _beneficiaries
    ) {
        owner = payable(msg.sender);
        totalAmount = _totalAmount;
        paymentPercentage = _paymentPercentage;
        paymentInterval = _paymentInterval;
        beneficiaries = _beneficiaries;
        startTime = block.timestamp;
        lastDistributionTime = startTime; // Initialize lastDistributionTime
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    function depositFunds() public payable onlyOwner {
        require(msg.value == totalAmount, "Incorrect amount sent");
    }

    function distributeFundsAutomatically() public onlyOwner {
        require(block.timestamp >= startTime, "Payment period has not started yet");
        require(totalPaid < totalAmount, "All funds have been distributed");
        require(block.timestamp >= lastDistributionTime + paymentInterval, "Payment interval has not elapsed yet");
    
        for (uint256 i = 0; i < beneficiaries.length; i++) {
            address beneficiary = beneficiaries[i];
            uint256 amountToPay = (totalAmount * paymentPercentage) / 100;
            if (amountsPaid[beneficiary] < amountToPay) {
                uint256 remainingAmount = amountToPay - amountsPaid[beneficiary];
                if (totalPaid + remainingAmount <= totalAmount) {
                    payable(beneficiary).transfer(remainingAmount);
                    amountsPaid[beneficiary] += remainingAmount;
                    totalPaid += remainingAmount;
                    emit Payment(beneficiary, remainingAmount);
                } else {
                    uint256 finalPayment = totalAmount - totalPaid;
                    payable(beneficiary).transfer(finalPayment);
                    amountsPaid[beneficiary] += finalPayment;
                    totalPaid += finalPayment;
                    emit Payment(beneficiary, finalPayment);
                }
            }
        }
    
        lastDistributionTime = block.timestamp;
    }

    function withdrawExcess() public onlyOwner {
        require(block.timestamp >= startTime, "Payment period has not started yet");
        require(totalPaid >= totalAmount, "Total amount not paid yet");

        owner.transfer(address(this).balance - totalAmount);
    }

    function getTotalAmount() public view returns (uint256) {
        return totalAmount;
    }

    function getTotalPaid() public view returns (uint256) {
        return totalPaid;
    }
}

