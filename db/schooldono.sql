-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Jul 20, 2020 at 10:48 AM
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
(2, 'Alex', 'Candelario', 'alex@alex.com', '$2a$10$6bIFkjl5S2jj3JAeGrCZK.Lg9pY1bl.Asog.YrCHZcSsnB1FRmKRe', '2020-07-18 15:39:34', '2020-07-18', 0);

-- --------------------------------------------------------

--
-- Table structure for table `donations`
--

CREATE TABLE `donations` (
  `id` int NOT NULL,
  `student_id` int NOT NULL,
  `school_id` int NOT NULL,
  `amount` float NOT NULL,
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
(6, 18, 1, 22, '2020-07-18 15:35:46'),
(7, 18, 1, 36, '2020-07-18 15:35:52'),
(8, 18, 1, 46, '2020-07-18 15:35:58'),
(9, 18, 1, 101, '2020-07-18 15:36:20'),
(10, 18, 1, 100.52, '2020-07-18 15:36:55'),
(11, 18, 1, 55.23, '2020-07-18 15:41:32'),
(12, 18, 1, 55.23, '2020-07-18 15:41:46'),
(13, 18, 1, 55.23, '2020-07-18 15:41:46'),
(14, 18, 1, 55.23, '2020-07-18 15:41:47');

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
(1, 'lake gibson high school', 0),
(2, 'Blake Acadamy', 0),
(3, 'Corkscrew Elementary', 0),
(4, 'Enterprise Elementary', 0),
(5, 'Freedom Elementary', 0),
(6, 'Highland City Elementary', 0),
(7, 'Highland Grove Elementary', 0),
(8, 'Navigator Academy', 0),
(9, 'Osceola Elementary', 0),
(10, 'Pinecrest Elementary', 0),
(11, 'Spessard Holland Elementary', 0),
(12, 'Woodward Avenue Elementary', 0);

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
(1, 'A592310', 'Alex', 'Candelario', 'candelarioac+1@gmail.com', '$2b$10$4L2v1jbFeY4ySuF2RmTplOv0fhSkLlh9O9dja73EqC1UrZDRVAtWi', '8638996137', 'xl', '10th', 1, 'Mrs. Gonzolez', '2020-07-11', '2020-07-19', 1),
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
(18, 'a592310', 'alexmatthew', 'candelario', 'alex@alex.com', '$2b$10$FRc0YDOfmDW8OLUIKweoC.icUBFTauRrIdjFWeH3yc2llKNixXxxK', '8638996137', 'Youth small', 'Pre-L', 1, 'smith', '2020-07-18', '2020-07-18', 0);

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
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `donations`
--
ALTER TABLE `donations`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `schools`
--
ALTER TABLE `schools`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

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
