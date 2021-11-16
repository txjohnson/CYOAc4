var currentRoom = "start";
var actions = [];

let start = {
    name: 'start',
    background: "https://www.askideas.com/media/20/Funny-Sad-Kitty-Picture.jpg",
    describe: [
        'The kitty is lost! Help the kitty get home.',
        'What should the kitty do?'],
    action: [
        {name: "Go Forward", room: 'caught'},
        {name: "Go Left", room: 'meetDog'},
        {name: "Go Right", room: 'seeAlley'}]
    };
let caught = {
    name: 'caught',
    background: "https://fleetimages.bobitstudios.com/upload/business-fleet/content/article/_migrated/m-customized-truck.jpg",
    describe: [
        "The kitty got caught by animal control. Looks like kitty won't get home any time soon.",
        'Game Over'],
    action: [
        {name: "Start Over", room: 'start'}]
};

let meetDog = {
    name: 'meetDog',
    background: "https://www.meme-arsenal.com/memes/82463bd0a2a7b09538e3250e32e9d3de.jpg",
    describe: [
        'There is a dog here.',
        'What should the kitty do?'],
    action: [
        {name: "Play with the dog", room: 'playWithDog'},
        {name: "Go past the dog", room: 'chased'},
        {name: "Go back", room: 'start'}]
};

let playWithDog = {
    name : 'playWithDog',
    background: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWZyaWNhbiUyMGFtZXJpY2FuJTIwY2hpbGR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
    describe: [
        'The kitty plays with the dog until the owner of the dog picks him up.',
        'What should the kitty do?'],
    action: [
        {name: "Continue on way", room: 'playedToAlley'},
        {name: "Go back", room: 'start'}]
};

let chased = {
    nam : 'chased',
    background: "https://media.istockphoto.com/photos/dog-chasing-cat-picture-id867739166?k=20&m=867739166&s=170667a&w=0&h=RgB1mkLr2MzLIy1K9JGmP401eegZ81JY_U5nwPoPH9w=",
    describe: [
        'The dog chases the kitty. The kitty runs and runs until the dog gives up.'],
    action: [
        {name: "Next", room: 'chasedToAlley'}]
};

let chasedToAlley = {
    name: 'chasedToAlley',
    background: "https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzRiYzM5NjZjLWExZTMtNGZjOS05MWE5LWNlZTE5NDEzNzQ5MjFjOWZkNTI3OGU1ODExNjdkMF8xLmpwZyJdLFsicCIsImNvbnZlcnQiLCItYXV0by1vcmllbnQgIl0sWyJwIiwidGh1bWIiLCIyMjY0eDE1MDkrMCsxMjU1Il0sWyJwIiwiY29udmVydCIsIi1xdWFsaXR5IDgxIC1hdXRvLW9yaWVudCJdLFsicCIsInRodW1iIiwiNjAweD4iXV0/1.jpg",
    describe: [
        'After running around so much, the kitty is even more lost. But there is an alley here.',
        'What should the kitty do?'],
        action: [
            {name: "Go through alley", room: 'maybeHome'},
            {name: "Go back", room: 'start'}]
    };

let playedToAlley = {
    name : 'playedToAlley',
    background: "https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzRiYzM5NjZjLWExZTMtNGZjOS05MWE5LWNlZTE5NDEzNzQ5MjFjOWZkNTI3OGU1ODExNjdkMF8xLmpwZyJdLFsicCIsImNvbnZlcnQiLCItYXV0by1vcmllbnQgIl0sWyJwIiwidGh1bWIiLCIyMjY0eDE1MDkrMCsxMjU1Il0sWyJwIiwiY29udmVydCIsIi1xdWFsaXR5IDgxIC1hdXRvLW9yaWVudCJdLFsicCIsInRodW1iIiwiNjAweD4iXV0/1.jpg",
    describe: [
        'The kitty says bye to the dog. The kitty looks around and sees an alley.',
        'What should the kitty do?'],
    action: [
        {name: "Go through alley", room: 'maybeHome'},
        {name: "Go back", room: 'start'}]
};

let seeAlley = {
    name: 'seeAlley',
    background: "https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzRiYzM5NjZjLWExZTMtNGZjOS05MWE5LWNlZTE5NDEzNzQ5MjFjOWZkNTI3OGU1ODExNjdkMF8xLmpwZyJdLFsicCIsImNvbnZlcnQiLCItYXV0by1vcmllbnQgIl0sWyJwIiwidGh1bWIiLCIyMjY0eDE1MDkrMCsxMjU1Il0sWyJwIiwiY29udmVydCIsIi1xdWFsaXR5IDgxIC1hdXRvLW9yaWVudCJdLFsicCIsInRodW1iIiwiNjAweD4iXV0/1.jpg",
    describe: [
        'There is an alley here.',
        'What should the kitty do?'],
    action: [
        {name: "Go through alley", room: 'maybeHome'},
        {name: "Go back", room: 'start'}]
};

let maybeHome = {
    name : 'maybeHome',
    background: "https://cdn.vox-cdn.com/thumbor/S1pA2EZAgDFfn5zu5x_Ji0o-oBs=/0x0:3000x1996/1200x800/filters:focal(1260x758:1740x1238)/cdn.vox-cdn.com/uploads/chorus_image/image/51938403/brownstone_stock.0.jpeg",
    describe: [
        "This looks like the kitty's home!",
        'What should the kitty do?'],
    action: [
        {name: "Go back", room: 'seeAlley'},
        {name: "Go inside", room: 'home'}]
};

let home = {
    name : 'home',
    background: "https://c8.alamy.com/comp/2E2BR75/couple-happy-kittens-sleep-relax-together-kitten-family-in-love-adorable-kitty-noses-for-valentine-s-daylong-web-banner-close-up-cozy-home-animal-2E2BR75.jpg",
    describe: [
        'It is home! Good job helping the kitty.',
        'Start over?'],
    action: [
        {name: "Yep. Let's restart", room: 'start'}]
};

let rooms = [start, caught, meetDog, playWithDog, chased,
    chasedToAlley, playedToAlley, seeAlley, maybeHome, home];

function getRoomForName (name) {
    return rooms.find(x => x.name == name);
}

showRoom(start);