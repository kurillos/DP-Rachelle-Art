-- Suppression de la base si elle existe pour repartir de zéro
DROP DATABASE IF EXISTS rachelle_arts_visuels;
CREATE DATABASE rachelle_arts_visuels CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE rachelle_arts_visuels;

-- 1. Tables de base (sans clés étrangères)
-- ------------------------------------------------------------

CREATE TABLE CATEGORIE (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom_metier VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL
) ENGINE=InnoDB;

CREATE TABLE OFFRE (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom_offre VARCHAR(255) NOT NULL,
    quota_max INT,
    prix_base DECIMAL(10, 2)
) ENGINE=InnoDB;

CREATE TABLE FILTRE (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom_univers VARCHAR(255) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE USER (
    id INT AUTO_INCREMENT PRIMARY KEY,
    prenom VARCHAR(255),
    nom VARCHAR(255),
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('admin', 'client') DEFAULT 'client',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- 2. Tables avec dépendances
-- ------------------------------------------------------------

CREATE TABLE AVIS (
    id INT AUTO_INCREMENT PRIMARY KEY,
    commentaire TEXT,
    note INT CHECK (note BETWEEN 0 AND 5),
    date_avis DATE,
    is_validate TINYINT(1) DEFAULT 0,
    id_user INT,
    FOREIGN KEY (id_user) REFERENCES USER(id) ON DELETE CASCADE
) ENGINE=InnoDB;

CREATE TABLE GALERIE (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titre VARCHAR(255) NOT NULL,
    description TEXT,
    date_creation DATE,
    is_private TINYINT(1) DEFAULT 1,
    date_expiration DATE,
    id_categorie INT,
    id_offre INT,
    id_user INT,
    FOREIGN KEY (id_categorie) REFERENCES CATEGORIE(id) ON DELETE SET NULL,
    FOREIGN KEY (id_offre) REFERENCES OFFRE(id) ON DELETE SET NULL,
    FOREIGN KEY (id_user) REFERENCES USER(id) ON DELETE CASCADE
) ENGINE=InnoDB;

CREATE TABLE PHOTO (
    id INT AUTO_INCREMENT PRIMARY KEY,
    url_stockage VARCHAR(500) NOT NULL,
    nom_origine VARCHAR(255),
    is_vitrine TINYINT(1) DEFAULT 0,
    id_categorie INT,
    FOREIGN KEY (id_categorie) REFERENCES CATEGORIE(id) ON DELETE SET NULL
) ENGINE=InnoDB;

-- 3. Tables de liaison (Relations n:n)
-- ------------------------------------------------------------

CREATE TABLE Apparaître (
    id_photo INT,
    id_galerie INT,
    commentaire TEXT,
    is_favoris TINYINT(1) DEFAULT 0,
    PRIMARY KEY (id_photo, id_galerie),
    FOREIGN KEY (id_photo) REFERENCES PHOTO(id) ON DELETE CASCADE,
    FOREIGN KEY (id_galerie) REFERENCES GALERIE(id) ON DELETE CASCADE
) ENGINE=InnoDB;

CREATE TABLE Tagger (
    id_photo INT,
    id_filtre INT,
    PRIMARY KEY (id_photo, id_filtre),
    FOREIGN KEY (id_photo) REFERENCES PHOTO(id) ON DELETE CASCADE,
    FOREIGN KEY (id_filtre) REFERENCES FILTRE(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- 4. Tables techniques pour Laravel
-- ------------------------------------------------------------

CREATE TABLE sessions (
    id VARCHAR(255) PRIMARY KEY,
    user_id BIGINT UNSIGNED NULL,
    ip_address VARCHAR(45) NULL,
    user_agent TEXT NULL,
    payload LONGTEXT NOT NULL,
    last_activity INT NOT NULL
) ENGINE=InnoDB;