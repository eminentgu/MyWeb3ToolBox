#!/usr/bin/env python
# coding: utf-8
import web3
from web3 import Web3
from web3.middleware import construct_sign_and_send_raw_middleware

privateKey = ["你的私钥"]
#w3 = Web3(Web3.HTTPProvider('https://ethereum-sepolia.publicnode.com')) #测试网
w3 = Web3(Web3.HTTPProvider('https://ethereum.publicnode.com')) #RPC

def deposite_to_scroll(eth_amount,L2_fee,gas_limit,address,private_key):
    print("开始将",eth_amount,"ETH存到scroll：")
    contract_address = '0xF8B1378579659D8F7EE5f3C929c2f3E332E41Fd6'
    contract_abi = [
        {
            "constant": False,
            "inputs": [
                {
                    "name": "_amount",
                    "type": "uint256"
                },
                {
                    "name": "_gasLimit",
                    "type": "uint256"
                }
            ],
            "name": "depositETH",
            "outputs": [],
            "payable": True,
            "stateMutability": "payable",
            "type": "function"
        }
    ]
    contract = w3.eth.contract(address=contract_address, abi=contract_abi)
    #eth_amount =0.011
    #print(w3.to_wei(eth_amount, 'ether'))
    #print(w3.to_wei(gas_limit, 'gwei'))

    transaction = contract.functions.depositETH(w3.to_wei(eth_amount, 'ether'),gas_limit).build_transaction({
        'chainId': 1,
        'from': address,
        'nonce': w3.eth.get_transaction_count(address),
        'gas': gas_limit,
        'value': w3.to_wei(eth_amount+ L2_fee, 'ether')
    })
    signed_transaction = w3.eth.account.sign_transaction(transaction, private_key=private_key)
    tx_hash = w3.eth.send_raw_transaction(signed_transaction.rawTransaction)
    tx_receipt = w3.eth.wait_for_transaction_receipt(tx_hash)
    print(f"交易哈希: {tx_hash.hex()}")
    #print(f"Transaction Receipt: {tx_receipt}") # 交易收据
    print("完成")
def main():
    eth_amount = 0.011
    L2_fee = 0.0005
    gas_limit = 400000

    for i in range(len(privateKey)):
        private_key = privateKey[i]
        address = w3.eth.account.from_key(private_key).address
        balance = w3.eth.get_balance(address)
        eth_balance_0 = w3.from_wei(balance, 'ether')
        print(f"地址{address} 余额  {eth_balance_0} ETH")
        gas_price = w3.eth.gas_price
        print("目前的gas :", w3.from_wei(gas_price, 'gwei') )

        deposite_to_scroll(eth_amount,L2_fee,gas_limit,address,private_key)
        balance = w3.eth.get_balance(address)
        eth_balance_1 = w3.from_wei(balance, 'ether')
        print(f"操作后地址{address} 余额  {eth_balance_1} ETH \n 一共花费 {eth_balance_0-eth_balance_1},跨链 {eth_amount} ETH")
        print("------------------------------------------------------")

if __name__ =='__main__':
    main()




