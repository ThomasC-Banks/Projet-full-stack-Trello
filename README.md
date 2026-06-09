<div align="center">

# 🗂️ Task Management — Clone Trello

**Projet Full-Stack · ETNA**

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=flat-square&logo=nestjs&logoColor=white)
![TypeORM](https://img.shields.io/badge/TypeORM-FE0803?style=flat-square&logo=typeorm&logoColor=white)
![MariaDB](https://img.shields.io/badge/MariaDB-003545?style=flat-square&logo=mariadb&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![Status](https://img.shields.io/badge/Status-Fonctionnel-brightgreen?style=flat-square)

</div>

---

## 👤 Projet

| **Projet solo** · ETNA | `corde_t` |
|---|---|

---

## 🎯 Présentation

API REST et interface web full-stack inspirée de **Trello**, pour la gestion de tâches et de projets. Développée avec **NestJS**, **TypeORM** et **TypeScript** côté back, **React** côté front.

**Fonctionnalités :**
- 👤 Gestion des utilisateurs (CRUD)
- ✅ Gestion des tâches (CRUD, assignation, filtrage par statut / date limite / utilisateur)
- 📁 Gestion des projets et des statuts des tâches

---

## 🏗️ Architecture

```
Projet-full-stack-Trello/
├── task-management-api/        → 🟥 Backend NestJS + TypeORM
│   ├── src/
│   │   ├── users/              → module utilisateurs
│   │   ├── tasks/              → module tâches
│   │   └── projects/           → module projets
│   └── bdd.sql                 → schéma de la base de données
└── task-management-frontend/   → ⚛️  Frontend React
```

**Flux de données :**
```
[Navigateur] → React Frontend → API NestJS (REST) → TypeORM → MariaDB
```

---

## 🧩 Stack technique

| Couche | Technologie | Rôle |
|--------|-------------|------|
| Backend | NestJS + TypeScript | Framework API REST |
| ORM | TypeORM | Liaison code ↔ base de données |
| Base de données | MariaDB | Persistance des données |
| Frontend | React | Interface utilisateur |

---

## 🛠️ Prérequis

<details>
<summary><b>🗄️ MariaDB</b></summary>

```bash
# Installer MariaDB
sudo apt update
sudo apt install mariadb-server

# Démarrer MariaDB
sudo service mariadb start

# Sécuriser l'installation
sudo mysql_secure_installation

# Se connecter
sudo mysql -u root -p
```
</details>

<details>
<summary><b>🟢 Node.js & NestJS</b></summary>

```bash
# Installer Node.js et npm
sudo apt install -y nodejs npm

# Installer le CLI NestJS
npm install -g @nestjs/cli
```
</details>

---

## 🚀 Lancement

**1. Cloner le repo**
```bash
git clone https://github.com/ThomasC-Banks/Projet-full-stack-Trello.git
cd Projet-full-stack-Trello
```

**2. Créer la base de données**
```bash
sudo mysql -u root -p
```
```sql
CREATE DATABASE task_management;
USE task_management;
```
```bash
mysql -u root -p task_management < task-management-api/bdd.sql
```

**3. Installer les dépendances et démarrer le backend**
```bash
cd task-management-api
npm install @nestjs/typeorm typeorm mysql2
npm run start:dev
```

> L'API est accessible sur **http://localhost:3000**

**4. Installer les dépendances et démarrer le frontend**
```bash
cd ../task-management-frontend
npm install
npm start
```

---

## ⚡ Commandes utiles

```bash
# Afficher les tables de la BDD
SHOW TABLES;

# Afficher la structure d'une table
DESCRIBE Users;
```

---

<div align="center">

*Projet réalisé à l'ETNA · NestJS · TypeORM · MariaDB · React*

`corde_t`

</div>
