const storyStages = [
    {
        text: "Welcome to the Lost City of Glass! Your journey begins here...",
        choices: [
            { text: "Enter the city", nextStage: 1 },
            { text: "Stay outside and observe", nextStage: 2 }
        ],
        image: "image1.jpg"
    },
    {
        text: "You enter the city and are amazed by its grandeur.",
        choices: [
            { text: "Explore the palace", nextStage: 3 },
            { text: "Visit the marketplace", nextStage: 4 }
        ],
        image: "image1.jpg"
    },
    {
        text: "You stay outside, observing from a distance.",
        choices: [
            { text: "Approach the entrance", nextStage: 1 },
            { text: "Look for other paths", nextStage: 5 }
        ],
        image: "image1.jpg"
    },
    {
        text: "You explore the palace and discover a hidden door.",
        choices: [
            { text: "Enter the door", nextStage: 6 },
            { text: "Leave the palace", nextStage: 7 }
        ],
        image: "image1.jpg"
    },
    {
        text: "You visit the marketplace and find strange artifacts.",
        choices: [
            { text: "Buy an artifact", nextStage: 8 },
            { text: "Leave the marketplace", nextStage: 7 }
        ],
        image: "image1.jpg"
    },
    {
        text: "You find another path that leads to a mysterious forest.",
        choices: [
            { text: "Enter the forest", nextStage: 9 },
            { text: "Return to the city", nextStage: 1 }
        ],
        image: "image1.jpg"
    },
    {
        text: "You enter the hidden door and discover a secret chamber.",
        choices: [
            { text: "Explore the chamber", nextStage: 10 },
            { text: "Leave the chamber", nextStage: 7 }
        ],
        image: "image1.jpg"
    },
    {
        text: "You decide to leave, but the city begins to disappear.",
        choices: [
            { text: "Return to the city", nextStage: 1 },
            { text: "Stay where you are", nextStage: 11 }
        ],
        image: "image1.jpg"
    },
    {
        text: "You purchase the artifact and feel a strange energy.",
        choices: [
            { text: "Keep the artifact", nextStage: 12 },
            { text: "Return the artifact", nextStage: 7 }
        ],
        image: "image1.jpg"
    },
    {
        text: "You enter the forest and encounter a mysterious creature.",
        choices: [
            { text: "Talk to the creature", nextStage: 13 },
            { text: "Run away", nextStage: 7 }
        ],
        image: "image1.jpg"
    },
    {
        text: "You explore the chamber and uncover ancient treasures.",
        choices: [
            { text: "Take the treasure", nextStage: 14 },
            { text: "Leave the treasure", nextStage: 7 }
        ],
        image: "image1.jpg"
    },
    {
        text: "You stay where you are, watching as the city fades.",
        choices: [
            { text: "Try to find a way back", nextStage: 1 },
            { text: "Give up and leave", nextStage: 15 }
        ],
        image: "image1.jpg"
    },
    {
        text: "You keep the artifact, and its power changes you.",
        choices: [
            { text: "Embrace the power", nextStage: 16 },
            { text: "Reject the power", nextStage: 7 }
        ],
        image: "image1.jpg"
    },
    {
        text: "You talk to the creature and learn its secrets.",
        choices: [
            { text: "Follow the creature", nextStage: 17 },
            { text: "Leave the forest", nextStage: 7 }
        ],
        image: "image1.jpg"
    },
    {
        text: "You take the treasure and unlock the final mystery of the city.",
        choices: [
            { text: "Celebrate your victory", nextStage: 18 },
            { text: "Return the treasure", nextStage: 7 }
        ],
        image: "image1.jpg"
    },
    {
        text: "You give up, and the adventure ends here.",
        choices: [
            { text: "Restart", nextStage: 0 }
        ],
        image: "image1.jpg"
    },
    {
        text: "You embrace the power and become the ruler of the Lost City of Glass.",
        choices: [
            { text: "Restart", nextStage: 0 }
        ],
        image: "image1.jpg"
    },
    {
        text: "You follow the creature into a new world of possibilities.",
        choices: [
            { text: "Restart", nextStage: 0 }
        ],
        image: "image1.jpg"
    },
    {
        text: "You celebrate your victory and become part of the city's legend.",
        choices: [
            { text: "Restart", nextStage: 0 }
        ],
        image: "image1.jpg"
    }
];

let currentStage = 0;

function updatePage() {
    const stage = storyStages[currentStage];
    document.getElementById("storyText").innerText = stage.text;
    const optionsContainer = document.getElementById("optionsContainer");
    optionsContainer.innerHTML = '';
    stage.choices.forEach(choice => {
        const button = document.createElement("button");
        button.innerText = choice.text;
        button.onclick = function () {
            currentStage = choice.nextStage;
            updatePage();
        };
        optionsContainer.appendChild(button);
    });
    document.getElementById("storyImage").src = stage.image;
}

updatePage();
