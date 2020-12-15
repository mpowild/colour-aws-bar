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
        nonProdAccounts: ['0123456789'],
        prodAccounts: ['9876543210']
    };

    var accountNumber = getAccountNumber();

    if (accounts.prodAccounts.includes(accountNumber)) {
        changeNavBarColour(prodBgColour);
    } else if (accounts.nonProdAccounts.includes(accountNumber)) {
        changeNavBarColour(nonProdBgColour);
    }

    function getAccountNumber() {
        var accountElem = document.querySelector('[data-testid="aws-my-account-details"]');
        if (accountElem == null) {
            console.log('no account element');
            return '';
        }

        return accountElem.innerText;
    }

    function changeNavBarColour(newBgColour) {
        var navSelector = '#awsc-nav-header';
        var menuBarElems = document.querySelectorAll(navSelector);
        for (var i = 0; i < menuBarElems.length; i++) {
            menuBarElems[i].style.backgroundColor = newBgColour;
        }
    }

})();
