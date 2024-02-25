let speech = new SpeechSynthesisUtterance()


let voices=[]
let voiceSelect = document.querySelector("select")

window.speechSynthesis.onvoiceschanged=()=>{
    voices=window.speechSynthesis.getVoices()
    speech.voice = voices[0]   //first voive will be played

    voices.forEach((voice,i) => (voiceSelect.options[i] = new Option(voice.name, i)))
}

voiceSelect.addEventListener("change", ()=> {  //to get voices from dropdown
    speech.voice=voices[voiceSelect.value]
})


document.querySelector("button").addEventListener("click", ()=>{
    speech.text=document.querySelector("textarea").value
    window.speechSynthesis.speak(speech)
})