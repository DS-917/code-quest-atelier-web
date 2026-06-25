# Code Quest - Atelier Web

Jeu individuel de découverte HTML/CSS pour débutants absolus.

L'interface reprend le principe des jeux de code visuels: une consigne courte, un mini-editeur, une zone de jeu qui change immediatement, puis un passage rapide au niveau suivant. Les questions sont rangees par chapitre dans la navigation.

## Utilisation locale

1. Ouvrir `index.html` dans un navigateur moderne.
2. Cliquer sur `Decouvrir la mission`.
3. Lire le brief de mission du Club Astro Pixel et cliquer sur `Commencer la mission`.
4. L'apprenant avance dans les 50 questions.
5. Les badges se debloquent quand un sous-chapitre est termine, avec une animation de recompense et une medaille visible dans la page.
6. Le jeu fonctionne en local. Les ressources internet restent optionnelles et doivent etre documentees.

## Objectifs pédagogiques

- Comprendre les premieres balises HTML.
- Distinguer structure HTML et apparence CSS.
- Manipuler des listes, liens, images fictives, formulaires et propriétés CSS.
- Recevoir un feedback immédiat avec score, badges, progression et animations.
- Sensibiliser aux sources responsables: licence, auteur, source et attribution.

## Sous-chapitres

- Fondations HTML
- Structure du document
- Texte et sens
- Listes d'organisation: `ul`, `ol`, `li`, `dl`, `dt`, `dd`
- Medias web
- Conteneurs et tableaux
- Formulaires
- CSS bases
- Selecteurs CSS
- Boite CSS
- Qualite et publication

## Ressources internet autorisees

Le jeu peut utiliser des elements trouves en ligne si leur licence le permet.

Sources recommandees:

- CC0 / domaine public: usage tres simple, attribution non obligatoire mais conseillee.
- CC BY: usage possible avec attribution obligatoire.
- Google Fonts: polices open source et utilisables gratuitement, y compris commercialement.

A eviter:

- Images trouvees via un moteur de recherche sans page de licence claire.
- Ressources "gratuites" dont les conditions ne disent pas explicitement ce qui est autorise.
- Licences NC ou ND si le formateur veut pouvoir reutiliser, modifier ou diffuser librement le projet.

Pour chaque ressource externe ajoutee, completer `SOURCES.md`.

## Diffusion possible

- Dossier local: envoyer tout le dossier `prod` aux apprenants. Avantage: simple, hors ligne, aucun compte requis. Limite: les ressources internet ne se chargent pas si elles ne sont pas telechargees dans le dossier.
- Mise en ligne statique: publier `prod` sur GitHub Pages, Netlify ou un serveur d'ecole. Avantage: un lien unique pour tout le monde. Limite: demande une petite configuration initiale.
- Version hybride: telecharger les ressources autorisees dans `assets` et garder leurs credits dans `SOURCES.md`. Avantage: fonctionne hors ligne tout en utilisant des ressources web legales.
