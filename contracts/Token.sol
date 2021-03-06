// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import 'hardhat/console.sol';

contract Token {
    string public name = "My Hardhat Token";
    string public symbol = "MBT";
    uint public totalSupply = 1000000;
    address public owner;
    mapping(address=>uint) public balances;

    constructor(){
        owner = msg.sender;
        balances[msg.sender] = totalSupply;
    }

    function transfer(address _to, uint _amount) external {
        console.log("The sender balance is %s",balances[msg.sender]);
        console.log("trying to send %s token to %s",_amount,_to);
        require(balances[msg.sender] >= _amount,"No Enough Balances");
        balances[msg.sender] -= _amount;
        balances[_to] += _amount;
    
    }

    function balanceOf(address _address) external view returns(uint){
        return balances[_address];
    }
        
}