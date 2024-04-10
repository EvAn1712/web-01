# web-01

* ### **_Question 1_**

##### `npm install` command also generated a package-lock.json file along with package.json. What is the purpose of this file?
      
Dans les projets Node.js, le fichier `package-lock.json`, généré par la commande `npm install`, assure la cohérence et la reproductibilité des dépendances. Les versions des dépendances sont verrouillées, ce qui garantit des installations identiques à chaque fois. Il permet aussi de reproduire facilement les builds, de voir les changements de dépendances et d'optimiser les installations en évitant les résolutions de métadonnées répétées sur les installations. En bref, cela joue un rôle crucial dans la garantie de la stabilité, de la sécurité et de l'efficacité de la gestion des dépendances.

* ### **_Question 2_**

##### By convention, all NPM dependencies use a 3-digit format for version numbers. How do you call this?

La convention d'utiliser un format à 3 chiffres pour les numéros de version dans les dépendances de NPM (Node Package Manager) est appelée versionnement sémantique (MAJOR.MINOR. PATCH.)

* ### **_Question 3_**

##### What is a devDependency exactly? What are the differences with a dependency?

Les "dev dependencies" (dépendances de développement) sont des packages logiciels ou des bibliothèques utilisées dans le processus de développement d'un logiciel, mais qui ne sont pas nécessaires pour son fonctionnement en production.
Les développeurs peuvent spécifier deux types de dépendances dans leur projet : les dépendances de production et les dépendances de développement.

Dépendances de production (dependency): Ce sont les dépendances qui sont nécessaires pour que le logiciel fonctionne correctement en production. Par exemple, si vous développez une application Web en utilisant React.js, React.js serait une dépendance de production car elle est nécessaire pour que votre application fonctionne dans le navigateur Web de l'utilisateur.

