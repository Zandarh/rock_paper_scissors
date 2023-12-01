const btn = document.querySelectorAll("button");

btn.forEach((button) => {
    button.addEventListener("click", () => {
       alert(button.value);
    });
});