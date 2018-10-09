var address = '0x40e9c4b8886f772fd5315111b8e295b047ccd926';

var ABI = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "ow",
				"type": "address"
			},
			{
				"name": "s",
				"type": "uint256"
			}
		],
		"name": "createHome",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "homeId",
				"type": "uint256"
			},
			{
				"name": "cost",
				"type": "uint256"
			}
		],
		"name": "saleHome",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "adToId",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "homeId",
				"type": "uint256"
			}
		],
		"name": "getHome",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "bool"
			},
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "homes",
		"outputs": [
			{
				"name": "s",
				"type": "uint256"
			},
			{
				"name": "isForSale",
				"type": "bool"
			},
			{
				"name": "owner",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "id",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "mainOwner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];
var con = web3.eth.contract(ABI);
var home = con.at(address);


function getHomes() {
  var size = getSize();

}

function getSize() {
  var an;
  home.id.call(function(error, result){an = result.c[0]})
  return an;
}
function createHouse() {
   var address = document.getElementById('createHomeAddres');
   var s = document.getElementById('createHomeS');
    home.createHome(address.value, s.value, function(error, result){
    })
}
