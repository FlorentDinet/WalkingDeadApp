
#WalkinDead App 


Nb: (exercice inspiré d'un autre exercice en AngularJs dure Game of Throne https://github.com/Symfomany/angu)


Temps disponible:

4-5 Jours


Magasins d’aides


https://jsfiddle.net/dakra/U3pVM/
https://github.com/a8m/angular-filter
http://www.frangular.com/2013/01/angularjs-scopes-et-evenements.html
http://www.tutoriel-angularjs.fr/tutoriel/2-utilisation-complete-d-angularjs/2-les-filtres
http://www.lesbasesdangularjs.fr/factory
http://www.w3schools.com/angular/angular_http.asp
http://www.w3schools.com/angular/angular_http.asp
http://www.w3schools.com/angular/angular_animations.asp
http://www.w3schools.com/angular/angular_services.asp
http://www.alsacreations.com/article/lire/1675-json-stockage-leger-pratique-donnees-multitypes.html
https://github.com/Symfomany/angu/blob/master/datas/got.json

https://docs.angularjs.org/api/ngMock/service/$log
http://www.lesbasesdangularjs.fr/directive
https://openclassrooms.com/courses/developpez-vos-applications-web-avec-angularjs/les-directives-3
http://materializecss.com/dialogs.html
http://www.w3schools.com/angular/angular_validation.asp
http://www.softfluent.fr/blog/expertise/2014/07/15/Creation-dun-formulaire-dinscription-avec-Angularjs-et-Bootstrap
https://openclassrooms.com/courses/validation-de-formulaire-simplifiee-avec-angularjs
http://sametmax.com/service-factory-et-provider-dans-angularjs/
https://github.com/klederson/angular-masonry-directive
http://www.tutoriel-angularjs.fr/tutoriel/2-utilisation-complete-d-angularjs/1-le-routage
https://openclassrooms.com/courses/developpez-vos-applications-web-avec-angularjs/la-gestion-des-routes
https://developers.google.com/maps/documentation/javascript/tutorial?hl=FR

https://openclassrooms.com/courses/google-maps-javascript-api-v3






NB: Pour cette exercice et pour les plus à l’aise, vous pouvez vous inspirer de mon architecture sur mon projet pédagogique Meteo qui hiérarchise par composants au niveau dossiers (docciers dans app/) et qui respecte le StyleGuide de John Papa (Bonne Pratique d’Experience d’App)
https://github.com/Symfomany/ngseed

Etape 0: Mise en place de l'environnement de notre App

	1.	Créer une configuration Gulp && Bower && SASS avec Materializecss, Material Icons et Material-Design. Le projet où vous pouvez reprendre qqs feuilles .sass précédentes 

      
     2. Créer un Repository sur Github avec son .gitignore pour bower_components et node_modules et le dossier /dit de Gulp. Créer un ReadMe.md pour décrire sommairement votre app et un changelog.md où vous reporterez vos changements à chaque push.



Etape 1: Création d’application

	1.	Créer un fichier .json dans un dossiers datas
	2.	Ce fichier json comporte un tableaux d'objet (collections) avec 6 personnages de Walking Dead, comportant les champs suivants:
+ Id (nombre incrémenté)
+ Pseudo
+ Sexe
+ Photo
+ Activité
+ Date de naissance
+ Coordonnées: objet avec longitude et latitude
+ Pays
+ Résumé
+ Saison (tableaux)

Exemple: https://github.com/Symfomany/angu/blob/master/datas/got.json


3. Charger le fichier json avec l'objet $http (voir doc et codepen,jsbin...) pour récupérer le résultat sous forme de collection d’objet qui sera notre $scope.users

4. Utiliser le service $log de Angular pour notifier en log quand nos données seront chargées depuis le fichier JSON

5. Permettre de supprimer un personnage de la liste et créer un Toast de Materializecss quand c’est supprimé (http://materializecss.com/dialogs.html)

6. Créer un formulaire permettant d’ajouter un personnage avec validation des champs formulaire. Afficher les message d’erreurs en dessous des champs et verrouiller le bouton de submit tant qu’il y a des erreurs dans le formulaire

7. Afficher 2 boutons radios qui filtre que les sexe masculin ou féminin. Le filtre sera créé en AngularJS

8. Créer un champs au dessus de la liste permettant de filtrer de manière instantanée les personnage selon le mot que l’on tape dedans.

9 Créer un filtre qui ajoute une classe animate shake et une icon “birthday” si un des personnages est née le même mois que celui courant.

10. Avec Animate.css et Angular-animate, ajouter une animation quand on supprime un personnage
https://divshot.com/blog/tips-and-tricks/angular-1-2-and-animate-css/

11. Créer un range slider et un filtre pour filtrer par âge. Le range slider sera une Directive que vous créer (voir comment créer une directive) qui affiche un range slider et l’age du range slider


11 Bis: Créer une DIrective permettant d’afficher mes utilisateurs selon leurs coordonées GPS sous une carte avec Google Map. Faites le sans Directive puis après avec Directives.

https://developers.google.com/maps/documentation/javascript/tutorial?hl=FR

12. Ajouter Masonry Directive pour les Cards (https://github.com/klederson/angular-masonry-directive)

13. Ajouter  un bouton “voir la bio du personnage” nous amène sur une nouvelle page pour voir le détail du personnage. Son ID sera envoyé et récupéré depuis URL, une nouvelle route et un nouveau Contrôleur sera créé . Voir comment créer des routes…

Bonus: Créer une Factory (BOnne pratique de factorisation) pour isoler le chargement en $http des personnage et voir comment le “resolve“ depuis le routing qui injecteras le service dans le Controlleur (bonne pratique). La factory permettra de retrouver un utilisateur selon son ID et sera utilisé donc par le second Controlleur.


Bonus Ultime:
Utiliser le module npm JSON-SERVER (https://github.com/typicode/json-server)
Pour permettre de modifier notre fichier json  de données lors de la création ou suppression de personnages

