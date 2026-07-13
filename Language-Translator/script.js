async function translateText() {

    let text = document.getElementById("inputText").value;
    let source = document.getElementById("sourceLang").value;
    let target = document.getElementById("targetLang").value;

    if(text==""){
        alert("Please enter some text");
        return;
    }

    let url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${source}|${target}`;

    try{

        let response = await fetch(url);

        let data = await response.json();

        document.getElementById("outputText").value =
        data.responseData.translatedText;

    }
    catch(error){

        alert("Translation Failed!");

    }

}

// Copy Button

function copyText(){

    let output=document.getElementById("outputText");

    output.select();

    document.execCommand("copy");

    alert("Copied!");

}

// Text To Speech

function speakText(){

    let text=document.getElementById("outputText").value;

    let speech=new SpeechSynthesisUtterance(text);

    speech.lang=document.getElementById("targetLang").value;

    window.speechSynthesis.speak(speech);

}