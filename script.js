// Получаем кнопку смены темы
const themeSwitcher = document.getElementById('theme-switcher');

// Прослушиваем клик по кнопке
themeSwitcher.addEventListener('click', () => {
    // Получаем ссылку на текущий стилевой файл
    const currentTheme = document.querySelector('link[rel="stylesheet"]').getAttribute('href');

    // Проверяем текущую тему и меняем на противоположную
    if (currentTheme.includes('light-style')) {
        document.querySelector('link[rel="stylesheet"]').setAttribute('href', 'dark-style.css');
    } else {
        document.querySelector('link[rel="stylesheet"]').setAttribute('href', 'light-style.css');
    }
});



