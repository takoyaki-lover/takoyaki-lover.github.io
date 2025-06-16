function themeLight() {
    for (i = 0; i < document.getElementsByClassName('theme-1').length; i++) {
        document.getElementsByClassName('theme-1')[i].style.backgroundColor = '#ffffff';
        document.getElementsByClassName('theme-1')[i].style.color = '#000000';
    }
    for (i = 0; i < document.getElementsByClassName('theme-2').length; i++) {
        document.getElementsByClassName('theme-2')[i].style.backgroundColor = '#f4f4f4';
        document.getElementsByClassName('theme-2')[i].style.color = '#000000';
    }
};

function themeDark() {
    for (i = 0; i < document.getElementsByClassName('theme-1').length; i++) {
        document.getElementsByClassName('theme-1')[i].style.backgroundColor = '#1b1b1b';
        document.getElementsByClassName('theme-1')[i].style.color = '#ffffff';
    }
    for (i = 0; i < document.getElementsByClassName('theme-2').length; i++) {
        document.getElementsByClassName('theme-2')[i].style.backgroundColor = '#2f2f2f';
        document.getElementsByClassName('theme-2')[i].style.color = '#ffffff';
    }
};

let theme = document.getElementById('theme-select');

switch (localStorage.theme) {
    case undefined:
    case 'system': {
        if (window.matchMedia('(prefers-color-scheme: light)').matches) {
            themeLight();
        } else {
            themeDark();
        }
        break;
    }
    case 'light': {
        themeLight();
        break;
    }
    case 'dark': {
        themeDark();
        break;
    }
}

theme.addEventListener('change', function () {
    switch (theme.value) {
        case 'system': {
            if (window.matchMedia('(prefers-color-scheme: light)').matches) {
                themeLight();
            } else {
                themeDark();
            }
            localStorage.theme = 'system';
            break;
        }
        case 'light': {
            themeLight();
            localStorage.theme = 'light';
            break;
        }
        case 'dark': {
            themeDark();
            localStorage.theme = 'dark';
            break;
        }
    }
    theme.options[0].selected = true;
});
