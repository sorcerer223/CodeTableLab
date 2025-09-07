function copyToClipboard(element) {
    const text = element.innerText;
    navigator.clipboard.writeText(text)
        .then(() => {
        alert("Copy: " + text);
        })
        .catch(err => {
        alert("Error: " + err);
        });
    }