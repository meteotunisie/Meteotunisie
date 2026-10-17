# Publier Météo Tunisie sur Google Play et l'App Store

## 1. Mettre le site en ligne (obligatoire, c'est le plus simple)
Déposez le dossier `meteo-tunisie-app` sur Netlify, GitHub Pages ou Cloudflare Pages.
Les visiteurs peuvent déjà installer l'application depuis leur navigateur.

## 2. Emballer pour les magasins (Capacitor)
Prérequis : Node.js, Android Studio (Android), Xcode sur Mac (iPhone).

    cd store
    npm install
    npx cap add android
    npx cap add ios          # Mac uniquement
    npm run android          # ou: npm run ios

Android Studio / Xcode ouvrent alors le projet : générez l'archive signée (AAB pour Google Play, Archive pour l'App Store).

## 3. Comptes développeur
- Google Play : compte développeur, paiement unique (environ 25 $).
- App Store : Apple Developer Program, abonnement annuel (environ 99 $).
Vérifiez les tarifs actuels sur les sites officiels.

## 4. À préparer pour la fiche
Icône 512x512 (fournie), captures d'écran, description en français et arabe, politique de confidentialité (l'application demande la position uniquement si l'utilisateur appuie sur « Ma position »).

## 5. Données météo
Open-Meteo est gratuit pour un usage non commercial. Pour une application publique avec publicité ou abonnement, souscrivez à l'offre commerciale et mettez la clé API dans les requêtes.
