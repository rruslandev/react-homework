This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# REACT BASE

Если будут вопросы, пишите в ТГ в любое время: https://t.me/rruslan_10

Для удобства проверки были добавлены поясняющие комментарии в конце некоторых модулей :)

Перед запуском приложения установите пакеты проекта, находясь в главной директории:

```bash
npm install
# или
yarn install
# или
pnpm install
```

Команды для запуска приложения:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Откройте [http://localhost:3000](http://localhost:3000) в своем браузере, чтобы развернуть приложение

Также вы можете развернуть локальный сервер, который вам нужен будет для загрузки данных(не забудьте также установить пакеты, находясь в папке simple_api):

```bash
Запускаем сервер командой node server.js (если из корня, то node simple_api/server.js)
```

Дефолтно запускается сервер на http://localhost:3001.

**Кинотеатры**: http://localhost:3001/api/cinemas

**Фильмы**: http://localhost:3001/api/movies - все фильмы http://localhost:3001/api/movies?cinemaId={айдишка кинотеатра} - фильмы в конкретном кинотеатре http://localhost:3001/api/movie?movieId={айдишка фильма} - конкретный фильм

**Отзывы**: http://localhost:3001/api/reviews - все отзывы http://localhost:3001/api/reviews?movieId={айдишка фильма} - отзывы конкретного фильма

## Описание директорий

1. [simple_api](./simple_api) - локальный сервер для загрузки данных о фильме
2. [app](/src/app) - основная папка со страницами

- [about](/src/app/about) - страница "О нас"
- [cart](/src/app/cart) - страница с корзиной товаров
- [faq](/src/app/faq) - страница "Вопросы-ответы"
- [film](/src/app/film/%5Bid%5D) - страница с информацией о фильме

3.  [common](/src/common) - папка с константами
4.  [components](/src/components) - общая папка со всеми компонентами
5.  [contexts](/src/contexts) - папка с контекстами
6.  [hooks](/src/hooks) - папка с хуками
7.  [store](/src/store) - папка со стором(Redux Toolkit/RTK Query)
