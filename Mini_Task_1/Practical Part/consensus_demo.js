<script>
        // Helper function to generate a random number between min and max
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        // Timestamp for the simulation
        const currentTimestamp = "2025-06-07 20:47 IST";

        // Mock objects for validators
        const miners = [
            { id: "Miner A", power: getRandomInt(1, 100) },
            { id: "Miner B", power: getRandomInt(1, 100) },
            { id: "Miner C", power: getRandomInt(1, 100) }
        ];

        const stakers = [
            { id: "Staker A", stake: getRandomInt(100, 1000) },
            { id: "Staker B", stake: getRandomInt(100, 1000) },
            { id: "Staker C", stake: getRandomInt(100, 1000) }
        ];

        const delegates = [
            { id: "Delegate A", votes: 0 },
            { id: "Delegate B", votes: 0 },
            { id: "Delegate C", votes: 0 }
        ];

        const voters = [
            { id: "Voter 1", vote: delegates[getRandomInt(0, 2)] },
            { id: "Voter 2", vote: delegates[getRandomInt(0, 2)] },
            { id: "Voter 3", vote: delegates[getRandomInt(0, 2)] }
        ];

        // Assign votes to delegates
        voters.forEach(voter => voter.vote.votes++);

        // Simulate PoW: Select validator with highest power
        const powWinner = miners.reduce((max, miner) => miner.power > max.power ? miner : max, miners[0]);
        const powExplanation = `PoW Selection Logic: Miner with highest power wins. Powers - Miner A: ${miners[0].power}, Miner B: ${miners[1].power}, Miner C: ${miners[2].power}. Winner: ${powWinner.id} with power ${powWinner.power}.`;

        // Simulate PoS: Select validator with highest stake
        const posWinner = stakers.reduce((max, staker) => staker.stake > max.stake ? staker : max, stakers[0]);
        const posExplanation = `PoS Selection Logic: Staker with highest stake wins. Stakes - Staker A: ${stakers[0].stake}, Staker B: ${stakers[1].stake}, Staker C: ${stakers[2].stake}. Winner: ${posWinner.id} with stake ${posWinner.stake}.`;

        // Simulate DPoS: Randomly choose a delegate based on most votes
        const maxVotes = Math.max(...delegates.map(delegate => delegate.votes));
        const topDelegates = delegates.filter(delegate => delegate.votes === maxVotes);
        const dposWinner = topDelegates[getRandomInt(0, topDelegates.length - 1)];
        const dposExplanation = `DPoS Selection Logic: Delegates with most votes are eligible. Votes - Delegate A: ${delegates[0].votes}, Delegate B: ${delegates[1].votes}, Delegate C: ${delegates[2].votes}. Winner: ${dposWinner.id} with ${dposWinner.votes} votes (randomly chosen if tied).`;

        // Output results
        let output = `Simulation Results at ${currentTimestamp}:\n\n`;
        output += `PoW Selected Validator: ${powWinner.id}\n`;
        output += `Consensus Method: Proof-of-Work\n\n`;
        output += `PoS Selected Validator: ${posWinner.id}\n`;
        output += `Consensus Method: Proof-of-Stake\n\n`;
        output += `DPoS Selected Validator: ${dposWinner.id}\n`;
        output += `Consensus Method: Delegated Proof-of-Stake\n\n`;
        output += `Explanations:\n`;
        output += `${powExplanation}\n`;
        output += `${posExplanation}\n`;
        output += `${dposExplanation}\n`;

        // Display the result
        document.getElementById("output").textContent = output;

        // Console log for explanations
        console.log(powExplanation);
        console.log(posExplanation);
        console.log(dposExplanation);
    </script>
