# CREER UNE API REST

**Objectif :** Créer une API REST simple pour gérer des factures clients.

**Technologies :** ExpressJS et MySQL

**Consignes :**
- Créez une base de données avec les tables et les relations décrites dans les spécifications.

- Développez une API REST avec ExpressJS qui implémente les endpoints décrits dans les spécifications.

- Testez votre API avec Postman

- Utilisez des verbes HTTP appropriés pour chaque endpoint

- Retournez des codes d'état HTTP pertinents

- Gérez les erreurs

- Structurez votre code avec des dossiers controller, service et route

## Spécifications

### Tables de la base de données

Créez une table `facture`

**Clients**
- id
- nom
- email

**Factures**

- id
- numero
- date
- montant (float)
- etat ("en cours", "payée", "annulée")
- clientId

**Relations**

- Une facture est liée à un client (clé étrangère clientId).


```sql
CREATE TABLE `clients` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `nom` varchar(255) NOT NULL,
 `email` varchar(255) NOT NULL,
 PRIMARY KEY (`id`)
);

CREATE TABLE `factures` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `numero` varchar(255) NOT NULL,
 `date` date NOT NULL,
 `montant` float NOT NULL,
 `etat` varchar(255) NOT NULL DEFAULT 'en cours',
 `clientId` int(11) NOT NULL,
 PRIMARY KEY (`id`),
 KEY `clientId` (`clientId`),
 CONSTRAINT `factures_ibfk_1` FOREIGN KEY (`clientId`) REFERENCES `clients` (`id`)
);
    
INSERT INTO clients (nom, email) VALUES
('Martin Dupont', 'martin.dupont@email.com'),
('Jeanne Durand', 'jeanne.durand@email.com'),
('Pierre Martin', 'pierre.martin@email.com'),
('Sophie Robert', 'sophie.robert@email.com'),
('Thomas Durand', 'thomas.durand@email.com'),
('Marie Bernard', 'marie.bernard@email.com'),
('Julien Dubois', 'julien.dubois@email.com'),
('Léa Dupont', 'lea.dupont@email.com'),
('Alexandre Durand', 'alexandre.durand@email.com'),
('Clara Martin', 'clara.martin@email.com'),
('Lucas', 'lucas@email.com'),
('Emma', 'emma@email.com'),
('Gabriel', 'gabriel@email.com'),
('Chloé', 'chloe@email.com'),
('Nathan', 'nathan@email.com'),
('Inès', 'ines@email.com'),
('Mathéo', 'matheo@email.com'),
('Lou', 'lou@email.com'),
('Raphaël', 'raphael@email.com'),
('Zoé', 'zoe@email.com');

INSERT INTO factures (numero, date, montant, etat, clientId)
VALUES
    ('FACT-0001', '2024-02-25', 958.25, 'en cours', 1),
    ('FACT-0002', '2024-02-24', 1254.36, 'payée', 2),
    ('FACT-0003', '2024-02-23', 3856.12, 'en cours', 3),
    ('FACT-0004', '2024-02-22', 7415.25, 'annulée', 4),
    ('FACT-0005', '2024-02-21', 8963.32, 'en cours', 5),
    ('FACT-0006', '2024-02-20', 632.54, 'payée', 6),
    ('FACT-0007', '2024-02-19', 2254.23, 'en cours', 7),
    ('FACT-0008', '2024-02-18', 236.58, 'annulée', 8),
    ('FACT-0009', '2024-02-17', 412.23, 'en cours', 9),
    ('FACT-0010', '2024-02-16', 7412.45, 'payée', 10);

```
## Endpoints

## Endpoints de l'API de gestion de factures clients

| Verbe |        Endpoint         | Requête Body | Réponse attendue                                                  | Fonction |
|:---:|:-----------------------:|:---:|:------------------------------------------------------------------|:---:|
| GET |     `/api/clients`      | - | Tableau de clients                                                | Lister tous les clients |
| GET |     `/api/clients/:id`      | - | Client avec l'ID spécifié                                         | Récupérer un client par son ID |
| POST |       `/api/clients`        | `{"nom": string, "email": string}` | `{status: "success", message: "Client ajouté avec succès"}`       | Créer un nouveau client |
| PUT |     `/api/clients/:id`      | `{"nom": string, "email": string}` | `{status: "success", message: "Client modifié avec succès"}`      | Mettre à jour un client par son ID |
| DELETE |     `/api/clients/:id`      | - | `{status: success, message: "Client supprimé avec succès"}`       | Supprimer un client par son ID |
| GET |       `/api/factures`       | - | Tableau des factures                                              | Lister toutes les factures |
| GET |     `/api/factures/:id`     | - | Facture avec l'ID spécifié                                        | Récupérer une facture par son ID |
| POST |       `/api/factures`       | `{"client_id": int, "numero": string, "date": YYYY-MM-DD, "montant": int, "etat": string}` | `{status: "success", message: "Facture créé avec succès"}`        | Créer une nouvelle facture |
| PUT |     `/api/factures/:id`     | `{"client_id": int, "numero": string, "date": string, "montant": int, "etat": string}` | `{status: "success", message: "Facture mise à jour avec succès"}` | Mettre à jour une facture par son ID |
| DELETE |     `/api/factures/:id`     | - | `{status: "success", message: "Facture supprimée avec succès"}`   | Supprimer une facture par son ID |
| GET | `/api/clients/:id/factures` | - | Tableau des factures d'un client avec l'ID spécifié               | Lister les factures d'un client par son ID |

