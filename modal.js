// Отримуємо елементи
const modal = document.getElementById("Modal");
const btn = document.getElementById("openModal");
const span = document.getElementsByClassName("close")[0];

// Відкриваємо модальне вікно при натисканні на кнопку
btn.onclick = function() {
    modal.style.display = "flex";
}

// Закриваємо модальне вікно при натисканні на хрестик
span.onclick = function() {
    modal.style.display = "none";
}

// Закриваємо модальне вікно при натисканні поза ним
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
