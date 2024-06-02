# GOW2024

### JO Runner 2024, par GRUAU Elyan, PATUREAU Romain, et TILLE Logann en Licence 3 MIAGE NICE

Le jeu est disponible ici : https://gamesonweb.github.io/gow-olympic-edition-jo-runner-2024/

#### Quel est le but du jeu ?

JO Runner 2024 est un jeu en 1 contre 1. Les deux joueurs doivent jouer sur la même machine, sur le même écran, et surtout sur le même clavier.
Le joueur qui atteindra le fin du parcours (1000M) en premier sera declaré gagnant !

#### Mais les joueurs ne risquent-ils pas de se gêner ?

C'est bien là le but ! Les joueurs sont coudes à coudes, se battant pour gagner la course. Nous souhaitons retrouver les anciennes façons de jouer de type arcade, avec les deux joueurs serrés, prêts à en découdre.


#### Touches
- [Z] ou [U] pour accélérer (Il faut appuyer le plus vite possible)
- [Q] ou [H] pour aller à gauche 
- [D] ou [K] pour aller à droite
- [S] ou [J] pour sauter/esquiver

#### Comment se déroule le jeu ?

Le jeu est de type runner, sur une map qui défile face à nous. Pour que notre personnage avance, il faut "spammer" la touche d'accélération. Plus on clique vite, plus on avance vite. Le joueur peut sauter, aller à droite et à gauche afin d'esquiver des obstacles et récupérer des bonus. Le premier à atteindre la ligne d'arrivée gagne la partie !

Comme les Jeux Olympiques se déroulent en partie à Paris, et que les rues ne sont pas encore propres, vous êtes de corvée pour nettoyer les crottes de chiens et les déchets sur votre passage. Une grande poubelle vous attend à l'arrivée et une médaille du meilleur nettoyeur est en jeu. Que le meilleur nettoyeur de rue gagne !

#### Et c'est tout ?

Bien sûr que non ! Nous avons prévu des petits challenges durant la course. Tous les challenges sont des mini-jeux intégrés à la course.

#### Comment les challenges se lancent-ils ?

C'est simple, les jeux se lancent 15 secondes après le début du jeu. Dès qu'une zone de challenge est terminée, il faut attendre 10 secondes avant qu'un nouveau challenge apparaisse.

#### Quels seront les challenges durant les courses ?

Ils apparaîtront de façon aléatoire. Les challenges seront choisis dans un pool de 8 mini-jeux.

- **Football :** le sol se transforme en terrain de foot, un gros ballon rebondit rapidement sur les murs. Ses rebonds sont aléatoires. Le joueur doit esquiver le ballon sous peine de ralentir.
- **Haltérophilie :** les gars dans les salles de sport laissent toujours leurs poids au sol. Évitez-les pour ne pas trébucher et perdre de la vitesse.
- **Natation :** le sol se transforme en pataugeoire, il est donc plus compliqué d'avancer. Il faut appuyer plus vite sur la touche d'avancement.
- **Tir à l'arc :** les athlètes inconscients vous prennent pour une cible. Esquivez les flèches qui viennent vers vous. Si vous êtes touché, vous ralentissez à cause de la douleur.
- **Trampoline :** la hauteur du saut est multipliée par deux, mais attention, la hauteur des obstacles a aussi augmenté.
- **Équestre :** des chevaux sont passés par là, laissant du crottin partout. Si vous marchez dedans, vous risquez de glisser.
- **Gymnastique rythmique :** suivez le rythme des couleurs au sol. Un pas de côté, et vous perdez de la vitesse car vos mouvements ne sont pas contrôlés.
- **Beach Volley :** vous marchez dans le sable, ce qui vous ralentit. Faites attention aux smashs et aux crabes qui ne vous veulent pas que du bien.


## Perspective d'amélioration
Malheureusement, le jeu n'est a ce jour pas fini, 
En effet, de nombreuses fonctionnalités sont manquantes.
### Fonctionnalités implémentées 
- Mouvements : Saut, boost(sprint), avancer, droite, gauche ...
- Une map infinie
- Des placements d'obstacles aléatoires
- une jauge d'hydratation qui s'épuise en courant
- des bouteilles d'eaux qui hydratent le joueur
- des assets fait maison (ok, sauf pour l'arbre)
### Fonctionnalités à implémenter
- Les mini jeux
- les malus : Détritus, crottes de chiens, flaques de boue qui ralentissent, des membres d'association qui essaient d'intercepter les joueurs
- les boosters : Bonus de recyclage, eau pour retirer la boue du jour 
- Un écran de début (Existe, mais pas implémenter), de fin
- Détecter la fin (Quand l'un des deux joueurs atteint les 1000m)
## Installation du projet
install
```bash
npm install -D @babylonjs/core
```
run
```bash
npm run dev
```