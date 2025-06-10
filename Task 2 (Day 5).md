- Chosen public blockchain: **Ethereum**

- Chosen private blockchain: **Hyperledger Fabric**

- Chosen consortium blockchain: **R3 Corda**

1)
 | Blockchain Name     | Type        | Consensus Mechanism Used      | Permission Model | Speed / Throughput (TPS) | Smart Contract Support      | Token Support | Typical Use Case           | Notable Technical Feature         |
|---------------------|-------------|-------------------------------|------------------|--------------------------|-----------------------------|---------------|----------------------------|------------------------------------|
| Ethereum            | Public      | Proof of Stake (PoS)              | Open             | 15-30 TPS              | Yes (Solidity)              | Native (Ether)| Decentralized Finance (DeFi) | Robust smart contract engine      |
| Hyperledger Fabric  | Private  | Practical Byzantine Fault Tolerance (Pluggable) | Permissioned | 3,500 TPS              | Yes (Go, Java, Node.js)     | No (Custom possible) | Supply Chain Management | Pluggable consensus, private channels |
| R3 Corda            | Consortium     | Notary Nodes (Pluggable, e.g- Raft) | Permissioned | 1,000 TPS              | Yes (Java, Kotlin)          | No            | Financial Services         | Smart contract notarization, privacy focus |

3) Short Report:-

- **Ethereum** is a public blockchain that uses Proof of Stake as its consensus mechanism. It supports smart contracts written in Solidity and has native token support with Ether, making it ideal for open applications. However, its speed is slower at 15–30 transactions per second (TPS). 

- **Hyperledger Fabric** is a consortium blockchain with a pluggable consensus mechanism, often using Practical Byzantine Fault Tolerance (PBFT). It’s much faster, handling around 3,500 TPS, and offers privacy through channels, which is great for controlled networks. It supports smart contracts in Go, Java, or Node.js but doesn’t have native tokens. 

- **R3 Corda**, a private blockchain, uses notary nodes for consensus and can process around 1,000 TPS. It focuses on privacy by sharing data only with involved parties and supports smart contracts in Java or Kotlin, but lacks native tokens. 

- For a decentralized app, I’d choose *Ethereum* because its public, trustless nature and strong smart contract support are perfect for apps like DeFi platforms that need to be accessible to everyone.

- For a supply chain network among known partners, *Hyperledger Fabric* is the best choice due to its high speed, privacy features, and permissioned model, ensuring secure collaboration.

- For an inter-bank financial application, *R3 Corda* is ideal because its privacy focus and notarization ensure secure, private transactions between banks.
