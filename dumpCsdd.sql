-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: csdd
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `adoption_place`
--

DROP TABLE IF EXISTS `adoption_place`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `adoption_place` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=89 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adoption_place`
--

LOCK TABLES `adoption_place` WRITE;
/*!40000 ALTER TABLE `adoption_place` DISABLE KEYS */;
INSERT INTO `adoption_place` VALUES (1,'STRASBOURG'),(2,'COLMAR'),(3,'MULHOUSE'),(4,'ANGERS'),(5,'SAUMUR'),(6,'CHOLET'),(7,'LE MANS'),(8,'LAVAL'),(9,'BORDEAUX'),(10,'PAU'),(11,'LAMOTHE-LANDERRON'),(12,'PERIGUEUX'),(13,'DIJON'),(14,'CHALON-SUR-SAONE'),(15,'CHAGNY'),(16,'PARAY-LE-MONIAL'),(17,'MACON'),(18,'BESANCON'),(19,'SAONE'),(20,'MONTBELLIARD'),(21,'LIEVREMONT'),(22,'AUXERRE'),(23,'RENNES'),(24,'VANNES'),(25,'BREST'),(26,'MORLAIX'),(27,'SAINT-BRIEUC'),(28,'TOURS'),(29,'CHINON'),(30,'ORLEANS'),(31,'BOURGES'),(32,'MONTARGIS'),(33,'ROMORANTIN'),(34,'REIMS'),(35,'MUIZON'),(36,'EPERNAY'),(37,'TROYES'),(38,'LILLE'),(39,'BOURBOURG'),(40,'AMIENS'),(41,'PARIS'),(42,'EPONE'),(43,'PANTIN'),(44,'CHAMPS-SUR-MARNE'),(45,'LA ROCHELLE'),(46,'ANGOULEME'),(47,'LIMOGES'),(48,'POITIERS'),(49,'NANTES'),(50,'MONTOIR DE BRETAGNE'),(51,'LA ROCHE-SUR-YON'),(52,'SAINT-ETIENNE'),(53,'NANCY'),(54,'ROUEN'),(55,'CAEN'),(56,'NIMES'),(57,'BEAUCAIRE'),(58,'BAILLARGUES'),(59,'PERPIGNAN'),(60,'TOULOUSE'),(61,'SAINT-GIRONS'),(62,'ALBI'),(63,'LABRUGUIERE'),(64,'RODEZ'),(65,'COLOMIERS'),(66,'EAUZE'),(67,'MARSEILLE'),(68,'VITROLLES'),(69,'SALON-DE-PROVENCE'),(70,'CARPENTRAS'),(71,'TOULON'),(72,'LE MUY'),(73,'COGOLIN'),(74,'CAGNES-SUR-MER'),(75,'LUCCIANA'),(76,'L’ARGENTIERE-LA-BESSE'),(77,'GAP'),(78,'LYON'),(79,'ANNECY'),(80,'GRENOBLE'),(81,'VILLEFONTAINE'),(82,'ALLEMAGNE'),(83,'AUTRICHE'),(84,'BELGIQUE'),(85,'ROYAUME-UNI'),(86,'SUISSE'),(87,'LA REUNION'),(88,'CANADA');
/*!40000 ALTER TABLE `adoption_place` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `assets`
--

DROP TABLE IF EXISTS `assets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `assets` (
  `id` int NOT NULL AUTO_INCREMENT,
  `filename` varchar(255) NOT NULL,
  `type` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `file_date` datetime NOT NULL,
  `title` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assets`
--

LOCK TABLES `assets` WRITE;
/*!40000 ALTER TABLE `assets` DISABLE KEYS */;
/*!40000 ALTER TABLE `assets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `assets_category`
--

DROP TABLE IF EXISTS `assets_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `assets_category` (
  `assets_id` int NOT NULL,
  `categories_id` int NOT NULL,
  KEY `fk_assets_category_assets_id` (`assets_id`),
  KEY `fk_assets_category_categories_id` (`categories_id`),
  CONSTRAINT `fk_assets_category_assets_id` FOREIGN KEY (`assets_id`) REFERENCES `assets` (`id`),
  CONSTRAINT `fk_assets_category_categories_id` FOREIGN KEY (`categories_id`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assets_category`
--

LOCK TABLES `assets_category` WRITE;
/*!40000 ALTER TABLE `assets_category` DISABLE KEYS */;
/*!40000 ALTER TABLE `assets_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `books`
--

DROP TABLE IF EXISTS `books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `books` (
  `id` int NOT NULL AUTO_INCREMENT,
  `filename` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL,
  `img_link` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `books`
--

LOCK TABLES `books` WRITE;
/*!40000 ALTER TABLE `books` DISABLE KEYS */;
INSERT INTO `books` VALUES (1,'1650527943557-dialogue_du_fer_avec_le_feu.png','https://www.librairie-compagnons.com/3-metal--culture-et-esthetique-richard-desvallieres-dialogue-du-fer-avec-le-feu.html','https://www.librairie-compagnons.com/client/gfx/photos/produit/desvalieres-dialogue-_7883.png','Dialogue du fer avec le feu'),(2,'1650528084313-metall design 2022.jpg','https://www.librairie-compagnons.com/3151-metal--culture-et-esthetique-metall-design-2022.html','https://www.librairie-compagnons.com/client/gfx/photos/produit/metal-design-2022_15351.jpg','Metall Design 2022'),(3,'1650528170423-Moulage et fonderie d\'art.jpg','https://www.librairie-compagnons.com/742-fonderie-moulage-et-fonderie-d-art.html','https://www.librairie-compagnons.com/client/gfx/photos/produit/moulage-et-fonderie-d-art_7918.jpg','Moulage et fonderie d\'art'),(4,'1650528299720-l\'homme du fer et du feu.jpg','https://www.librairie-compagnons.com/1075-metal--culture-et-esthetique-daniel-souriou--l-homme-du-fer-et-du-feu.html','https://webservice-livre.tmic-ellipses.com/couverture/9782919208142.jpg','L\'homme du fer et du feu'),(5,'1650528373837-Memotech Le soudage.jpg','https://www.librairie-compagnons.com/1610-soudage-memotech-le-soudage-ne-2018-2ed.html','https://www.librairie-compagnons.com/client/gfx/photos/produit/memotech-soudage-2019_8820.jpg','Le soudage'),(6,'1650528507603-Conception et mise en oeuvre des gardes-corps.jpg','https://www.librairie-compagnons.com/2267-construction-en-metal-conception-et-mise-en-oeuvre-des-garde-corps---batiments-neufs-et-existants.html','https://webservice-livre.tmic-ellipses.com/couverture/9782281143867.jpg','Conception et mise en oeuvre des gardes-corps'),(7,'1650528582574-Résistance des matériaux.jpg','https://www.librairie-compagnons.com/2262-construction-en-metal-resistance-des-materiaux.html','https://webservice-livre.tmic-ellipses.com/couverture/9782100807574.jpg','Résistance des matériaux'),(8,'1650528638501-Chansonnier.jpg','https://www.librairie-compagnons.com/965-compagnonnage-chansonnier-des-compagnons-du-devoir.html','https://www.librairie-compagnons.com/client/gfx/photos/produit/chansonnier-2021_12948.jpg','Chansonnier');
/*!40000 ALTER TABLE `books` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Annuaire'),(2,'Organigramme'),(3,'Reunions Nationales'),(4,'Regles Corporatives'),(5,'Innovations'),(6,'Congres Galerie'),(7,'Concours de Ferronnerie'),(8,'Concours de Soudure'),(9,'Progression de Dessins'),(10,'Progression d\'Ateliers'),(11,'Mini Stages'),(12,'Parcours de Formation'),(13,'Archives'),(14,'Deroulement Celebrations'),(15,'Enseignement Compagnonique'),(16,'Culture Compagnonique');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `events`
--

DROP TABLE IF EXISTS `events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `events` (
  `id` int NOT NULL AUTO_INCREMENT,
  `event_date` date NOT NULL,
  `description` text NOT NULL,
  `filename` varchar(255) NOT NULL,
  `event_link` varchar(255) NOT NULL,
  `title` varchar(80) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `events`
--

LOCK TABLES `events` WRITE;
/*!40000 ALTER TABLE `events` DISABLE KEYS */;
INSERT INTO `events` VALUES (1,'2022-07-15','Venez nombreux à cet évènement exceptionnel!!!','1650527524967-event-symposium1.png','','1er Symposium Ferronnerie'),(2,'2022-07-15',' ','1650527561457-event-symposium2.png','','1er Symposium Ferronnerie');
/*!40000 ALTER TABLE `events` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `job_offers`
--

DROP TABLE IF EXISTS `job_offers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `job_offers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `reference` varchar(50) NOT NULL,
  `poste` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job_offers`
--

LOCK TABLES `job_offers` WRITE;
/*!40000 ALTER TABLE `job_offers` DISABLE KEYS */;
INSERT INTO `job_offers` VALUES (1,'2022-21-04-001','Poste à pourvoir','La Loupe','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.','2022-04-21 10:14:33','2022-04-21 10:14:33'),(2,'2022-04-20-003','Compagnon','Le mans','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.','2022-04-21 10:18:03','2022-04-21 10:18:03'),(3,'2022-04-21-012','Maître de stage','Strasbourg','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.','2022-04-21 10:18:47','2022-04-21 10:18:47'),(4,'2022-04-18-005','Apprenti serrurier','Bordeaux','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.','2022-04-21 10:20:03','2022-04-21 10:20:03');
/*!40000 ALTER TABLE `job_offers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `messages` (
  `id` int NOT NULL AUTO_INCREMENT,
  `message` text NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `users_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_messages_users_id` (`users_id`),
  CONSTRAINT `fk_messages_users_id` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `run_on` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'/20211207134258-users','2022-04-20 15:21:45'),(2,'/20211218210102-status','2022-04-20 15:21:45'),(3,'/20211218215602-under-status','2022-04-20 15:21:46'),(4,'/20211218221915-roles','2022-04-20 15:21:46'),(5,'/20211218223647-assets','2022-04-20 15:21:46'),(6,'/20211219104424-messages','2022-04-20 15:21:46'),(7,'/20211220094724-reception-place','2022-04-20 15:21:46'),(8,'/20211220103430-adoption-place','2022-04-20 15:21:46'),(9,'/20211220105044-room','2022-04-20 15:21:46'),(10,'/20211220111843-province','2022-04-20 15:21:46'),(11,'/20211221193449-usersStatus','2022-04-20 15:21:47'),(12,'/20220315091624-assets-category','2022-04-20 15:21:47'),(13,'/20220315104353-addRelationToUsers','2022-04-20 15:21:47'),(14,'/20220315105402-job-offers','2022-04-20 15:21:47'),(15,'/20220315132132-books','2022-04-20 15:21:47'),(16,'/20220315132149-events','2022-04-20 15:21:48'),(17,'/20220316160150-booksImgLink','2022-04-20 15:21:48'),(18,'/20220317153253-eventlink','2022-04-20 15:21:48'),(19,'/20220401103033-addFakeData','2022-04-20 15:21:48'),(20,'/20220401141639-addAdoptionDateInUsers','2022-04-20 15:21:48'),(21,'/20220401150145-modifyAdoptionDateUsers','2022-04-20 15:21:48'),(22,'/20220404124007-addTokenTable','2022-04-20 15:21:48'),(23,'/20220406101717-addOnCascadeUsersRoles','2022-04-20 15:21:48'),(24,'/20220406131205-addCascadeDeleteMessage','2022-04-20 15:21:48'),(25,'/20220408085104-addEventTitle','2022-04-20 15:21:48'),(26,'/20220408094310-addExpireAtToken','2022-04-20 15:21:48'),(27,'/20220411114440-selectCategory','2022-04-20 15:21:48'),(28,'/20220412080251-addTitleBook','2022-04-20 15:21:48'),(29,'/20220420075749-modifProvince','2022-04-20 15:21:48'),(30,'/20220420080639-modifyAdoptionPlace','2022-04-20 15:21:48'),(31,'/20220420081346-modifyAdoptionDate','2022-04-20 15:21:49'),(32,'/20220420084539-modifyRegister','2022-04-20 15:21:49'),(33,'/20220420102526-AddAssetsTitle','2022-04-20 15:21:49'),(34,'/20220420122447-chambre','2022-04-20 15:21:49'),(35,'/20220420122519-addProvinceData','2022-04-20 15:21:49'),(36,'/20220420123702-adoption-place','2022-04-20 15:21:49');
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `province`
--

DROP TABLE IF EXISTS `province`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `province` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=180 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `province`
--

LOCK TABLES `province` WRITE;
/*!40000 ALTER TABLE `province` DISABLE KEYS */;
INSERT INTO `province` VALUES (1,'Agenais'),(2,'Agenaise'),(3,'Albigeois'),(4,'Albigeoise'),(5,'Alsacien'),(6,'Alsacienne'),(7,'Angevin'),(8,'Angevine'),(9,'Angoumois'),(10,'Angoumoise'),(11,'Antwerpenaar'),(12,'Antwerpse'),(13,'Ardéchois'),(14,'Ardéchoise'),(15,'Ardennais'),(16,'Ardennaise'),(17,'Ariégeois'),(18,'Ariégeoise'),(19,'Artésien'),(20,'Artésienne'),(21,'Auvergnat'),(22,'Auvergnate'),(23,'Avignonnais'),(24,'Avignonnaise'),(25,'Basque'),(26,'Béarnais'),(27,'Béarnaise'),(28,'Beauceron'),(29,'Beauceronne'),(30,'Beaujolais'),(31,'Beaujolaise'),(32,'Belfortain'),(33,'Belfortaine'),(34,'Berry'),(35,'Bigourdan'),(36,'Bigourdane'),(37,'Blésois'),(38,'Blésoise'),(39,'Bordelais'),(40,'Bordelaise'),(41,'Bourbonnais'),(42,'Bourbonnaise'),(43,'Bourguignon'),(44,'Bourguignonne'),(45,'Brabançon'),(46,'Brabançonne'),(47,'Brabander'),(48,'Brabantse'),(49,'Bressan'),(50,'Bressane'),(51,'Breton'),(52,'Bretonne'),(53,'Briard'),(54,'Briarde'),(55,'Bruxellois/Brusselaar'),(56,'Bruxelloise/Brusselse'),(57,'Bugey'),(58,'Calédonien'),(59,'Calédonienne'),(60,'Catalan'),(61,'Catalane'),(62,'Cévenol'),(63,'Cévenole'),(64,'Champagne'),(65,'Charentais'),(66,'Charentaise'),(67,'Comtois'),(68,'Comtoise'),(69,'Corse'),(70,'Dauphiné'),(71,'Féminin'),(72,'Flamand'),(73,'Flamande'),(74,'Forézien'),(75,'Forézienne'),(76,'Franc-Comtois'),(77,'Franc-Comtoise'),(78,'Gascon'),(79,'Gasconne'),(80,'Gâtinais'),(81,'Gâtinaise'),(82,'Gévaudan'),(83,'Guadeloupéen'),(84,'Guadeloupéenne'),(85,'Guépin'),(86,'Guyanais'),(87,'Guyanaise'),(88,'Hainaut'),(89,'Hainuyer'),(90,'Hainuyère'),(91,'Ile-de-France'),(92,'Landais'),(93,'Landaise'),(94,'Languedoc'),(95,'Liégeois'),(96,'Liégeoise'),(97,'Limburger'),(98,'Limburgse'),(99,'Limousin'),(100,'Limousine'),(101,'Lorrain'),(102,'Lorraine'),(103,'Luxembourgeois'),(104,'Luxembourgeoise'),(105,'Lyonnais'),(106,'Lyonnaise'),(107,'Mahorais'),(108,'Mahoraise'),(109,'Manceau'),(110,'Mancelle'),(111,'Marchois'),(112,'Marchoise'),(113,'Martiniquais'),(114,'Martiniquaise'),(115,'Masculin'),(116,'Miquelonais'),(117,'Miquelonaise'),(118,'Montauban'),(119,'Montpellier'),(120,'Namurois'),(121,'Namuroise'),(122,'Nantais'),(123,'Nantaise'),(124,'Niçois'),(125,'Niçoise'),(126,'Nîmois'),(127,'Nîmoise'),(128,'Nivernais'),(129,'Nivernaise'),(130,'Normand'),(131,'Normande'),(132,'Oost-Vlaming'),(133,'Oost-Vlamse'),(134,'Orléanais'),(135,'Orléanaise'),(136,'Parisien'),(137,'Parisienne'),(138,'Percheron'),(139,'Percheronne'),(140,'Périgord'),(141,'Picard'),(142,'Picarde'),(143,'Poitevin'),(144,'Poitevine'),(145,'Provençal'),(146,'Provençale'),(147,'Quercy'),(148,'Quimper'),(149,'Rennais'),(150,'Rennaise'),(151,'Réunionnais'),(152,'Réunionnaise'),(153,'Rochelais'),(154,'Rochelaise'),(155,'Rouergue'),(156,'Roussillon'),(157,'Saintonge'),(158,'Saint-Pierrais'),(159,'Savoyard'),(160,'Savoyarde'),(161,'Solognot'),(162,'Solognote'),(163,'Toulousain'),(164,'Toulousaine'),(165,'Tourangeau'),(166,'Tourangelle'),(167,'Vannois'),(168,'Vannoise'),(169,'Vendéen'),(170,'Vendéenne'),(171,'Vendôme'),(172,'Vivarais'),(173,'Vivarois'),(174,'Vivaroise'),(175,'Vosgien'),(176,'Vosgienne'),(177,'West-Vlaming'),(178,'West-Vlamse'),(179,'New Jersey');
/*!40000 ALTER TABLE `province` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reception_place`
--

DROP TABLE IF EXISTS `reception_place`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reception_place` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reception_place`
--

LOCK TABLES `reception_place` WRITE;
/*!40000 ALTER TABLE `reception_place` DISABLE KEYS */;
/*!40000 ALTER TABLE `reception_place` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'admin');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles_assets`
--

DROP TABLE IF EXISTS `roles_assets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles_assets` (
  `roles_id` int NOT NULL,
  `assets_id` int NOT NULL,
  KEY `fk_roles_assets_roles_id` (`roles_id`),
  KEY `fk_roles_assets_assets_id` (`assets_id`),
  CONSTRAINT `fk_roles_assets_assets_id` FOREIGN KEY (`assets_id`) REFERENCES `assets` (`id`),
  CONSTRAINT `fk_roles_assets_roles_id` FOREIGN KEY (`roles_id`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles_assets`
--

LOCK TABLES `roles_assets` WRITE;
/*!40000 ALTER TABLE `roles_assets` DISABLE KEYS */;
/*!40000 ALTER TABLE `roles_assets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `room`
--

DROP TABLE IF EXISTS `room`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `room` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `room`
--

LOCK TABLES `room` WRITE;
/*!40000 ALTER TABLE `room` DISABLE KEYS */;
INSERT INTO `room` VALUES (1,'Angers'),(2,'Bordeaux'),(3,'Dijon'),(4,'Lyon'),(5,'Marseille'),(6,'Nancy'),(7,'Nantes'),(8,'Nîmes'),(9,'Paris'),(10,'Reims'),(11,'Rennes'),(12,'Saint-Etienne'),(13,'Strasbourg'),(14,'Toulouse'),(15,'Tours'),(16,'International');
/*!40000 ALTER TABLE `room` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `status`
--

DROP TABLE IF EXISTS `status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `status` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `status`
--

LOCK TABLES `status` WRITE;
/*!40000 ALTER TABLE `status` DISABLE KEYS */;
/*!40000 ALTER TABLE `status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `token`
--

DROP TABLE IF EXISTS `token`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `token` (
  `id` int NOT NULL AUTO_INCREMENT,
  `token` varchar(255) NOT NULL,
  `users_id` int NOT NULL,
  `expireAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_token_users_id` (`users_id`),
  CONSTRAINT `fk_token_users_id` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `token`
--

LOCK TABLES `token` WRITE;
/*!40000 ALTER TABLE `token` DISABLE KEYS */;
/*!40000 ALTER TABLE `token` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `under_status`
--

DROP TABLE IF EXISTS `under_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `under_status` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) DEFAULT NULL,
  `status_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_to_status_id` (`status_id`),
  CONSTRAINT `fk_to_status_id` FOREIGN KEY (`status_id`) REFERENCES `status` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `under_status`
--

LOCK TABLES `under_status` WRITE;
/*!40000 ALTER TABLE `under_status` DISABLE KEYS */;
/*!40000 ALTER TABLE `under_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `birthday` date NOT NULL,
  `address` varchar(255) NOT NULL,
  `postal_code` int NOT NULL,
  `city` varchar(150) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(10) NOT NULL,
  `password` varchar(255) NOT NULL,
  `adoption_date` date DEFAULT NULL,
  `picture` varchar(255) DEFAULT NULL,
  `cotisation_payed` tinyint(1) NOT NULL DEFAULT (true),
  `active` tinyint(1) NOT NULL DEFAULT (false),
  `status_id` int DEFAULT NULL,
  `province_id` int DEFAULT NULL,
  `reception_place_id` int DEFAULT NULL,
  `room_id` int DEFAULT NULL,
  `adoption_place_id` int DEFAULT NULL,
  `reception_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_users_email` (`email`),
  KEY `fk_status_id` (`status_id`),
  KEY `fk_users_province_id` (`province_id`),
  KEY `fk_users_reception_place_id` (`reception_place_id`),
  KEY `fk_users_room_id` (`room_id`),
  KEY `fk_users_adoption_place_id` (`adoption_place_id`),
  CONSTRAINT `fk_status_id` FOREIGN KEY (`status_id`) REFERENCES `status` (`id`),
  CONSTRAINT `fk_users_adoption_place_id` FOREIGN KEY (`adoption_place_id`) REFERENCES `adoption_place` (`id`),
  CONSTRAINT `fk_users_province_id` FOREIGN KEY (`province_id`) REFERENCES `province` (`id`),
  CONSTRAINT `fk_users_reception_place_id` FOREIGN KEY (`reception_place_id`) REFERENCES `reception_place` (`id`),
  CONSTRAINT `fk_users_room_id` FOREIGN KEY (`room_id`) REFERENCES `room` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Webmaster','lastname','2022-02-02','Adresse de test',28000,'La loupe','webmaster@csdd.fr','0200221123','$argon2i$v=19$m=4096,t=3,p=1$+KzAQYzDOWFhB9Z46aTPDw$LQAmBcXvr/n8laZJiiQgdoI5Oy2DcKAyaXVz5RY6LEo','2020-04-07',NULL,1,1,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_roles`
--

DROP TABLE IF EXISTS `users_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_roles` (
  `users_id` int NOT NULL,
  `roles_id` int NOT NULL,
  KEY `fk_roles_id` (`roles_id`),
  KEY `fk_users_id` (`users_id`),
  CONSTRAINT `fk_roles_id` FOREIGN KEY (`roles_id`) REFERENCES `roles` (`id`),
  CONSTRAINT `fk_users_id` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_roles`
--

LOCK TABLES `users_roles` WRITE;
/*!40000 ALTER TABLE `users_roles` DISABLE KEYS */;
INSERT INTO `users_roles` VALUES (1,1);
/*!40000 ALTER TABLE `users_roles` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-21 10:51:44
