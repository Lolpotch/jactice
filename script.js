const words = [
    { japanese: "こんにちは", latin: "Konnichiha (Konnichiwa)" },
    { japanese: "ありがとう", latin: "Arigatou" },
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
    { japanese: "すし", latin: "Sushi" },
    { japanese: "とうふ", latin: "Toufu (Tofu)" },
    { japanese: "そにい", latin: "Sonii (Sony)" },
    { japanese: "ほんだ", latin: "Honda" },
    { japanese: "てんぷら", latin: "Tenpura" },
    { japanese: "さようなら", latin: "Sayounara" },
    { japanese: "ときょう", latin: "Tokyou (Tokyo)" },
    { japanese: "じゅどう", latin: "Jyudou (Judo)" },
    { japanese: "にんじゃ", latin: "Ninjya (Ninja)" },
    { japanese: "せんせい", latin: "Sensei" },
    { japanese: "さけ", latin: "Sake" },
    { japanese: "きもの", latin: "Kimono" },
    { japanese: "はいく", latin: "Haiku" },
    { japanese: "ひばち", latin: "Hibachi" },
    { japanese: "へりこぶた一", latin: "Herikoputa (Helicopter)" },
    { japanese: "ほてる", latin: "Hoteru (Hotel)" },
    { japanese: "ふろんと", latin: "Furonto (Front)" },
    { japanese: "ぬーどる", latin: "Nuudoru (Noodle)" },
    { japanese: "てれび", latin: "Terebi (Television)" },
    { japanese: "ねくれす", latin: "Nekuresu (Necklace)" }
];

let availableWords = [...words]; // Copy of the original array
let usedWords = []; // To track used words

function shuffleWord() {
    if (availableWords.length === 0) {
        // Reset when no words are left
        availableWords = [...usedWords];
        usedWords = [];
        
        // Debug :
        // alert("All words have been used! Resetting the word pool."); // Optional visual feedback
    }

    // Get a random word from availableWords
    const randomIndex = Math.floor(Math.random() * availableWords.length);
    const selectedWord = availableWords.splice(randomIndex, 1)[0]; // Remove from availableWords
    usedWords.push(selectedWord); // Add to usedWords

    // Display the word
    document.getElementById('japanese-word').textContent = selectedWord.japanese;
    const latinElement = document.getElementById('latin-version');
    latinElement.textContent = selectedWord.latin;
    latinElement.style.visibility = 'hidden'; // Keep space but hide the Latin word
}

document.getElementById('japanese-word').addEventListener('click', () => {
    const latinElement = document.getElementById('latin-version');
    latinElement.style.visibility = 'visible'; // Reveal the Latin word
});
