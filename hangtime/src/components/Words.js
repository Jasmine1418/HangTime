var word_list = [
	"firebase",
	"coding",
	"stack",
	"banana",
	"encyclopedia",
	"neutral",
	"extravaganza",
	"potential",
	"flower", 
	"score",
	"necessity",
	"planet",
	"frolicking",
	"trooper", 
	"ability", 
	"fable",
	"enchant", 
	"waterfall", 
	"splendid", 
	"superior", 
	"stagnant",
	"terrific",
	"variety",
	"ethereal",
	"combat",
	"museum",
	"leader",
	"warrior",
	"cowboy",
	"dilated",
	"sphinx",
	"emperor",
	"airplane",
	"breakfast",
	"tithes",
	"sacrificial",
	"loading",
	"global",
	"keyboard",
	"adventure",
	"voyage",
	"trapped",
	"scored",
	"causation",
	"formation",
	"pregnancy",
	"trimester",
	"theoretical",
	"probability",
	"symmetry"
]

function randomWord() {
  return word_list[Math.floor(Math.random() * word_list.length)]
}

/*
function populateList(){
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
		  randomWord();
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
*/
export { randomWord }