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
                        let order = 1000000;
                        for (let i = 3; i <= 4; i++) {
                            order += e.innerText.charCodeAt(i) * 10;
                        }
                        tr.style.order = order + e.innerText.charCodeAt(e.innerText.length - 1);
                    } else if (e.querySelector('span').textContent == '联通') {
                        let order = 2000000;
                        for (let i = 3; i <= 4; i++) {
                            order += e.innerText.charCodeAt(i) * 10;
                        }
                        tr.style.order = order + e.innerText.charCodeAt(e.innerText.length - 1);
                    } else if (e.querySelector('span').textContent == '移动') {
                        let order = 3000000;
                        for (let i = 3; i <= 4; i++) {
                            order += e.innerText.charCodeAt(i) * 10;
                        }
                        tr.style.order = order + e.innerText.charCodeAt(e.innerText.length - 1);
                    } else {
                        let order = 4000000;
                        for (let i = 3; i <= 4; i++) {
                            order += e.innerText.charCodeAt(i) * 10;
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
                        let order = 1000000;
                        for (let i = 3; i <= 4; i++) {
                            order += e.innerText.charCodeAt(i) * 10;
                        }
                        tr.style.order = order + e.innerText.charCodeAt(e.innerText.length - 1);
                    } else if (e.querySelector('span').textContent == '联通') {
                        let order = 2000000;
                        for (let i = 3; i <= 4; i++) {
                            order += e.innerText.charCodeAt(i) * 10;
                        }
                        tr.style.order = order + e.innerText.charCodeAt(e.innerText.length - 1);
                    } else if (e.querySelector('span').textContent == '移动') {
                        let order = 3000000;
                        for (let i = 3; i <= 4; i++) {
                            order += e.innerText.charCodeAt(i) * 10;
                        }
                        tr.style.order = order + e.innerText.charCodeAt(e.innerText.length - 1);
                    } else {
                        let order = 4000000;
                        for (let i = 3; i <= 4; i++) {
                            order += e.innerText.charCodeAt(i) * 10;
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