Dépendances de développement (devDependency) : Ce sont des dépendances qui sont nécessaires uniquement pendant le processus de développement. Cela peut inclure des outils de test, des bibliothèques de simulation de serveur, des linters (outils d'analyse de code), des outils de compilation ou d'optimisation, et ainsi de suite. Ces dépendances ne sont pas embarquées dans la version finale du logiciel distribuée aux utilisateurs finaux car elles n'ont pas d'impact sur son fonctionnement.

* ### **_Question 4_**

##### What is a closure/iife ? What was it used for? What replaced it?

IIFE signifie "Immediately Invoked Function Expression". Il était souvent utilisé avant les modules ES pour définir des scopes privés. Désormais, tout dans un module ES est privé sauf s'il est exporté. Ils sont remplacés par les modules ES6 pour encapsuler le code et gérer les dépendances.

* ### **_Question 5_**

##### What is the difference between `import * as toto from './utils'` and `import { parseUrl } from './utils'`? What can be the consequences of using one instead of the other?

Lorsque nous utilisons import * as toto from './utils', nous importons toutes les fonctionnalités exportées du module ./utils sous un seul namespace toto. 
En revanche, avec import { parseUrl } from './utils', nous importons spécifiquement uniquement la fonction parseUrl du module ./utils.
Les conséquences de l'utilisation de l'une ou l'autre méthode peuvent inclure la gestion de l'espace de noms, la clarté et la lisibilité du code, ainsi que la taille du bundle final généré lors de la compilation.

* ### **_Question 6_**

##### Can you think of at least 2 things that are possible with Java classes, but cannot be done with ES6 classes?

Absence d'interfaces : En Java, il est possible de définir des interfaces qui déclarent un ensemble de méthodes qu'une classe doit implémenter. Cela permet une programmation basée sur des contrats et du polymorphisme. Cependant, les classes ES6 ne prennent pas en charge les interfaces intégrées.

Absence de surcharge de méthode/constructeur : Java prend en charge la surcharge de méthode, où il est possible de définir plusieurs méthodes dans la même classe avec le même nom mais des paramètres différents. De même, les constructeurs peuvent également être surchargés en Java. Cependant, les classes ES6 ne prennent pas en charge la surcharge de méthode ou de constructeur. En JavaScript, si vous définissez plusieurs méthodes ou constructeurs avec le même nom, le dernier défini écrasera les précédents.

* ### **_Question 7_**

##### What are the differences between `var` and `let`;

Avec ES5, on utilisait souvent le mot-clé `var` pour définir des variables. Cependant, les variables déclarées avec `var` sont sujettes à l'hissage (hoisting) et leur scope est la fonction globale dans laquelle elles sont définies (global scope ou function scope). Cette caractéristique peut entraîner des comportements inattendus, car les variables peuvent être accédées avant leur déclaration. Depuis l'introduction d'ES6, les mots-clés `let` et `const` ont remplacé `var`, offrant une meilleure gestion du scope. `let` introduit la portée de bloc (block scope), ce qui signifie que la variable est limitée à la portée du bloc dans lequel elle est définie. De même, `const` a une portée de bloc (block scope), et empêche la réaffectation de la variable après son initialisation. Ces deux fonctionnalités offrent un comportement de scope plus clair et plus prévisible par rapport à `var`, ce qui en fait des options préférées pour la déclaration de variables.

* ### **_Question 8_**

##### What is the `.bind(this)` stuff? What happens if you delete it? Is it needed when using an arrow function? why?

La méthode `.bind(this)` est utilisée pour lier une fonction à un contexte spécifique, garantissant que la valeur de `this` à l'intérieur de la fonction fait référence au contexte fourni, peu importe comment ou où la fonction est appelée.

Lorsque vous supprimez `.bind(this)` d'une fonction, celle-ci peut perdre son contexte prévu, et `this` à l'intérieur de la fonction pourrait faire référence à quelque chose d'inattendu ou être indéfini, selon le contexte d'exécution.

L'utilisation d'une arrow function capture automatiquement le contexte `this` environnant de manière lexicale, donc il n'est pas nécessaire d'utiliser `.bind(this)` avec les arrow functions. Ils n'ont pas leur propre contexte `this`; à la place, elles héritent de la valeur `this` du scope environnant dans lequel elles sont définies.

* ### **_Question 9_**

##### What does the @ symbol mean in` @babel/***`?

Le symbole @ est utilisé pour indiquer un espace de nom dans le système de gestion de paquets `npm`. Plus précisément, dans le cas de Babel, `@babel/***` fait référence à un package qui est installé dans le scope "babel" sur npm.

* ### **_Question 10_**

##### What are the advantages of Promises?
       
Les Promises présentent plusieurs avantages dans le développement JavaScript. Elles permettent une gestion propre et efficace des opérations asynchrones, en remplaçant les callbacks enchevêtrés par une syntaxe plus lisible et plus fluide. Les méthodes `.then()` des Promises sont déclenchées de manière asynchrone, ce qui favorise une exécution efficace des opérations non bloquantes. De plus, les Promises offrent une gestion centralisée des erreurs avec la méthode `.catch()`, ce qui contribue à améliorer la robustesse et la maintenabilité du code. Globalement, l'utilisation des Promises conduit à un code plus propre, plus lisible et plus facile à comprendre.

* ### **_Question 11_**

##### What version of ECMAScript `async / await` was released in?

`async / await` was released in ES8.

* ### **_Question 12_**

##### Component-oriented programming for the web is considered more maintainable. Why?

La programmation orientée composant pour le développement web favorise la maintenabilité et la réutilisabilité du code en utilisant des concepts tels que l'encapsulation, l’héritage, le polymorphisme et l’abstraction. Cette approche permet d’appliquer des modèles de conception et de concevoir une architecture basée sur des composants, simplifiant ainsi le développement modulaire. En structurant les applications web en composants autonomes et réutilisables, cette méthode facilite la conception, la maintenance et l’évolutivité des systèmes.

* ### **_Question 13_**

##### What is Functional programming?
       
La programmation fonctionnelle est un paradigme de programmation où les programmes sont construits en appliquant et en composant des fonctions. Elle se concentre sur l'utilisation de fonctions pures, qui produisent des résultats en fonction uniquement des entrées fournies, sans effets secondaires observables. Les principes de la programmation fonctionnelle incluent l'immutabilité des données, la récursivité, le filtrage, le mapping et la réduction de données, ainsi que la composition de fonctions pour construire des programmes complexes.

* ### **_Question 14_**

##### Explain what the map() function does?
      
La fonction `map()` crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant.

* ### **_Question 15_**

##### Explain what the filter() function does?
       
La fonction `filter()` crée et retourne un nouveau tableau contenant tous les éléments du tableau d'origine qui remplissent une condition déterminée par la fonction callback.

* ### **_Question 16_**

##### Explain what the reduce() function does?
       
La fonction `reduce()` permet de réduire un tableau à une seule valeur en appliquant une fonction d'accumulation à chaque élément du tableau. Elle prend en compte une fonction de réduction et une valeur initiale, puis elle combine les éléments du tableau en utilisant la fonction de réduction pour retourner une valeur unique.

* ### **_Question 17_**

##### What is the difference between .then() and async/await when handling asynchronous functions?
       
La méthode `.then()` est utilisée avec les Promises pour gérer les opérations asynchrones en fournissant une fonction de rappel qui s'exécute lorsque la promesse est résolue.

`async/await` est un sucre syntaxique permettant d'écrire du code asynchrone de manière synchrone. Le mot-clé `async` est utilisé pour déclarer une fonction asynchrone et `await` est utilisé pour mettre en pause l'exécution de la fonction jusqu'à ce qu'une Promise soit réglée.

Bien que `.then()` et async/await soient tous deux utilisés pour gérer les opérations asynchrones, `async/await` fournit une manière plus concise et lisible d'écrire du code asynchrone, surtout lorsqu'il s'agit de gérer plusieurs opérations asynchrones ou de la gestion des erreurs.

* ### **_Question 18_**

##### What does the _ prefix mean on a sass file?
       
En Sass, le préfixe _ indique qu'un fichier est partiel. Les fichiers partiels contiennent des ensembles spécifiques de styles, mixins ou fonctions à inclure dans d'autres fichiers Sass. Ils sont importés à l'aide de @import, mais le préfixe _ et l'extension de fichier sont omis. Cette convention aide à modulariser le code Sass pour une meilleure organisation et maintenabilité.

