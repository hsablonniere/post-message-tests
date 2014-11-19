'use strict';

(function () {

    var message = document.querySelector('.message');

    window.addEventListener('message', function (event) {
        message.textContent = event.data + ' from ' + event.origin;
    });

})();
