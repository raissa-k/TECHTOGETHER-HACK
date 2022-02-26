document.getElementById('401ListenButton').onclick = function(){
    var text = document.getElementById('home401Paragraph').innerText;
    utterance401k = new SpeechSynthesisUtterance();
    utterance401k.text = text;
    speechSynthesis.speak(utterance401k);
};

document.getElementById('403Button').onclick = function(){
    document.getElementById('401kCalcResults').style.display = 'block'
};

document.querySelector("#zoomInButton").addEventListener.onclick = function() {
    document.html.style.fontSize = "+10%";
  };