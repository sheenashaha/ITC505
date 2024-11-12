// Change button color when clicked
document.getElementById('colorButton').addEventListener('click', function() {
    const colors = ['lightblue', 'lightgreen', 'lightcoral', 'lightgoldenrodyellow'];
    const currentColor = this.style.backgroundColor;
    let newColor;

    do {
        newColor = colors[Math.floor(Math.random() * colors.length)];
    } while (newColor === currentColor);

    this.style.backgroundColor = newColor;
});

// Display alert on form submission
document.getElementById('alertForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const input = document.getElementById('textInput').value.trim();

    // Check if input is empty or not
    if (input === '') {
        alert('Input field is empty. Please enter some text.');
    } else {
        alert(`You entered: ${input}`);
    }
});
