'use strict'

const func = (str) => {
    str = prompt('Введите что нибудь', '');
    str = str.trim();
        if (!isNaN(str)) {
        console.log("Это не строка!")
    } else if (str.length > 30) {console.log(str.slice(0, 30) + '...')
    } else {
        console.log(str)
    }
  }
func()