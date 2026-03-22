# Steph Cooking - Site Vitrine

Site vitrine pour l'activité de batch cooking "Steph Cooking - Cuisine Chez Vous".

## Modifier la carte / le menu

Le menu se trouve dans le fichier **`menu.html`**. C'est le seul fichier à modifier pour mettre à jour la carte de la quinzaine.

### Comment faire :

1. Ouvrir le fichier `menu.html` sur GitHub (cliquer dessus, puis sur l'icone crayon pour éditer)
2. Modifier les **dates** et les **noms des plats**
3. Pour ajouter un plat : copier une ligne `<li>Mon plat</li>` et changer le texte
4. Pour supprimer un plat : supprimer la ligne `<li>...</li>` entière
5. Cliquer sur "Commit changes" pour enregistrer

### Ajouter des photos

1. Déposer les images dans le dossier `images/`
2. Dans `index.html`, dans la section Photos, remplacer un bloc `<div class="photo-placeholder">...</div>` par :
   ```html
   <img src="images/mon-image.jpg" alt="Description de la photo">
   ```

## Hébergement

Ce site est hébergé sur **GitHub Pages**. Toute modification commitée sur la branche principale est publiée automatiquement.
