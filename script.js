// Your script here.
        const synth = window.speechSynthesis;
        const textInput = document.getElementById('text-input');
        const voiceSelect = document.getElementById('voice-select');
        const rateInput = document.getElementById('rate');
        const pitchInput = document.getElementById('pitch');
        const startBtn = document.getElementById('start-btn');
        const stopBtn = document.getElementById('stop-btn');

        let voices = [];

        const populateVoiceList = () => {
            voices = synth.getVoices();
            voiceSelect.innerHTML = '';
            voices.forEach((voice, index) => {
                const option = document.createElement('option');
                option.value = index;
                option.textContent = `${voice.name} (${voice.lang})`;
                voiceSelect.appendChild(option);
            });
        };

        synth.onvoiceschanged = populateVoiceList;

        startBtn.addEventListener('click', () => {
            const utterance = new SpeechSynthesisUtterance(textInput.value);
            const selectedVoice = voices[voiceSelect.value];
            utterance.voice = selectedVoice;
            utterance.rate = rateInput.value;
            utterance.pitch = pitchInput.value;
            synth.speak(utterance);
        });

        stopBtn.addEventListener('click', () => {
            synth.cancel();
        });