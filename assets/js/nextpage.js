document.addEventListener("DOMContentLoaded", function() {
    var blocks = document.querySelectorAll(".image-box");

    blocks.forEach(function(block) {
        block.addEventListener("click", function() {
            var url = this.getAttribute("data-url");
            window.location.href = url;
        });
    });
});
