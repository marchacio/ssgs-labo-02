# Labo-String: CLI per Utilità su Stringhe

Questo progetto fornisce una base per una semplice Command-Line Interface (CLI) Node.js che offre diverse utilità per la manipolazione di stringhe.

## Funzionalità Principali

* Inversione di una stringa.
* Verifica se una stringa è palindroma.
* Troncamento di una stringa a una lunghezza massima specificata.
* Conteggio delle occorrenze di ciascun carattere in una stringa.

## Requisiti

- [Node.js](https://nodejs.org/) (versione 16 o superiore)
- [npm](https://www.npmjs.com/) (incluso con Node.js)

## Installazione e Avvio

Clona il repository e installa le dipendenze:

```bash
git clone https://github.com/marchacio/ssgs-labo-02
cd ssgs-labo-02
npm install
```

## Utilizzo

Esegui la CLI tramite il comando:

```bash
npm start <comando> <argomenti>
```

Per una lista completa dei comandi e delle opzioni disponibili, puoi eseguire:

```bash
npm start
```

### Comandi Disponibili

- `1: Inverti Stringa`: Inverte la stringa fornita.
- `2: Controlla Palindromo`: Verifica se la stringa è palindroma.
- `3: Tronca Stringa`: Tronca la stringa alla lunghezza specificata.
- `4: Conta Caratteri`: Conta le occorrenze di ciascun carattere nella stringa.

Esempi:

```bash
npm start 1 "prova"
npm start 2 "prova"
npm start 3 "prova" 2
npm start 4 "prova"
```

## Esecuzione dei Test

Per eseguire i test automatici:

```bash
npm test
```

I test sono implementati con Jest. L'esecuzione dei test produce anche un report di code coverage.

### Report di Coverage

Dopo aver eseguito `npm test`, viene generata una cartella `coverage/` che contiene il report dettagliato della copertura del codice, incluso un report HTML visualizzabile in `coverage/lcov-report/index.html`.

## Integrazione Continua (GitHub Actions)

Il progetto include una configurazione di GitHub Actions che esegue automaticamente:

- Installazione delle dipendenze
- Esecuzione dei test con Jest e generazione del report di coverage
- Caricamento del report HTML di coverage come artefatto scaricabile dal workflow

Il workflow si attiva automaticamente su push, pull request e manualmente tramite l'interfaccia di GitHub.

## Struttura del Progetto

- `src/`: Codice sorgente della CLI e delle utilità.
- `test/`: Test automatici.
- `coverage/`: Report di coverage generati da Jest.
- `.github/workflows/ci.yml`: Workflow di GitHub Actions per CI/CD.

## Contributi

Contributi, segnalazioni di bug e suggerimenti sono benvenuti tramite pull request o issue.

## Licenza

Questo progetto è distribuito sotto licenza MIT.