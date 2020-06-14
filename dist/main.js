document.addEventListener('DOMContentLoaded', function () {
    Modernizr.on('webp', function (featureIsAvailabe) {
        var $background = document.getElementById('background');
        if (featureIsAvailabe) {
            $background.style.backgroundImage = "url('" + $background.getAttribute('data-preferred') + "')";
        }
        else {
            $background.style.backgroundImage = "url('" + $background.getAttribute('data-alternate') + "')";
        }
    });
});
//# sourceMappingURL=main.js.map