// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AccessControl {
    // State variable to store the owner's address
    address public owner;

    // setting up the modifuer called onlyOwner
    modifier onlyOwner() {
        // check if the caller is the owner
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    // function to change the owner, only callable by the current owner
    function changeOwner(address newOwner) public onlyOwner {
        owner = newOwner; // change the owner to the new address
    }
}
