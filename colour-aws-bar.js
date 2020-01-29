// ==UserScript==
// @name         AWS Account Coloured Bar
// @namespace    com.mpowild
// @version      0.1
// @author       Mark Powild
// @icon         https://user-images.githubusercontent.com/251987/40598271-067fbe3c-6247-11e8-89c2-2e0a4d2a1464.png
// @match        https://*console.aws.amazon.com/*
// @match        https://*.console.aws.amazon.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var nonProdBgColour = '#009900'
    var prodBgColour = '#FF0000';

    var accounts = {
        nonProdAccounts: ['my-nonprod-account'],
        prodAccounts: ['my-prod-account']
    };

    var accountName = getAccountName();

    if (accounts.prodAccounts.includes(accountName)) {
        changeNavBarColour(prodBgColour);
    } else if (accounts.nonProdAccounts.includes(accountName)) {
        changeNavBarColour(nonProdBgColour);
    }

    function getAccountName() {
        var accountElem = document.getElementById('awsc-login-display-name-account');
        if (accountElem == null) {
            console.log('no account element');
            return '';
        }

        return accountElem.innerText;
    }

    function changeNavBarColour(newBgColour) {
        var navSelector = '#nav-menubar, #nav-menu-right, .nav-menu, .nav-menu-separator';
        var menuBarElems = document.querySelectorAll(navSelector);
        for (var i = 0; i < menuBarElems.length; i++) {
            menuBarElems[i].style.backgroundColor = newBgColour;
        }
    }

})();
