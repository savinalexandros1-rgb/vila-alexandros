# 🏔️ Vila Alexandros Bușteni - Website Oficial

Website premium pentru Vila Alexandros din Bușteni - vilă de lux la 1150m altitudine.

## 🚀 Deployment Rapid pe Netlify

### Metoda 1: Drag & Drop (CEL MAI SIMPLU)

1. **Build local:**
   ```bash
   npm install
   npm run build
   ```

2. **Mergi pe Netlify:** https://app.netlify.com/drop

3. **Drag & Drop:** Trage folderul `dist` în pagina Netlify

4. **GATA!** Site-ul tău e live! 🎉

### Metoda 2: Deploy din GitHub (RECOMANDAT)

1. **Creează repo pe GitHub și push codul:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Vila Alexandros website"
   git remote add origin https://github.com/USERNAME/vila-alexandros.git
   git push -u origin main
   ```

2. **Conectează cu Netlify:**
   - Mergi pe https://app.netlify.com
   - Click "Add new site" → "Import an existing project"
   - Alege GitHub
   - Selectează repo-ul `vila-alexandros`
   - Setări build:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

3. **GATA!** Netlify va face build automat și va publica site-ul!

## 📋 Configurare Locală (Development)

```bash
# Instalează dependențele
npm install

# Pornește serverul de development
npm run dev

# Build pentru production
npm run build

# Preview build-ul
npm run preview
```

## 🎨 Customizare

### Imagini

Înlocuiește placeholder-urile cu imagini reale în componentele:
- `Gallery.jsx` - adaugă URL-uri imagini reale
- `Hero.jsx` - adaugă imagine hero background
- `About.jsx` - adaugă imagini despre vilă

### Culori

Modifică culorile în `tailwind.config.js`:
```js
colors: {
  forest: '#2C5F2D',  // Verde pădure
  wood: '#8B4513',    // Maro lemn
  gold: '#DAA520',    // Auriu
}
```

### Google Maps

În `Contact.jsx`, înlocuiește placeholder-ul cu iframe real Google Maps.

### Google Analytics

Adaugă în `index.html` înainte de `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 📧 Configurare Email (Pentru Formulare)

### Opțiunea 1: EmailJS (Gratuit)

1. Creează cont pe https://www.emailjs.com
2. Creează un email service și template
3. Instalează: `npm install @emailjs/browser`
4. Folosește în `Booking.jsx` și `Contact.jsx`

### Opțiunea 2: Netlify Forms (Gratuit)

În fiecare formular, adaugă:
```html
<form name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact" />
  <!-- restul câmpurilor -->
</form>
```

## 🔧 Funcționalități

✅ Design modern și responsive  
✅ SEO optimizat complet  
✅ Formular de rezervare  
✅ Galerie foto interactivă  
✅ FAQ cu accordion  
✅ Google Maps integration  
✅ WhatsApp floating button  
✅ Contact forms  
✅ Testimoniale  
✅ Smooth scroll navigation  

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

© 2026 Vila Alexandros Bușteni. Toate drepturile rezervate.

## 🆘 Support

Pentru suport sau întrebări:
- 📞 Telefon: 0729 800 729
- ✉️ Email: alexandroshotels@gmail.com

---

**Creat cu ❤️ pentru Vila Alexandros**
