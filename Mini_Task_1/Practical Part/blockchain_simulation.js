//In HTML Doc:
<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js"></script>

<script>
        class Block {
            constructor(index, timestamp, data, previousHash) {
                this.index = index;
                this.timestamp = timestamp;
                this.data = data;
                this.previousHash = previousHash;
                this.nonce = 0;
                this.hash = this.calculateHash();
            }

            calculateHash() {
                const blockString = `${this.index}${this.timestamp}${this.data}${this.previousHash}${this.nonce}`;
                return CryptoJS.SHA256(blockString).toString();
            }

            toString() {
                return `Block #${this.index}\n` +
                       `Timestamp: ${this.timestamp}\n` +
                       `Data: ${this.data}\n` +
                       `Previous Hash: ${this.previousHash}\n` +
                       `Hash: ${this.hash}\n` +
                       `Nonce: ${this.nonce}\n`;
            }
        }

        // Create a blockchain with 3 blocks
        const blockchain = [];
        const currentTimestamp = "2025-06-07 20:33 IST";

        // Genesis block (Block 0)
        const genesisBlock = new Block(0, currentTimestamp, "Genesis Block", "0");
        blockchain.push(genesisBlock);

        // Block 1
        const block1 = new Block(1, currentTimestamp, "Transaction Data 1", genesisBlock.hash);
        blockchain.push(block1);

        // Block 2
        const block2 = new Block(2, currentTimestamp, "Transaction Data 2", block1.hash);
        blockchain.push(block2);

        // Display the initial blockchain
        let output = "Initial Blockchain:\n";
        blockchain.forEach(block => output += block.toString() + "\n");
        output += "\nChanging Block 1's data...\n\n";

        // Challenge: Change Block 1's data and observe the effect
        block1.data = "Modified Transaction Data 1";
        block1.hash = block1.calculateHash(); // Recalculate Block 1's hash

        // Block 2's previousHash no longer matches Block 1's new hash
        output += "Blockchain after changing Block 1's data (Block 2 is now invalid):\n";
        blockchain.forEach(block => output += block.toString() + "\n");

        // Recompute Block 2's hash to fix the chain
        block2.previousHash = block1.hash;
        block2.hash = block2.calculateHash();

        output += "\nBlockchain after recomputing Block 2's hash:\n";
        blockchain.forEach(block => output += block.toString() + "\n");

        // Display the result
        document.getElementById("output").textContent = output;
    </script>
