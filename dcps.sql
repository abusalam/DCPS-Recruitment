-- phpMyAdmin SQL Dump
-- version 3.2.4
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jun 30, 2015 at 04:19 PM
-- Server version: 5.1.41
-- PHP Version: 5.3.1

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `dcps`
--

-- --------------------------------------------------------

--
-- Table structure for table `applicant`
--

CREATE TABLE IF NOT EXISTS `applicant` (
  `appid` varchar(255) NOT NULL,
  `post` varchar(2) NOT NULL,
  `aname` varchar(255) NOT NULL,
  `nationality` varchar(6) NOT NULL,
  `father` varchar(255) NOT NULL,
  `category` varchar(2) NOT NULL,
  `dob` date NOT NULL,
  `age_yr` smallint(6) NOT NULL,
  `sex` varchar(2) NOT NULL,
  `mobile` varchar(10) NOT NULL,
  `pre_address` varchar(255) NOT NULL,
  `pre_block` varchar(255) NOT NULL,
  `pre_subdiv` varchar(255) NOT NULL,
  `pre_dist` varchar(255) NOT NULL,
  `pre_pin` varchar(10) NOT NULL,
  `pre_state` varchar(2) NOT NULL,
  `perm_address` varchar(255) NOT NULL,
  `perm_block` varchar(255) NOT NULL,
  `perm_subdiv` varchar(255) NOT NULL,
  `perm_dist` varchar(255) NOT NULL,
  `perm_pin` varchar(10) NOT NULL,
  `perm_state` varchar(2) NOT NULL,
  `m_inst` varchar(255) DEFAULT NULL,
  `m_year` int(4) NOT NULL,
  `m_total` int(5) NOT NULL,
  `m_marks` int(5) NOT NULL,
  `m_percent` double DEFAULT NULL,
  `m_grade` varchar(5) NOT NULL,
  `h_inst` varchar(255) DEFAULT NULL,
  `h_year` int(4) NOT NULL,
  `h_total` int(5) NOT NULL,
  `h_marks` int(5) NOT NULL,
  `h_percent` double DEFAULT NULL,
  `h_grade` varchar(5) NOT NULL,
  `g_inst` varchar(255) DEFAULT NULL,
  `g_year` int(4) NOT NULL,
  `g_total` int(5) NOT NULL,
  `g_marks` int(5) NOT NULL,
  `g_percent` double DEFAULT NULL,
  `g_grade` varchar(5) NOT NULL,
  `p_inst` varchar(255) NOT NULL,
  `p_year` int(4) NOT NULL,
  `p_total` int(5) NOT NULL,
  `p_marks` int(5) NOT NULL,
  `p_percent` double NOT NULL,
  `p_grade` varchar(5) NOT NULL,
  `cert_inst` varchar(255) DEFAULT NULL,
  `cert_year` int(4) NOT NULL,
  `cert_total` int(5) NOT NULL,
  `cert_marks` int(5) NOT NULL,
  `cert_percent` double DEFAULT NULL,
  `cert_grade` varchar(5) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `exprience` text,
  `pin` varchar(4) NOT NULL,
  `roll` varchar(255) NOT NULL,
  `schedule` varchar(10) NOT NULL,
  `oth_inst` varchar(255) DEFAULT NULL,
  `oth_year` int(4) NOT NULL,
  `oth_total` int(5) NOT NULL,
  `oth_marks` int(5) NOT NULL,
  `oth_percent` double DEFAULT NULL,
  `oth_grade` varchar(5) NOT NULL,
  `photo` varchar(2) NOT NULL DEFAULT 'N',
  PRIMARY KEY (`appid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `applicant`
--


-- --------------------------------------------------------

--
-- Table structure for table `blockapplied`
--

CREATE TABLE IF NOT EXISTS `blockapplied` (
  `PostCode` varchar(2) NOT NULL,
  `BlockName` varchar(255) NOT NULL,
  `BlockCode` varchar(3) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `blockapplied`
--

INSERT INTO `blockapplied` (`PostCode`, `BlockName`, `BlockCode`) VALUES
('06', 'CHANDIPUR', 'b15'),
('06', 'DESHPRAN', 'b02'),
('06', 'EGRA-I', 'b16'),
('06', 'KHEJURI-I', 'b06'),
('06', 'KHEJURI-II', 'b07'),
('06', 'PATASHPUR-II', 'b19'),
('07', 'CONTAI-I', 'b01'),
('07', 'EGRA-II', 'b17'),
('07', 'KHEJURI-I', 'b06'),
('07', 'MAHISHADAL', 'b21'),
('07', 'NANDAKUMAR', 'b13'),
('07', 'PATASHPUR-II', 'b19'),
('07', 'RAMNAGAR-II', 'b05'),
('07', 'SUTAHATA', 'b22'),
('08', 'NA', '0');

-- --------------------------------------------------------

--
-- Table structure for table `block_muni`
--

CREATE TABLE IF NOT EXISTS `block_muni` (
  `block_municd` varchar(6) DEFAULT NULL,
  `block_muni_nm` varchar(25) DEFAULT NULL,
  `sdiv_cd` varchar(4) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `block_muni`
--

INSERT INTO `block_muni` (`block_municd`, `block_muni_nm`, `sdiv_cd`) VALUES
('0bm', 'Other', '1405'),
('b01', 'CONTAI-I', '1403'),
('b02', 'DESHAPRAN', '1403'),
('b03', 'CONTAI-III', '1403'),
('b04', 'RAMNAGAR-I', '1403'),
('b05', 'RAMNAGAR-II', '1403'),
('b06', 'KHEJURI-I', '1403'),
('b07', 'KHEJURI-II', '1403'),
('b08', 'BHAGAWANPUR-II', '1403'),
('b09', 'PANSKURA', '1401'),
('b10', 'KOLAGHAT', '1401'),
('b11', 'TAMLUK', '1401'),
('b12', 'SAHID MATANGINI', '1401'),
('b13', 'NANDAKUMAR', '1401'),
('b14', 'MOYNA', '1401'),
('b15', 'CHANDIPUR', '1401'),
('b16', 'EGRA-I', '1404'),
('b17', 'EGRA-II', '1404'),
('b18', 'PATASHPUR-I', '1404'),
('b19', 'PATASHPUR-II', '1404'),
('b20', 'BHAGAWANPUR-I', '1404'),
('b21', 'MAHISADAL', '1402'),
('b22', 'SUTAHATA', '1402'),
('b23', 'HALDIA', '1402'),
('b24', 'NANDIGRAM-II', '1402'),
('b25', 'NANDIGRAM-I', '1402'),
('m01', 'CONTAI MUNICIPALITY', '1403'),
('m02', 'TAMLUK MUNICIPALITY', '1401'),
('m03', 'HALDIA MUNICIPALITY', '1402'),
('m04', 'EGRA MUNICIPALITY', '1404'),
('m05', 'PANSKURA MUNICIPALITY', '1401');

-- --------------------------------------------------------

--
-- Table structure for table `cast`
--

CREATE TABLE IF NOT EXISTS `cast` (
  `Code` varchar(10) DEFAULT NULL,
  `Desc` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cast`
--

INSERT INTO `cast` (`Code`, `Desc`) VALUES
('01', 'SC'),
('02', 'ST'),
('03', 'OBC Category-A'),
('04', 'OBC Category-B'),
('05', 'Unreserved');

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
  PRIMARY KEY (`PostCode`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `post`
--

INSERT INTO `post` (`PostCode`, `PostName`, `SlNo`, `written`, `PI`, `abbr`) VALUES
('01', 'Social Worker', 1, NULL, NULL, 'DCPS/SW'),
('02', 'Counsellor', 1, NULL, NULL, 'DCPS/CSL'),
('03', 'Data Analyst', 1, NULL, NULL, 'DCPS/DA');

-- --------------------------------------------------------

--
-- Table structure for table `sex`
--

CREATE TABLE IF NOT EXISTS `sex` (
  `Code` varchar(2) NOT NULL DEFAULT '',
  `Gender` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`Code`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sex`
--

INSERT INTO `sex` (`Code`, `Gender`) VALUES
('01', 'Male'),
('02', 'Female'),
('03', 'Other');

-- --------------------------------------------------------

--
-- Table structure for table `state`
--

CREATE TABLE IF NOT EXISTS `state` (
  `Code` varchar(2) NOT NULL,
  `StateName` varchar(50) NOT NULL,
  PRIMARY KEY (`Code`)
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

--
-- Dumping data for table `subdivision`
--

INSERT INTO `subdivision` (`sdiv_cd`, `subdiv`) VALUES
('1401', 'TAMLUK'),
('1402', 'HALDIA'),
('1403', 'CONTAI'),
('1404', 'EGRA'),
('1405', 'Other');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
