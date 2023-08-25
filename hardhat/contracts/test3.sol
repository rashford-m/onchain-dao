// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ComplexLogicExample {
    uint256 public balance;

    constructor(uint256 initialBalance) {
        balance = initialBalance;
    }

    function withdraw(uint256 amount) public {
        // check if the requested amount is less than or equal to the balance
        if (amount <= balance) {
            balance -= amount;
            // Perform the transfer
            // (In a real contract, you would use the transfer function to send funds to a recipent)
        } else {
            // insufficient balance, revert the transaction
            revert("Insufficient balance");
        }
    }
}

