pragma solidity ^0.4.22;
contract Ballot {

    address public mainOwner = msg.sender;
    
    modifier onlyBy(address _account)
    {
        require(
            msg.sender == _account,
            "Fuck off"
        );
        _;
    }
    
    struct Home {
        uint s;
        bool isForSale;
        address owner;
    }

    mapping(address => uint[]) public adToId;
    
    Home[] public homes;
    uint public id = 0;

    function createHome(address ow, uint s) public onlyBy(mainOwner) {
        adToId[ow].push(id);
        homes.push(Home(s, false, ow));
        id++;
    }
    function getHome(uint homeId) constant public returns(uint, bool, address){
        return (homes[homeId].s, homes[homeId].isForSale, homes[homeId].owner);
    }
    function saleHome(uint homeId, uint cost) onlyBy(homes[homeId].owner) public {
       homes[homeId].isForSale = true;
    }
    
}