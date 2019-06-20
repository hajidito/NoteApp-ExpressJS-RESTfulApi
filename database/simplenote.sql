-- phpMyAdmin SQL Dump
-- version 4.2.7.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 20 Jun 2019 pada 15.57
-- Versi Server: 5.6.20
-- PHP Version: 5.5.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `simplenote`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `category`
--

CREATE TABLE IF NOT EXISTS `category` (
`id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` varchar(100) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dumping data untuk tabel `category`
--

INSERT INTO `category` (`id`, `name`, `description`) VALUES
(1, 'IT', 'training, learning, and experience about IT'),
(2, 'Sains', 'training, learning, and experience about Sains'),
(3, 'Gaming', 'About playing video games'),
(4, 'Music', 'About playing video music'),
(5, 'Diary', 'About dairy activity');

-- --------------------------------------------------------

--
-- Struktur dari tabel `notes`
--

CREATE TABLE IF NOT EXISTS `notes` (
`id` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `note` text NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `id_category` int(11) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=39 ;

--
-- Dumping data untuk tabel `notes`
--

INSERT INTO `notes` (`id`, `title`, `note`, `time`, `id_category`) VALUES
(7, 'play', 'test1', '2019-06-19 15:02:37', 1),
(8, 'play', 'test2', '2019-06-19 15:11:46', 1),
(9, 'playing yugi oh', 'test1', '2019-06-20 07:12:43', 3),
(10, 'playing yugi oh', 'test2', '2019-06-20 07:12:47', 3),
(11, 'playing yugi oh', 'test3', '2019-06-20 07:12:50', 3),
(12, 'playing yugi oh', 'test4', '2019-06-20 07:12:54', 3),
(13, 'playing yugi oh', 'test5', '2019-06-20 07:12:58', 3),
(14, 'playing guitar', 'test1', '2019-06-20 07:13:18', 4),
(15, 'playing guitar', 'test2', '2019-06-20 07:13:21', 4),
(16, 'playing guitar', 'test3', '2019-06-20 07:13:24', 4),
(17, 'playing guitar', 'test4', '2019-06-20 07:13:28', 4),
(18, 'playing guitar', 'test5', '2019-06-20 07:13:31', 4),
(19, 'daily activity', 'test1', '2019-06-20 07:14:16', 5),
(20, 'daily activity', 'test2', '2019-06-20 07:14:19', 5),
(21, 'daily activity', 'test3', '2019-06-20 07:14:23', 5),
(22, 'daily activity', 'test4', '2019-06-20 07:14:26', 5),
(23, 'daily activity', 'test5', '2019-06-20 07:14:29', 5),
(24, 'coding in the war', 'test1', '2019-06-20 07:15:45', 1),
(25, 'coding in the war', 'test2', '2019-06-20 07:15:48', 1),
(26, 'coding in the war', 'test3', '2019-06-20 07:15:51', 1),
(27, 'coding in the war', 'test4', '2019-06-20 07:15:55', 1),
(28, 'coding in the war', 'test5', '2019-06-20 07:15:58', 1),
(29, 'crazy experiment', 'test1', '2019-06-20 07:16:30', 2),
(30, 'crazy experiment', 'test2', '2019-06-20 07:16:33', 2),
(31, 'crazy experiment', 'test3', '2019-06-20 07:16:36', 2),
(32, 'crazy experiment', 'test4', '2019-06-20 07:16:41', 2),
(33, 'crazy experiment', 'test5', '2019-06-20 07:16:45', 2),
(34, 'Technology Experiment', 'test1', '2019-06-20 13:28:28', 1),
(35, 'Technology Experiment', 'test2', '2019-06-20 13:28:31', 1),
(36, 'Technology Experiment', 'test3', '2019-06-20 13:28:34', 1),
(37, 'Technology Experiment', 'test4', '2019-06-20 13:28:38', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notes`
--
ALTER TABLE `notes`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `notes`
--
ALTER TABLE `notes`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=39;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
