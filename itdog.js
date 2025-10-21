// ==UserScript==
// @name         ITDOG
// @namespace    http://tampermonkey.net/
// @version      2024-11-14
// @description  try to take over the world!
// @author       You
// @match        https://www.itdog.cn/ping/*
// @match        https://www.itdog.cn/tcping/*
// @match        https://www.itdog.cn/ping_ipv6/*
// @match        https://www.itdog.cn/tcping_ipv6/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

const table = document.querySelector('#simpletable');
if (table != null) {
    table.querySelector('thead').style.display = 'flex';
    table.querySelector('thead').style.flexDirection = 'column';
    const ths = table.querySelectorAll('th');
    if (ths.length <= 5) {
        ths.forEach((e, i) => {
            if (i == 4) {
                e.style.maxWidth = '0px';
            } else {
                e.style.width = '310px';
            }
        });
    } else {
        ths.forEach((e, i) => {
            if (i == 0) {
                e.style.width = '160px';
            } else if (i == 1) {
                e.style.width = '160px';
            } else if (i == 2) {
                e.style.width = '150px';
            } else if (i <= 8) {
                e.style.width = '80px';
            } else if (i == 9) {
                e.style.width = '270px';
            } else {
                e.style.maxWidth = '0px';
            }
        });
    }

    table.querySelector('tbody').style.display = 'flex';
    table.querySelector('tbody').style.flexDirection = 'column';
    table.querySelectorAll('.node_tr').forEach(tr => {
        tr.style.setProperty('height', '26px', 'important');
        const tds = tr.querySelectorAll('td');
        if (tds.length <= 5) {
            tds.forEach((e, i) => {
                if (i == 0) {
                    if (e.querySelector('span').textContent == '电信') {
                        let order = 10000000;
                        for (let i = 3; i <= 4; i++) {
                            if (i == 3) {
                                order += e.innerText.charCodeAt(i) * 100;
                            } else {
                                order += e.innerText.charCodeAt(i) * 10;
                            }
                        }
                        tr.style.order = order + e.innerText.charCodeAt(e.innerText.length - 1);
                    } else if (e.querySelector('span').textContent == '联通') {
                        let order = 20000000;
                        for (let i = 3; i <= 4; i++) {
                            if (i == 3) {
                                order += e.innerText.charCodeAt(i) * 100;
                            } else {
                                order += e.innerText.charCodeAt(i) * 10;
                            }
                        }
                        tr.style.order = order + e.innerText.charCodeAt(e.innerText.length - 1);
                    } else if (e.querySelector('span').textContent == '移动') {
                        let order = 30000000;
                        for (let i = 3; i <= 4; i++) {
                            if (i == 3) {
                                order += e.innerText.charCodeAt(i) * 100;
                            } else {
                                order += e.innerText.charCodeAt(i) * 10;
                            }
                        }
                        tr.style.order = order + e.innerText.charCodeAt(e.innerText.length - 1);
                    } else {
                        let order = 40000000;
                        for (let i = 3; i <= 4; i++) {
                            if (i == 3) {
                                order += e.innerText.charCodeAt(i) * 100;
                            } else {
                                order += e.innerText.charCodeAt(i) * 10;
                            }
                        }
                        tr.style.order = order + e.innerText.charCodeAt(e.innerText.length - 1);
                    }
                }
                if (i == 4) {
                    e.style.maxWidth = '0px';
                } else {
                    e.style.width = '310px';
                }
                e.style.height = '25px';
            });
        } else {
            tds.forEach((e, i) => {
                if (i == 0) {
                    if (e.querySelector('span').textContent == '电信') {
                        let order = 10000000;
                        for (let i = 3; i <= 4; i++) {
                            if (i == 3) {
                                order += e.innerText.charCodeAt(i) * 100;
                            } else {
                                order += e.innerText.charCodeAt(i) * 10;
                            }
                        }
                        tr.style.order = order + e.innerText.charCodeAt(e.innerText.length - 1);
                    } else if (e.querySelector('span').textContent == '联通') {
                        let order = 20000000;
                        for (let i = 3; i <= 4; i++) {
                            if (i == 3) {
                                order += e.innerText.charCodeAt(i) * 100;
                            } else {
                                order += e.innerText.charCodeAt(i) * 10;
                            }
                        }
                        tr.style.order = order + e.innerText.charCodeAt(e.innerText.length - 1);
                    } else if (e.querySelector('span').textContent == '移动') {
                        let order = 30000000;
                        for (let i = 3; i <= 4; i++) {
                            if (i == 3) {
                                order += e.innerText.charCodeAt(i) * 100;
                            } else {
                                order += e.innerText.charCodeAt(i) * 10;
                            }
                        }
                        tr.style.order = order + e.innerText.charCodeAt(e.innerText.length - 1);
                    } else {
                        let order = 40000000;
                        for (let i = 3; i <= 4; i++) {
                            if (i == 3) {
                                order += e.innerText.charCodeAt(i) * 100;
                            } else {
                                order += e.innerText.charCodeAt(i) * 10;
                            }
                        }
                        tr.style.order = order + e.innerText.charCodeAt(e.innerText.length - 1);
                    }
                    e.style.width = '160px';
                } else if (i == 1) {
                    e.style.width = '160px';
                } else if (i == 2) {
                    e.style.width = '150px';
                } else if (i <= 8) {
                    e.style.width = '80px';
                } else if (i == 9) {
                    e.style.width = '270px';
                } else {
                    e.style.maxWidth = '0px';
                }
                e.style.height = '25px';
            });
        }
    });
}

})();