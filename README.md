# Portfolio

Osobista strona portfolio prezentująca moje projekty, umiejętności i doświadczenie zawodowe. Zbudowana przy użyciu HTML5, CSS3 i JavaScript, wykorzystująca Bootstrap 5 do responsywnego designu.

## 🚀 Funkcjonalności

- Responsywny design działający na wszystkich urządzeniach
- Ciemny motyw paska nawigacji
- Formularz kontaktowy z walidacją
- Licznik odwiedzin wykorzystujący localStorage
- Prezentacja projektów z linkami do GitHub
- Interaktywne linki do mediów społecznościowych
- Przeglądarka CV w formacie PDF
- Własny schemat kolorów przy użyciu zmiennych CSS

## 🛠️ Wykorzystane Technologie

- HTML5
- CSS3
- JavaScript
- Bootstrap 5.3.2 (poprzez CDN)
- Font Awesome 6.5.1 (poprzez CDN)
- Formspree do obsługi formularza

## 📁 Struktura Projektu

```
portfolio/
│
├── css/
│   └── main.css              # Własne style i motyw
│
├── js/
│   ├── form_validation.js    # Walidacja formularza kontaktowego
│   └── visit_counter.js      # Licznik odwiedzin strony
│
├── resource/                 # Zasoby statyczne
│   ├── favicon.ico
│   ├── favicon.png
│   ├── CV_MBD.pdf
│   └── programmer-meme.jpg
│
├── index.html               # Strona główna
├── about_me.html           # Strona "O mnie"
├── projects.html           # Prezentacja projektów
└── contacts.html          # Formularz kontaktowy
```

## 💫 Cechy Designu

- Własny schemat kolorów:
  - Główny Fiolet (`#663399`)
  - Kremowe Tło (`#FFFDF0`)
  - Złoty Akcent (`#DAA520`)
  - Ciemny Fiolet (`#301948`)
  - Jasny Fiolet (`#9370DB`)

## 📥 Zależności

Mimo że projekt zawiera Bootstrap w package.json, aktualnie korzysta z linków CDN dla:

```html
<!-- Bootstrap CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

<!-- Bootstrap JS Bundle -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
```

## 🚦 Rozpoczęcie Pracy

1. Sklonuj repozytorium
2. Nie jest wymagany proces budowania - otwórz `index.html` w przeglądarce
3. Dla rozwoju:
   ```bash
   npm install    # Instaluje Bootstrap dla referencji
   ```

## 🔍 Główne Komponenty

### Licznik Odwiedzin
- Implementuje prosty licznik odwiedzin wykorzystujący localStorage przeglądarki
- Aktualizuje licznik przy każdym załadowaniu strony

### Walidacja Formularza
- Własna walidacja JavaScript dla formularza kontaktowego
- Wizualne potwierdzenie poprawnych/niepoprawnych danych
- Integracja z Formspree do przesyłania formularza

### Responsywna Nawigacja
- Zwijane menu nawigacji dla urządzeń mobilnych
- Przyklejony pasek nawigacji
- Wskaźniki aktywnego stanu

## 🎨 Dostosowywanie

Strona wykorzystuje zmienne CSS dla łatwego dostosowania motywu. Główne kolory można modyfikować w `main.css`:

```css
:root {
    --main-purple: rgb(102, 51, 153);
    --cream-bg: rgb(255, 253, 240);
    --gold-accent: rgb(218, 165, 32);
    --dark-purple: rgb(48, 25, 72);
    --light-purple: rgb(147, 112, 219);
}
```

## 📝 Uwaga dotycząca Bootstrap

Mimo że Bootstrap jest zawarty w `package.json`, projekt obecnie wykorzystuje linki CDN dla lepszej wydajności i łatwiejszego wdrożenia. Jeśli potrzebujesz pracować offline lub wolisz lokalne zależności, możesz przełączyć się na lokalne pliki Bootstrap poprzez:

1. Aktualizację linku CSS na:
   ```html
   <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
   ```
2. Aktualizację skryptu JS na:
   ```html
   <script src="node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
   ```

## 📄 Licencja

Licencja ISC - zobacz package.json

## 🤝 Kontakt

W przypadku pytań lub sugestii, użyj formularza kontaktowego na stronie lub skontaktuj się przez LinkedIn lub GitHub - linki znajdują się w stopce strony.