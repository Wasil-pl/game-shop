Witaj w dokumentacji mojej aplikacji!
Przed przystąpieniem do oceny aplikacji, chciałbym podzielić się kilkoma ważnymi informacjami:

remember to update database credentials in .env file. Keep the following format: 
DATABASE_URL="mysql://<yourDbUserName>:<yourDbPassword>@localhost:3306/gameshopdb"

1. Konto Admina
Dla celów testowych zostało utworzone konto z uprawnieniami administratora. Dzięki niemu możesz zobaczyć dodatkowe funkcje dostępne tylko dla Admina.

Dane do logowania:

Login: admin@admin.com
Hasło: admin


2. Obiekt dla bannerów w bazie danych
W bazie danych znajduje się obiekt przeznaczony dla bannerów. Założeniem było, aby Admin mógł wysyłać tam zdjęcia oraz treść, które następnie byłyby dynamicznie wyświetlane na stronie. Niestety, funkcjonalność ta jest jeszcze w trakcie realizacji (WIP - Work In Progress). W chwili obecnej banner oraz slider na stronie przedstawiają elementy ustawione na sztywno.

3. Nazewnictwo zdjęć w aplikacji
Zdjęcia dodawane przez aplikację mają dodany człon w postaci aktualnej daty, aby uniknąć duplikacji nazw. W trakcie edycji plików, system dodawał kolejne człony do nazw, co prowadziło do tworzenia się bardzo długich nazw składających się z wielu segmentów. W związku z tym, wprowadziłem funkcję, która usuwa ten dodatkowy człon. Teraz wszystko działa poprawnie, ale funkcja ta działa tylko na plikach dodanych z frontu. Dane początkowe nie mają tego członu, co powoduje, że usuwana jest cała nazwa pliku. Aby przetestować tę funkcjonalność, zalecam utworzenie nowych produktów z poziomu panelu Admina.


<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
