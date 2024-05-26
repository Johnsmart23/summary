let isBulletFormat = false;
let originalSummary = '';

function countWords() {
    const text = document.getElementById('inputText').value;
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;
    document.getElementById('wordCount').innerText = `Words: ${wordCount} / 1200`;

    if (wordCount > 1200) {
        document.getElementById('inputText').value = words.slice(0, 1200).join(' ');
    }
}

function summarizeText() {
    const text = document.getElementById('inputText').value;
    const summary = generateSummary(text);
    document.getElementById('outputText').value = summary;
    originalSummary = summary;
    updateSummaryWordCount(summary);
}



function generateSummary(text) {
   
    return text.split(' ').slice(0, 500).join(' ') + '...';
}

function updateSummaryWordCount(summary) {
    const words = summary.trim().split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;
    document.getElementById('summaryWordCount').innerText = `Words: ${wordCount}`;
}

function paraphraseSummary() {
    const summary = document.getElementById('outputText').value;
    const paraphrasedSummary = paraphraseText(summary);
    document.getElementById('outputText').value = paraphrasedSummary;
    updateSummaryWordCount(paraphrasedSummary);
}



function paraphraseText(text) {
    
    return text.replace(/summary/g, "paraphrased version");
}

function copySummary() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    alert('Summary copied to clipboard');
}

function deleteSummary() {
    document.getElementById('outputText').value = '';
    document.getElementById('summaryWordCount').innerText = 'Words: 0';
}

function showSummary() {
    document.getElementById('outputText').value = originalSummary;
    isBulletFormat = false;
    updateSummaryWordCount(originalSummary);
}

function showBulletPoints() {
    const summary = originalSummary;
    const bulletPoints = convertToBulletPoints(summary);
    document.getElementById('outputText').value = bulletPoints;
    isBulletFormat = true;
    updateSummaryWordCount(bulletPoints);
}

function convertToBulletPoints(text) {
    const sentences = text.split('.').filter(sentence => sentence.trim().length > 0);
    return sentences.map(sentence => `• ${sentence.trim()}`).join('\n');
}
