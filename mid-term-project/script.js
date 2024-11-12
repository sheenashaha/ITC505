document.addEventListener("DOMContentLoaded", function() {
    const storyTextElement = document.getElementById("storyText");
    const optionsContainer = document.getElementById("optionsContainer");
    const storyImage = document.getElementById("storyImage");

    const storyParts = {
        start: {
            text: "You are at the entrance of the Lost City of Glass. Do you go left or right?",
            image: "image1.jpg",
            choices: [
                { text: "Go left", nextPart: "leftPath" },
                { text: "Go right", nextPart: "rightPath" }
            ]
        },
        leftPath: {
            text: "You encounter a shimmering pathway lined with crystal trees. Continue or turn back?",
            image: "image2.jpg",
            choices: [
                { text: "Continue", nextPart: "deepForest" },
                { text: "Turn back", nextPart: "start" }
            ]
        },
        rightPath: {
            text: "You find an ancient bridge over a river of glass. Cross or return?",
            image: "image3.jpg",
            choices: [
                { text: "Cross", nextPart: "ancientBridge" },
                { text: "Return", nextPart: "start" }
            ]
        },
        deepForest: {
            text: "The path leads you to the heart of the city, filled with dazzling lights and mystery.",
            image: "image4.jpg",
            choices: [
                { text: "Explore the city", nextPart: "cityCenter" },
                { text: "Leave the path", nextPart: "start" }
            ]
        },
        ancientBridge: {
            text: "You carefully cross the bridge and find an ancient map pointing to hidden treasure.",
            image: "image5.jpg",
            choices: [
                { text: "Follow the map", nextPart: "treasureHunt" },
                { text: "Discard the map", nextPart: "start" }
            ]
        },
        cityCenter: {
            text: "You've reached the center of the Lost City of Glass and uncovered its secrets.",
            image: "image6.jpg",
            choices: []
        },
        treasureHunt: {
            text: "You set out on an epic quest to find the hidden treasure and succeed!",
            image: "image7.jpg",
            choices: []
        }
    };

    function displayStoryPart(part) {
        const currentPart = storyParts[part];
        
        // Ensure the current part exists
        if (!currentPart) {
            alert("An error occurred: Part not found.");
            return;
        }

        // Update the story text and image
        storyTextElement.textContent = currentPart.text;
        storyImage.src = currentPart.image;
        optionsContainer.innerHTML = ""; // Clear existing buttons

        // Create buttons for each choice
        currentPart.choices.forEach(choice => {
            const button = document.createElement("button");
            button.textContent = choice.text;
            button.onclick = () => displayStoryPart(choice.nextPart);
            optionsContainer.appendChild(button);
        });
    }

    // Start the game with the initial part
    displayStoryPart("start");
});
