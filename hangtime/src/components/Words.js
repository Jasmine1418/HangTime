function randomWord() {

	let xhr = new XMLHttpRequest();
	const key = "ab0d5274c4e036127a40d059f3c06ea27056d56b0e0300d75" // API key goes here
	const url = "https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key="+key;
	xhr.open('GET',url,true);
  
	xhr.onload = function(){
	  if(this.status == 200){
		let data = JSON.parse(this.responseText);
		if(checkWord(data["word"])){
		  return (data["word"]);
		} else {
		  getWord();
		}
	  }
	  else {
		console.log("Connection Error");
	  }
	}
	xhr.send();

}

function checkWord(word){
	if(word.length > 12){return false;}
	let badChars = [" ","-",",",".","/"];
	for(let char of badChars){
	  if(word.indexOf(char) > -1){return false;}
	}
	return true;
  }

export { randomWord, checkWord }