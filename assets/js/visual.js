document.addEventListener("DOMContentLoaded", function() {
    function onEntry(entry) {
        entry.forEach(change => {
            if (change.isIntersecting) {
                change.target.classList.add('element-show');
            }
            else {
                change.target.classList.remove('element-show');
            }
        });
    }

    let options = {
        threshold: [0.5],
        rootMargin: '0px' // Добавляем rootMargin
    };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll('.image-box');

    elements.forEach(elm => observer.observe(elm)); // Используем forEach вместо for...of
});
