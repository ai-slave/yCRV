const YVECRV_ABI = [
	{'inputs':[], 'stateMutability':'nonpayable', 'type':'constructor'}, {'anonymous':false, 'inputs':[{'indexed':true, 'internalType':'address', 'name':'owner', 'type':'address'}, {'indexed':true, 'internalType':'address', 'name':'spender', 'type':'address'}, {'indexed':false, 'internalType':'uint256', 'name':'amount', 'type':'uint256'}], 'name':'Approval', 'type':'event'}, {'anonymous':false, 'inputs':[{'indexed':true, 'internalType':'address', 'name':'delegator', 'type':'address'}, {'indexed':true, 'internalType':'address', 'name':'fromDelegate', 'type':'address'}, {'indexed':true, 'internalType':'address', 'name':'toDelegate', 'type':'address'}], 'name':'DelegateChanged', 'type':'event'}, {'anonymous':false, 'inputs':[{'indexed':true, 'internalType':'address', 'name':'delegate', 'type':'address'}, {'indexed':false, 'internalType':'uint256', 'name':'previousBalance', 'type':'uint256'}, {'indexed':false, 'internalType':'uint256', 'name':'newBalance', 'type':'uint256'}], 'name':'DelegateVotesChanged', 'type':'event'}, {'anonymous':false, 'inputs':[{'indexed':true, 'internalType':'address', 'name':'from', 'type':'address'}, {'indexed':true, 'internalType':'address', 'name':'to', 'type':'address'}, {'indexed':false, 'internalType':'uint256', 'name':'amount', 'type':'uint256'}], 'name':'Transfer', 'type':'event'}, {'inputs':[], 'name':'CRV', 'outputs':[{'internalType':'contract IERC20', 'name':'', 'type':'address'}], 'stateMutability':'view', 'type':'function'}, {'inputs':[], 'name':'DELEGATION_TYPEHASH', 'outputs':[{'internalType':'bytes32', 'name':'', 'type':'bytes32'}], 'stateMutability':'view', 'type':'function'}, {'inputs':[], 'name':'DOMAINSEPARATOR', 'outputs':[{'internalType':'bytes32', 'name':'', 'type':'bytes32'}], 'stateMutability':'view', 'type':'function'}, {'inputs':[], 'name':'DOMAIN_TYPEHASH', 'outputs':[{'internalType':'bytes32', 'name':'', 'type':'bytes32'}], 'stateMutability':'view', 'type':'function'}, {'inputs':[], 'name':'LOCK', 'outputs':[{'internalType':'address', 'name':'', 'type':'address'}], 'stateMutability':'view', 'type':'function'}, {'inputs':[], 'name':'PERMIT_TYPEHASH', 'outputs':[{'internalType':'bytes32', 'name':'', 'type':'bytes32'}], 'stateMutability':'view', 'type':'function'}, {'inputs':[], 'name':'acceptGovernance', 'outputs':[], 'stateMutability':'nonpayable', 'type':'function'}, {'inputs':[{'internalType':'address', 'name':'account', 'type':'address'}, {'internalType':'address', 'name':'spender', 'type':'address'}], 'name':'allowance', 'outputs':[{'internalType':'uint256', 'name':'', 'type':'uint256'}], 'stateMutability':'view', 'type':'function'}, {'inputs':[{'internalType':'address', 'name':'spender', 'type':'address'}, {'internalType':'uint256', 'name':'amount', 'type':'uint256'}], 'name':'approve', 'outputs':[{'internalType':'bool', 'name':'', 'type':'bool'}], 'stateMutability':'nonpayable', 'type':'function'}, {'inputs':[], 'name':'bal', 'outputs':[{'internalType':'uint256', 'name':'', 'type':'uint256'}], 'stateMutability':'view', 'type':'function'}, {'inputs':[{'internalType':'address', 'name':'account', 'type':'address'}], 'name':'balanceOf', 'outputs':[{'internalType':'uint256', 'name':'', 'type':'uint256'}], 'stateMutability':'view', 'type':'function'}, {'inputs':[{'internalType':'address', 'name':'', 'type':'address'}, {'internalType':'uint32', 'name':'', 'type':'uint32'}], 'name':'checkpoints', 'outputs':[{'internalType':'uint32', 'name':'fromBlock', 'type':'uint32'}, {'internalType':'uint256', 'name':'votes', 'type':'uint256'}], 'stateMutability':'view', 'type':'function'}, {'inputs':[], 'name':'claim', 'outputs':[], 'stateMutability':'nonpayable', 'type':'function'}, {'inputs':[{'internalType':'address', 'name':'recipient', 'type':'address'}], 'name':'claimFor', 'outputs':[], 'stateMutability':'nonpayable', 'type':'function'}, {'inputs':[{'internalType':'address', 'name':'', 'type':'address'}], 'name':'claimable', 'outputs':[{'internalType':'uint256', 'name':'', 'type':'uint256'}], 'stateMutability':'view', 'type':'function'}, {'inputs':[], 'name':'decimals', 'outputs':[{'internalType':'uint8', 'name':'', 'type':'uint8'}], 'stateMutability':'view', 'type':'function'}, {'inputs':[{'internalType':'address', 'name':'delegatee', 'type':'address'}], 'name':'delegate', 'outputs':[], 'stateMutability':'nonpayable', 'type':'function'}, {'inputs':[{'internalType':'address', 'name':'delegatee', 'type':'address'}, {'internalType':'uint256', 'name':'nonce', 'type':'uint256'}, {'internalType':'uint256', 'name':'expiry', 'type':'uint256'}, {'internalType':'uint8', 'name':'v', 'type':'uint8'}, {'internalType':'bytes32', 'name':'r', 'type':'bytes32'}, {'internalType':'bytes32', 'name':'s', 'type':'bytes32'}], 'name':'delegateBySig', 'outputs':[], 'stateMutability':'nonpayable', 'type':'function'}, {'inputs':[{'internalType':'address', 'name':'', 'type':'address'}], 'name':'delegates', 'outputs':[{'internalType':'address', 'name':'', 'type':'address'}], 'stateMutability':'view', 'type':'function'}, {'inputs':[{'internalType':'uint256', 'name':'_amount', 'type':'uint256'}], 'name':'deposit', 'outputs':[], 'stateMutability':'nonpayable', 'type':'function'}, {'inputs':[], 'name':'depositAll', 'outputs':[], 'stateMutability':'nonpayable', 'type':'function'}, {'inputs':[], 'name':'feeDistribution', 'outputs':[{'internalType':'address', 'name':'', 'type':'address'}], 'stateMutability':'view', 'type':'function'}, {'inputs':[{'internalType':'address', 'name':'account', 'type':'address'}], 'name':'getCurrentVotes', 'outputs':[{'internalType':'uint256', 'name':'', 'type':'uint256'}], 'stateMutability':'view', 'type':'function'}, {'inputs':[{'internalType':'address', 'name':'account', 'type':'address'}, {'internalType':'uint256', 'name':'blockNumber', 'type':'uint256'}], 'name':'getPriorVotes', 'outputs':[{'internalType':'uint256', 'name':'', 'type':'uint256'}], 'stateMutability':'view', 'type':'function'}, {'inputs':[], 'name':'governance', 'outputs':[{'internalType':'address', 'name':'', 'type':'address'}], 'stateMutability':'view', 'type':'function'}, {'inputs':[], 'name':'index', 'outputs':[{'internalType':'uint256', 'name':'', 'type':'uint256'}], 'stateMutability':'view', 'type':'function'}, {'inputs':[], 'name':'name', 'outputs':[{'internalType':'string', 'name':'', 'type':'string'}], 'stateMutability':'view', 'type':'function'}, {'inputs':[{'internalType':'address', 'name':'', 'type':'address'}], 'name':'nonces', 'outputs':[{'internalType':'uint256', 'name':'', 'type':'uint256'}], 'stateMutability':'view', 'type':'function'}, {'inputs':[{'internalType':'address', 'name':'', 'type':'address'}], 'name':'numCheckpoints', 'outputs':[{'internalType':'uint32', 'name':'', 'type':'uint32'}], 'stateMutability':'view', 'type':'function'}, {'inputs':[], 'name':'pendingGovernance', 'outputs':[{'internalType':'address', 'name':'', 'type':'address'}], 'stateMutability':'view', 'type':'function'}, {'inputs':[{'internalType':'address', 'name':'owner', 'type':'address'}, {'internalType':'address', 'name':'spender', 'type':'address'}, {'internalType':'uint256', 'name':'amount', 'type':'uint256'}, {'internalType':'uint256', 'name':'deadline', 'type':'uint256'}, {'internalType':'uint8', 'name':'v', 'type':'uint8'}, {'internalType':'bytes32', 'name':'r', 'type':'bytes32'}, {'internalType':'bytes32', 'name':'s', 'type':'bytes32'}], 'name':'permit', 'outputs':[], 'stateMutability':'nonpayable', 'type':'function'}, {'inputs':[], 'name':'proxy', 'outputs':[{'internalType':'address', 'name':'', 'type':'address'}], 'stateMutability':'view', 'type':'function'}, {'inputs':[], 'name':'rewards', 'outputs':[{'internalType':'contract IERC20', 'name':'', 'type':'address'}], 'stateMutability':'view', 'type':'function'}, {'inputs':[{'internalType':'address', 'name':'_feeDistribution', 'type':'address'}], 'name':'setFeeDistribution', 'outputs':[], 'stateMutability':'nonpayable', 'type':'function'}, {'inputs':[{'internalType':'address', 'name':'_governance', 'type':'address'}], 'name':'setGovernance', 'outputs':[], 'stateMutability':'nonpayable', 'type':'function'}, {'inputs':[{'internalType':'address', 'name':'_proxy', 'type':'address'}], 'name':'setProxy', 'outputs':[], 'stateMutability':'nonpayable', 'type':'function'}, {'inputs':[{'internalType':'address', 'name':'', 'type':'address'}], 'name':'supplyIndex', 'outputs':[{'internalType':'uint256', 'name':'', 'type':'uint256'}], 'stateMutability':'view', 'type':'function'}, {'inputs':[], 'name':'symbol', 'outputs':[{'internalType':'string', 'name':'', 'type':'string'}], 'stateMutability':'view', 'type':'function'}, {'inputs':[], 'name':'totalSupply', 'outputs':[{'internalType':'uint256', 'name':'', 'type':'uint256'}], 'stateMutability':'view', 'type':'function'}, {'inputs':[{'internalType':'address', 'name':'dst', 'type':'address'}, {'internalType':'uint256', 'name':'amount', 'type':'uint256'}], 'name':'transfer', 'outputs':[{'internalType':'bool', 'name':'', 'type':'bool'}], 'stateMutability':'nonpayable', 'type':'function'}, {'inputs':[{'internalType':'address', 'name':'src', 'type':'address'}, {'internalType':'address', 'name':'dst', 'type':'address'}, {'internalType':'uint256', 'name':'amount', 'type':'uint256'}], 'name':'transferFrom', 'outputs':[{'internalType':'bool', 'name':'', 'type':'bool'}], 'stateMutability':'nonpayable', 'type':'function'}, {'inputs':[], 'name':'update', 'outputs':[], 'stateMutability':'nonpayable', 'type':'function'}, {'inputs':[{'internalType':'address', 'name':'recipient', 'type':'address'}], 'name':'updateFor', 'outputs':[], 'stateMutability':'nonpayable', 'type':'function'}
];

export default YVECRV_ABI;