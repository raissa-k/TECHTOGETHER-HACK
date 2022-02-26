document.getElementById('401ListenButton').onclick = function(){
    var text = document.getElementById('home401Paragraph').innerText;
    utterance401k = new SpeechSynthesisUtterance();
    utterance401k.text = text;
    speechSynthesis.speak(utterance401k);
};

document.getElementById('403ListenButton').onclick = function(){
    var text = document.getElementById('home403Paragraph').innerText;
    utterance403b = new SpeechSynthesisUtterance();
    utterance403b.text = text;
    speechSynthesis.speak(utterance403b);
};

document.querySelector("#zoomInButton").addEventListener.onclick = function() {
    document.html.style.fontSize = "+10%";
  };