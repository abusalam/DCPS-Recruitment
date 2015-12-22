-- phpMyAdmin SQL Dump
-- version 4.4.12
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Dec 22, 2015 at 12:24 PM
-- Server version: 5.5.44-37.3-log
-- PHP Version: 5.5.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `health`
--

-- --------------------------------------------------------

--
-- Table structure for table `applicant`
--

CREATE TABLE IF NOT EXISTS `applicant` (
  `id` int(11) NOT NULL,
  `appid` varchar(255) NOT NULL,
  `post` varchar(50) NOT NULL,
  `blockapp` varchar(255) NOT NULL,
  `subapp` varchar(25) NOT NULL,
  `aname` varchar(255) NOT NULL,
  `nationality` varchar(6) NOT NULL,
  `father` varchar(255) NOT NULL,
  `dob` date NOT NULL,
  `age_yr` smallint(6) NOT NULL,
  `sex` varchar(6) NOT NULL,
  `category` varchar(10) NOT NULL,
  `mobile` varchar(10) NOT NULL,
  `pre_address` varchar(255) NOT NULL,
  `pre_block` varchar(255) NOT NULL,
  `pre_subdiv` varchar(255) NOT NULL,
  `pre_dist` varchar(255) NOT NULL,
  `pre_pin` varchar(10) NOT NULL,
  `pre_state` varchar(50) NOT NULL,
  `perm_address` varchar(255) NOT NULL,
  `perm_block` varchar(255) NOT NULL,
  `perm_subdiv` varchar(255) NOT NULL,
  `perm_dist` varchar(255) NOT NULL,
  `perm_pin` varchar(10) NOT NULL,
  `perm_state` varchar(50) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `pin` varchar(4) NOT NULL,
  `compknowledge` varchar(5) NOT NULL,
  `photo` varchar(2) NOT NULL DEFAULT 'N',
  `examroll` varchar(50) NOT NULL,
  `RejectionRemarks` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Stand-in structure for view `Applicant_IDs`
--
CREATE TABLE IF NOT EXISTS `Applicant_IDs` (
`appid` varchar(255)
,`pin` varchar(4)
,`aname` varchar(255)
,`sex` varchar(6)
,`mobile` varchar(10)
,`email` varchar(255)
);

-- --------------------------------------------------------

--
-- Table structure for table `block_muni`
--

CREATE TABLE IF NOT EXISTS `block_muni` (
  `block_municd` varchar(6) NOT NULL DEFAULT '',
  `block_muni_nm` varchar(25) DEFAULT NULL,
  `sdiv_cd` varchar(4) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `compknowledge`
--

CREATE TABLE IF NOT EXISTS `compknowledge` (
  `id` int(11) NOT NULL,
  `appid` varchar(255) NOT NULL,
  `course` varchar(255) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `year` varchar(4) NOT NULL,
  `institute` varchar(255) NOT NULL,
  `duration` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `edu_quali`
--

CREATE TABLE IF NOT EXISTS `edu_quali` (
  `id` int(11) NOT NULL,
  `appid` varchar(255) NOT NULL,
  `exam` varchar(255) NOT NULL,
  `institute` varchar(255) NOT NULL,
  `year` int(4) NOT NULL,
  `sub` varchar(255) NOT NULL,
  `fullmarks` int(4) NOT NULL,
  `marksobtain` int(4) NOT NULL,
  `percentage` varchar(4) NOT NULL,
  `grade` varchar(4) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `experience`
--

CREATE TABLE IF NOT EXISTS `experience` (
  `id` int(11) NOT NULL,
  `appid` varchar(255) NOT NULL,
  `project` varchar(255) NOT NULL,
  `activity` varchar(255) NOT NULL,
  `designation` varchar(255) NOT NULL,
  `organization` varchar(255) NOT NULL,
  `fromdate` date NOT NULL,
  `todate` date NOT NULL,
  `duration` varchar(255) NOT NULL,
  `remarks` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `municipality`
--

CREATE TABLE IF NOT EXISTS `municipality` (
  `block_municd` varchar(6) DEFAULT NULL,
  `block_muni_nm` varchar(25) DEFAULT NULL,
  `sdiv_cd` varchar(4) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `post`
--

CREATE TABLE IF NOT EXISTS `post` (
  `PostCode` varchar(2) NOT NULL DEFAULT '',
  `PostName` varchar(50) DEFAULT NULL,
  `SlNo` int(11) DEFAULT NULL,
  `written` varchar(255) DEFAULT NULL,
  `PI` varchar(255) DEFAULT NULL,
  `abbr` varchar(255) DEFAULT NULL,
  `ExamDateTime` text NOT NULL,
  `ExamVenue` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `qualification`
--

CREATE TABLE IF NOT EXISTS `qualification` (
  `code` int(2) NOT NULL,
  `desc` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `sex`
--

CREATE TABLE IF NOT EXISTS `sex` (
  `Code` varchar(2) NOT NULL DEFAULT '',
  `Gender` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `state`
--

CREATE TABLE IF NOT EXISTS `state` (
  `Code` varchar(2) NOT NULL,
  `StateName` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `state`
--

INSERT INTO `state` (`Code`, `StateName`) VALUES
('01', 'Andaman & Nicobar'),
('02', 'Andhra Pradesh'),
('03', 'Arunachal Pradesh'),
('04', 'Assam'),
('05', 'Bihar'),
('06', 'Chandigarh'),
('07', 'Chhattisgarh'),
('08', 'Dadra &amp Nagar Haveli'),
('09', 'Daman &amp Diu'),
('10', 'Delhi'),
('11', 'Goa'),
('12', 'Gujarat'),
('13', 'Haryana'),
('14', 'Himachal Pradesh'),
('15', 'Jammu &amp  Kashmir'),
('16', 'Jharkand'),
('17', 'Karnataka'),
('18', 'Kerala'),
('19', 'Lakshadeep'),
('20', 'Madhya Pradesh'),
('21', 'Maharashtra'),
('22', 'Manipur'),
('23', 'Meghalaya'),
('24', 'Mizoram'),
('25', 'Nagaland'),
('26', 'Orissa'),
('27', 'Pondicherry'),
('28', 'Punjab'),
('29', 'Rajasthan'),
('30', 'Sikkim'),
('31', 'Tamil Nadu'),
('32', 'Tripura'),
('33', 'Uttar Pradesh'),
('34', 'Uttaranchal'),
('35', 'West Bengal');

-- --------------------------------------------------------

--
-- Table structure for table `subdivision`
--

CREATE TABLE IF NOT EXISTS `subdivision` (
  `sdiv_cd` varchar(4) DEFAULT NULL,
  `subdiv` varchar(25) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure for view `Applicant_IDs`
--
DROP TABLE IF EXISTS `Applicant_IDs`;

CREATE ALGORITHM=UNDEFINED DEFINER=`paschuw1_health`@`localhost` SQL SECURITY DEFINER VIEW `Applicant_IDs` AS select `applicant`.`appid` AS `appid`,`applicant`.`pin` AS `pin`,`applicant`.`aname` AS `aname`,`applicant`.`sex` AS `sex`,`applicant`.`mobile` AS `mobile`,`applicant`.`email` AS `email` from `applicant` where (`applicant`.`photo` = 'Y');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `applicant`
--
ALTER TABLE `applicant`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `block_muni`
--
ALTER TABLE `block_muni`
  ADD PRIMARY KEY (`block_municd`);

--
-- Indexes for table `compknowledge`
--
ALTER TABLE `compknowledge`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `edu_quali`
--
ALTER TABLE `edu_quali`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `experience`
--
ALTER TABLE `experience`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`PostCode`);

--
-- Indexes for table `qualification`
--
ALTER TABLE `qualification`
  ADD PRIMARY KEY (`code`);

--
-- Indexes for table `sex`
--
ALTER TABLE `sex`
  ADD PRIMARY KEY (`Code`);

--
-- Indexes for table `state`
--
ALTER TABLE `state`
  ADD PRIMARY KEY (`Code`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `applicant`
--
ALTER TABLE `applicant`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `compknowledge`
--
ALTER TABLE `compknowledge`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `edu_quali`
--
ALTER TABLE `edu_quali`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `experience`
--
ALTER TABLE `experience`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
