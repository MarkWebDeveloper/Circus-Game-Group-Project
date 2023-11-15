import { retreiveStoredEliminatedPlayers } from "./storedEliminatedList"

let resultsDiv = document.getElementById("resultsContainer")

export function fillResults() {
    retreiveStoredEliminatedPlayers().forEach(function(element, index){
        resultsDiv.innerHTML += /* html */ `
        <div class="PlayerDiv" id="Player${index + 1}">
        <p class="roundText" id="round${index + 1}">Round ${index + 1}: </p>
            <div class="nameAndAvatarContainer" id="nameAndAvatarContainer${index + 1}">
                <p class="PlayerName" id="playerName${index + 1}">${element.name}</p>
                <img class="Avatar" src=${element.avatar} alt="avatar1">
            </div>
            </div>
        </div>
        `
    }
)}
