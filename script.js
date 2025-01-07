const hiraganaWords = [
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
    { japanese: "ときょう", latin: "Tokyou (Tokyo)" },
    { japanese: "じゅどう", latin: "Jyudou (Judo)" },
    { japanese: "にんじゃ", latin: "Ninjya (Ninja)" },
    { japanese: "せんせい", latin: "Sensei" },
    { japanese: "さけ", latin: "Sake" },
    { japanese: "きもの", latin: "Kimono" },
    { japanese: "はいく", latin: "Haiku" },
    { japanese: "ひばち", latin: "Hibachi" },
    { japanese: "へりこぶた一", latin: "Herikoputaa (Helicopter)" },
    { japanese: "ほてる", latin: "Hoteru (Hotel)" },
    { japanese: "ふろんと", latin: "Furonto (Front)" },
    { japanese: "ぬーどる", latin: "Nuudoru (Noodle)" },
    { japanese: "てれび", latin: "Terebi (Television)" },
    { japanese: "ねくれす", latin: "Nekuresu (Necklace)" }
];

const katakanaWords = [
    { japanese: "カタカナ", latin: "Katakana" },
    { japanese: "テレビ", latin: "Terebi (Television)" },
    { japanese: "ホテル", latin: "Hoteru (Hotel)" },
    { japanese: "ヌードル", latin: "Nuudoru (Noodle)" },
    { japanese: "ウカキヘ", latin: "Ukakihe" },
    { japanese: "リモヤニ", latin: "Rimoyani" },
    { japanese: "セケコラ", latin: "Sekekora" },
    { japanese: "トレナモ", latin: "Torenamo" },
    { japanese: "ケ-キ", latin: "Keeki (Cake)" },
    { japanese: "カラオケ", latin: "Karaoke" },
    { japanese: "イタリア", latin: "Itaria (Italia)" },
    { japanese: "アメリカ", latin: "Amerika (America)" },
    { japanese: "ドイツ", latin: "Doitsu (Deutsch)" },
    { japanese: "サッカー", latin: "Sakaa (Soccer)" },
    { japanese: "カヌー", latin: "Kanuu (Kano)" },
    { japanese: "チェス", latin: "Chiesu (Chess)" },
    // Add more Katakana words
];

let isHiraganaMode = true;
let availableWords = [...hiraganaWords]; // Start with Hiragana
let usedWords = []; // To track used words

// Button references
const hiraganaButton = document.getElementById("hiragana-button");
const katakanaButton = document.getElementById("katakana-button");

function toggleMode() {
    if (isHiraganaMode) {
        isHiraganaMode = false;
        hiraganaButton.disabled = false;
        katakanaButton.disabled = true;
        availableWords = [...katakanaWords];
    } else {
        isHiraganaMode = true;
        hiraganaButton.disabled = true;
        katakanaButton.disabled = false;
        availableWords = [...hiraganaWords];
    }
    usedWords = []; // Reset usedWords when switching modes
    shuffleWord(); // Shuffle to display the first word in the new mode
}

function shuffleWord() {
    if (availableWords.length === 0) {
        // Reset when no words are left
        availableWords = isHiraganaMode ? [...hiraganaWords] : [...katakanaWords];
        usedWords = [];

        // alert("All words have been used! Resetting the word pool.");
    }

    // Get a random word from availableWords
    const randomIndex = Math.floor(Math.random() * availableWords.length);
    const selectedWord = availableWords.splice(randomIndex, 1)[0]; // Remove from availableWords
    usedWords.push(selectedWord); // Add to usedWords

    // Display the word
    document.getElementById("japanese-word").textContent = selectedWord.japanese;
    const latinElement = document.getElementById("latin-version");
    latinElement.textContent = selectedWord.latin;
    latinElement.style.visibility = "hidden"; // Keep space but hide the Latin word
}

document.getElementById("japanese-word").addEventListener("click", () => {
    const latinElement = document.getElementById("latin-version");
    latinElement.style.visibility = "visible"; // Reveal the Latin word
});

hiraganaButton.addEventListener("click", toggleMode);
katakanaButton.addEventListener("click", toggleMode);
