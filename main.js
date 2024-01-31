let speech = new SpeechSynthesisUtterance();

document.getElementById("btn").addEventListener("click",()=>{
    if (document.querySelector("textarea").value.length==0) {
        speech.text="Warning! Please Enter Text First"
        window.speechSynthesis.speak(speech);
    }
    else{
        speech.text = document.querySelector("textarea").value;
        window.speechSynthesis.speak(speech);
    }
})