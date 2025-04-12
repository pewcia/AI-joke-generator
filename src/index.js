function showAnswer(response) {
  alert(response.data.answer);
}

let apiKey = "bb203f4a92e7t89f33c44201bd2fbfoa";
let context =
  "You are an experience programmer. Please answer my question in the streightforward way. I am a beginner and I want to learn coding";
let prompt = "What is the one best way to learn coding?";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
console.log(apiUrl);
axios.get(apiUrl).then(showAnswer);
