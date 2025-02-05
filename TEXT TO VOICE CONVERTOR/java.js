// Create a speech object for text-to-speech
let speech = new SpeechSynthesisUtterance();
let voices = []; // To store available voices
let voiceSelect = document.querySelector("select"); // Dropdown for voice selection

// Load voices when available
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices(); // Get the list of voices

    if (voices.length > 0) {
        speech.voice = voices[0]; // Set the first voice as default
    }

    // Add each voice to the dropdown
    voices.forEach((voice) => {
        let option = new Option(voice.name, voice.voiceURI);
        voiceSelect.add(option);
    });
};

// Update the selected voice when the dropdown changes
voiceSelect.addEventListener("change", () => {
    let selectedVoice = voices.find((voice) => voice.voiceURI === voiceSelect.value);
    if (selectedVoice) {
        speech.voice = selectedVoice; // Update the voice
    }
});

// Speak the text when the button is clicked
document.querySelector("button").addEventListener("click", () => {
    let text = document.querySelector("textarea").value.trim(); // Get and trim the text
    if (!text) {
        alert("Please enter some text to convert!"); // Alert if no text is entered
        return;
    }
    speech.text = text; // Set the text to be spoken
    window.speechSynthesis.speak(speech); // Start speaking
});
