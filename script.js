const lengthSlider = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");
const passwordField = document.getElementById("password");

lengthValue.textContent = lengthSlider.value;

lengthSlider.addEventListener("input", () => {
    lengthValue.textContent = lengthSlider.value;
});

function generatePassword() {
    const length = lengthSlider.value;

    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+{}[]<>?";

    let characters = "";

    if (document.getElementById("uppercase").checked) characters += uppercase;
    if (document.getElementById("lowercase").checked) characters += lowercase;
    if (document.getElementById("numbers").checked) characters += numbers;
    if (document.getElementById("symbols").checked) characters += symbols;

    if (characters === "") {
        alert("Please select at least one option!");
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        password += characters[Math.floor(Math.random() * characters.length)];
    }

    passwordField.value = password;
}

function copyPassword(button) {
    if (passwordField.value === "") {
        alert("Generate a password first!");
        return;
    }

    navigator.clipboard.writeText(passwordField.value).then(() => {
        const originalText = button.innerHTML;

        button.innerHTML = "✔ Copied";
        button.style.background = "#10b981";

        setTimeout(() => {
            button.innerHTML = originalText;
            button.style.background = "";
        }, 2000);
    }).catch(() => {
        alert("Failed to copy password!");
    });
}

// Generate password on page load
generatePassword();
