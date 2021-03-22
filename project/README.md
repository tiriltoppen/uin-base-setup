# Oppdatert 19.03.21 13:21

## Installere React

I client ligger alt som hører til React.
Stå i mappen "client" i terminalen og skriv npm install eller yarn
Da skal i utgangspunktet alt du trenger bli installert

## Installere Sanity

Når du skal lage prosjekt til Sanity så må du være inne i project (IKKE I CLIENT) mappen.
Følg anvisningen for å installere Sanity

## SLETT disse hvis du ikke skal bruke Styled Components

/styles/Global.js
/styles/Styles.js
/styles/Theme.js
babel-plugin-macros.config.js
styled-components i package.json
babel-plugin-macros i package.json

## Oppdater disse hvis du IKKE skal bruke Styled Components

App.js => Fjerne <Theme>
Component.js => Slette denne

## Du MÅ

- Gjøre nødvendige endringer på navn på filer (eks. Component.js, yourService.js) og
  andre steder det gir mening. Dette er KUN en boilerplate
- Legge til filer, funksjonalitet etc som du trenger for å løse oppgaven du skal gjøre

## Det kan hende du MÅ

- Restarte VSCode for etter at du har endret navn på .env filen da eslint kan krangle

## Du må sette rettigheter i Sanity Manage

(<https://manage.sanity.io/> => settings => api)

- Sørge for at localhost:PORT finnes i listen. Det er den porten du som React bruker (se i browseren du bruker)
- Vanligvis er det localhost:3000
- Trykk på Create token med "write" tilgang. Koden du får der må du lime inn i .env filen din
