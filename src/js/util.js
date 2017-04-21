'use strict';

fruskac.Util = (function () {

    function Util() {
    }

    Util.prototype = {
        get: function (name, url) {
            if (!url) {
                url = window.location.href;
            }
            name = name.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, " "));
        },

        getParts: function (name) {
            var value = this.get(name);
            if (!value) {
                return;
            }
            return value.split(',');
        },

        addClass: function (element, className) {
            if (element.classList)
                element.classList.add(className);
            else
                element.className += ' ' + className;
        },

        removeClass: function (element, className) {
            if (element.classList)
                element.classList.remove(className);
            else
                element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }

    };

    return Util;

})();