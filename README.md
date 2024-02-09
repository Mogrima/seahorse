# Seahorse game
<img src="https://img.shields.io/badge/JavaScript-004524?style=for-the-badge&logo=javascript&logoColor=yellow" alt="JavaScript"> <img src="https://img.shields.io/badge/Canvas-6495ed?style=for-the-badge&logo=html5&logoColor=#E34F26" alt="Canvas">
<img src="https://img.shields.io/badge/HTML5-004524?style=for-the-badge&logo=html5&logoColor=#E34F26" alt="HTML5">
<img src="https://img.shields.io/badge/CSS3-004524?style=for-the-badge&logo=css3&logoColor=#E34F26" alt="css3">

## Demo
![Изображение][1]

Морской конёк пробирается к своему убежищу сквозь плывущих ему навстречу механизированных рыб.

## Game mechanics
В игре 8 типа врагов, каждый из которых имеет свое количество жизней, очков и другие особенности:
- Два вида удильщика
- Кит-улий
- Рыба-удачи
- Дроны
- Лампа-кит
- Лунная рыба
- Сталкер
- Бритвенный плавник

![Изображение][2]

При столкновении с игроком враги отнимают очки, при этом разлетаясь на запчасти. Исключение составляет рыба-удачи, благодаря которой морской конёк моментально перезаражает
количество своих боеприпасов до максимального значения, а также получает возможность стрелять одновременно изо рта и хвоста.
Этот факт следует учитывать при появлении на горизонте кита-улья. Кит-улий является самым опасным врагом, на его уничтожение потребуется весомое количество
боеприпасов. Однако, уничтожив его, расслабляться не стоит, ведь из него вылетят несколько опасных дронов. Поэтому если патронов не достаточно
и поблизости нет рыбы-удачи, следует избежать столкновения с этим соперником.

Если на горизонте появилась лунная рыба, поторопитесь скорее её уничтожить, ведь освободившаяся из неё энергия моментально перезарядит боеприпасы морского конька и позволит ему одновременно стрелять из хвоста и носа. 

![Изображение][3]

Игра завершится при достижении игрового таймера 30 секунд. Победа или проигрыш будет зависеть от количества набранных очков.

## Control
Морской конек перемещается вверх-вниз при помощи клавиш-стрелок на клавиатуре, стрельба осуществляется при нажатии пробела.

## How to play
1. Открыть игру в браузере можно по [ссылке](https://mogrima.github.io/seahorse/)
2. Или скачать архив с игрой из репозитория. Для того, чтобы запустить игру локально:
   * Убедиться, что на ПК установлена node.js
   * Открыть консоль в корне проекта и набрать команду:
    ```node server.js ```
   * Если страница браузера не откроется автоматически, это можно сделать самостоятельно, просто указав в адресной строке: ```http://127.0.0.1:8125/```

  ## Acknowledgments
Lessons and support:

<img src="https://img.shields.io/badge/Franks laboratory -ffd700?style=for-the-badge&logo=youtube&logoColor=#FF0000" alt="Franks laboratory ">

Sounds:

<img src="https://img.shields.io/badge/Franks laboratory -ffd700?style=for-the-badge&logo=youtube&logoColor=#FF0000" alt="Franks laboratory ">

Sprites and background:

<img src="https://img.shields.io/badge/Franks laboratory -ffd700?style=for-the-badge&logo=youtube&logoColor=#FF0000" alt="Franks laboratory ">

Fonts

<img src="https://img.shields.io/badge/Bangers -ffd700?style=for-the-badge&logo=googlefonts&logoColor=#4285F4" alt="Bangers "> <img src="https://img.shields.io/badge/Mina -ffd700?style=for-the-badge&logo=googlefonts&logoColor=#4285F4" alt="Mina ">

## License

Unlicense

[1]:https://github.com/Mogrima/seahorse/blob/master/Assets/preview/preview.png
[2]:https://github.com/Mogrima/seahorse/blob/master/Assets/preview/whale.png
[3]:https://github.com/Mogrima/seahorse/blob/master/Assets/preview/preview2.png

