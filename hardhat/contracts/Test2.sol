// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

// contract definition

contract AccessControl {
    // statee variabble to storee the owner's addresss
    address public owner;

    // function to change the owner

    function changeOwner(address newOwner) public {
        // check if the caller of this function
        if (msg.sender == owner) {
            owner = newOwner; // change the owner to the new address
        } else {
            revert("Only the owner can call this function"); // Throw an error if the caller is not the owner
        }
    }
}
