import { retreiveStoredPlayers } from "../modules/ts/storedPlayersList";

let playersList = document.querySelector('#homePlayersList') as HTMLDivElement

function restorePlayersList() {

    if (retreiveStoredPlayers() != null) {
        playersList.innerHTML = /* html */ ``

    retreiveStoredPlayers().forEach(function(element: any, index: number){
        playersList.innerHTML += /* html */ `
        <div class="homePlayerDiv" id="homePlayer${index + 1}">
        <div class="nameAndAvatarContainer" id="nameAndAvatarContainer${index + 1}">
            <p class="homePlayerName" id="playerName${index + 1}">${element.name}</p>
            <img class="homeAvatar" src=${element.avatar} alt="avatar1">
        </div>
        <div class="editAndRemoveContainer" id="editAndRemoveContainer${index + 1}">
            <button class="doneButton" id="doneButton${index + 1}">
                <img class="doneImg" src="./assets/images/icons/done-icon.png" alt="done button image">
            </button>
            <button class="editButton" id="editButton${index + 1}">
                <img class="editImg" src="./assets/images/icons/edit-pencil-icon.png" alt="edit button image">
            </button>
            <button class="removeButton" id="removeButton${index + 1}">
                <img class="removeImg" src="./assets/images/icons/remove-icon.png" alt="remove button image">
            </button>
        </div>
    </div>
        `
    });
    }
}

export { restorePlayersList }