# Mise en ligne de Météo Tunisie (version complète)

## Ce que contient ce dossier (à envoyer sur GitHub)
67 fichiers à la racine : l'application (index.html), 58 pages par ville (meteo-*.html),
confidentialite.html, 404.html, sitemap.xml, robots.txt, manifest, sw.js, 2 icônes.
Ne PAS envoyer le dossier "store" (il contient ce guide et la préparation Google Play / App Store).

## Envoi depuis un téléphone
1. github.com/meteotunisie/Meteotunisie/upload/main
2. "choose your files", dans le dossier extrait : sélectionner tous les fichiers, sauf le dossier "store".
   GitHub accepte au maximum 100 fichiers par envoi : on est à 67.
3. "Commit changes". Les fichiers de même nom remplacent les anciens.
4. Attendre 2 minutes (onglet Actions : pastille verte), recharger le site deux fois.

## Après la mise en ligne
- Ouvrir confidentialite.html et remplacer "[à compléter : adresse e-mail de contact]" (3 langues).
- Google Search Console : ajouter le site et envoyer https://meteotunisie.github.io/Meteotunisie/sitemap.xml
- Tester : une page ville (meteo-sfax.html), le bouton Partager, le menu, la carte, les 3 langues.

## Reste à décider (ne peut pas être préparé sans toi)
- Licence des données (Open-Meteo payant) AVANT toute publicité ou abonnement.
- Comptes : Search Console, régie publicitaire, paiement, Google Play, Apple.
- Relecture native de l'arabe et de l'anglais.
- Adresse de contact et texte juridique à faire relire par un juriste.

## Espace administrateur
Les pages admin.html et abonnements.html sont incluses. Le fichier config.js (clés Supabase) n'est PAS dans cette archive :
il se trouve dans l'archive meteo-tunisie-admin. Une fois config.js rempli sur GitHub, ne le renvoyez plus (cela l'effacerait).
Voir GUIDE-ADMIN.md pour la mise en service.
