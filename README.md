# Informativni Web Sajt Ujedinjeni Vračar

Dobrodošli! Ovo je prezentacioni web sajt koji pruža osnovne informacije o dešavanjima na opštini, kao i zapisnike sa sastanaka Zborova građana. 
Sajt je dizajniran da bude jednostavan, pregledan i funkcionalan, koristeći statički HTML, vanilla CSS i minimalnu količinu JavaScript-a.

---

## Sadržaj sajta

Sajt se sastoji od sledećih sekcija:
- **Dešavanja na opštini**: Informacije o aktuelnim događajima, projektima i aktivnostima.
- **Zapisnici sa sastanaka Zborova**: Pregled zapisnika sa prethodnih sastanaka građana.
- **Kontakt informacije**: Podaci za kontakt sa opštinskim službama.

---

## Tehnologije

Sajt je izgrađen koristeći:
- **HTML**: Za strukturu stranica.
- **Vanilla CSS**: Za stilizaciju i vizuelni izgled sajta.
- **Minimalni JavaScript**: Za osnovnu interaktivnost (npr. navigacija ili prikazivanje modala).
- **Google Fonts**: Fontovi se importuju direktno putem `<link>` taga u `<head>` sekciji HTML dokumenta.

---

## Struktura projekta

Projekt je organizovan na sledeći način:
- **/assets/images** - Slike koje se koriste na sajtu
- **/assets/files** - Dokumenti (zapisnici, PDF fajlovi, itd.)
- **/assets/logos** - Logoi opštine i drugih relevantnih organizacija
- **/index.html** - Glavna HTML stranica sajta 
- **/styles.css** - Glavni CSS fajl za stilizaciju 
- **/script.js** - JavaScript fajl za osnovnu interaktivnost


---

## Fontovi

Fontovi se importuju putem **Google Fonts** direktno u `<head>` HTML dokumenta. Na primer:

```html
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
```

## Način korišćenja

Preuzmite ili klonirajte repozitorijum.
Otvorite index.html u bilo kom modernom web pregledniku.
Sajt je potpuno statički, tako da nije potrebna dodatna konfiguracija ili server.

## Napomena
Sajt je statički i ne koristi backend tehnologije. Sve informacije i dokumenti su direktno dostupni kroz HTML stranice i fajlove u okviru projekta.
