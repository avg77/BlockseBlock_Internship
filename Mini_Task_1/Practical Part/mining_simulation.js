//in HTML file:
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

            mineBlock(difficulty) {
                const startTime = performance.now();
                let attempts = 0;
                const target = "0".repeat(difficulty); // E.g., "0000" for difficulty 4

                while (this.hash.substring(0, difficulty) !== target) {
                    this.nonce++;
                    attempts++;
                    this.hash = this.calculateHash();
                }

                const endTime = performance.now();
                const timeTaken = ((endTime - startTime) / 1000).toFixed(2); // Convert to seconds
                return { attempts, timeTaken };
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
        const currentTimestamp = "2025-06-07 20:41 IST";
        const difficulty = 4; // Hash must start with "0000"

        // Genesis block (Block 0) - Not mined for simplicity
        const genesisBlock = new Block(0, currentTimestamp, "Genesis Block", "0");
        blockchain.push(genesisBlock);

        // Block 1 - Will be mined
        const block1 = new Block(1, currentTimestamp, "Transaction Data 1", genesisBlock.hash);
        const miningResult1 = block1.mineBlock(difficulty);
        blockchain.push(block1);

        // Block 2 - Will be mined
        const block2 = new Block(2, currentTimestamp, "Transaction Data 2", block1.hash);
        const miningResult2 = block2.mineBlock(difficulty);
        blockchain.push(block2);

        // Display the blockchain and mining results
        let output = "Blockchain with Proof-of-Work:\n\n";
        blockchain.forEach(block => output += block.toString() + "\n");

        output += `Mining Results for Block 1:\n` +
                 `Attempts: ${miningResult1.attempts}\n` +
                 `Time Taken: ${miningResult1.timeTaken} seconds\n\n`;

        output += `Mining Results for Block 2:\n` +
                 `Attempts: ${miningResult2.attempts}\n` +
                 `Time Taken: ${miningResult2.timeTaken} seconds\n`;

        // Display the result
        document.getElementById("output").textContent = output;
    </script>

