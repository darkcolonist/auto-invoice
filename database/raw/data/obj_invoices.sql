/*
SQLyog Ultimate v12.08 (64 bit)
MySQL - 10.4.13-MariaDB : Database - db_autoinvoice
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`db_autoinvoice` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `db_autoinvoice`;

/*Data for the table `invoices` */

insert  into `invoices`(`id`,`created_by`,`hash`,`name`,`status`,`schedule_day`,`schedule_time`,`frequency`,`invoice_no`,`created_at`,`updated_at`) values (1,1,'mHt8fbMEloISVahO','example 1.3','active','wednesday','15:15','monthly',1,'2022-05-31 06:15:52','2022-06-02 08:38:48'),(2,1,'lWnpGb7KaOotTamj','example 2','inactive','wednesday','13:00','bi-monthly',1,'2022-05-31 06:15:56','2022-05-31 06:15:56'),(3,1,'vlIRzmqQ0RAN3ctG','example 3.x','inactive','wednesday','13:00','bi-monthly',1,'2022-05-31 06:15:57','2022-06-07 02:42:41'),(4,1,'0sjhjtfjsxXDtTTI','example 4','inactive','wednesday','13:00','bi-monthly',1,'2022-05-31 06:15:58','2022-05-31 06:15:58'),(5,1,'4Lzy0SECK0mYK05P','example 5','inactive','wednesday','13:00','bi-monthly',1,'2022-05-31 06:15:58','2022-05-31 06:15:58'),(6,1,'LIRBpjYuk0mwnypF','example 6.1','inactive','wednesday','13:00','bi-monthly',1,'2022-05-31 06:15:59','2022-06-06 09:11:23'),(7,1,'dWUgjt17OZ8H1Q2C','example 7.xx','inactive','wednesday','13:00','bi-monthly',1,'2022-05-31 06:15:59','2022-06-06 09:10:43'),(8,1,'kjq4ldea2n0xvywR','example 8.1','inactive','wednesday','13:00','bi-monthly',1,'2022-05-31 06:16:00','2022-06-06 09:11:01'),(9,1,'xwPwtxHx8UIwCf3v','example 9.1','inactive','wednesday','13:00','bi-monthly',1,'2022-05-31 06:17:00','2022-06-02 05:59:50'),(10,1,'PRVQflOR2E','example 10.1','inactive','wednesday','13:00','bi-monthly',1,'2022-05-31 06:17:47','2022-06-03 07:08:40'),(11,1,'w8gda6FOUb','example 11','inactive','wednesday','13:00','bi-monthly',1,'2022-05-31 06:17:48','2022-06-06 09:10:20'),(12,1,'ZCXuIUjrfy86XH','example 12','inactive','wednesday','13:00','bi-monthly',1,'2022-05-31 06:17:54','2022-05-31 06:17:54'),(13,1,'zNkggqjr07Y7109G','example 13.1','inactive','wednesday','13:00','bi-monthly',1,'2022-05-31 07:00:36','2022-06-06 09:15:03'),(15,1,'lqUJh1Wdw60c','obsidian 2','inactive','wednesday','09:00','bi-monthly',1,'2022-06-02 08:53:51','2022-06-06 06:55:42'),(16,1,'tTJJuLXRq0MA','obsidian 1','active','wednesday','09:00','bi-monthly',1,'2022-06-02 08:53:59','2022-06-02 08:53:59'),(21,1,'8ZC4Jh5yff','exarkun 12.1','inactive','wednesday','09:00','monthly',1,'2022-06-03 04:32:15','2022-06-06 07:01:43'),(22,1,'OayurnKE','navarra 1.0','inactive','wednesday','11:15','monthly',1,'2022-06-03 07:09:01','2022-06-03 07:09:11');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
