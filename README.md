# Login page

Cloner ce repo.
Coder une page de Login dans le cadre du projet fil rouge (GSB).

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


# Fonctionnalité à implémenter

## Login page

### Coder la page `login` comprenant un formulaire de connexion sur la base suivante:
- Champs 'login' de type texte
- Champs 'password' de type password
- Un bouton d'envoie de formulaire
- Un message d'erreur en cas d'echec (caché dans un premier temps)

### 2 scénarios possibles

1. Succés de la requête : Redirection vers la page Home.
2. Echec de la requête : Affichage d'un message d'erreur.

### La requête HTTP vers le serveur 'http://localhost:90/gsb/user/...'

Le bouton permettra d'envoyer une requête HTTP avec 'Authorization', prenant en paramètre le login + password.
L'en-tête de la requête aura deux options:
- Content-Type
- Authorization


```javascript

fetch(url, {
    method: 'GET',
    Authorization: 'Basic donnéeCrypté'
}).
then((response) => {
    //si response.status = 401
    //alors j'affiche un message d'erreur
    //sinon je suis rediriger vers la page Home
})

```

#### Cryptage des paramètres d'autorisation

La methode `window.btoa()` permet de crypter en base 64 une chaine de caractères.

Ex:

```javascript
window.btoa('aladin:sesameOuvreToi')
// => données cryptées en base 64
```

see['Doc pour Authorisation']('https://developer.mozilla.org/fr/docs/Web/HTTP/Headers/Authorization')

