# Avengers React App

Une application web simple en React pour gérer une liste de personnages Avengers.  
Elle permet d’afficher, ajouter, modifier, supprimer et rechercher des personnages via une API REST.

---

## Fonctionnalités

- Affichage des personnages avec leurs informations :  
  - **id**  
  - **name** (nom du héros)  
  - **realName** (nom réel)  
  - **universe** (univers d’origine, ex : Earth-616)
- Ajout de nouveaux personnages  
- Modification des personnages existants via une popup  
- Suppression de personnages  
- Recherche instantanée par nom ou nom réel  
- Gestion des erreurs côté client  

---

## Pour lancer l'appication
1. **Cloner le repo**
   ```bash
      git clone https://github.com/Ilo06/Avengers.git
   ```
2. **Lancer le server backend**
   ```bash
     cd backend
     npm run server
   ```
3. **Lancer la server vite**
   - ouvrir un nouveau terminal dans la racine du projet
     ```bash
     cd frontend
     npm run dev
     ```

4. **Uitiliser l'application**
   - Ouvrir navigateur
   - Ecrire ```localhost:5173``` dans la barre d'adress
