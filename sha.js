const input = document.getElementById("inputtext");
const output = document.getElementById("outputtext");

input.addEventListener("input", ()=>{
    const hash = CryptoJS.SHA256(input.value).toString();
    output.textContent = hash;
});

