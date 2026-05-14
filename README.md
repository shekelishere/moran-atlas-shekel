# אתר מורן אטלס שקל

אתר תדמית לנטורופתית ומאמנת רגשית — מורן אטלס שקל, רחובות.

## מבנה הפרויקט

```
moran-atlas-shekel/
├── index.html              ← Single-page website
├── css/
│   ├── variables.css       ← CSS custom properties (colors, fonts, spacing)
│   ├── reset.css           ← Normalize + RTL body defaults
│   ├── typography.css      ← Labels, titles, leads, tags
│   ├── layout.css          ← Container, section, grid utilities
│   ├── components.css      ← All section & component styles
│   └── animations.css      ← Keyframes, scroll-reveal, blob animations
├── js/
│   └── main.js             ← Nav, mobile menu, FAQ accordion, contact form
├── images/
│   └── (הוסף תמונה אמיתית כ-moran.webp)
└── README.md
```

## הוספת תמונה אמיתית

1. שמור את התמונה כ-`images/moran.webp` (או `.jpg`)
2. ב-`index.html` — מצא את `about__image-frame` והחלף בתג `<img>`

## העלאה ל-GitHub Pages

```bash
git init
git add .
git commit -m "feat: initial website launch"
git remote add origin https://github.com/<your-username>/moran-atlas-shekel.git
git push -u origin main
```

ב-GitHub: Settings → Pages → Source: `main` branch → `/root`

## פרטי קשר לעדכון

- טלפון: 050-7353868
- כתובת: גורדסקי 31, רחובות
- וואטסאפ: https://wa.me/972507353868
