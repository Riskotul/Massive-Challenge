-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 03, 2024 at 03:02 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `project_development`
--

-- --------------------------------------------------------

--
-- Table structure for table `anjing`
--

CREATE TABLE `anjing` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `age` varchar(255) DEFAULT NULL,
  `race` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `anjing`
--

INSERT INTO `anjing` (`id`, `name`, `age`, `race`, `createdAt`, `updatedAt`) VALUES
(1, 'Xero', '1 Tahun', 'Dalmatian', '2024-06-01 19:34:49', '2024-06-01 19:34:49'),
(2, 'Galtier', '6 Bulan', 'Cavallier', '2024-06-01 19:34:49', '2024-06-01 19:34:49'),
(3, 'Putih', '8 Bulan', 'Dalmatian', '2024-06-01 19:35:51', '2024-06-01 19:35:51'),
(4, 'Susu', '10 Bulan', 'Anatolian', '2024-06-01 19:35:51', '2024-06-01 19:35:51'),
(5, 'Woofy', '5 Bulan', 'Anatolian', '2024-06-01 19:36:47', '2024-06-01 19:36:47'),
(6, 'Love', '2 Tahun', 'Dalmatian', '2024-06-01 19:36:47', '2024-06-01 19:36:47');

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id` int(11) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `telephone` varchar(20) NOT NULL,
  `pesan` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `edit`
--

CREATE TABLE `edit` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `job` varchar(255) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `birthdate` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `profileImage` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `edit`
--

INSERT INTO `edit` (`id`, `name`, `job`, `gender`, `email`, `birthdate`, `phone`, `address`, `profileImage`) VALUES
(1, 'hasmi', 'biduan', 'laki', 'hasmi123@gmail.com', '2024-10-05 10:00:00', '983148087521', 'depok', '/images/ProfilePage/foto_profil.png');

-- --------------------------------------------------------

--
-- Table structure for table `kucing`
--

CREATE TABLE `kucing` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `age` varchar(255) DEFAULT NULL,
  `race` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `kucing`
--

INSERT INTO `kucing` (`id`, `name`, `age`, `race`, `createdAt`, `updatedAt`) VALUES
(1, 'Peter', '3 Bulan', 'Domestik', '2024-06-01 19:37:56', '2024-06-01 19:37:56'),
(2, 'Oyen', '4 Bulan', 'Domestik', '2024-06-01 19:37:56', '2024-06-01 19:37:56'),
(3, 'Lucky', '4 Bulan', 'Himalaya', '2024-06-01 19:38:25', '2024-06-01 19:38:25'),
(4, 'Cimol', '1 Bulan', 'Domestik', '2024-06-01 19:38:25', '2024-06-01 19:38:25'),
(5, 'Saset', '2 Bulan', 'Persia', '2024-06-01 19:38:58', '2024-06-01 19:38:58'),
(6, 'Belang', '7 Bulan', 'Persia', '2024-06-01 19:38:58', '2024-06-01 19:38:58');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `refresh_token` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `password`, `refresh_token`, `createdAt`, `updatedAt`) VALUES
(1, 'maula', 'sapa@gmail.com', '$2b$10$TlmIsQdCL9M137mKdEGDy.SXjGIpHTrpmYFZE2TNseDp1ipwq0gOe', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsIm5hbWUiOiJtYXVsYSIsImVtYWlsIjoic2FwYUBnbWFpbC5jb20iLCJpYXQiOjE3MTc5ODQ1MTIsImV4cCI6MTcxODA3MDkxMn0.7D57gk3mPqy2tjQUIvklAxeiBmHttZb2X1JcYosrpWs', '2024-06-09 11:14:30', '2024-06-10 01:55:12'),
(2, 'Muhammad Hasmi', 'hasmi123@gmail.com', '$2b$10$AIbY6a0Ar3M0PQ2faeu4fONLzaXCHHDeiFaUEX/MWP2khYvarMFei', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsIm5hbWUiOiJNdWhhbW1hZCBIYXNtaSIsImVtYWlsIjoiaGFzbWkxMjNAZ21haWwuY29tIiwiaWF0IjoxNzE4MjM0OTI0LCJleHAiOjE3MTgzMjEzMjR9.zDFnFNKJzRsTUp-wa_iVuAFjLlwXspmegeKn8BAndSc', '2024-06-10 02:45:43', '2024-06-12 23:28:44'),
(3, 'siti', 'siti123@gmail.com', '$2b$10$YiiXq/iLpIQbvJ/8QbhZe.zm1KoYCG0.PCS9RNv.mM7c3JxGub5fa', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsIm5hbWUiOiJzaXRpIiwiZW1haWwiOiJzaXRpMTIzQGdtYWlsLmNvbSIsImlhdCI6MTcxODE2NzE5OSwiZXhwIjoxNzE4MjUzNTk5fQ.pfgR5YYeGL0R6U2ndk1ErRIy2j93Ts1SVxo83NOazqU', '2024-06-12 04:31:24', '2024-06-12 04:39:59'),
(4, 'ayu tinting', 'ayu123@gmail.com', '$2b$10$pYGXjvhy0KpQfDj7l1.uy.vXlX/63Gcbx5gb.ZQZzB.QXv79h9FJy', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsIm5hbWUiOiJheXUgdGludGluZyIsImVtYWlsIjoiYXl1MTIzQGdtYWlsLmNvbSIsImlhdCI6MTcxODE4MTY0MCwiZXhwIjoxNzE4MjY4MDQwfQ.w6PtZw8P7zShXsSnVNHfQKeV9iaS1iKxV072auE86nU', '2024-06-12 08:19:39', '2024-06-12 08:40:40'),
(5, 'Dimas Rahmatullah', 'dimas@gmail.com', '$2b$10$7Ez6eeyoQ7lc.ZiNADa.sOKq0.9zM0dPSWOikPqlunOp1RthRt1R6', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUsIm5hbWUiOiJEaW1hcyBSYWhtYXR1bGxhaCIsImVtYWlsIjoiZGltYXNAZ21haWwuY29tIiwiaWF0IjoxNzE4MjQ1NjcwLCJleHAiOjE3MTgzMzIwNzB9.n6_kN2FYbLR_bciw7zrqaP_D9v-kau3aFONVL2lZbWA', '2024-06-13 02:05:43', '2024-06-13 02:27:50');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `anjing`
--
ALTER TABLE `anjing`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `edit`
--
ALTER TABLE `edit`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `kucing`
--
ALTER TABLE `kucing`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `anjing`
--
ALTER TABLE `anjing`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `edit`
--
ALTER TABLE `edit`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `kucing`
--
ALTER TABLE `kucing`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
