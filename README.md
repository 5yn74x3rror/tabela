# LOCAL SETUP

Wymagany: zainstalowany node.js
Wymagane do lintowania, prettify-owania i git hookow: npm i -g npx

- git clone https://github.com/5yn74x3rror/tabela.git tabela
- cd tabela
- npm i
- npm start

# OGOLNE POCZYNIONE ZALOZENIA

- generalnie: czasem dodawalem funckjonalnosci jako showcase, ze nie dzialam w prozni i ze projekt mozna 'kontynuowac' a czasem uznalem, ze szkoda na te chwile czasu zeby mnozyc funcjonalnosci, ktore 'nic' nie beda robic lub sa tu niepotrzebne (routing, SSR itp) i tylko sprawia, ze ciezko bedzie sie szybko rozeznac co i jak
- create-react-app boileplate dla szybkiego prototypowania - normalnie raczej zaczalbym konfiguracje od zera
- poniewaz liczba funckjonalnosci tabeli jest minimalna stwierdzilem, ze lepiej samemu to ogarnac niz uzywac react-table lub czegosc w tym stylu, normalnie byloby to troche bez sensu...
- projekt bedzie sie rozrastac (hipotetycznie) wiec organizacja katalogow, separacja modulow i inne takie sa troche ponad wymiar dla tej funcjonalnosci
- router normalnie jest nieodzowny lecz tu nie jest potrzebny
- Sass + BEM do stylowania - osobista preferencja lecz rownie dobrze mogloby byc kazde inne rozwiazanie typu css-in-js czy styled components
- eslint + airbnb config + kilka zmian - kwestia przyzwyczajenia
- husky by nie commitowac niezlintowanego kodu - osobista preferencja
- nie wrzucalem zadnego configa produkcyjnego, CI i innych takiech ktore wydaja sie zbytkiem na te chwile
- zamiast motac sie w intergracje z nieistniejacym zewnetrznym zrodlem danych pododawalem timeouty zeby zasymulowac ladowanie

LISTA RZECZY KTORE BYM ROZWAZYL / DODAL (zaleznie od potrzeb projektowych)

- SSR
- routing (wiadomo)
- (lazy load || virtual lists) + react-table
- axios, lepszy redux middleware (np. redux saga)
- integracja z API

# create-react-app README.md content below

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
