document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.querySelector('.theme_toggle');

    themeToggle.addEventListener('click', function (e) {
        e.preventDefault();

        // Переключаем тему
        document.body.classList.toggle('active-theme');

        // Переключаем иконку (меняем фон кнопки)
        themeToggle.classList.toggle('active');
    });
});