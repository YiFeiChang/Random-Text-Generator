document.getElementById("generate").addEventListener("click", function () {
    let length = parseInt(document.getElementById("length").value);
    let charset = document.getElementById("charset").value;
    let result = generateRandomString(length, charset);
    document.getElementById("output").value = result;
});

function generateRandomString(length, charset) {
    let result = "";
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * charset.length);
        result += charset[randomIndex];
    }
    return result;
}