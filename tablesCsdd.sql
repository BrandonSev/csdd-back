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
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-21 12:05:48
