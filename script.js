// script.js
document.getElementById('spinButton').addEventListener('click', spinSlotMachine);

function spinSlotMachine() {
    const symbols = ["🍒", "🍋", "🍊", "🍉", "🍇", "🍓", "🔔", "💎"];
    const reel1 = document.getElementById('reel1');
    const reel2 = document.getElementById('reel2');
    const reel3 = document.getElementById('reel3');
    const resultDiv = document.getElementById('result');

    reel1.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    reel2.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    reel3.textContent = symbols[Math.floor(Math.random() * symbols.length)];

    if (reel1.textContent === reel2.textContent && reel2.textContent === reel3.textContent) {
        resultDiv.textContent = "当たり！";
    } else {
        resultDiv.textContent = "残念、もう一度挑戦してください。";
    }
}
