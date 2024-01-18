document.getElementById('spinButton').addEventListener('click', spinSlotMachine);

const symbols = ["🍒", "🍋", "🍊", "🍉", "🍇", "🍓", "🔔", "💎"];

function spinReel(reel, delay) {
    setTimeout(() => {
        reel.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    }, delay);
}

function spinSlotMachine() {
    const reel1 = document.getElementById('reel1');
    const reel2 = document.getElementById('reel2');
    const reel3 = document.getElementById('reel3');
    const resultDiv = document.getElementById('result');

    // 各リールを異なるタイミングでスピンさせる
    spinReel(reel1, 500); // 0.5秒後にリール1をスピン
    spinReel(reel2, 1000); // 1秒後にリール2をスピン
    spinReel(reel3, 1500); // 1.5秒後にリール3をスピン

    // 最後のリールが止まった後に結果を表示
    setTimeout(() => {
        if (reel1.textContent === reel2.textContent && reel2.textContent === reel3.textContent) {
            resultDiv.textContent = "当たり！";
        } else {
            resultDiv.textContent = "残念、もう一度挑戦してください。";
        }
    }, 1600); // 1.6秒後に結果をチェック
}
