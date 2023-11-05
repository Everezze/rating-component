const noteContainer = document.querySelector("div");
const chosenNote= document.createElement("div");
const submitButton= document.getElementsByTagName("button")["0"];
//console.log(submitButton);
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
    chosenNote.textContent = currentNote.firstElementChild.textContent;
    //console.log(chosenNote.textContent);
});
