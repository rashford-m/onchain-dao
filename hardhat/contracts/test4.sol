// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract Enum {
    // Enum representing different values
    enum Status {
        EnumValue1,
        EnumValue2,
        EnumValue3
    }
}

contract ValueTypes {
    function foo() public view returns (uint) {
        return 1;
    }

    function bar() public view returns (uint) {
        uint result = foo();
        return result;
    }
}

contract TodoList {
    // Declare a struct which groups together three data types
    struct TodoItem {
        string text;
        bool completed;
        uint256 number;
    }
}

contract Mapping {
    // Mapping from address to uint
    mapping(address => uint) public myMap;
}

contract StateVariableExample {
    // State Variable
    uint public counter = 0;

    function incrementCounter() public {
        counter++;
    }
}

contract LocalVariableExample {
    function getDouble(uint value) public pure returns (uint) {
        // Local Variable
        uint doubleValue = value * 2;
        return doubleValue;
    }

    function calculateOutputAmount(
        uint inputAmount,
        uint inputReserve,
        uint outputReserve
    ) private pure returns (uint) {
        uint outputAmount = (outputReserve * inputAmount) /
            (inputReserve + inputAmount);
        return outputAmount;
    }

    function addLiquiduty(uint tokenAmount) public payable {
        // assuming a hypothetical function
        // that returns the balance of the
        // token in the contract

        if (getReserve() == 0) {
            IERC20 token = IERC20(tokenAddress);
            token.transferFrom(msg.sender, address(this), tokenAmount);
        } else {
            uint ethReserve = address(this).balance - msg.value;
            uint tokenReserve = getReserve();
            uint proportionalTokenAmount = (msg.value * tokenReserve) /
                ethReserve;
            require(
                tokenAmount >= proportionalTokenAmount,
                "incorrect ratio of tokens provided"
            );
            IERC20 token = IERC20(tokenAddress);
            token.transferFrom(
                msg.sender,
                address(this),
                proportionalTokenAmount
            );
        }
    }
}

