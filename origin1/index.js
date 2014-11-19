'use strict';

(function () {

    function random() {
        return Math.random().toString(36).substr(2);
    }

    function bindClick(selector, callback) {
        var element = document.querySelector(selector);
        element.addEventListener('click', callback);
    }

    var windowFeatures = (function () {
        var i = 0;
        return function () {
            i = i + 50;
            return 'resizable=true, height=150, width=250, top=' + (1200 + i) + ', left=' + i;
        }
    })();

    var popup, randomPopup;

    bindClick('.open-popup', function () {
        popup = window.open('http://localhost:8083', 'popup3', windowFeatures());
    });

    bindClick('.open-random-popup', function () {
        randomPopup = window.open('http://localhost:8083', random(), windowFeatures());
    });

    bindClick('.send-message', function () {
        var randomString = random();
        popup.postMessage(randomString, 'http://localhost:8083');
        document.querySelector('.message').textContent = randomString;
    });

})();