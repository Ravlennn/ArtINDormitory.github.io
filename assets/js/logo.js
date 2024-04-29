document.addEventListener("DOMContentLoaded", function() {
    var myBlock = document.getElementById("logo");

    myBlock.addEventListener("click", function() {
        scrollToTop();
    });

    function scrollToTop() {
        // Начальная позиция скролла
        var startY = window.scrollY;
        // Конечная позиция скролла
        var stopY = 0;
        // Расстояние, на которое нужно проскроллить
        var distance = stopY - startY;
        // Время анимации
        var duration = 500;

        var startTime;

        // Функция анимации скролла
        function animation(currentTime) {
            if (startTime === undefined) {
                startTime = currentTime;
            }
            var elapsedTime = currentTime - startTime;
            var easeInOutCubic = easeInOut(elapsedTime, startY, distance, duration);
            window.scrollTo(0, easeInOutCubic);
            if (elapsedTime < duration) {
                requestAnimationFrame(animation);
            }
        }

        // Функция плавности скролла
        function easeInOut(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t * t + b;
            t -= 2;
            return c / 2 * (t * t * t + 2) + b;
        }

        requestAnimationFrame(animation);
    }
});
document.addEventListener("DOMContentLoaded", function() {
    var blocks = document.querySelectorAll(".menu");
    blocks.forEach(function(block) {
        block.addEventListener("click", function() {
            window.location.href = "../index.html";
        });
    });
});
