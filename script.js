const words = [
    { japanese: "こんにちは", latin: "Konnichiwa" },
    { japanese: "ありがとう", latin: "Arigatou" },
    { japanese: "さようなら", latin: "Sayounara" },
    { japanese: "おはよう", latin: "Ohayou" },
    { japanese: "すみません", latin: "Sumimasen" },
    { japanese: "あにめ", latin: "Anime" },
    { japanese: "やまは", latin: "Yamaha" },
    { japanese: "さむらい", latin: "Samurai" },
    { japanese: "かたな", latin: "Katana" },
    { japanese: "おりがみ", latin: "Origami" },
    { japanese: "つなみ", latin: "Tsunami" },
    { japanese: "みつびし", latin: "Mitsubishi" },
    { japanese: "わさび", latin: "Wasabi" },
    { japanese: "とうふ", latin: "Toufu" },
    { japanese: "すし", latin: "Sushi" }
];

function shuffleWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    const selectedWord = words[randomIndex];

    document.getElementById('japanese-word').textContent = selectedWord.japanese;
    const latinElement = document.getElementById('latin-version');
    latinElement.textContent = selectedWord.latin;
    latinElement.style.visibility = 'hidden'; // Keep space but hide the Latin word
}

document.getElementById('japanese-word').addEventListener('click', () => {
    const latinElement = document.getElementById('latin-version');
    latinElement.style.visibility = 'visible'; // Reveal the Latin word
});