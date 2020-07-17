-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Jul 17, 2020 at 08:06 PM
-- Server version: 8.0.20
-- PHP Version: 7.4.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `schooldono`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` int NOT NULL,
  `first_name` varchar(60) NOT NULL,
  `last_name` varchar(60) NOT NULL,
  `email` varchar(120) NOT NULL,
  `password` varchar(150) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` date NOT NULL,
  `is_archived` tinyint(1) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `first_name`, `last_name`, `email`, `password`, `created_at`, `updated_at`, `is_archived`) VALUES
(1, 'alex', 'candelario', 'candelarioac+1@gmail.com', '$2a$10$o6kPD6QCXIsYU5fiV.ddcOe7Ov0MZKBahZsKbOpSZ6StK1qFxbPvS', '2020-07-11 03:41:43', '2020-07-11', NULL),
(2, 'Alex', 'Candelario', 'a@gmail.com', '$2a$10$jusF7XCl9CRke2UOSNd92eHEbCP6QIWFBymKxurK/jueJIBQJ3tYe', '2020-07-15 15:42:06', '2020-07-15', 0),
(3, 'alex', 'candelario', 'a@a.com', '$2a$10$jG4vqCw3WzhaGGlTAn6dBOJtTBZZnSzvR9frCqeMnqGhFSn.rgP/W', '2020-07-15 18:05:16', '2020-07-15', 0);

-- --------------------------------------------------------

--
-- Table structure for table `donations`
--

