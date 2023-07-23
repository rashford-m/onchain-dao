// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";

// Replace this line with the Interfaces
interface IFakeNFTMarketplace {
    /// @dev getPrice() returns the price of an NFT from the FakeNFTMarketplace
    /// @return Returns the price in Wei for an NFT
    function getPrice() external view returns (uint256);
}
