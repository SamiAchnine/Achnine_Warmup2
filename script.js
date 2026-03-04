function describeRoom(room) {
    switch (room) {
        case "foyer": {
            console.log("Welcome to the Foyer of Luigi's Mansion. Enter the hallway?");
            break;
        }
        case "hallway": {
            console.log("Which room are you going to in the hallway?");
            break;
        }
        case "fakeRoom": {
            console.log("Uh oh! You entered a FAKE door! Luigi got squished...");
            break;
        }
        case "wardrobe": {
            console.log("Welcome to the wardrobe room!");
            break;
        }
        case "study": {
            console.log("Welcome to the study room. Uh oh... seems like there are ghosts around!");
            break;
        }
        default: {
            console.log("Invalid room");
            break;
        }
    }
}

describeRoom("foyer");
describeRoom("hallway");
describeRoom("wardrobe");
describeRoom("blungus");

const exampleNode = {
    image: null,
    text: "",
    choices: []
};

exampleNode.image = "./images/foyer.jpg";
exampleNode.text = "Welcome to the Foyer of Luigi's Mansion. Enter the hallway?";
exampleNode.choices.push(...["Yes", "No"]);

console.log(exampleNode.choices);
console.log(exampleNode.text);
console.log(exampleNode.image);

const foyerNode = {
    image: "./images/foyer.jpg",
    text: "Welcome to the Foyer of Luigi's Mansion. Enter the hallway?",
    choices: ["Yes", "No"]
};

const hallwayNode = {
    image: "./images/hallway.jpg",
    text: "Which room are you going to in the hallway?",
    choices: ["First on the right", "Second on the right", "One on the left"]
};

const wardrobeNode = {
    image: "./images/room2.jpg",
    text: "Welcome to the wardrobe room!",
    choices: ["Go back to the hallway", "Go to the hallway's second door on the right", "Go to the hallway's door on the left"]
};

const fakeRoomNode = {
    image: "./images/hallwaySquish.jpg",
    text: "Uh oh! You entered a FAKE door! Luigi got squished...",
    choices: ["Try the other door on the right", "Try the door on the left, instead"]
};

const studyNode = {
    image: "./images/room1.jpg",
    text: "Welcome to the study room. Uh oh... seems like there are ghosts around!",
    choices: ["Go back to the hallway", "Go to the first door on the right in the hallway", "Go to the second door on the right in the hallway"]
};

const storyNodes = [foyerNode, hallwayNode, wardrobeNode, fakeRoomNode, studyNode];

function displayNode(index) {
    node = storyNodes[index];
    let image = document.getElementById("image");
    let caption = document.getElementById("caption");

    image.src = node.image;
    image.style.height = "480px";
    caption.innerHTML = node.text;
}