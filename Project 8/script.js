const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('search-btn');
const resultContainer = document.getElementById('result-container');
const wordTitle = document.getElementById('wordTitle');
const wordDescription = document.getElementById('wordDescription');
const audioBtn = document.getElementById('audio-btn');

searchBtn.addEventListener('click', () => {
    search();
})

searchInput.addEventListener("keydown",(e) => {
    if(e.key === "Enter")
    {
        search();
    }
})

function search() {
    const searchItem = searchInput.value.trim();
    if (searchItem === "") {
        alert("Please enter a word to search!!!");
        return;
    }

    fetchDictionaryData(searchItem);
}

async function fetchDictionaryData(item) {
    try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${item}`);
        if (!response.ok) {
            throw new Error("The process to fetch the word is failed!!!");
        }

        const data = await response.json();
        displayResult(data);
    }
    catch(error) {
        console.log(error);
        alert("An error Occured.")
    }
}

function displayResult(data)
{
    resultContainer.style.display = "block";
    const wordData = data[0];
    wordTitle.textContent = wordData.word;
    wordDescription.innerHTML = `
        <ul>
            ${wordData.meanings.map(meaning => `
                <li>
                    <p><strong>Part of Speech: </strong>${meaning.partOfSpeech}</p>
                    <p><strong>Definition: </strong>${meaning.definitions[0].definition}</p>
                </li>
            `).join('\n')}
        </ul>
    `
}

audioBtn.addEventListener('click', () => {
    const searchItem = searchInput.value.trim();
    if (searchItem === "") {
        alert("Please enter a word to search!!!");
        return;
    }

    speak(searchItem);
})

function speak(item) {
    
    const speech = new SpeechSynthesisUtterance(item);
    speech.lang = "en-US";
    speech.volume = 2;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
}