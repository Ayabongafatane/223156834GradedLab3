document.getElementById("Execute").onclick=function(){
    let sentence = document.getElementById("sentence").value;

    // removing special characters except spaces and hyphens.
    let cleanSentence = sentence.replace(/[^a-zA-Z0-9\s-]/g, "");

    //spliting into words.
    let words = cleanSentence.trim().split(" ").filter(word => word.length > 0);

    //Displaying the words underlined.
    let wordsDiv = document.getElementById("words");
    wordsDiv.innerHTML = "";
    words.forEach(word => {
        let span = document.createElement("span");
        span.textContent = word;
        wordsDiv.appendChild(span);
    });
    // Displaying word count.
    document.getElementById("sent-count").value = words.length;

};
