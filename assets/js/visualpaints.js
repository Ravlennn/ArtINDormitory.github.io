document.addEventListener("DOMContentLoaded", function() {
    // Функция, которая будет вызвана при появлении начальной части элемента на экране
    function onEntry(entry) {
        entry.forEach(change => {
            if (change.intersectionRatio > 0) {
                change.target.classList.add('element-show');
            }
        });
    }

    // Создаем новый экземпляр IntersectionObserver с функцией обратного вызова onEntry
    let observer = new IntersectionObserver(onEntry, { threshold: 0 });

    // Получаем все элементы с классом 'info'
    let elements = document.querySelectorAll('.info');

    // Для каждого элемента в коллекции elements добавляем наблюдение IntersectionObserver
    elements.forEach(elm => observer.observe(elm));
});
document.addEventListener("DOMContentLoaded", function() {
    // Функция, которая будет вызвана при появлении начальной части элемента на экране
    function onEntry(entry) {
        entry.forEach(change => {
            if (change.intersectionRatio > 0) {
                change.target.classList.add('element-show');
            }
        });
    }

    // Создаем новый экземпляр IntersectionObserver с функцией обратного вызова onEntry
    let observer = new IntersectionObserver(onEntry, { threshold: 0 });

    // Получаем все элементы с классом 'info'
    let elements = document.querySelectorAll('.image-box');

    // Для каждого элемента в коллекции elements добавляем наблюдение IntersectionObserver
    elements.forEach(elm => observer.observe(elm));
});
