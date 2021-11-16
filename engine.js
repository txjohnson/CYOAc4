function addBackground (uri, to) {
    let background = document.createElement('img');
    background.setAttribute ('src', uri);
    to .appendChild (background);
}

function addText (what, to) {
    let text = document.createTextNode (what);
    to .appendChild (text);
}

function addAction (anaction, to) {
    let button = document.createElement('input')
    button.type = 'button';
    button.value = anaction.name;
    button.onclick = function() { showRoom(getRoomForName(anaction.room)); };
    to .appendChild (button);
}

function showText (what, to) {
    for (const d of what) {
        addText (d, to);
    }
}
function showActions(which, to) {
    let actions = document.getElementById('actions')
    actions .replaceChildren();

    for (const a of which) {
        const action = a;
        addAction (action, actions);
    }
}

function showRoom (aroom) {
    console.log(aroom);
    let view = document.getElementById('view');
    view .replaceChildren();

    addBackground (aroom.background, view);
    showText (aroom.describe, view);
    showActions (aroom.action);
}

