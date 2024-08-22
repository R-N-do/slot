const symbols = ["🍒", "🍋", "🍊", "🍉", "🍇", "🍓", "🔔", "💎"];
let spinning = [true, true, true]; // 初期状態ではすべてのリールが回転していると仮定

document.getElementById('spinButton').addEventListener('click', () => {
    // スピンボタンをクリックするとすべてのリールを回転させる
    spinning.fill(true);
    spinReel(0);
    spinReel(1);
    spinReel(2);
});

document.getElementById('stopButton1').addEventListener('click', () => stopReel(0));
document.getElementById('stopButton2').addEventListener('click', () => stopReel(1));
document.getElementById('stopButton3').addEventListener('click', () => stopReel(2));

function spinReel(reel) {
    if (spinning[reel]) {
        const reelElement = document.getElementById('reel' + (reel + 1));
        reelElement.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        setTimeout(() => spinReel(reel), 50); // 50ミリ秒ごとにシンボルを更新
    }
}

function stopReel(reel) {
    spinning[reel] = false;

    // 全てのリールが停止したら結果をチェック
    if (spinning.every(val => val === false)) {
        checkWin();
    }
}

function checkWin() {
    const reel1 = document.getElementById('reel1').textContent;
    const reel2 = document.getElementById('reel2').textContent;
    const reel3 = document.getElementById('reel3').textContent;
    const resultDiv = document.getElementById('result');

    if (reel1 === reel2 && reel2 === reel3) {
      //  resultDiv.textContent = "当たり！";
    } else {
      //  resultDiv.textContent = "残念、もう一度挑戦してください。";
    }
}
