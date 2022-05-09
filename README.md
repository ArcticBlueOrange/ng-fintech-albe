# TODO LIST

## Cards chapter

Per arrivare a questo risultato dovrai utilizzare un componente Drawer di Material! Una volta inseriti entrambi i componenti nel Drawer, preoccupati di:

[X] Assegnare i binding Input e Output dei due componenti figli:
    nel caso di CardListComponent,
    sposta le carte “fasulle” create in precedenza in questo componente
    e passagliele via Input,
    creandone uno nuovo (chiamato ad esempio cards).
    FATTO!
[X] L’Output per la rimozione di una carta dovrà togliere la carta corretta.
    Fallo senza utilizzare metodi mutabili (ad esempio pop()),
    fallo riassegnando l’intero array e usando il metodo filter:
    this.cards = this.cards.filter(???)
    FATTO!
[X] L’Output per l’aggiunta di una carta dovrà aggiungere una carta all’array:
    anche qui, non farlo utilizzando metodi mutabili,
    fallo utilizzando lo Spread Operator.
    Attenzione:
    per il momento non conosciamo tutti i dati per la carta
    (id, owner, ownerId, amount…),
    per cui creali tu a piacere finché non arriveremo a comunicare con il server, l’importante è vedere che la carta venga aggiunta alla lista.
[X] Il tasto “Aggiungi” dovrà aprire il Drawer,
    mostrando quindi il componente CardFormComponent.
[o] L’Output scatenato dal tasto “Annulla“,
    invece, dovrà chiudere il Drawer (utilizzando ViewChild)…
    Io l'ho fatto e non lascia errori ma non usa VC? RIVEDERE
[o] …e dovrà anche dire al componente figlio di ripulire il form!
    Ricordi il metodo cleanup() che hai scritto prima?
    E’ il momento di usarlo! Anche qui, prendi il riferimento al componente figlio con ViewChild.
    TODO SCRIVERE METODO CLEANUP()
[X] Assicurati di chiudere il Drawer e di pulire il form anche dopo
    aver aggiunto una nuova carta!
    Fallo senza duplicare codice (creando ad esempio un metodo
    dispose da chiamare in entrambe le occasioni).
[X] Sia per l’aggiunta che per la rimozione,
    avverti l’utente dell’avvenuta modifica utilizzando il servizio
    MatSnackBar di Angular Material.
[X] L’Output assegnato al tasto “Vedi movimenti“,
    per ora, non fa nulla. Crea comunque un metodo vuoto e segnati per comodità un commento TODO, nelle prossime lezioni qui faremo una navigazione verso un’altra pagina!
[ ] Una volta fatto tutto,
    come al solito ripulisci AppComponent,
    perché creeremo altri componenti!
    Fra non molto arriverà il momento di organizzarli tutti in vari moduli,
    per ora tieni tutti i componenti in /views.


# NgFintechAlbe

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
