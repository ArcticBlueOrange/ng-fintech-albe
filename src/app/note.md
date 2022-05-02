# Cartelle

- api conterrà i servizi per il dialogo con il server
- core conterrà servizi globali, guardie, interceptor…
  non ti preoccupare se ancora non sai cosa sono!
- models conterrà i modelli (tipi e interfacce) della tua applicazione:
  in linea generale, crea un file per ogni modello (ad esempio,
  l’interfaccia Credentials sarà in un file chiamato credentials.ts)
- shared conterrà componenti e moduli riutilizzabili nella tua app,
  parliamo quindi di qualcosa che verrà importato in più moduli
- views conterrà tutte le view dell’applicazione:
  questo è il posto dove piazzare i nostri Routed Modules,
  ma per il momento mettiamo qui i componenti che creiamo.