CREATE TABLE `donations` (
  `id` int NOT NULL,
  `student_id` int NOT NULL,
  `school_id` int NOT NULL,
  `amount` int NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `donations`
--

INSERT INTO `donations` (`id`, `student_id`, `school_id`, `amount`, `created_at`) VALUES
(1, 1, 1, 23, '2020-07-11 03:55:05'),
(2, 1, 1, 23, '2020-07-11 03:56:04'),
(3, 1, 1, 23, '2020-07-11 03:56:05'),
(4, 1, 1, 23, '2020-07-11 03:56:11'),
(5, 1, 1, 23, '2020-07-11 04:01:46'),
(6, 31, 1, 12, '2020-07-17 17:49:16'),
(7, 31, 1, 22, '2020-07-17 17:49:24'),
(8, 31, 1, 33, '2020-07-17 17:49:28'),
(9, 31, 1, 45, '2020-07-17 17:49:31');

-- --------------------------------------------------------

--
-- Table structure for table `schools`
--

CREATE TABLE `schools` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `is_archived` tinyint(1) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `schools`
--

INSERT INTO `schools` (`id`, `name`, `is_archived`) VALUES
(1, 'lake gibson high school', 0);

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` int NOT NULL,
  `student_school_id` varchar(255) NOT NULL,
  `first_name` varchar(60) NOT NULL,
  `last_name` varchar(60) NOT NULL,
  `email` varchar(120) NOT NULL,
  `password` varchar(150) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `shirt_size` varchar(15) NOT NULL,
  `grade` varchar(30) NOT NULL,
  `school_id` int NOT NULL,
  `teacher` varchar(100) NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL,
  `is_archived` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `student_school_id`, `first_name`, `last_name`, `email`, `password`, `phone`, `shirt_size`, `grade`, `school_id`, `teacher`, `created_at`, `updated_at`, `is_archived`) VALUES
(1, 'A592310', 'Alex', 'Candelario', 'candelarioac+1@gmail.com', '$2b$10$4L2v1jbFeY4ySuF2RmTplOv0fhSkLlh9O9dja73EqC1UrZDRVAtWi', '8638996137', 'xl', '10th', 1, 'Mrs. Gonzolez', '2020-07-11', '2020-07-11', 0),
(2, 'A592310', 'Alex', 'Candelario', 'candelarioac+2@gmail.com', '$2b$10$GxasFcZoPHpxZ7cGbyPzaOQQ7lB1UC3hWHPHk1QHx9f4lFEjKVoFm', '863 8996137', 'XL', '8th', 1, 'Mrs. Gonzolez', '2020-07-13', '2020-07-13', 0),
(3, '888', 'Alex', 'Candelario', 'Alex@mosierdata.com', '$2b$10$yZqI5DFHfZYhl5dBOR5zW.Z8X29XoYa5cj2Wtv.xliDm3UYpAeG5a', '863 8996137', 'xl', '8th', 1, 'candelario', '2020-07-13', '2020-07-13', 0),
(4, '888 888', 'Jim', 'Mosierdata', 'tet@gmail.com', '$2b$10$4Lwc/pIPw/UyXU59Q/Fqlu/cdQKraHsKanfQX4yD/3kdVH.q0FQDK', '8638996137', 'xl', '8th', 1, 'Mr. Smith ', '2020-07-13', '2020-07-13', 0),
(5, '888 ', 'Test', 'User', 'alex@mosier.com', '$2b$10$7LOEyP7HcjTVIStSBWJOHui3zckAuy17sRem6/65mxm85JaEY5.Xi', '863 899613', 'xl', '8th', 1, 'Mr. Smith', '2020-07-13', '2020-07-13', 0),
(6, '88888', 'Jeremy', 'Candelario', 'candelario@gmail.com', '$2b$10$4iDuofcRFw1QjQqB.22ahuNlqntbqWx2bdkkJvd4NlUwmfu6rQfzq', '863 8996137', 'XL', '5th', 1, 'Mr. Cand', '2020-07-13', '2020-07-13', 0),
(7, '88888', 'Jeremy', 'Candelario', 'candelario22@gmail.com', '$2b$10$6AwABbTnRglgVTDhKVQ3kObd9TRylmJTbvNz1bZnEhEhsIImEWVLO', '863 8996137', 'XL', '5th', 1, 'Mr. Cand', '2020-07-13', '2020-07-13', 0),
(9, '', '', '', '', '$2b$10$ecTxX/eAveVLdfen6GpmWedP9UIke1hYr8LgtwndnMQPKc9dKojuO', '', '', '', 1, '', '2020-07-13', '2020-07-13', 0),
(10, '55555', 'My', 'Me', 'alex@gmail.com', '$2b$10$XrRwFQck44WPDPfyXWq6kuWpB5v3UcpMcrRDmPeAEQaR02DqzRSBq', '8638996137', 'xl', '8th', 1, 'Mr. Smtih', '2020-07-13', '2020-07-13', 0),
(11, 'a121212', 'alex', 'candelario', 'alex@test.com', '$2b$10$ekHC1yhWibr45MEkV2siw..V5bg4gTsKqdx9QLQvdvqh5793rzVbm', '8638996137', '', '', 1, 'test', '2020-07-13', '2020-07-13', 0),
(12, 'a123', 'alex', 'candelario', 'cand@cand.com', '$2b$10$QcyvI4H/vNOcWr46pcHm/.yhhIE9AqyWqeJo0FqfMjgsOjXwCiyUW', '863 8996137 ', '', '', 1, 'Smith', '2020-07-13', '2020-07-13', 0),
(13, 'a11 ', 'alex', 'test', 'test@test.com', '$2b$10$0rF5k6MpkRn35uJEl1fxsOLUlNeXKcCfQ7scoeinXpfYVXz6LTDY.', '8638996137', '', '', 1, 'smith', '2020-07-13', '2020-07-13', 0),
(14, 'a100', 'alex', 'test', 'tester@test.com', '$2b$10$.wb5ZlXDWv0CDGH6Z9mSKuvtpO/y7hk/Bu/gi6FU/aTETGPjEuUZS', '8638996134', '', '', 1, 'smirh', '2020-07-13', '2020-07-13', 0),
(15, 'a', 'alex', 'alex', 'test2@test.com', '$2b$10$NIYWR4SjYfzFx8wx9x3C1.e8VJFhJD8GDHIeuCweIiok8sFgxJQ4O', '8638896137', '', '', 1, 'smith', '2020-07-13', '2020-07-13', 0),
(16, 'a1000', 'Alexmatthew', 'candelario', 'alexd@mosierdata.com', '$2b$10$MFL3CKf.384vrFYUAWEBQO/6UeFD7i27tTDMfJBv3RkGfOM/Jhx5.', '8638996137', '', '', 1, 'candelario', '2020-07-13', '2020-07-13', 0),
(17, 'a123', 'Alexmatthew', 'candelario', 'alex@candelario.com', '$2b$10$XtjXDFIFooPFf04KMhjJCu6PdKuAHs1ZGbpzftUAdNwElSGuhkIhu', '8638996137', '', 'Kindergarten', 1, 'smith', '2020-07-13', '2020-07-13', 0),
(18, 'A592310', 'Alex', 'Candelario', 'a@gmail.com', '$2b$10$oEkrhJWSI9MYVT4PVI26xu1FpcegASi5eW0WuelYzakdQQGf/Evky', '863 8996137', 'XL', '8th', 1, 'Mrs. Gonzolez', '2020-07-15', '2020-07-15', 0),
(19, 'a', 'alex', 'candelario', 'b@b.com', '$2b$10$dAD1BjchDpxLXI6IkBDAFOf0HIhZ5Mfjtj6dB35HrMay8vZlf8jKa', '8638996137', '', '', 1, 'mr smith', '2020-07-15', '2020-07-15', 0),
(20, 'a', 'a', 'a', 'a@a', '$2b$10$gmtpCaNV4D32Ai3z3VxChO8Y7IYTjKGCLA8j0ao0jj73edZuHzj.i', '896156', '', '', 1, 'sdsd', '2020-07-15', '2020-07-15', 0),
(21, 'a', 'a', 'a', 'a@ad.com', '$2b$10$Tcq99saV2r1GSr4rnIBI6OtdunePEn4AL111Fqg24kLLwJ0EE1FDC', '896156', '', '', 1, 'sdsd', '2020-07-15', '2020-07-15', 0),
(22, 'a', 'a', 'a', 'a@aaa.com', '$2b$10$GyUFg/F7oBE89Q4Q.equrOf0q8jAxlNhSFBELAufc2jVX4YkFbtci', '898989', '', '', 1, 'sds', '2020-07-15', '2020-07-15', 0),
(23, 'A592310', 'Alex', 'Candelario', 'candelarioac+3@gmail.com', '$2b$10$F2N2qchWzhS3pHGKJLw4Jeva.SiQbheiYLlwHVL0ZqEunyQFMEzfC', '863 8996137', 'XL', '8th', 1, 'Mrs. Gonzolez', '2020-07-15', '2020-07-15', 0),
(24, 'a592310', 'alex', 'cand', 'new@new.com', '$2b$10$Qo84VuBMepmbsQtBSgLN9uxZUBwo3SMwowpQnRHbSmXDd5cK4HVIK', '8638996137', 'Youth medium', 'Kindergarten', 1, 'smoth', '2020-07-15', '2020-07-15', 0),
(25, 'a592310', 'alex', 'candelario', 'alex@mosierdata1.com', '$2b$10$ohf80JDPPEmDSGbcL9czH.mkRk/6wZgUgz6lDVRkgGVgsBOqc.DpO', '8638996137', 'Youth medium', 'Kindergarten', 1, 'a', '2020-07-15', '2020-07-15', 0),
(26, 'a5959', 'alex', 'candelario', 'alex@mos.com', '$2b$10$SsmBkUiuFVu74VWe3uNHu.CkX.bOpuNPVMGdBeL85Mu2FYZP0eUMi', '8638996137', 'Youth large', 'Kindergarten', 1, 'smoth', '2020-07-15', '2020-07-15', 0),
(27, 'a592310', 'a', 'b', 'lex@test.com', '$2b$10$hpeRhhpG4nyUs0EcUx/qkOnYZpmXVfnGvv4NIfV1AmO6Z2KFG44Xq', 'a592310', 'Youth small', 'Pre-L', 1, 'name', '2020-07-15', '2020-07-15', 0),
(28, 'a5923', 'alex', 'candelario', 'alex@gmaiul.com', '$2b$10$XMgmyuBoK33KkNmLF7UReOps3r1/yL9AhYj3H2uF8RvsbnzdCftBG', '559595', 'Youth medium', 'Pre-L', 1, 'smith', '2020-07-15', '2020-07-15', 0),
(29, 'a5923', 'a', '5', 'asdjs@gdf.com', '$2b$10$dx6gZ1UcWyjpbuzLb9D1xutl4Ael.7zRHm6.wUGIFy0fLEN.sPPoq', '596525', 'Youth small', 'Pre-L', 1, 'name', '2020-07-15', '2020-07-15', 0),
(30, 'a595', 'a', '5', '5', '$2b$10$AiA1KXFEv5dSw9oQMxixKeb2/n/tDa0C5KE1kl46x6eZ7OkRiYwri', '5', 'Youth medium', '5th', 1, '5', '2020-07-15', '2020-07-15', 0),
(31, 'a59', '595', '59', 'alex@alex.com', '$2b$10$8PSV7QfXHD1iDzffd0YT1ueYXGDATf6RJ7GEo7JQyNRMMA3cKCNvy', '592310', 'Youth small', 'Kindergarten', 1, 'smith', '2020-07-15', '2020-07-15', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `donations`
--
ALTER TABLE `donations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `donations_fk0` (`student_id`),
  ADD KEY `donations_fk1` (`school_id`);

--
-- Indexes for table `schools`
--
ALTER TABLE `schools`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `students_fk0` (`school_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `donations`
--
ALTER TABLE `donations`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `schools`
--
ALTER TABLE `schools`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `donations`
--
ALTER TABLE `donations`
  ADD CONSTRAINT `donations_fk0` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`),
  ADD CONSTRAINT `donations_fk1` FOREIGN KEY (`school_id`) REFERENCES `schools` (`id`);

--
-- Constraints for table `students`
--
ALTER TABLE `students`
  ADD CONSTRAINT `students_fk0` FOREIGN KEY (`school_id`) REFERENCES `schools` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
