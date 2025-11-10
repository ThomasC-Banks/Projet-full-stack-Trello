# 📝 API Task Management

## 🌟 Description
API pour gérer des utilisateurs, des tâches et des projets.  
Développée avec **NestJS**, **TypeORM** et **TypeScript**.  

Fonctionnalités :  
- 👤 Gestion des utilisateurs (CRUD)  
- ✅ Gestion des tâches (CRUD, assignation, filtrage par statut, date limite et utilisateur assigné)  
- 📁 Gestion des projets et des statuts des tâches  

## 📌 Sommaire
1. [Installation et création de la base de données](#installation-et-création-de-la-base-de-données-avec-mariadb)  
2. [Installation et configuration de NestJS](#installation-et-configuration-de-nestjs)  
3. [Lancement du serveur](#lancement-du-serveur)  


---

## 🛠️ Étape 1 : Installation et création de la base de données avec MariaDB

    1-- Installer MariaDB dans le terminal:
        sudo apt update
        sudo apt install mariadb-server
    2-- Démarrer MariaDB
        sudo service mariadb start
    3-- Sécuriser l'installation
        sudo mysql_secure_installation
    4--Se connecter à MariaDB
        sudo mysql -u root -p
    5-- Création de la base de données
        CREATE DATABASE task_management;
        USE task_management;
    6-- Création des tables
        mysql -u root -p task_management < bdd.sql

--- Commandes pouvant être utiles:
    SHOW TABLES;    -> affiche les tables
    DESCRIBE Users; -> sert à afficher la structure de la table Users

## 🛠️ Étape 2 : Installation de NestJS

    1-- Installer Node.js et NPM
        sudo apt install -y nodejs npm
    2--  Installer le CLI NestJS
        npm install -g @nestjs/cli
    3-- Création d'un nouveau projet NestJS
        nest new task-management-api
        cd task-management-api
    4-- Configuration de MariaDB avec TypeORM, installation de TypeORM
        npm install @nestjs/typeorm typeorm mysql2
    5-- Création des modules
        nest generate module users
        nest generate service users
        nest generate controller users
    6-- Lancement du serveur API NestJS
        npm run start:dev

L'API est par défaut accessible sur http://localhost:3000.

```
 ____  _ _    ____  _  _   __   _  _   __   ____ 
(  _ \( \/ )  (_  _)/ )( \ /  \ ( \/ ) / _\ / ___)
 ) _ ( )  /     )(  ) __ ((  O )/ \/ \/    \\___ \
(____/(__/     (__) \_)(_/ \__/ \_)(_/\_/\_/(____/

```