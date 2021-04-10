SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Base de datos: `marvel`
--
CREATE DATABASE IF NOT EXISTS `marvel` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `marvel`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `characters`
--

DROP TABLE IF EXISTS `characters`;
CREATE TABLE IF NOT EXISTS `characters` (
  `ID` int(11) NOT NULL,
  `Name` text,
  `Alignment` text,
  `Gender` text,
  `Hometown` text,
  `Fighting_Skills` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `characters`
--

INSERT INTO `characters` (`ID`, `Name`, `Alignment`, `Gender`, `Hometown`, `Fighting_Skills`) VALUES
(1, 'Spider Man', 'Good', 'Male', 'USA', 4),
(2, 'Iron Man', 'Neutral', 'Male', 'USA', 4),
(3, 'Hulk', 'Neutral', 'Male', 'USA', 4),
(4, 'Wolverine', 'Good', 'Male', 'Canada', 7),
(5, 'Thor', 'Good', 'Male', 'Norway', 4),
(6, 'Green Goblin', 'Bad', 'Male', 'USA', 3),
(7, 'Magneto', 'Neutral', 'Male', 'Germany', 4),
(8, 'Thanos', 'Bad', 'Male', 'Titan', 4),
(9, 'Loki', 'Bad', 'Male', 'Jotunheim', 3),
(10, 'Doctor Doom', 'Bad', 'Male', 'Latveria', 4),
(11, 'Jean Greay', 'Good', 'Female', 'USA', 4),
(12, 'Rogue', 'Good', 'Female', 'USA', 7),
(13, 'Storm', 'Good', 'Female', 'Kenya', 4),
(14, 'Nightcrawler', 'Good', 'Male', 'Germany', 3),
(15, 'Gambit', 'Good', 'Male', 'USA', 4),
(16, 'Captain America', 'Good', 'Male', 'USA', 6),
(17, 'Cyclops', 'Good', 'Male', 'USA', 4),
(18, 'Emma Frost', 'Neutral', 'Female', 'USA', 3),
(19, 'Kitty Pryde', 'Good', 'Female', 'USA', 5),
(20, 'Daredevil', 'Good', 'Male', 'USA', 5),
(21, 'Punisher', 'Neutral', 'Male', 'USA', 6),
(22, 'Silver Surfer', 'Good', 'Male', 'Zenn-La', 2),
(23, 'Ghost Rider', 'Good', 'Male', 'USA', 2),
(24, 'Venon', 'Neutral', 'Male', 'USA', 4),
(25, 'Juggernaut', 'Neutral', 'Male', 'USA', 4),
(26, 'Professor X', 'Good', 'Male', 'USA', 3);
