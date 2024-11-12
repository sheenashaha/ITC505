document.getElementById('countWords').addEventListener('click', function() {
    let text = document.getElementById('textInput').value.trim();
    if (text.length === 0) {
        document.getElementById('wordCountResult').textContent = 'Word count: 0';
        return;
    }

    let wordCount = text.split(/\s+/).filter(word => word.length > 0).length;
    document.getElementById('wordCountResult').textContent = `Word count: ${wordCount}`;
});
