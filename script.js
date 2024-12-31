const words = [
    { japanese: "こんにちは", latin: "Konnichiwa" },
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
    { japanese: "とうふ", latin: "Toufu" },
    { japanese: "そにい", latin: "Sonii (Sony)" },
    { japanese: "ほんだ", latin: "Honda" },
    { japanese: "てんぷら", latin: "Tenpura" },
    { japanese: "さようなら", latin: "Sayounara" },
    { japanese: "ときょう", latin: "Tokyou" },
    { japanese: "じゅどう", latin: "Judou" },
    { japanese: "にんじゃ", latin: "Ninja" },
    { japanese: "せんせい", latin: "Sensei" },
    { japanese: "さけ", latin: "Sake" },
    { japanese: "きもの", latin: "Kimono" },
    { japanese: "はいく", latin: "Haiku" },
    { japanese: "ひばち", latin: "Hibachi" },
    { japanese: "へりこぶた一", latin: "Herikoputa (Helicopter) (I know I should've used katakana here, but I'm not touching those letters yet in this page)" },
    { japanese: "ほてる", latin: "Hoteru (Hotel) (Yes, I know. No katakana in this page" },
    { japanese: "ふろんと", latin: "Furonto (Front) (NO katakana here, thank you)" },
    { japanese: "ぬーどる", latin: "Nuudoru (Noodle) (YEP, no katakana)" },
    { japanese: "てれび", latin: "Terebi (Television) (nO kAtaKAnA)" },
    { japanese: "ねくれす", latin: "Nekuresu (Necklace)" }
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