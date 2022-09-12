import {ethers} from 'ethers';

export async function	isApprovedERC20(
	provider: ethers.providers.Web3Provider,
	tokenAddress: string,
	spender: string,
	amount = ethers.constants.MaxUint256
): Promise<boolean> {
	const	signer = provider.getSigner();
	const	address = await signer.getAddress();

	try {
		const	contract = new ethers.Contract(
			tokenAddress,
			['function allowance(address _owner, address _spender) public view returns (uint256)'],
			provider
		);
		return await contract.allowance(address, spender).gte(amount);
	} catch (error) {
		return false;
	}
}

export async function	approvedERC20Amount(
	provider: ethers.providers.Web3Provider,
	tokenAddress: string,
	spender: string
): Promise<ethers.BigNumber> {
	const	signer = provider.getSigner();
	const	address = await signer.getAddress();

	try {
		const	contract = new ethers.Contract(
			tokenAddress,
			['function allowance(address _owner, address _spender) public view returns (uint256)'],
			provider
		);
		return await contract.allowance(address, spender);
	} catch (error) {
		return ethers.constants.Zero;
	}
}

export async function	approveERC20(
	provider: ethers.providers.Web3Provider,
	tokenAddress: string,
	spender: string,
	amount = ethers.constants.MaxUint256
): Promise<boolean> {
	const	signer = provider.getSigner();

	console.log({
		provider,
		tokenAddress,
		spender,
		amount: amount.toString()
	});

	try {
		const	contract = new ethers.Contract(
			tokenAddress, ['function approve(address _spender, uint256 _value) external'],
			signer
		);
		const	transaction = await contract.approve(spender, amount);
		const	transactionResult = await transaction.wait();
		if (transactionResult.status === 0) {
			console.error('Fail to perform transaction');
			return false;
		}

		return true;
	} catch(error) {
		console.error(error);
		return false;
	}
}