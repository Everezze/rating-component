const noteContainer = document.querySelector("div");
const titleNote= document.createElement("h3");
const chosenNote = document.createElement("b");
const submitButton= document.getElementsByTagName("button")["0"];
const feedbackComponent = document.querySelector(".feedback");
const ratingComponent = document.querySelector("body article");
//console.log(ratingComponent);
//console.log(feedbackComponent);
//console.log(submitButton);
//console.log(chosenNote);
titleNote.append(chosenNote);
let currentNote = undefined;

noteContainer.addEventListener("click", function(event){
    let target = event.target;
    //console.log(target.parentNode);
    if(target.tagName != "SPAN" && target.parentNode.tagName == "SPAN"){
        target = target.parentNode;
    }

    if(target.tagName=="SPAN"){
        if(!currentNote){
            currentNote = target;
            target.classList.toggle("selected");
            console.log("first click to assign currentnote");
        }
        else if(currentNote ===target){
            target.classList.toggle("selected");
        }
        else{
            console.log("here we toggle last and new note");
            currentNote.classList.remove("selected");
            target.classList.add("selected");
            currentNote = target;
        }
    }
    //console.log(currentNote.firstElementChild.textContent);
});

submitButton.addEventListener("click",function(){
    chosenNote.textContent = `You selected ${currentNote.firstElementChild.textContent} out of 5`;
    //console.log(chosenNote.textContent);
    feedbackComponent.insertBefore(titleNote,document.getElementsByTagName("h2")["1"]);
    //console.log(document.getElementsByTagName("h2")[1]);
    ratingComponent.style.display = "none";
    feedbackComponent.style.display = "block";
});
