-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Oct 07, 2014 at 07:44 PM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `justplay`
--

-- --------------------------------------------------------

--
-- Table structure for table `activities`
--

CREATE TABLE IF NOT EXISTS `activities` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `capacity` int(11) NOT NULL,
  `sport` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `location` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `date_from` datetime NOT NULL,
  `date_to` datetime NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=101 ;

--
-- Dumping data for table `activities`
--

INSERT INTO `activities` (`id`, `user_id`, `description`, `capacity`, `sport`, `location`, `date_from`, `date_to`, `created_at`, `updated_at`) VALUES
(1, 12, 'Cupiditate officia repellendus voluptatem repudiandae qui rerum quibusdam eum recusandae consequuntur deserunt veniam sed a facere tempore ratione magnam.', 16, 'Tennis', 'Attic', '2014-10-10 13:39:20', '2014-10-10 13:39:20', '2014-10-07 21:39:20', '2014-10-07 21:39:20'),
(2, 17, 'Rerum nemo in placeat molestias dolores rerum deleniti deserunt vel id quos sit consequuntur quisquam cumque et corrupti magnam laborum veniam consequuntur.', 8, 'Badminton', 'Teaching studio', '2014-10-10 13:39:20', '2014-10-10 13:39:20', '2014-10-07 21:39:20', '2014-10-07 21:39:20'),
(3, 10, 'Voluptate enim non neque libero aliquam qui rerum velit voluptatem eius numquam ipsa earum ut.', 8, 'Table Tennis', 'Weight room', '2014-10-12 13:39:20', '2014-10-12 13:39:20', '2014-10-07 21:39:20', '2014-10-07 21:39:20'),
(4, 1, 'Aliquid tenetur repellat vitae voluptates officia aspernatur reprehenderit deserunt voluptas qui.', 6, 'Squash', 'Weight room', '2014-10-11 13:39:20', '2014-10-11 13:39:20', '2014-10-07 21:39:20', '2014-10-07 21:39:20'),
(5, 21, 'Praesentium ut provident et illum alias culpa rerum blanditiis assumenda adipisci ut deserunt atque ut minus magnam maxime quam rerum.', 2, 'Badminton', 'Gym', '2014-10-09 13:39:20', '2014-10-09 13:39:20', '2014-10-07 21:39:20', '2014-10-07 21:39:20'),
(6, 11, 'Qui amet in reprehenderit ducimus at rerum rerum debitis deleniti nihil corporis mollitia.', 9, 'Squash', 'Attic', '2014-10-11 13:39:20', '2014-10-11 13:39:20', '2014-10-07 21:39:20', '2014-10-07 21:39:20'),
(7, 4, 'Ipsum placeat doloremque soluta ut maxime quis voluptatem blanditiis et omnis est modi voluptatibus suscipit minus eaque et et dolorem.', 8, 'Tennis', 'Valley', '2014-10-09 13:39:20', '2014-10-09 13:39:20', '2014-10-07 21:39:20', '2014-10-07 21:39:20'),
(8, 5, 'Sequi nemo et impedit veritatis rem tempore consequatur rerum enim magni rerum quod omnis doloremque.', 2, 'Table Tennis', 'Gym', '2014-10-11 13:39:20', '2014-10-11 13:39:20', '2014-10-07 21:39:20', '2014-10-07 21:39:20'),
(9, 17, 'Adipisci debitis enim qui totam unde quod quo velit voluptate quo.', 17, 'Squash', 'Gym', '2014-10-10 13:39:20', '2014-10-10 13:39:20', '2014-10-07 21:39:20', '2014-10-07 21:39:20'),
(10, 24, 'Odit rem eligendi voluptatibus enim non a sed fuga consequuntur inventore enim quae totam qui pariatur impedit aperiam error quibusdam aut omnis.', 15, 'Tennis', 'Weight room', '2014-10-09 13:39:20', '2014-10-09 13:39:20', '2014-10-07 21:39:20', '2014-10-07 21:39:20'),
(11, 1, 'Sit sint dolores minima omnis nobis molestias recusandae nostrum quam ut earum culpa vel tempora et ut voluptate veritatis qui.', 4, 'Table Tennis', 'Gym', '2014-10-09 13:39:20', '2014-10-09 13:39:20', '2014-10-07 21:39:20', '2014-10-07 21:39:20'),
(12, 6, 'Soluta perferendis temporibus expedita vel qui maxime omnis quo quia aut facere odio sint.', 10, 'Squash', 'Weight room', '2014-10-09 13:39:20', '2014-10-09 13:39:20', '2014-10-07 21:39:20', '2014-10-07 21:39:20'),
(13, 14, 'Autem minus nisi rerum voluptas expedita magnam nulla alias quisquam sunt temporibus officia neque velit consequatur recusandae.', 4, 'Badminton', 'Teaching studio', '2014-10-09 13:39:20', '2014-10-09 13:39:20', '2014-10-07 21:39:20', '2014-10-07 21:39:20'),
(14, 12, 'Ipsa distinctio sed minima quis velit adipisci ut sit.', 18, 'Tennis', 'Gym', '2014-10-12 13:39:20', '2014-10-12 13:39:20', '2014-10-07 21:39:20', '2014-10-07 21:39:20'),
(15, 10, 'Voluptas rerum ipsa accusantium a iusto quia voluptatem totam doloribus quibusdam eum repellendus.', 9, 'Tennis', 'Weight room', '2014-10-10 13:39:20', '2014-10-10 13:39:20', '2014-10-07 21:39:20', '2014-10-07 21:39:20'),
(16, 7, 'Vel facere autem dignissimos et vel porro eveniet tempore veniam ut architecto nesciunt accusamus quisquam ut quaerat non explicabo quo fugit at pariatur incidunt ut.', 15, 'Badminton', 'Attic', '2014-10-09 13:39:20', '2014-10-09 13:39:20', '2014-10-07 21:39:20', '2014-10-07 21:39:20'),
(17, 18, 'Non doloremque quam aut deleniti esse ex ullam voluptatem deserunt nihil cumque fuga ad et culpa harum doloribus repudiandae recusandae qui occaecati.', 7, 'Tennis', 'Teaching studio', '2014-10-11 13:39:20', '2014-10-11 13:39:20', '2014-10-07 21:39:20', '2014-10-07 21:39:20'),
(18, 19, 'Est ipsum qui rerum voluptas reiciendis doloremque cupiditate quia cumque.', 17, 'Tennis', 'TPASC', '2014-10-09 13:39:20', '2014-10-09 13:39:20', '2014-10-07 21:39:20', '2014-10-07 21:39:20'),
(19, 4, 'Eius ex quam veritatis enim temporibus cupiditate sit doloremque velit aliquam dolore vero suscipit maiores.', 7, 'Tennis', 'Valley', '2014-10-11 13:39:20', '2014-10-11 13:39:20', '2014-10-07 21:39:20', '2014-10-07 21:39:20'),
(20, 19, 'Quasi occaecati quo aut dolor cupiditate omnis aut eligendi magni facere aut ut error aliquid expedita ipsum.', 13, 'Squash', 'Weight room', '2014-10-11 13:39:20', '2014-10-11 13:39:20', '2014-10-07 21:39:20', '2014-10-07 21:39:20'),
(21, 20, 'Sapiente est quo et ut aut ipsum ad.', 5, 'Tennis', 'TPASC', '2014-10-11 13:39:20', '2014-10-11 13:39:20', '2014-10-07 21:39:20', '2014-10-07 21:39:20'),
(22, 2, 'Aut mollitia nulla exercitationem placeat velit dolore aspernatur neque sit est dolor non.', 4, 'Squash', 'TPASC', '2014-10-12 13:39:20', '2014-10-12 13:39:20', '2014-10-07 21:39:20', '2014-10-07 21:39:20'),
(23, 18, 'Ut ratione quis qui fugiat rerum vitae corporis esse qui earum corporis rerum sit qui.', 10, 'Table Tennis', 'Weight room', '2014-10-12 13:39:20', '2014-10-12 13:39:20', '2014-10-07 21:39:20', '2014-10-07 21:39:20'),
(24, 19, 'Sed sint placeat ex est similique sequi et veritatis.', 10, 'Table Tennis', 'Attic', '2014-10-12 13:39:20', '2014-10-12 13:39:20', '2014-10-07 21:39:20', '2014-10-07 21:39:20'),
(25, 24, 'Odio molestiae qui ad soluta necessitatibus fugiat et vel omnis recusandae rerum quo iure nostrum rerum qui error.', 7, 'Badminton', 'Teaching studio', '2014-10-12 13:39:20', '2014-10-12 13:39:20', '2014-10-07 21:39:20', '2014-10-07 21:39:20'),
(26, 7, 'Optio modi quo enim aut ut doloribus dolores cupiditate sit minus est voluptatem maxime sit et consequatur totam nemo eum.', 18, 'Badminton', 'Teaching studio', '2014-10-11 13:39:20', '2014-10-11 13:39:20', '2014-10-07 21:39:20', '2014-10-07 21:39:20'),
(27, 24, 'Suscipit animi quaerat assumenda rerum corporis voluptatem iure veritatis repellat ducimus voluptas.', 3, 'Badminton', 'Teaching studio', '2014-10-10 13:39:20', '2014-10-10 13:39:20', '2014-10-07 21:39:20', '2014-10-07 21:39:20'),
(28, 21, 'Qui sunt maxime quia temporibus est perferendis quaerat sit sunt est blanditiis amet nulla voluptas quis vero.', 2, 'Badminton', 'Attic', '2014-10-11 13:39:21', '2014-10-11 13:39:21', '2014-10-07 21:39:21', '2014-10-07 21:39:21'),
(29, 20, 'Sunt aperiam mollitia et nihil et vel similique et delectus soluta dolore nisi maiores facere nemo veritatis quo maiores dolores.', 10, 'Squash', 'Attic', '2014-10-10 13:39:21', '2014-10-10 13:39:21', '2014-10-07 21:39:21', '2014-10-07 21:39:21'),
(30, 15, 'Voluptas nulla ipsa nam vero aliquam voluptatem ab optio saepe in aut totam sapiente.', 11, 'Squash', 'Attic', '2014-10-09 13:39:21', '2014-10-09 13:39:21', '2014-10-07 21:39:21', '2014-10-07 21:39:21'),
(31, 9, 'Impedit dolore cumque quaerat aperiam ratione ad numquam sint deserunt et minima blanditiis et facilis fugiat qui quae nulla dolore esse.', 16, 'Squash', 'Attic', '2014-10-11 13:39:21', '2014-10-11 13:39:21', '2014-10-07 21:39:21', '2014-10-07 21:39:21'),
(32, 24, 'Eius qui quibusdam repellat molestias autem autem.', 13, 'Squash', 'TPASC', '2014-10-10 13:39:21', '2014-10-10 13:39:21', '2014-10-07 21:39:21', '2014-10-07 21:39:21'),
(33, 14, 'Et autem voluptates error ut autem atque rem temporibus et autem est.', 4, 'Table Tennis', 'Gym', '2014-10-11 13:39:21', '2014-10-11 13:39:21', '2014-10-07 21:39:21', '2014-10-07 21:39:21'),
(34, 20, 'Repudiandae pariatur vel similique aut assumenda exercitationem perferendis aliquid.', 2, 'Tennis', 'Weight room', '2014-10-12 13:39:21', '2014-10-12 13:39:21', '2014-10-07 21:39:21', '2014-10-07 21:39:21'),
(35, 19, 'Accusantium eos reiciendis velit unde inventore velit reiciendis.', 16, 'Badminton', 'Teaching studio', '2014-10-11 13:39:21', '2014-10-11 13:39:21', '2014-10-07 21:39:21', '2014-10-07 21:39:21'),
(36, 17, 'Consequatur alias nostrum occaecati voluptates rerum quidem.', 19, 'Table Tennis', 'Gym', '2014-10-12 13:39:21', '2014-10-12 13:39:21', '2014-10-07 21:39:21', '2014-10-07 21:39:21'),
(37, 21, 'Dolore sunt dolorem sed eum voluptates consectetur sit dolorum repellat praesentium eos.', 5, 'Squash', 'Valley', '2014-10-12 13:39:21', '2014-10-12 13:39:21', '2014-10-07 21:39:21', '2014-10-07 21:39:21'),
(38, 5, 'Qui occaecati omnis sint possimus tenetur repudiandae omnis rerum saepe omnis quia a nisi id rerum vel qui.', 4, 'Squash', 'Weight room', '2014-10-10 13:39:21', '2014-10-10 13:39:21', '2014-10-07 21:39:21', '2014-10-07 21:39:21'),
(39, 15, 'Inventore repellat illo ipsum accusamus minus voluptas enim repellendus blanditiis consectetur sunt iusto.', 14, 'Badminton', 'Valley', '2014-10-10 13:39:21', '2014-10-10 13:39:21', '2014-10-07 21:39:21', '2014-10-07 21:39:21'),
(40, 2, 'Est voluptas architecto inventore adipisci possimus aliquid magnam velit quis sint.', 8, 'Table Tennis', 'Attic', '2014-10-11 13:39:21', '2014-10-11 13:39:21', '2014-10-07 21:39:21', '2014-10-07 21:39:21'),
(41, 21, 'Earum aperiam optio vero ex optio voluptates tempora suscipit recusandae voluptatem et voluptate nihil quidem temporibus sint.', 3, 'Badminton', 'Valley', '2014-10-10 13:39:21', '2014-10-10 13:39:21', '2014-10-07 21:39:21', '2014-10-07 21:39:21'),
(42, 14, 'Ab sequi eius nulla et nam et facere dicta eos laborum natus modi modi at commodi at aut maiores omnis animi ut distinctio accusamus nostrum mollitia vel.', 14, 'Squash', 'Gym', '2014-10-10 13:39:21', '2014-10-10 13:39:21', '2014-10-07 21:39:21', '2014-10-07 21:39:21'),
(43, 19, 'Repudiandae aspernatur animi accusantium harum minima accusamus aliquid nam vel vero.', 13, 'Table Tennis', 'Gym', '2014-10-10 13:39:21', '2014-10-10 13:39:21', '2014-10-07 21:39:21', '2014-10-07 21:39:21'),
(44, 15, 'Reiciendis amet quas et officia iusto ipsum unde laboriosam voluptatem quis in ut corporis labore quis voluptatem quaerat minus.', 13, 'Table Tennis', 'Weight room', '2014-10-09 13:39:21', '2014-10-09 13:39:21', '2014-10-07 21:39:21', '2014-10-07 21:39:21'),
(45, 4, 'Quis sed temporibus vel cumque nihil aut sint ut qui id alias est.', 14, 'Badminton', 'Gym', '2014-10-12 13:39:21', '2014-10-12 13:39:21', '2014-10-07 21:39:21', '2014-10-07 21:39:21'),
(46, 4, 'Non aspernatur labore sint ad qui debitis sed aut ab assumenda doloremque velit et quia eum cum nesciunt commodi dolor.', 7, 'Badminton', 'Valley', '2014-10-12 13:39:21', '2014-10-12 13:39:21', '2014-10-07 21:39:21', '2014-10-07 21:39:21'),
(47, 17, 'Sint perspiciatis maxime eveniet rem itaque alias dolores minima omnis eius qui sapiente.', 7, 'Tennis', 'TPASC', '2014-10-10 13:39:21', '2014-10-10 13:39:21', '2014-10-07 21:39:21', '2014-10-07 21:39:21'),
(48, 9, 'Necessitatibus odit maiores aperiam quae corrupti qui quo vitae deleniti autem rerum vitae rerum atque sapiente porro sequi.', 20, 'Squash', 'Teaching studio', '2014-10-11 13:39:21', '2014-10-11 13:39:21', '2014-10-07 21:39:21', '2014-10-07 21:39:21'),
(49, 25, 'Voluptas voluptatem dolorum et cum quia quis dolor veritatis omnis optio quasi est tenetur quos vel tempore.', 8, 'Table Tennis', 'Valley', '2014-10-11 13:39:21', '2014-10-11 13:39:21', '2014-10-07 21:39:21', '2014-10-07 21:39:21'),
(50, 20, 'Et illum praesentium iusto ut ipsa sint tempore et aut veniam facere labore quis ullam sunt excepturi.', 20, 'Table Tennis', 'Teaching studio', '2014-10-10 13:39:21', '2014-10-10 13:39:21', '2014-10-07 21:39:21', '2014-10-07 21:39:21'),
(51, 5, 'Enim accusamus asperiores unde magnam omnis impedit qui quas iste est cum enim et.', 17, 'Badminton', 'TPASC', '2014-10-11 13:39:21', '2014-10-11 13:39:21', '2014-10-07 21:39:21', '2014-10-07 21:39:21'),
(52, 21, 'Odio dolores et ut ea soluta quis quia enim ducimus sed dolores sapiente repudiandae ut est ipsum provident asperiores iste explicabo.', 6, 'Table Tennis', 'TPASC', '2014-10-11 13:39:21', '2014-10-11 13:39:21', '2014-10-07 21:39:21', '2014-10-07 21:39:21'),
(53, 25, 'Voluptatem esse aut aut quisquam voluptas autem sequi necessitatibus iusto molestiae minima eos.', 3, 'Table Tennis', 'Teaching studio', '2014-10-10 13:39:21', '2014-10-10 13:39:21', '2014-10-07 21:39:21', '2014-10-07 21:39:21'),
(54, 19, 'Doloremque dolores et et qui voluptatem sequi sapiente ab et ex dolorem.', 7, 'Squash', 'Valley', '2014-10-09 13:39:21', '2014-10-09 13:39:21', '2014-10-07 21:39:21', '2014-10-07 21:39:21'),
(55, 21, 'Id molestiae assumenda iste perspiciatis nihil sapiente unde fuga et et assumenda.', 19, 'Badminton', 'Attic', '2014-10-12 13:39:21', '2014-10-12 13:39:21', '2014-10-07 21:39:21', '2014-10-07 21:39:21'),
(56, 2, 'Est optio dolor quos omnis velit voluptatem id quod facilis.', 15, 'Squash', 'Gym', '2014-10-12 13:39:21', '2014-10-12 13:39:21', '2014-10-07 21:39:21', '2014-10-07 21:39:21'),
(57, 8, 'Consequatur repudiandae voluptatum dolorem assumenda ut rerum ut reiciendis occaecati quaerat voluptate similique hic.', 6, 'Squash', 'Gym', '2014-10-11 13:39:21', '2014-10-11 13:39:21', '2014-10-07 21:39:21', '2014-10-07 21:39:21'),
(58, 20, 'Vel officia voluptates voluptatibus tempore distinctio quae aperiam ab ea quidem est eveniet.', 6, 'Table Tennis', 'Weight room', '2014-10-11 13:39:21', '2014-10-11 13:39:21', '2014-10-07 21:39:21', '2014-10-07 21:39:21'),
(59, 10, 'Adipisci sit quasi quo debitis tenetur enim soluta sit.', 15, 'Squash', 'Gym', '2014-10-11 13:39:21', '2014-10-11 13:39:21', '2014-10-07 21:39:21', '2014-10-07 21:39:21'),
(60, 16, 'Est ullam nesciunt vero necessitatibus fugiat qui provident mollitia deleniti et ut delectus est magni est quisquam doloremque possimus.', 4, 'Tennis', 'Weight room', '2014-10-11 13:39:21', '2014-10-11 13:39:21', '2014-10-07 21:39:21', '2014-10-07 21:39:21'),
(61, 15, 'Quam omnis sint laboriosam saepe eum rerum inventore deleniti magni eveniet.', 15, 'Table Tennis', 'Attic', '2014-10-11 13:39:21', '2014-10-11 13:39:21', '2014-10-07 21:39:21', '2014-10-07 21:39:21'),
(62, 6, 'Reprehenderit nulla et adipisci eum officiis eius velit quam qui eius aut rerum est nesciunt voluptatibus.', 8, 'Squash', 'TPASC', '2014-10-11 13:39:21', '2014-10-11 13:39:21', '2014-10-07 21:39:21', '2014-10-07 21:39:21'),
(63, 8, 'Atque consequatur quos esse fuga repudiandae deleniti minima et commodi reprehenderit qui dolores ex.', 18, 'Badminton', 'Gym', '2014-10-10 13:39:21', '2014-10-10 13:39:21', '2014-10-07 21:39:21', '2014-10-07 21:39:21'),
(64, 12, 'Qui natus sed nulla et doloribus ipsum expedita ut iusto ratione velit distinctio eum deleniti et ducimus.', 17, 'Table Tennis', 'Teaching studio', '2014-10-11 13:39:21', '2014-10-11 13:39:21', '2014-10-07 21:39:21', '2014-10-07 21:39:21'),
(65, 25, 'Iure qui saepe aut at inventore id et doloribus.', 19, 'Tennis', 'Teaching studio', '2014-10-10 13:39:21', '2014-10-10 13:39:21', '2014-10-07 21:39:21', '2014-10-07 21:39:21'),
(66, 20, 'Nemo sit iusto aliquid inventore ab adipisci iste a beatae sint sed porro sed molestias autem architecto.', 14, 'Badminton', 'Gym', '2014-10-10 13:39:21', '2014-10-10 13:39:21', '2014-10-07 21:39:21', '2014-10-07 21:39:21'),
(67, 13, 'Veritatis eveniet eveniet accusantium vel consequatur laudantium aut aut est autem aspernatur vel iusto at quod iste facilis placeat expedita ab dolores velit eaque ab laudantium libero eveniet.', 11, 'Tennis', 'Gym', '2014-10-12 13:39:21', '2014-10-12 13:39:21', '2014-10-07 21:39:21', '2014-10-07 21:39:21'),
(68, 5, 'Et perspiciatis repellendus quibusdam molestiae maxime itaque eius saepe autem provident ea quo porro ea.', 11, 'Badminton', 'Valley', '2014-10-09 13:39:21', '2014-10-09 13:39:21', '2014-10-07 21:39:21', '2014-10-07 21:39:21'),
(69, 6, 'Ratione qui accusantium accusantium voluptatem ut doloremque enim labore repellendus ut maiores necessitatibus.', 16, 'Tennis', 'Valley', '2014-10-12 13:39:21', '2014-10-12 13:39:21', '2014-10-07 21:39:21', '2014-10-07 21:39:21'),
(70, 20, 'Provident ipsum excepturi facere iusto fugit facilis aut vel dolore autem nostrum aliquid.', 15, 'Badminton', 'Teaching studio', '2014-10-10 13:39:21', '2014-10-10 13:39:21', '2014-10-07 21:39:21', '2014-10-07 21:39:21'),
(71, 10, 'Sit voluptas optio et voluptas id deleniti vel similique quia velit non cupiditate perferendis.', 8, 'Badminton', 'Gym', '2014-10-11 13:39:21', '2014-10-11 13:39:21', '2014-10-07 21:39:21', '2014-10-07 21:39:21'),
(72, 21, 'Assumenda nostrum laboriosam nemo enim aspernatur ut facere quam ex perspiciatis magni atque possimus ut iusto a.', 11, 'Squash', 'TPASC', '2014-10-12 13:39:21', '2014-10-12 13:39:21', '2014-10-07 21:39:21', '2014-10-07 21:39:21'),
(73, 9, 'Maiores a ad excepturi non cum qui pariatur corrupti sit quo maxime iste.', 15, 'Squash', 'Valley', '2014-10-10 13:39:21', '2014-10-10 13:39:21', '2014-10-07 21:39:21', '2014-10-07 21:39:21'),
(74, 1, 'Odio ad sed et unde aliquam minus non nesciunt molestiae explicabo ab deleniti at similique culpa consequatur aliquid ut id quo repellat aut quos.', 11, 'Squash', 'Attic', '2014-10-11 13:39:21', '2014-10-11 13:39:21', '2014-10-07 21:39:21', '2014-10-07 21:39:21'),
(75, 21, 'Ut placeat officia qui tenetur earum voluptatem omnis assumenda atque qui porro sed in odit quam.', 10, 'Table Tennis', 'TPASC', '2014-10-10 13:39:21', '2014-10-10 13:39:21', '2014-10-07 21:39:21', '2014-10-07 21:39:21'),
(76, 22, 'Quis libero eveniet enim dolorem quibusdam velit eum in veritatis vel ipsa voluptatem placeat sunt.', 13, 'Table Tennis', 'Gym', '2014-10-09 13:39:21', '2014-10-09 13:39:21', '2014-10-07 21:39:21', '2014-10-07 21:39:21'),
(77, 3, 'Et illum at atque aliquam velit quia iure officia veritatis aut et qui quis officiis sint consequatur sapiente.', 12, 'Tennis', 'Weight room', '2014-10-11 13:39:21', '2014-10-11 13:39:21', '2014-10-07 21:39:21', '2014-10-07 21:39:21'),
(78, 19, 'Earum dolores nostrum et quisquam tempore rem rerum rerum quos aut ipsum laboriosam consequatur maxime quas.', 13, 'Badminton', 'Teaching studio', '2014-10-12 13:39:22', '2014-10-12 13:39:22', '2014-10-07 21:39:22', '2014-10-07 21:39:22'),
(79, 8, 'Qui dolorem magni maiores aut quia expedita praesentium veniam temporibus rem.', 12, 'Squash', 'Weight room', '2014-10-11 13:39:22', '2014-10-11 13:39:22', '2014-10-07 21:39:22', '2014-10-07 21:39:22'),
(80, 9, 'Animi est adipisci dolores soluta voluptatem odit blanditiis est cupiditate atque est numquam consectetur eius ea velit ea ut.', 4, 'Squash', 'Valley', '2014-10-10 13:39:22', '2014-10-10 13:39:22', '2014-10-07 21:39:22', '2014-10-07 21:39:22'),
(81, 16, 'Aut animi nobis excepturi hic facere eaque quo officiis incidunt autem quos aut occaecati commodi tempora voluptas nihil exercitationem id animi quo voluptatum praesentium rerum.', 17, 'Tennis', 'Weight room', '2014-10-09 13:39:22', '2014-10-09 13:39:22', '2014-10-07 21:39:22', '2014-10-07 21:39:22'),
(82, 19, 'Rerum saepe quaerat ea est ipsum eveniet non et earum voluptas quis.', 2, 'Badminton', 'Gym', '2014-10-11 13:39:22', '2014-10-11 13:39:22', '2014-10-07 21:39:22', '2014-10-07 21:39:22'),
(83, 17, 'Modi vero sequi quidem fugiat non cumque facere ipsum occaecati dolores quis debitis omnis et.', 17, 'Badminton', 'Attic', '2014-10-11 13:39:22', '2014-10-11 13:39:22', '2014-10-07 21:39:22', '2014-10-07 21:39:22'),
(84, 20, 'Expedita ea ut harum eos voluptatem eos maxime autem impedit voluptates veniam aut quis aut a pariatur quia consequatur libero sit culpa minus in.', 16, 'Squash', 'TPASC', '2014-10-11 13:39:22', '2014-10-11 13:39:22', '2014-10-07 21:39:22', '2014-10-07 21:39:22'),
(85, 14, 'Enim magnam quia ex sunt iste quas cumque numquam commodi sint eos rerum eum sint.', 8, 'Squash', 'Valley', '2014-10-12 13:39:22', '2014-10-12 13:39:22', '2014-10-07 21:39:22', '2014-10-07 21:39:22'),
(86, 8, 'Voluptate voluptas labore dolor sint delectus nam sapiente fugiat ut voluptas.', 8, 'Squash', 'Attic', '2014-10-09 13:39:22', '2014-10-09 13:39:22', '2014-10-07 21:39:22', '2014-10-07 21:39:22'),
(87, 8, 'Placeat veniam id consequatur sint quia quia consequuntur autem explicabo et recusandae recusandae ut.', 17, 'Squash', 'Gym', '2014-10-10 13:39:22', '2014-10-10 13:39:22', '2014-10-07 21:39:22', '2014-10-07 21:39:22'),
(88, 7, 'Dicta tempora ad quis ipsa aliquid delectus quos quisquam voluptate in blanditiis.', 17, 'Badminton', 'Weight room', '2014-10-11 13:39:22', '2014-10-11 13:39:22', '2014-10-07 21:39:22', '2014-10-07 21:39:22'),
(89, 1, 'Facilis laboriosam eligendi repellat sed et architecto ipsum animi expedita.', 11, 'Badminton', 'Teaching studio', '2014-10-10 13:39:22', '2014-10-10 13:39:22', '2014-10-07 21:39:22', '2014-10-07 21:39:22'),
(90, 5, 'Et qui quasi distinctio soluta officiis dolores enim quo architecto pariatur qui ut impedit ut at similique veritatis ipsa nesciunt perferendis laudantium quo.', 11, 'Badminton', 'Attic', '2014-10-10 13:39:22', '2014-10-10 13:39:22', '2014-10-07 21:39:22', '2014-10-07 21:39:22'),
(91, 4, 'Quo consequatur ut ad repudiandae quam culpa eligendi labore consequuntur possimus delectus enim esse ut.', 16, 'Tennis', 'Weight room', '2014-10-12 13:39:22', '2014-10-12 13:39:22', '2014-10-07 21:39:22', '2014-10-07 21:39:22'),
(92, 8, 'Dolor illo ad occaecati iure sunt veritatis nam dolores quo et.', 3, 'Badminton', 'TPASC', '2014-10-10 13:39:22', '2014-10-10 13:39:22', '2014-10-07 21:39:22', '2014-10-07 21:39:22'),
(93, 19, 'Eos qui sit quae commodi fugit id sint possimus optio quis ut sit.', 7, 'Badminton', 'Weight room', '2014-10-10 13:39:22', '2014-10-10 13:39:22', '2014-10-07 21:39:22', '2014-10-07 21:39:22'),
(94, 19, 'Totam error molestiae debitis quas sequi asperiores sed.', 3, 'Badminton', 'Gym', '2014-10-11 13:39:22', '2014-10-11 13:39:22', '2014-10-07 21:39:22', '2014-10-07 21:39:22'),
(95, 16, 'Voluptas voluptatum qui dolore necessitatibus qui nostrum dolor aut molestiae.', 8, 'Table Tennis', 'Teaching studio', '2014-10-10 13:39:22', '2014-10-10 13:39:22', '2014-10-07 21:39:22', '2014-10-07 21:39:22'),
(96, 23, 'Et quam ut distinctio nisi eos fugit quos quis consequatur autem labore error rerum.', 18, 'Squash', 'Weight room', '2014-10-12 13:39:22', '2014-10-12 13:39:22', '2014-10-07 21:39:22', '2014-10-07 21:39:22'),
(97, 21, 'Dignissimos est culpa nam ducimus praesentium et velit repellat blanditiis consequatur.', 3, 'Table Tennis', 'Weight room', '2014-10-11 13:39:22', '2014-10-11 13:39:22', '2014-10-07 21:39:22', '2014-10-07 21:39:22'),
(98, 17, 'Et consequuntur cumque distinctio cupiditate qui adipisci est accusantium quibusdam neque.', 4, 'Squash', 'Valley', '2014-10-12 13:39:22', '2014-10-12 13:39:22', '2014-10-07 21:39:22', '2014-10-07 21:39:22'),
(99, 16, 'Necessitatibus in inventore vitae ad est dolores cum illo soluta maxime vitae inventore deserunt commodi tenetur quia inventore sed.', 14, 'Table Tennis', 'Attic', '2014-10-10 13:39:22', '2014-10-10 13:39:22', '2014-10-07 21:39:22', '2014-10-07 21:39:22'),
(100, 15, 'Quod sed omnis dignissimos beatae sit ad voluptatem facilis aliquid non dolores repudiandae.', 19, 'Table Tennis', 'Weight room', '2014-10-11 13:39:22', '2014-10-11 13:39:22', '2014-10-07 21:39:22', '2014-10-07 21:39:22');

-- --------------------------------------------------------

--
-- Table structure for table `activities_joined`
--

CREATE TABLE IF NOT EXISTS `activities_joined` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `activity_id` int(10) unsigned NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`),
  KEY `activities_joined_activity_id_foreign` (`activity_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=101 ;

--
-- Dumping data for table `activities_joined`
--

INSERT INTO `activities_joined` (`id`, `activity_id`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 15, 19, '2014-10-07 21:39:23', '2014-10-07 21:39:23'),
(2, 11, 20, '2014-10-07 21:39:23', '2014-10-07 21:39:23'),
(3, 5, 4, '2014-10-07 21:39:23', '2014-10-07 21:39:23'),
(4, 4, 2, '2014-10-07 21:39:23', '2014-10-07 21:39:23'),
(5, 9, 8, '2014-10-07 21:39:23', '2014-10-07 21:39:23'),
(6, 8, 16, '2014-10-07 21:39:23', '2014-10-07 21:39:23'),
(7, 20, 17, '2014-10-07 21:39:23', '2014-10-07 21:39:23'),
(8, 12, 15, '2014-10-07 21:39:23', '2014-10-07 21:39:23'),
(9, 19, 25, '2014-10-07 21:39:23', '2014-10-07 21:39:23'),
(10, 14, 13, '2014-10-07 21:39:23', '2014-10-07 21:39:23'),
(11, 24, 16, '2014-10-07 21:39:23', '2014-10-07 21:39:23'),
(12, 1, 12, '2014-10-07 21:39:23', '2014-10-07 21:39:23'),
(13, 15, 12, '2014-10-07 21:39:23', '2014-10-07 21:39:23'),
(14, 23, 3, '2014-10-07 21:39:23', '2014-10-07 21:39:23'),
(15, 11, 21, '2014-10-07 21:39:23', '2014-10-07 21:39:23'),
(16, 16, 13, '2014-10-07 21:39:23', '2014-10-07 21:39:23'),
(17, 16, 14, '2014-10-07 21:39:23', '2014-10-07 21:39:23'),
(18, 3, 7, '2014-10-07 21:39:23', '2014-10-07 21:39:23'),
(19, 24, 25, '2014-10-07 21:39:23', '2014-10-07 21:39:23'),
(20, 23, 12, '2014-10-07 21:39:23', '2014-10-07 21:39:23'),
(21, 15, 24, '2014-10-07 21:39:23', '2014-10-07 21:39:23'),
(22, 24, 18, '2014-10-07 21:39:23', '2014-10-07 21:39:23'),
(23, 7, 21, '2014-10-07 21:39:23', '2014-10-07 21:39:23'),
(24, 18, 2, '2014-10-07 21:39:23', '2014-10-07 21:39:23'),
(25, 6, 12, '2014-10-07 21:39:23', '2014-10-07 21:39:23'),
(26, 5, 4, '2014-10-07 21:39:23', '2014-10-07 21:39:23'),
(27, 4, 4, '2014-10-07 21:39:23', '2014-10-07 21:39:23'),
(28, 20, 2, '2014-10-07 21:39:23', '2014-10-07 21:39:23'),
(29, 8, 20, '2014-10-07 21:39:23', '2014-10-07 21:39:23'),
(30, 13, 10, '2014-10-07 21:39:23', '2014-10-07 21:39:23'),
(31, 9, 18, '2014-10-07 21:39:23', '2014-10-07 21:39:23'),
(32, 20, 6, '2014-10-07 21:39:23', '2014-10-07 21:39:23'),
(33, 14, 18, '2014-10-07 21:39:23', '2014-10-07 21:39:23'),
(34, 17, 4, '2014-10-07 21:39:23', '2014-10-07 21:39:23'),
(35, 15, 5, '2014-10-07 21:39:23', '2014-10-07 21:39:23'),
(36, 15, 7, '2014-10-07 21:39:23', '2014-10-07 21:39:23'),
(37, 18, 25, '2014-10-07 21:39:23', '2014-10-07 21:39:23'),
(38, 12, 4, '2014-10-07 21:39:23', '2014-10-07 21:39:23'),
(39, 16, 10, '2014-10-07 21:39:23', '2014-10-07 21:39:23'),
(40, 22, 24, '2014-10-07 21:39:23', '2014-10-07 21:39:23'),
(41, 15, 8, '2014-10-07 21:39:23', '2014-10-07 21:39:23'),
(42, 17, 5, '2014-10-07 21:39:23', '2014-10-07 21:39:23'),
(43, 6, 2, '2014-10-07 21:39:23', '2014-10-07 21:39:23'),
(44, 10, 1, '2014-10-07 21:39:23', '2014-10-07 21:39:23'),
(45, 22, 13, '2014-10-07 21:39:23', '2014-10-07 21:39:23'),
(46, 24, 1, '2014-10-07 21:39:23', '2014-10-07 21:39:23'),
(47, 4, 24, '2014-10-07 21:39:23', '2014-10-07 21:39:23'),
(48, 22, 7, '2014-10-07 21:39:23', '2014-10-07 21:39:23'),
(49, 8, 7, '2014-10-07 21:39:23', '2014-10-07 21:39:23'),
(50, 3, 9, '2014-10-07 21:39:23', '2014-10-07 21:39:23'),
(51, 3, 20, '2014-10-07 21:39:23', '2014-10-07 21:39:23'),
(52, 3, 10, '2014-10-07 21:39:23', '2014-10-07 21:39:23'),
(53, 18, 10, '2014-10-07 21:39:23', '2014-10-07 21:39:23'),
(54, 22, 25, '2014-10-07 21:39:23', '2014-10-07 21:39:23'),
(55, 22, 9, '2014-10-07 21:39:24', '2014-10-07 21:39:24'),
(56, 22, 5, '2014-10-07 21:39:24', '2014-10-07 21:39:24'),
(57, 20, 14, '2014-10-07 21:39:24', '2014-10-07 21:39:24'),
(58, 1, 16, '2014-10-07 21:39:24', '2014-10-07 21:39:24'),
(59, 5, 9, '2014-10-07 21:39:24', '2014-10-07 21:39:24'),
(60, 21, 10, '2014-10-07 21:39:24', '2014-10-07 21:39:24'),
(61, 8, 15, '2014-10-07 21:39:24', '2014-10-07 21:39:24'),
(62, 7, 1, '2014-10-07 21:39:24', '2014-10-07 21:39:24'),
(63, 21, 15, '2014-10-07 21:39:24', '2014-10-07 21:39:24'),
(64, 21, 18, '2014-10-07 21:39:24', '2014-10-07 21:39:24'),
(65, 25, 5, '2014-10-07 21:39:24', '2014-10-07 21:39:24'),
(66, 11, 24, '2014-10-07 21:39:24', '2014-10-07 21:39:24'),
(67, 13, 19, '2014-10-07 21:39:24', '2014-10-07 21:39:24'),
(68, 14, 24, '2014-10-07 21:39:24', '2014-10-07 21:39:24'),
(69, 15, 4, '2014-10-07 21:39:24', '2014-10-07 21:39:24'),
(70, 4, 5, '2014-10-07 21:39:24', '2014-10-07 21:39:24'),
(71, 25, 17, '2014-10-07 21:39:24', '2014-10-07 21:39:24'),
(72, 19, 20, '2014-10-07 21:39:24', '2014-10-07 21:39:24'),
(73, 22, 5, '2014-10-07 21:39:24', '2014-10-07 21:39:24'),
(74, 7, 11, '2014-10-07 21:39:24', '2014-10-07 21:39:24'),
(75, 1, 1, '2014-10-07 21:39:24', '2014-10-07 21:39:24'),
(76, 5, 2, '2014-10-07 21:39:24', '2014-10-07 21:39:24'),
(77, 15, 1, '2014-10-07 21:39:24', '2014-10-07 21:39:24'),
(78, 13, 11, '2014-10-07 21:39:24', '2014-10-07 21:39:24'),
(79, 9, 15, '2014-10-07 21:39:24', '2014-10-07 21:39:24'),
(80, 16, 13, '2014-10-07 21:39:24', '2014-10-07 21:39:24'),
(81, 13, 13, '2014-10-07 21:39:24', '2014-10-07 21:39:24'),
(82, 15, 24, '2014-10-07 21:39:24', '2014-10-07 21:39:24'),
(83, 19, 3, '2014-10-07 21:39:24', '2014-10-07 21:39:24'),
(84, 21, 21, '2014-10-07 21:39:24', '2014-10-07 21:39:24'),
(85, 9, 7, '2014-10-07 21:39:24', '2014-10-07 21:39:24'),
(86, 8, 19, '2014-10-07 21:39:24', '2014-10-07 21:39:24'),
(87, 24, 9, '2014-10-07 21:39:24', '2014-10-07 21:39:24'),
(88, 13, 20, '2014-10-07 21:39:24', '2014-10-07 21:39:24'),
(89, 21, 4, '2014-10-07 21:39:24', '2014-10-07 21:39:24'),
(90, 10, 15, '2014-10-07 21:39:24', '2014-10-07 21:39:24'),
(91, 18, 2, '2014-10-07 21:39:24', '2014-10-07 21:39:24'),
(92, 11, 5, '2014-10-07 21:39:24', '2014-10-07 21:39:24'),
(93, 20, 22, '2014-10-07 21:39:24', '2014-10-07 21:39:24'),
(94, 15, 5, '2014-10-07 21:39:24', '2014-10-07 21:39:24'),
(95, 20, 24, '2014-10-07 21:39:24', '2014-10-07 21:39:24'),
(96, 9, 18, '2014-10-07 21:39:24', '2014-10-07 21:39:24'),
(97, 23, 5, '2014-10-07 21:39:24', '2014-10-07 21:39:24'),
(98, 16, 8, '2014-10-07 21:39:24', '2014-10-07 21:39:24'),
(99, 23, 21, '2014-10-07 21:39:24', '2014-10-07 21:39:24'),
(100, 25, 3, '2014-10-07 21:39:24', '2014-10-07 21:39:24');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE IF NOT EXISTS `comments` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `activity_id` int(10) unsigned NOT NULL,
  `user_id` int(11) NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`),
  KEY `comments_activity_id_foreign` (`activity_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=26 ;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `activity_id`, `user_id`, `description`, `created_at`, `updated_at`) VALUES
(1, 7, 3, 'Aspernatur recusandae dolor nihil molestiae consequuntur officia error id omnis veniam numquam quia ad qui rerum rerum quod rerum qui nesciunt voluptatem dolore non ex in quaerat et.', '2014-10-07 21:39:22', '2014-10-07 21:39:22'),
(2, 20, 18, 'Voluptatibus et libero quae dignissimos ut sunt aut cupiditate consectetur quia dolorem eaque nisi aliquam.', '2014-10-07 21:39:22', '2014-10-07 21:39:22'),
(3, 15, 23, 'In fugit sint illum consequatur velit a in voluptatem quam necessitatibus necessitatibus repudiandae quaerat modi dolores repellendus perspiciatis eos aut voluptatem sed voluptate.', '2014-10-07 21:39:22', '2014-10-07 21:39:22'),
(4, 7, 19, 'Et a voluptatem explicabo blanditiis voluptas debitis recusandae adipisci aut qui est distinctio sequi autem accusantium.', '2014-10-07 21:39:22', '2014-10-07 21:39:22'),
(5, 7, 18, 'Est qui neque placeat nostrum enim blanditiis eos vel dolores dolor error quas quos beatae recusandae consequatur voluptatem aut tempore voluptatem rerum saepe aliquid quod et inventore odit repudiandae vel.', '2014-10-07 21:39:22', '2014-10-07 21:39:22'),
(6, 7, 14, 'Explicabo totam non ut aut consequatur corrupti atque qui facere optio.', '2014-10-07 21:39:22', '2014-10-07 21:39:22'),
(7, 10, 12, 'Explicabo in occaecati incidunt inventore aut excepturi nam perspiciatis aliquid adipisci soluta est est quibusdam doloribus deleniti quae.', '2014-10-07 21:39:22', '2014-10-07 21:39:22'),
(8, 16, 16, 'Nulla officiis odit sint sint qui temporibus molestiae quaerat illum eum velit nesciunt ut nobis ea ab.', '2014-10-07 21:39:22', '2014-10-07 21:39:22'),
(9, 10, 15, 'Sunt enim delectus molestiae adipisci vel perspiciatis vel repellat dolores quisquam fugiat aliquid dolore consequatur reprehenderit ipsum.', '2014-10-07 21:39:22', '2014-10-07 21:39:22'),
(10, 11, 3, 'Minus eius non accusamus recusandae excepturi adipisci saepe quae pariatur dolor sed quod hic a aut quisquam blanditiis impedit qui aliquam et non distinctio et tenetur eum est consequuntur dolor temporibus voluptatum aliquid mollitia est ut.', '2014-10-07 21:39:22', '2014-10-07 21:39:22'),
(11, 7, 5, 'Sequi et cumque sit omnis sit repellendus illum reiciendis enim voluptatem qui qui et suscipit laudantium porro aut.', '2014-10-07 21:39:22', '2014-10-07 21:39:22'),
(12, 6, 11, 'Officiis ut ut quia labore sunt pariatur ut sed est autem reprehenderit sit aut dolor id omnis voluptas ad repudiandae recusandae rerum aut doloremque dolor ab id explicabo eligendi quo qui praesentium mollitia.', '2014-10-07 21:39:22', '2014-10-07 21:39:22'),
(13, 24, 9, 'Illo omnis et qui consequatur aspernatur aut nostrum voluptatum repudiandae deleniti labore labore est nam accusantium culpa eligendi placeat alias distinctio optio sint veniam expedita voluptas dolor voluptatum et excepturi.', '2014-10-07 21:39:22', '2014-10-07 21:39:22'),
(14, 5, 5, 'Dolores officia quaerat qui recusandae incidunt non qui dolores et molestiae eos labore illo velit unde quia voluptas non ut atque eum aliquam commodi repudiandae error quod et voluptatem cupiditate quis voluptatem tempora omnis inventore.', '2014-10-07 21:39:22', '2014-10-07 21:39:22'),
(15, 7, 11, 'Blanditiis qui ipsa quis optio facilis tempore voluptas quae nulla voluptatem adipisci quaerat rerum sit dolores iste nostrum sit autem quod dolore.', '2014-10-07 21:39:22', '2014-10-07 21:39:22'),
(16, 16, 18, 'Vel nobis ut excepturi nobis sunt necessitatibus dolores dolor repellendus.', '2014-10-07 21:39:22', '2014-10-07 21:39:22'),
(17, 17, 6, 'Consequatur occaecati facilis et qui ut dignissimos.', '2014-10-07 21:39:22', '2014-10-07 21:39:22'),
(18, 24, 1, 'Debitis rerum unde distinctio aut quis tempora asperiores porro rerum repudiandae et quaerat qui.', '2014-10-07 21:39:22', '2014-10-07 21:39:22'),
(19, 24, 5, 'A fugit ut molestiae enim velit minus voluptatem tenetur consequatur cum sapiente velit ipsam recusandae vel aut dolores ipsam.', '2014-10-07 21:39:22', '2014-10-07 21:39:22'),
(20, 2, 12, 'Aut rerum quis aspernatur et sequi aut assumenda corporis doloribus id corrupti incidunt.', '2014-10-07 21:39:22', '2014-10-07 21:39:22'),
(21, 22, 21, 'Harum aut facere dolores ipsa mollitia et repudiandae dolorum esse aspernatur harum pariatur et.', '2014-10-07 21:39:22', '2014-10-07 21:39:22'),
(22, 16, 12, 'Et delectus odio sint eligendi facere illo molestiae ipsum nesciunt enim iure porro quia dignissimos sed modi dolorem.', '2014-10-07 21:39:22', '2014-10-07 21:39:22'),
(23, 7, 20, 'Enim aspernatur praesentium rerum nam numquam assumenda illo facere eum vel doloribus cumque qui mollitia eaque error quia optio.', '2014-10-07 21:39:22', '2014-10-07 21:39:22'),
(24, 5, 6, 'Reiciendis voluptatem omnis aut facilis consequatur cumque nihil quia quibusdam quidem accusantium voluptates autem tenetur.', '2014-10-07 21:39:23', '2014-10-07 21:39:23'),
(25, 8, 8, 'Libero vel debitis fugiat quia cumque quam recusandae quo temporibus omnis numquam impedit.', '2014-10-07 21:39:23', '2014-10-07 21:39:23');

-- --------------------------------------------------------

--
-- Table structure for table `friends`
--

CREATE TABLE IF NOT EXISTS `friends` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user1_id` int(11) NOT NULL,
  `user2_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=26 ;

--
-- Dumping data for table `friends`
--

INSERT INTO `friends` (`id`, `user1_id`, `user2_id`, `created_at`, `updated_at`) VALUES
(1, 7, 25, '2014-10-07 21:39:20', '2014-10-07 21:39:20'),
(2, 6, 15, '2014-10-07 21:39:20', '2014-10-07 21:39:20'),
(3, 9, 9, '2014-10-07 21:39:20', '2014-10-07 21:39:20'),
(4, 8, 23, '2014-10-07 21:39:20', '2014-10-07 21:39:20'),
(5, 8, 18, '2014-10-07 21:39:20', '2014-10-07 21:39:20'),
(6, 23, 17, '2014-10-07 21:39:20', '2014-10-07 21:39:20'),
(7, 20, 21, '2014-10-07 21:39:20', '2014-10-07 21:39:20'),
(8, 9, 8, '2014-10-07 21:39:20', '2014-10-07 21:39:20'),
(9, 20, 22, '2014-10-07 21:39:20', '2014-10-07 21:39:20'),
(10, 12, 21, '2014-10-07 21:39:20', '2014-10-07 21:39:20'),
(11, 25, 15, '2014-10-07 21:39:20', '2014-10-07 21:39:20'),
(12, 16, 17, '2014-10-07 21:39:20', '2014-10-07 21:39:20'),
(13, 10, 6, '2014-10-07 21:39:20', '2014-10-07 21:39:20'),
(14, 16, 22, '2014-10-07 21:39:20', '2014-10-07 21:39:20'),
(15, 17, 11, '2014-10-07 21:39:20', '2014-10-07 21:39:20'),
(16, 21, 20, '2014-10-07 21:39:20', '2014-10-07 21:39:20'),
(17, 23, 13, '2014-10-07 21:39:20', '2014-10-07 21:39:20'),
(18, 3, 13, '2014-10-07 21:39:20', '2014-10-07 21:39:20'),
(19, 17, 2, '2014-10-07 21:39:20', '2014-10-07 21:39:20'),
(20, 19, 11, '2014-10-07 21:39:20', '2014-10-07 21:39:20'),
(21, 2, 11, '2014-10-07 21:39:20', '2014-10-07 21:39:20'),
(22, 17, 13, '2014-10-07 21:39:20', '2014-10-07 21:39:20'),
(23, 18, 7, '2014-10-07 21:39:20', '2014-10-07 21:39:20'),
(24, 4, 7, '2014-10-07 21:39:20', '2014-10-07 21:39:20'),
(25, 16, 21, '2014-10-07 21:39:20', '2014-10-07 21:39:20');

-- --------------------------------------------------------

--
-- Table structure for table `groups`
--

CREATE TABLE IF NOT EXISTS `groups` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `permissions` text COLLATE utf8_unicode_ci,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`),
  UNIQUE KEY `groups_name_unique` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE IF NOT EXISTS `migrations` (
  `migration` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`migration`, `batch`) VALUES
('2012_12_06_225921_migration_cartalyst_sentry_install_users', 1),
('2012_12_06_225929_migration_cartalyst_sentry_install_groups', 1),
('2012_12_06_225945_migration_cartalyst_sentry_install_users_groups_pivot', 1),
('2012_12_06_225988_migration_cartalyst_sentry_install_throttle', 1),
('2014_06_19_025700_create_activities_table', 2),
('2014_06_19_030610_create_profiles_table', 2),
('2014_07_04_223740_create_comments_table', 2),
('2014_07_04_224151_create_friends_table', 2),
('2014_07_04_224525_create_notifications_friends_table', 2),
('2014_07_13_010651_add_username_field_to_users_table', 2),
('2014_07_20_052332_create_activities_joined_table', 2),
('2014_09_02_043529_create_notifications_activities_table', 2),
('2014_10_03_225516_create_activities_views_table', 2);

-- --------------------------------------------------------

--
-- Table structure for table `notifications_activities`
--

CREATE TABLE IF NOT EXISTS `notifications_activities` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `activity_id` int(10) unsigned DEFAULT NULL,
  `sub_type` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `from_id` int(11) NOT NULL,
  `to_id` int(11) NOT NULL,
  `details` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `is_read` tinyint(1) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`),
  KEY `notifications_activities_activity_id_foreign` (`activity_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=101 ;

--
-- Dumping data for table `notifications_activities`
--

INSERT INTO `notifications_activities` (`id`, `activity_id`, `sub_type`, `from_id`, `to_id`, `details`, `is_read`, `created_at`, `updated_at`) VALUES
(1, 16, 'activity_invite', 14, 19, 'Sequi et est voluptatem dolorem aliquam quam sint vel. Incidunt quis et pariatur.', 1, '2014-10-07 21:39:26', '2014-10-07 21:39:26'),
(2, 15, 'activity_comment', 4, 12, 'Porro in consequatur quas veniam est. Reprehenderit sed est doloremque aut et. Consequuntur quia harum enim omnis eaque.', 1, '2014-10-07 21:39:26', '2014-10-07 21:39:26'),
(3, 29, 'activity_invite', 21, 26, 'Et non consequuntur sed fugit repudiandae. Non autem iusto quae. Repudiandae iure rerum rerum omnis.', 0, '2014-10-07 21:39:26', '2014-10-07 21:39:26'),
(4, 8, 'activity_invite', 5, 10, 'Est occaecati quos voluptates sint rerum tenetur aut voluptas. Repellendus optio vitae quibusdam ipsam repudiandae optio error. Sit suscipit expedita aliquid deleniti laudantium qui voluptate.', 1, '2014-10-07 21:39:27', '2014-10-07 21:39:27'),
(5, 16, 'activity_comment', 4, 2, 'Repellat neque saepe consequatur numquam eius. Suscipit autem vero optio omnis omnis earum. Aut architecto doloremque et quia et qui debitis. Quia repellat aut sapiente consectetur sunt. Itaque quibusdam rem et unde dolorem est occaecati et. Ut exercitati', 0, '2014-10-07 21:39:27', '2014-10-07 21:39:27'),
(6, 27, 'activity_update', 25, 23, 'Ab mollitia quae velit pariatur qui et.', 0, '2014-10-07 21:39:27', '2014-10-07 21:39:27'),
(7, 20, 'activity_invite', 13, 21, 'Unde sint est corporis quis eum eum corporis.', 0, '2014-10-07 21:39:27', '2014-10-07 21:39:27'),
(8, 19, 'activity_invite', 14, 30, 'Et temporibus corporis amet ipsa autem voluptate. Aperiam ipsa quos asperiores eligendi. Explicabo quis tempora minima officia quasi cum.', 0, '2014-10-07 21:39:27', '2014-10-07 21:39:27'),
(9, 9, 'activity_comment', 23, 25, 'Nobis et voluptas ut fuga magnam deleniti impedit. Incidunt beatae nesciunt facilis ut vel ut sint. Eum voluptas voluptatem placeat qui minima corporis libero. Animi maiores libero itaque officia cum quia error laboriosam.', 0, '2014-10-07 21:39:27', '2014-10-07 21:39:27'),
(10, 3, 'activity_delete', 30, 24, 'Nulla ipsam eos iste impedit explicabo in quis.', 1, '2014-10-07 21:39:27', '2014-10-07 21:39:27'),
(11, 23, 'activity_comment', 22, 30, 'Voluptatem animi voluptas qui perferendis quia libero eaque. Saepe id sed dolores eum minima ad ipsa. Vitae sequi inventore quaerat atque est voluptatibus corporis magni. Voluptatem beatae natus aut doloremque.', 1, '2014-10-07 21:39:27', '2014-10-07 21:39:27'),
(12, 14, 'activity_invite', 25, 13, 'Et est ut nisi. Architecto aperiam quasi enim voluptate accusantium asperiores. Eaque laudantium in iure sed illo in incidunt sed.', 1, '2014-10-07 21:39:27', '2014-10-07 21:39:27'),
(13, 1, 'activity_comment', 17, 6, 'Quia perspiciatis id voluptas cumque quas. Necessitatibus quis dolores sint neque. Unde autem aperiam modi rem qui rerum perferendis. Ea eaque in voluptatem placeat numquam ea. Eveniet quaerat eveniet quas rem. A eligendi vel tempore qui aut ratione. Ut u', 0, '2014-10-07 21:39:27', '2014-10-07 21:39:27'),
(14, 11, 'activity_comment', 27, 22, 'Tenetur ipsam inventore maiores illo. Commodi explicabo suscipit voluptas dolores aspernatur aut tempore.', 1, '2014-10-07 21:39:27', '2014-10-07 21:39:27'),
(15, 15, 'activity_invite', 26, 30, 'Modi vitae enim aliquid eius et. Distinctio perferendis aut asperiores.', 1, '2014-10-07 21:39:27', '2014-10-07 21:39:27'),
(16, 29, 'activity_invite', 18, 28, 'Non sint vero est sed. Quo doloremque voluptate voluptatibus aut ut magnam sed voluptatem. Ipsam officia maiores qui. Dolor et dolores et asperiores.', 1, '2014-10-07 21:39:27', '2014-10-07 21:39:27'),
(17, 1, 'activity_join', 24, 13, 'Voluptatem quae quo eveniet non tempora omnis. Praesentium tempora similique provident sed est temporibus id dolorem. Voluptatibus amet consequatur sequi voluptate qui hic. Perspiciatis ut iusto est corrupti quis ea facere. Voluptas velit minima a nihil a', 0, '2014-10-07 21:39:27', '2014-10-07 21:39:27'),
(18, 28, 'activity_join', 24, 24, 'Veritatis atque odit perspiciatis rerum. Laudantium et ut ea est aut aspernatur et itaque. Error perspiciatis repudiandae eius qui et dignissimos mollitia.', 1, '2014-10-07 21:39:27', '2014-10-07 21:39:27'),
(19, 2, 'activity_comment', 30, 29, 'Sed dolor qui non consequatur voluptas. Amet assumenda exercitationem esse est neque tenetur illum quia.', 1, '2014-10-07 21:39:27', '2014-10-07 21:39:27'),
(20, 12, 'activity_update', 29, 20, 'Fuga aut quo iusto aspernatur. Aspernatur similique dolores et deserunt iste iste. Corrupti exercitationem laboriosam vel qui dolor. Ut est blanditiis et autem ut quaerat quisquam.', 1, '2014-10-07 21:39:27', '2014-10-07 21:39:27'),
(21, 16, 'activity_update', 21, 21, 'Vitae tenetur sed quo adipisci. Quidem magni voluptatem sed aut ea. Qui nisi similique qui aliquam velit.', 0, '2014-10-07 21:39:27', '2014-10-07 21:39:27'),
(22, 1, 'activity_invite', 29, 8, 'Itaque consequatur ab consequatur dolores et. Odit pariatur magni asperiores accusamus laudantium molestiae suscipit. Animi architecto est voluptate aperiam quibusdam asperiores dolores amet. Maiores sit ipsum eveniet dolor et dolorum. Accusamus temporibu', 0, '2014-10-07 21:39:27', '2014-10-07 21:39:27'),
(23, 23, 'activity_update', 14, 4, 'Quidem et est eligendi modi et voluptatem. Eveniet perspiciatis occaecati minima et enim. Est laborum laborum consequatur quisquam.', 0, '2014-10-07 21:39:27', '2014-10-07 21:39:27'),
(24, 30, 'activity_join', 6, 28, 'Adipisci placeat dolores omnis odio mollitia magnam voluptates. Commodi vel quaerat odio eaque ea et. Ullam occaecati voluptatem dolore inventore assumenda rerum sint.', 0, '2014-10-07 21:39:27', '2014-10-07 21:39:27'),
(25, 22, 'activity_update', 16, 10, 'Corrupti minus ratione molestias est expedita aut rem. Voluptatibus iure ex architecto.', 1, '2014-10-07 21:39:27', '2014-10-07 21:39:27'),
(26, 29, 'activity_delete', 18, 12, 'Tempora omnis ut commodi reprehenderit. Vitae omnis modi error error eum.', 1, '2014-10-07 21:39:27', '2014-10-07 21:39:27'),
(27, 25, 'activity_comment', 15, 24, 'Enim quis rem ea dolores nemo optio. Quisquam dolor qui porro id fuga quas. Eos tenetur suscipit et tenetur exercitationem beatae omnis. Voluptate blanditiis vero earum deserunt. Quibusdam harum nisi ut sint rerum velit qui.', 1, '2014-10-07 21:39:27', '2014-10-07 21:39:27'),
(28, 1, 'activity_invite', 17, 29, 'Quisquam dolorum consequuntur ab dignissimos deleniti. Et dolor et quaerat doloribus nemo labore. Qui sit excepturi provident vero. Modi debitis laboriosam amet sit et. Voluptatibus minus qui est consequatur qui quaerat. Et neque non quo id nisi reiciendi', 0, '2014-10-07 21:39:27', '2014-10-07 21:39:27'),
(29, 29, 'activity_delete', 16, 16, 'Facilis voluptas qui illo illo. Facilis architecto ea numquam laborum assumenda.', 0, '2014-10-07 21:39:27', '2014-10-07 21:39:27'),
(30, 28, 'activity_join', 29, 13, 'Sed qui sapiente voluptas nulla consectetur sunt. Hic eum optio nostrum natus. Itaque voluptates rem illo. Autem est libero quasi et adipisci consequatur est a. Accusantium omnis et totam in beatae non.', 1, '2014-10-07 21:39:27', '2014-10-07 21:39:27'),
(31, 16, 'activity_delete', 10, 4, 'Sit maxime corrupti officiis est soluta sunt ducimus. Ut doloremque impedit in porro ratione in autem. Est sed modi ut.', 1, '2014-10-07 21:39:27', '2014-10-07 21:39:27'),
(32, 23, 'activity_comment', 8, 1, 'Maiores tempora et dolor et. Autem voluptatem eligendi non reprehenderit libero sunt quos. Itaque natus iusto dolor aut quia dolores. Maxime dolores deserunt fugit ad eos tempora. Cupiditate sint non sunt tenetur itaque alias. Accusantium excepturi et lab', 1, '2014-10-07 21:39:27', '2014-10-07 21:39:27'),
(33, 13, 'activity_invite', 30, 18, 'Ipsam numquam asperiores ad iure ut perferendis.', 1, '2014-10-07 21:39:27', '2014-10-07 21:39:27'),
(34, 6, 'activity_comment', 11, 18, 'Aut non non aut voluptatibus vitae est. Quas impedit culpa et sit quia blanditiis id. Non porro tenetur aut magni. Atque est est consectetur rem sit quas. Illo ea soluta nobis sed.', 0, '2014-10-07 21:39:27', '2014-10-07 21:39:27'),
(35, 2, 'activity_invite', 6, 13, 'Aut quia odit ab. Vero modi vel explicabo.', 1, '2014-10-07 21:39:27', '2014-10-07 21:39:27'),
(36, 13, 'activity_invite', 18, 11, 'Soluta corrupti sapiente molestiae minus. Natus officiis consequuntur temporibus magni architecto nobis eum. Vel aspernatur odio doloribus corrupti expedita autem sit. Eum occaecati aut culpa aspernatur.', 1, '2014-10-07 21:39:27', '2014-10-07 21:39:27'),
(37, 11, 'activity_join', 4, 22, 'Expedita tenetur qui omnis itaque voluptatum. Et aut asperiores animi laborum in pariatur.', 0, '2014-10-07 21:39:27', '2014-10-07 21:39:27'),
(38, 1, 'activity_invite', 29, 5, 'Non quos ad rerum nesciunt nam et. Hic quam dolor eum magnam pariatur dolorum. Excepturi unde velit sit sed et exercitationem qui. Nostrum eos eos est quis facere praesentium. Et rerum voluptatum totam sunt qui ut.', 0, '2014-10-07 21:39:27', '2014-10-07 21:39:27'),
(39, 22, 'activity_invite', 12, 29, 'Quas commodi ut explicabo delectus nihil omnis recusandae. Dolorem doloremque doloribus quidem culpa earum ex. Quasi nostrum quibusdam nesciunt impedit commodi doloremque provident fugiat. Consectetur cum explicabo consequatur dolorem. Eligendi enim et pe', 1, '2014-10-07 21:39:27', '2014-10-07 21:39:27'),
(40, 7, 'activity_comment', 25, 7, 'Quam reiciendis deleniti a. Iste in sed blanditiis nobis dolorum nam. Et minus et voluptas autem provident molestiae placeat est.', 0, '2014-10-07 21:39:27', '2014-10-07 21:39:27'),
(41, 2, 'activity_update', 5, 6, 'Modi ab qui sed repellendus. Nihil non officiis possimus quia et. Dignissimos quia pariatur consequatur tempora sapiente adipisci voluptas soluta. Ut exercitationem natus excepturi rerum dolorum non.', 0, '2014-10-07 21:39:27', '2014-10-07 21:39:27'),
(42, 20, 'activity_invite', 2, 11, 'Magni eligendi deserunt non et repellat enim doloribus. Magnam corporis ut ea autem nesciunt praesentium. Enim assumenda aliquam laborum quas aut.', 1, '2014-10-07 21:39:27', '2014-10-07 21:39:27'),
(43, 23, 'activity_join', 4, 28, 'Modi molestiae nam rerum consequatur. Sint voluptatem officiis officiis dolor voluptatem. Sunt praesentium soluta expedita aut mollitia quos.', 1, '2014-10-07 21:39:28', '2014-10-07 21:39:28'),
(44, 15, 'activity_update', 4, 26, 'Amet similique quibusdam et at sed cumque voluptatem. Fugit autem in omnis placeat dolor corporis. Est beatae quo nisi ut.', 0, '2014-10-07 21:39:28', '2014-10-07 21:39:28'),
(45, 23, 'activity_delete', 12, 7, 'Accusamus aliquid est atque vitae et est sed. Facere totam temporibus sit dicta dolorum. Molestiae quia sint et dolor sit debitis.', 1, '2014-10-07 21:39:28', '2014-10-07 21:39:28'),
(46, 11, 'activity_comment', 28, 15, 'Minima vitae nemo itaque qui asperiores. Et in dolore aliquid unde numquam. Dolorem quam voluptatem explicabo omnis recusandae quisquam quis officia. Eius ducimus repellendus veritatis quo assumenda hic consequuntur. Occaecati blanditiis repellat ut volup', 1, '2014-10-07 21:39:28', '2014-10-07 21:39:28'),
(47, 13, 'activity_delete', 20, 19, 'Facilis magnam qui temporibus voluptas. Suscipit nobis voluptatem sint corporis sapiente. Enim illum quo ut ipsum itaque quam. Laborum tempora dolores est libero.', 1, '2014-10-07 21:39:28', '2014-10-07 21:39:28'),
(48, 13, 'activity_join', 25, 16, 'Laudantium sint natus harum dicta nemo totam. Dolores sunt expedita asperiores reiciendis esse dolorem.', 0, '2014-10-07 21:39:28', '2014-10-07 21:39:28'),
(49, 21, 'activity_join', 2, 4, 'Nobis omnis autem molestiae soluta dolorem aut. Ut laboriosam reiciendis praesentium explicabo sunt est. Possimus et dolore consequatur quos harum culpa.', 1, '2014-10-07 21:39:28', '2014-10-07 21:39:28'),
(50, 11, 'activity_invite', 23, 23, 'Labore dolorem maxime qui dolor sunt. Ipsam assumenda ut temporibus. Optio incidunt enim pariatur vel est facere qui. Voluptatem unde temporibus ut facilis dolorem et.', 1, '2014-10-07 21:39:28', '2014-10-07 21:39:28'),
(51, 28, 'activity_delete', 8, 9, 'Asperiores est veniam porro a. Facere quaerat fuga cum aperiam dolorem eum tempore. Vel non excepturi tempore sapiente. Qui animi voluptas omnis.', 1, '2014-10-07 21:39:28', '2014-10-07 21:39:28'),
(52, 9, 'activity_join', 4, 14, 'Libero explicabo rem voluptas tempora facilis doloremque. Modi iste cum ea asperiores similique. Et minus quia neque est minima. Aut voluptatem distinctio sed laboriosam qui similique. Molestiae rerum dolores perferendis ipsum officia quo.', 1, '2014-10-07 21:39:28', '2014-10-07 21:39:28'),
(53, 3, 'activity_update', 13, 3, 'Quis beatae eum quo debitis maxime. Nemo qui labore fugit qui aperiam qui inventore. Saepe dolores modi dolorem voluptate veniam nulla aliquid. Itaque magnam esse consequatur minima adipisci voluptatem commodi.', 0, '2014-10-07 21:39:28', '2014-10-07 21:39:28'),
(54, 28, 'activity_update', 26, 13, 'Possimus officia iure dolore quia distinctio illo. Sit quos odit officiis vel voluptas aut voluptatibus. Quod omnis similique fugit voluptatum.', 0, '2014-10-07 21:39:28', '2014-10-07 21:39:28'),
(55, 17, 'activity_join', 5, 5, 'Perferendis omnis dolore doloremque vero. Beatae omnis qui ut dolores omnis dolores. Ut aliquam accusamus velit nihil quia quia qui. Dolorem unde quis error quam aut rem. Ducimus non nisi reprehenderit voluptatem et. Ipsa et qui rerum vel est itaque quam ', 0, '2014-10-07 21:39:28', '2014-10-07 21:39:28'),
(56, 11, 'activity_comment', 10, 28, 'Animi cum sint harum quod doloribus neque nostrum. Ea sit necessitatibus voluptatem harum enim.', 1, '2014-10-07 21:39:28', '2014-10-07 21:39:28'),
(57, 8, 'activity_delete', 21, 13, 'Reprehenderit in dolorem reprehenderit omnis. Vel accusamus dolores sed in. Provident vel ut consequatur iure. Natus rerum tenetur nobis et aliquid qui. Molestiae harum aspernatur sed ut aut. Quis velit quis ratione at eveniet eos odit.', 1, '2014-10-07 21:39:28', '2014-10-07 21:39:28'),
(58, 8, 'activity_comment', 13, 22, 'Cumque ut repellat et atque id quia assumenda qui. Nulla ut a accusantium ea distinctio libero ut. Veniam autem eius labore nam numquam aut.', 0, '2014-10-07 21:39:28', '2014-10-07 21:39:28'),
(59, 17, 'activity_invite', 19, 14, 'Vel nulla nemo omnis et. Quo voluptate laudantium incidunt molestiae fuga consequatur. Voluptate reiciendis voluptatem iure est. Vitae quos consequatur vero. Consequatur est nulla quo sed. Eveniet ab sit sint.', 1, '2014-10-07 21:39:28', '2014-10-07 21:39:28'),
(60, 25, 'activity_join', 18, 4, 'Illum enim quos cupiditate officiis dolore accusamus. Sapiente vero aliquid omnis. Enim ducimus quod aut in. Non et et cupiditate. Magnam magni voluptates et explicabo.', 1, '2014-10-07 21:39:28', '2014-10-07 21:39:28'),
(61, 13, 'activity_invite', 4, 10, 'Qui deserunt tenetur et nisi consequatur autem. Maxime eum sunt voluptatem quia ex voluptatem quod. Ab deleniti et quibusdam odit dolores. Officiis omnis commodi qui est eius doloribus.', 1, '2014-10-07 21:39:28', '2014-10-07 21:39:28'),
(62, 21, 'activity_invite', 23, 28, 'Recusandae error laboriosam ex mollitia. Tempore rerum doloremque harum. Excepturi et voluptate quibusdam quibusdam cupiditate. Nihil debitis praesentium quia molestiae consectetur ut.', 1, '2014-10-07 21:39:28', '2014-10-07 21:39:28'),
(63, 6, 'activity_invite', 27, 15, 'Dolores iusto asperiores accusamus aut illo doloremque cum sapiente. Molestiae explicabo tenetur nemo quam dolores asperiores ipsam. Atque quisquam et ut dolorum iste maiores saepe. Vel autem libero quo rerum minus. Cupiditate omnis officiis sint libero n', 0, '2014-10-07 21:39:28', '2014-10-07 21:39:28'),
(64, 30, 'activity_comment', 8, 12, 'Nostrum eum tenetur eaque velit aut. Dolorum dicta unde deleniti aliquid sint. Aperiam amet commodi blanditiis et et.', 1, '2014-10-07 21:39:28', '2014-10-07 21:39:28'),
(65, 25, 'activity_delete', 1, 2, 'Corporis autem quia est eaque expedita et dolorem. Amet aut eum quia voluptas repellendus. Rerum enim dicta facere atque sint.', 0, '2014-10-07 21:39:28', '2014-10-07 21:39:28'),
(66, 12, 'activity_update', 2, 9, 'Et sit ut est in ut at. Non dolor quia eum qui at fuga sit. In quod fuga architecto beatae.', 0, '2014-10-07 21:39:28', '2014-10-07 21:39:28'),
(67, 21, 'activity_update', 6, 15, 'In suscipit deleniti culpa consequuntur aperiam.', 0, '2014-10-07 21:39:28', '2014-10-07 21:39:28'),
(68, 2, 'activity_delete', 16, 28, 'Corrupti eaque molestiae ratione et explicabo itaque. Adipisci nisi enim est voluptas neque labore delectus. Quis corporis earum iure atque accusamus et sequi voluptatibus.', 1, '2014-10-07 21:39:28', '2014-10-07 21:39:28'),
(69, 21, 'activity_invite', 18, 26, 'Ut sit quaerat et veritatis eos esse error deserunt. Commodi aut et inventore enim doloribus adipisci et quidem. Repudiandae iusto rerum dolor officia dicta. Illo optio commodi aspernatur qui veritatis. Accusantium nesciunt id ut et ullam adipisci. Itaque', 0, '2014-10-07 21:39:28', '2014-10-07 21:39:28'),
(70, 20, 'activity_join', 19, 2, 'Nisi excepturi eos ex veritatis. Vero amet laborum nostrum consequatur tempora.', 0, '2014-10-07 21:39:28', '2014-10-07 21:39:28'),
(71, 9, 'activity_comment', 25, 21, 'Reprehenderit et sed non quibusdam. Vel temporibus soluta occaecati et quia. Et expedita cupiditate iusto et sed itaque vel.', 1, '2014-10-07 21:39:28', '2014-10-07 21:39:28'),
(72, 10, 'activity_join', 21, 29, 'Repudiandae voluptas quia molestiae nemo assumenda ipsa. Quia provident in id est optio id velit quo. Voluptatem voluptas magnam doloribus nihil.', 0, '2014-10-07 21:39:28', '2014-10-07 21:39:28'),
(73, 10, 'activity_update', 3, 1, 'Dolore dolorem perferendis exercitationem praesentium aliquid est. Quis sapiente blanditiis omnis sint unde ut. Officia officiis eum neque voluptatem. Facilis rerum sit veritatis officia recusandae. Sint inventore sed ea veniam eos aspernatur architecto q', 0, '2014-10-07 21:39:28', '2014-10-07 21:39:28'),
(74, 23, 'activity_comment', 20, 14, 'Rerum eligendi et aut doloremque dolorum.', 0, '2014-10-07 21:39:28', '2014-10-07 21:39:28'),
(75, 8, 'activity_invite', 30, 12, 'Sint facere optio est facilis nam. Ut sint iure placeat et aut iste illo. Cupiditate maiores ullam placeat.', 1, '2014-10-07 21:39:28', '2014-10-07 21:39:28'),
(76, 1, 'activity_update', 29, 24, 'Delectus doloremque quo illum.', 0, '2014-10-07 21:39:28', '2014-10-07 21:39:28'),
(77, 29, 'activity_comment', 23, 23, 'Laborum provident accusamus possimus maxime amet iure. Iusto qui sed labore aut. Sunt accusamus saepe hic qui deserunt deleniti.', 1, '2014-10-07 21:39:28', '2014-10-07 21:39:28'),
(78, 27, 'activity_update', 14, 23, 'Ut explicabo nam eos voluptatem pariatur. Modi earum omnis amet repellat consequatur deleniti aut accusamus. Cupiditate placeat laboriosam accusamus sunt beatae. Magni consequatur assumenda accusamus minus. Sint ea inventore aut error quidem dolor. Natus ', 1, '2014-10-07 21:39:28', '2014-10-07 21:39:28'),
(79, 26, 'activity_delete', 30, 23, 'Molestiae debitis suscipit laboriosam. Voluptas molestiae tenetur animi quia reprehenderit aspernatur vitae odit. Atque quia vitae sunt aut est. Est explicabo quos nobis sit.', 0, '2014-10-07 21:39:28', '2014-10-07 21:39:28'),
(80, 13, 'activity_comment', 17, 19, 'Aliquam officiis harum provident fugit beatae exercitationem. Sed nobis ratione ut ipsam vel.', 1, '2014-10-07 21:39:28', '2014-10-07 21:39:28'),
(81, 25, 'activity_delete', 26, 11, 'Rem sit fugiat cupiditate quia est. Incidunt autem adipisci ipsa ipsam.', 0, '2014-10-07 21:39:28', '2014-10-07 21:39:28'),
(82, 10, 'activity_join', 7, 6, 'Animi quae corrupti ducimus voluptatum alias expedita voluptas.', 1, '2014-10-07 21:39:28', '2014-10-07 21:39:28'),
(83, 9, 'activity_comment', 1, 3, 'Error sequi rem incidunt. Esse rem eaque nobis nisi ut aliquam aspernatur. Dignissimos quia impedit id magnam ut.', 0, '2014-10-07 21:39:28', '2014-10-07 21:39:28'),
(84, 22, 'activity_delete', 25, 23, 'Dolorem distinctio nihil quia reiciendis repellendus dolores.', 1, '2014-10-07 21:39:28', '2014-10-07 21:39:28'),
(85, 6, 'activity_invite', 19, 1, 'Et in maxime quibusdam occaecati. Sint vel nam dolores aliquam temporibus. Consequatur laudantium odit maiores ipsa aut. Suscipit sit consectetur occaecati voluptas. Quo facere autem corporis similique impedit.', 0, '2014-10-07 21:39:28', '2014-10-07 21:39:28'),
(86, 9, 'activity_update', 8, 2, 'Quasi eius cum quidem exercitationem illum omnis. Id exercitationem reprehenderit magni quidem dolor nemo odit. Natus aut ipsum animi consequuntur.', 1, '2014-10-07 21:39:28', '2014-10-07 21:39:28'),
(87, 27, 'activity_delete', 11, 20, 'Omnis dolorem in et vel pariatur numquam. Qui rerum voluptatem laborum.', 1, '2014-10-07 21:39:29', '2014-10-07 21:39:29'),
(88, 6, 'activity_comment', 28, 12, 'Dolorem laudantium nulla molestias qui.', 0, '2014-10-07 21:39:29', '2014-10-07 21:39:29'),
(89, 9, 'activity_update', 11, 1, 'Voluptas eius voluptates omnis perspiciatis iusto. Enim doloribus ut adipisci qui quae eum non. Est aut architecto sit odio molestiae esse quas. Dolores reprehenderit quis non id impedit sed.', 0, '2014-10-07 21:39:29', '2014-10-07 21:39:29'),
(90, 3, 'activity_update', 23, 17, 'Nulla harum impedit dignissimos fuga labore. Eaque aliquid ut ut sed aliquam. Voluptas facere cum libero et consequatur maiores ut.', 0, '2014-10-07 21:39:29', '2014-10-07 21:39:29'),
(91, 25, 'activity_delete', 8, 20, 'Consequatur qui nihil omnis distinctio quae sed. Iure soluta qui voluptas. Eum labore eum quo nesciunt nihil nostrum sint est. Et ut veritatis nulla nam est et voluptates.', 1, '2014-10-07 21:39:29', '2014-10-07 21:39:29'),
(92, 4, 'activity_invite', 5, 25, 'Rerum dignissimos provident harum quia suscipit quas. Quisquam eum quis ab corrupti consequatur.', 0, '2014-10-07 21:39:29', '2014-10-07 21:39:29'),
(93, 12, 'activity_invite', 8, 18, 'Natus inventore voluptates quia in deserunt corrupti quia. Voluptatum cupiditate sit aut animi quos animi. Et libero ratione et aliquam maxime doloremque explicabo.', 0, '2014-10-07 21:39:29', '2014-10-07 21:39:29'),
(94, 29, 'activity_join', 1, 29, 'Iure nulla tempora iste omnis. Saepe nostrum illum sint quam accusantium et itaque magni. Sint corporis nam est qui facere. Rem et quas sed voluptatibus sed veniam ipsum.', 1, '2014-10-07 21:39:29', '2014-10-07 21:39:29'),
(95, 12, 'activity_comment', 29, 12, 'Eum qui expedita pariatur mollitia est saepe. Quia molestias et explicabo consequatur nemo repellendus laborum.', 0, '2014-10-07 21:39:29', '2014-10-07 21:39:29'),
(96, 22, 'activity_join', 23, 8, 'Nam dolor impedit molestias earum odio mollitia vero. Eos iusto illo est omnis dolor et eligendi.', 0, '2014-10-07 21:39:29', '2014-10-07 21:39:29'),
(97, 22, 'activity_comment', 17, 1, 'Illum repellat mollitia vel. Debitis commodi doloribus reiciendis velit consectetur sint. Ullam aut vitae dolorem ut voluptates soluta modi.', 0, '2014-10-07 21:39:29', '2014-10-07 21:39:29'),
(98, 3, 'activity_update', 8, 15, 'Autem cumque sit est. Et dolor impedit aperiam dolores esse repellat.', 1, '2014-10-07 21:39:29', '2014-10-07 21:39:29'),
(99, 24, 'activity_update', 22, 2, 'Repellendus ad nostrum veniam earum ex quam. Quia qui nesciunt sed quod voluptatum fugit. Velit numquam vero et quia similique harum reiciendis. Cum eos quia illo iure rerum deleniti id facere.', 1, '2014-10-07 21:39:29', '2014-10-07 21:39:29'),
(100, 7, 'activity_comment', 29, 29, 'Sit alias nam libero eaque. Quos asperiores est ut dolores. Harum dolor rerum aut a aut ex cupiditate.', 1, '2014-10-07 21:39:29', '2014-10-07 21:39:29');

-- --------------------------------------------------------

--
-- Table structure for table `notifications_friends`
--

CREATE TABLE IF NOT EXISTS `notifications_friends` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `sub_type` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `from_id` int(11) DEFAULT NULL,
  `to_id` int(11) NOT NULL,
  `details` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `is_read` tinyint(1) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=101 ;

--
-- Dumping data for table `notifications_friends`
--

INSERT INTO `notifications_friends` (`id`, `sub_type`, `from_id`, `to_id`, `details`, `is_read`, `created_at`, `updated_at`) VALUES
(1, 'accept_confirmed', 24, 10, 'Quos quidem autem est iste. Alias modi quo sit molestiae aut velit. Consequuntur necessitatibus quidem ut laborum optio dolor ipsam. Nihil fugiat incidunt non modi amet omnis ratione maxime. Pariatur delectus odit non vel perferendis et dolor. Aut eos mag', 1, '2014-10-07 21:39:24', '2014-10-07 21:39:24'),
(2, 'want_to_accept', 4, 5, 'Soluta cumque vel ipsa sint architecto. Necessitatibus et laudantium aperiam dolores ut dicta. Sed repellat voluptates veritatis ad. Voluptas nihil sunt dicta voluptas accusamus ut exercitationem. Aut deserunt natus voluptas.', 1, '2014-10-07 21:39:24', '2014-10-07 21:39:24'),
(3, 'want_to_accept', 4, 9, 'Cupiditate tempora et qui saepe. Possimus et eum esse quis. Quaerat rerum illo quos eum iure voluptatem facere.', 1, '2014-10-07 21:39:24', '2014-10-07 21:39:24'),
(4, 'accept_confirmed', 26, 3, 'Saepe harum vel illo voluptatum. A minus dolor aut magnam. Temporibus voluptatem molestias minima corrupti. Ad minima voluptatibus dolorem enim quia.', 0, '2014-10-07 21:39:24', '2014-10-07 21:39:24'),
(5, 'want_to_accept', 22, 27, 'Sequi esse enim nihil tempore inventore recusandae. Sed cum aperiam ullam.', 0, '2014-10-07 21:39:24', '2014-10-07 21:39:24'),
(6, 'want_to_accept', 17, 1, 'Cupiditate asperiores deserunt vel vel accusamus et assumenda. Quo nemo sed maiores consectetur est maiores recusandae. Blanditiis repellat praesentium ea sequi officiis est. Est sed at amet beatae et sed quibusdam. Debitis ab hic laudantium omnis.', 1, '2014-10-07 21:39:24', '2014-10-07 21:39:24'),
(7, 'want_to_accept', 23, 14, 'A omnis ipsam recusandae autem. Porro odit esse et iure praesentium. Recusandae non necessitatibus amet laudantium.', 0, '2014-10-07 21:39:24', '2014-10-07 21:39:24'),
(8, 'want_to_accept', 17, 26, 'Dolores tempore ut ut autem at. Et sed tempore animi. Quasi vitae qui aspernatur repellat aut. Et laboriosam cumque quasi cumque veritatis sapiente optio unde. Voluptatem cum id non. Rerum est similique rem.', 1, '2014-10-07 21:39:24', '2014-10-07 21:39:24'),
(9, 'want_to_accept', 8, 7, 'Distinctio dignissimos nisi quis autem distinctio eos reprehenderit et. Corrupti impedit ducimus expedita odit.', 1, '2014-10-07 21:39:24', '2014-10-07 21:39:24'),
(10, 'want_to_accept', 15, 14, 'Nobis recusandae fuga dolor laboriosam atque. Est saepe officiis quos aut quo non repudiandae. Quidem qui odio enim voluptatem quis quaerat quos.', 1, '2014-10-07 21:39:25', '2014-10-07 21:39:25'),
(11, 'want_to_accept', 25, 8, 'Magnam voluptate aut dolore rerum ducimus omnis. Rem odit voluptatem a fugit hic rerum. Quos odio ducimus in adipisci doloremque dignissimos. Et sequi nulla ut veritatis est odit. Accusamus maxime quia quia dolorem.', 0, '2014-10-07 21:39:25', '2014-10-07 21:39:25'),
(12, 'want_to_accept', 11, 20, 'Suscipit perspiciatis possimus expedita possimus. Nulla officia unde omnis quas qui blanditiis voluptas. Sit explicabo nostrum alias commodi eos omnis.', 0, '2014-10-07 21:39:25', '2014-10-07 21:39:25'),
(13, 'accept_confirmed', 12, 28, 'Similique in tenetur ipsam ut ducimus aut. Doloremque explicabo tenetur minima adipisci natus. Voluptatem error nemo est. Corrupti cumque earum eaque consequatur et consequatur. Ipsum et velit expedita sit dolore ut facere. Omnis ab ea qui repellat rerum ', 1, '2014-10-07 21:39:25', '2014-10-07 21:39:25'),
(14, 'accept_confirmed', 30, 22, 'Illo vel culpa ipsam omnis voluptates. Sint adipisci suscipit voluptatem aut repudiandae aut.', 1, '2014-10-07 21:39:25', '2014-10-07 21:39:25'),
(15, 'want_to_accept', 1, 30, 'Maxime error corrupti dolorem. Delectus quos necessitatibus qui aut et in ipsum.', 1, '2014-10-07 21:39:25', '2014-10-07 21:39:25'),
(16, 'want_to_accept', 2, 12, 'Exercitationem minus esse aut sed dolores corporis. Nihil ex ad dolor et rerum minus.', 1, '2014-10-07 21:39:25', '2014-10-07 21:39:25'),
(17, 'accept_confirmed', 19, 3, 'Dolorem consequatur magni nostrum et aspernatur temporibus. Et harum soluta porro velit. Accusamus officia veritatis et nostrum id rerum.', 0, '2014-10-07 21:39:25', '2014-10-07 21:39:25'),
(18, 'want_to_accept', 20, 15, 'Nisi asperiores consequatur velit possimus mollitia voluptas. Architecto delectus sunt non porro rerum. Iure omnis et necessitatibus tenetur.', 0, '2014-10-07 21:39:25', '2014-10-07 21:39:25'),
(19, 'want_to_accept', 19, 17, 'Nostrum voluptatem enim nesciunt culpa dolor distinctio. Ratione expedita perferendis ut voluptatum repellendus rem ut quia.', 1, '2014-10-07 21:39:25', '2014-10-07 21:39:25'),
(20, 'want_to_accept', 3, 18, 'Non similique quibusdam optio et quos animi qui. Accusantium sapiente dolores aut sint odio voluptatem cupiditate. Aut rem iusto fugiat atque omnis qui hic. Laboriosam architecto sunt quos aut pariatur nisi aspernatur aut. Quis consequatur sit quia at id ', 1, '2014-10-07 21:39:25', '2014-10-07 21:39:25'),
(21, 'accept_confirmed', 26, 9, 'Tenetur maxime qui iure et architecto. Non occaecati consequuntur omnis. Asperiores iusto consequuntur tempora aliquam eos animi qui enim. Est cupiditate rem debitis excepturi ipsam minima eos.', 0, '2014-10-07 21:39:25', '2014-10-07 21:39:25'),
(22, 'accept_confirmed', 18, 30, 'Aut alias fugit tempora aut qui expedita nemo. Nulla et animi iste est consectetur. Sint eaque molestiae non culpa.', 1, '2014-10-07 21:39:25', '2014-10-07 21:39:25'),
(23, 'want_to_accept', 9, 9, 'Asperiores rerum laboriosam dolorem aut. Vitae saepe rerum vel quo rerum quasi. Hic totam et voluptatem tempora sint et. Recusandae maiores totam qui impedit incidunt ad.', 1, '2014-10-07 21:39:25', '2014-10-07 21:39:25'),
(24, 'accept_confirmed', 7, 7, 'Repellendus quis cum vitae nihil et quos. Est est sint ipsum aut repellendus laboriosam vitae. Excepturi voluptas possimus quibusdam fuga nostrum. Dolorem placeat sapiente aut sapiente voluptatem assumenda dignissimos perferendis.', 0, '2014-10-07 21:39:25', '2014-10-07 21:39:25'),
(25, 'want_to_accept', 19, 19, 'Debitis inventore minima adipisci provident. Sapiente cupiditate quo eum. Similique aut quaerat officia illo. Laborum quo accusantium id doloremque quas.', 0, '2014-10-07 21:39:25', '2014-10-07 21:39:25'),
(26, 'want_to_accept', 12, 29, 'Molestiae et aut ut quae.', 1, '2014-10-07 21:39:25', '2014-10-07 21:39:25'),
(27, 'want_to_accept', 8, 30, 'Aut minus vel voluptatibus vel explicabo praesentium molestiae. Ut atque sunt optio explicabo. Rerum eaque recusandae ut quisquam natus aspernatur molestiae. Ea repellat id atque consequatur quia non maiores.', 0, '2014-10-07 21:39:25', '2014-10-07 21:39:25'),
(28, 'want_to_accept', 25, 22, 'Ut quos cum quia.', 0, '2014-10-07 21:39:25', '2014-10-07 21:39:25'),
(29, 'want_to_accept', 26, 20, 'Esse eligendi qui nobis incidunt aut ab aut. Dolorem inventore ut rem voluptas. Quaerat non vel unde distinctio reprehenderit exercitationem.', 1, '2014-10-07 21:39:25', '2014-10-07 21:39:25'),
(30, 'accept_confirmed', 4, 18, 'Quis cum placeat consequatur.', 0, '2014-10-07 21:39:25', '2014-10-07 21:39:25'),
(31, 'accept_confirmed', 7, 2, 'Similique est voluptatem vitae enim eius eveniet.', 0, '2014-10-07 21:39:25', '2014-10-07 21:39:25'),
(32, 'accept_confirmed', 22, 2, 'Autem ipsa pariatur quis iure asperiores. Fuga asperiores consequatur enim molestiae animi laudantium eaque. Molestias libero dolore est praesentium. Vitae excepturi nisi expedita ipsum inventore. Itaque doloremque tempora inventore dicta dolore dolorem q', 0, '2014-10-07 21:39:25', '2014-10-07 21:39:25'),
(33, 'want_to_accept', 1, 17, 'Ipsam doloremque totam dignissimos qui et molestiae rerum quia.', 0, '2014-10-07 21:39:25', '2014-10-07 21:39:25'),
(34, 'want_to_accept', 13, 20, 'Aut placeat omnis praesentium sit libero et adipisci. Aut totam dignissimos et non autem quasi non.', 1, '2014-10-07 21:39:25', '2014-10-07 21:39:25'),
(35, 'want_to_accept', 14, 9, 'Sit nulla quidem voluptate. Tenetur officia sed sint.', 0, '2014-10-07 21:39:25', '2014-10-07 21:39:25'),
(36, 'accept_confirmed', 9, 22, 'Quo debitis doloribus eum aut. Non ut eos optio dolorem maxime perspiciatis est. Vel et adipisci consequuntur esse saepe omnis dolorem. Odio magnam omnis et odit aut error.', 1, '2014-10-07 21:39:25', '2014-10-07 21:39:25'),
(37, 'accept_confirmed', 3, 26, 'Qui dolore fuga odit nemo fugiat. Aperiam ad sit autem sint ipsam sunt dolor quia. Nisi repellendus qui id quia quis. Nihil labore molestias pariatur officia quia qui.', 1, '2014-10-07 21:39:25', '2014-10-07 21:39:25'),
(38, 'want_to_accept', 11, 9, 'Et nemo labore libero.', 0, '2014-10-07 21:39:25', '2014-10-07 21:39:25'),
(39, 'want_to_accept', 19, 3, 'Aspernatur magnam autem velit aliquam sequi. Rerum voluptates beatae beatae excepturi in et aperiam eum. Qui nemo et temporibus perspiciatis aut. Sint expedita iusto autem eos. Voluptatum officiis earum officia eligendi. Ratione consequatur quos ut qui ad', 1, '2014-10-07 21:39:25', '2014-10-07 21:39:25'),
(40, 'want_to_accept', 11, 21, 'Illum quisquam similique expedita est excepturi nemo magni. Quibusdam asperiores ab omnis et eos voluptas ut et. Voluptatem sit odit sint id.', 0, '2014-10-07 21:39:25', '2014-10-07 21:39:25'),
(41, 'want_to_accept', 17, 21, 'Consectetur at assumenda quo sint. Aspernatur occaecati et tenetur aut id consequatur.', 0, '2014-10-07 21:39:25', '2014-10-07 21:39:25'),
(42, 'accept_confirmed', 15, 9, 'Est accusantium qui in libero vel. Id sunt et voluptatem cupiditate laborum. Rerum maiores quas iusto enim sit repudiandae. Ducimus ad excepturi enim ut autem.', 0, '2014-10-07 21:39:25', '2014-10-07 21:39:25'),
(43, 'accept_confirmed', 30, 7, 'Placeat voluptates quaerat velit quae omnis ut. Rem ducimus qui ea delectus eum pariatur qui.', 1, '2014-10-07 21:39:25', '2014-10-07 21:39:25'),
(44, 'want_to_accept', 8, 12, 'Modi quis deserunt dolorum ut et. Aut tempora quibusdam et aliquam. Eaque ex aut aut nisi. Saepe quas impedit quae et debitis culpa. Quo rem tempore nulla veniam.', 0, '2014-10-07 21:39:25', '2014-10-07 21:39:25'),
(45, 'want_to_accept', 12, 19, 'Ea est minima deleniti ut. In eos quae magnam expedita quo.', 1, '2014-10-07 21:39:25', '2014-10-07 21:39:25'),
(46, 'accept_confirmed', 30, 25, 'Molestias ut reprehenderit sequi voluptatem consequatur quod deleniti. Corporis consequuntur atque cumque dicta et nam. Quam voluptas aut molestiae aut possimus odio consectetur.', 0, '2014-10-07 21:39:25', '2014-10-07 21:39:25'),
(47, 'want_to_accept', 8, 3, 'Voluptatem et sunt error necessitatibus voluptates atque. Est ut veritatis laboriosam impedit ratione expedita facere. Enim magni culpa distinctio nam beatae ut sit.', 1, '2014-10-07 21:39:25', '2014-10-07 21:39:25'),
(48, 'want_to_accept', 25, 25, 'Ut reprehenderit dolor odio vel possimus. Placeat nihil qui facilis voluptatem enim voluptates. Molestiae eos sapiente repudiandae labore omnis ipsum. Explicabo modi itaque consequuntur adipisci. Deserunt a provident alias dicta quos eos provident.', 0, '2014-10-07 21:39:25', '2014-10-07 21:39:25'),
(49, 'accept_confirmed', 1, 23, 'Eaque quae assumenda eos sint tempore animi. Atque consequatur iusto culpa voluptatem cum harum expedita. Illum aut perspiciatis quam consectetur qui. Et sint est optio quisquam aut id. Laudantium et sit repudiandae rerum vel corporis.', 1, '2014-10-07 21:39:25', '2014-10-07 21:39:25'),
(50, 'want_to_accept', 12, 20, 'Eum magnam iste illum magnam cumque. Iste cupiditate dolorem vel tempore ipsum velit in. Voluptate deleniti porro maiores. Amet necessitatibus dolor beatae sed. Debitis sequi accusantium laborum et nam incidunt error. Rem rerum sapiente qui.', 0, '2014-10-07 21:39:25', '2014-10-07 21:39:25'),
(51, 'accept_confirmed', 19, 16, 'Sed beatae nobis harum illo mollitia.', 1, '2014-10-07 21:39:25', '2014-10-07 21:39:25'),
(52, 'accept_confirmed', 14, 14, 'Quisquam dolor omnis sequi quia enim ea. Expedita autem nobis sunt aut impedit voluptatem. Illo necessitatibus optio explicabo ipsum reprehenderit et saepe. Aut esse voluptatem molestiae error quibusdam perferendis repellendus. Tenetur accusamus quasi non', 1, '2014-10-07 21:39:25', '2014-10-07 21:39:25'),
(53, 'want_to_accept', 13, 21, 'Assumenda illum eum consequatur esse eum. Praesentium consequatur enim asperiores. Minima nulla maxime occaecati voluptatem. Deserunt aliquam facilis id est.', 1, '2014-10-07 21:39:25', '2014-10-07 21:39:25'),
(54, 'accept_confirmed', 24, 29, 'Recusandae dicta non et qui excepturi iusto. Quaerat sit quis dignissimos est nobis hic debitis. Ea voluptatem quia dolorem eius.', 0, '2014-10-07 21:39:25', '2014-10-07 21:39:25'),
(55, 'accept_confirmed', 26, 26, 'Distinctio est eos est adipisci explicabo eius nobis. At sint similique odio labore saepe.', 1, '2014-10-07 21:39:25', '2014-10-07 21:39:25'),
(56, 'accept_confirmed', 29, 7, 'Et fugiat inventore blanditiis sed ut est accusantium qui. Dolorum aut quam officia consequatur error a ipsum. Ut voluptatum occaecati cupiditate eos non et. Sit fugit sed dolor est incidunt hic asperiores. Sint dicta in quo aut eum quos. Ex voluptas mole', 0, '2014-10-07 21:39:25', '2014-10-07 21:39:25'),
(57, 'accept_confirmed', 4, 15, 'Dolores reprehenderit dolor enim. Eum excepturi voluptas et corrupti.', 1, '2014-10-07 21:39:25', '2014-10-07 21:39:25'),
(58, 'want_to_accept', 25, 14, 'Similique consequuntur rerum quo. Harum eos voluptatem enim ab. Atque veritatis adipisci nesciunt laudantium dolorem incidunt sed. Eaque animi illum qui. Perspiciatis neque ducimus voluptatem minima illum adipisci rerum. Est et consequatur porro provident', 0, '2014-10-07 21:39:26', '2014-10-07 21:39:26'),
(59, 'accept_confirmed', 3, 28, 'Sint vel libero nemo quam est. Praesentium molestiae omnis veniam harum nesciunt. Velit voluptates praesentium adipisci delectus animi. Qui sint sed blanditiis necessitatibus sunt aliquid omnis et.', 0, '2014-10-07 21:39:26', '2014-10-07 21:39:26'),
(60, 'want_to_accept', 20, 20, 'Est dolorum a harum ex iusto. Dignissimos cum et natus et. Sunt sequi adipisci est maiores qui ducimus. Deleniti ipsam tempora amet.', 1, '2014-10-07 21:39:26', '2014-10-07 21:39:26'),
(61, 'accept_confirmed', 1, 24, 'Dignissimos autem est delectus ea vitae dolorem quod. Animi odit id sunt et ea. Reprehenderit dignissimos incidunt maiores harum velit accusamus beatae harum. Quod velit eum corporis ipsum molestiae explicabo quisquam.', 1, '2014-10-07 21:39:26', '2014-10-07 21:39:26'),
(62, 'accept_confirmed', 17, 13, 'Sapiente quasi quo dignissimos est.', 0, '2014-10-07 21:39:26', '2014-10-07 21:39:26'),
(63, 'want_to_accept', 4, 3, 'Tenetur sint deserunt voluptatum itaque ratione rerum. Eveniet est voluptatibus accusamus est impedit. At esse consequatur consequatur id. Qui cupiditate aut officiis rerum blanditiis.', 0, '2014-10-07 21:39:26', '2014-10-07 21:39:26'),
(64, 'want_to_accept', 13, 21, 'Sed voluptatibus et laudantium consequatur voluptatem omnis. Repudiandae accusamus aut consequatur nemo. Quo necessitatibus incidunt omnis natus rerum placeat nobis. Culpa consequatur blanditiis quia sed possimus ad quis. Id quia culpa est rerum et totam.', 0, '2014-10-07 21:39:26', '2014-10-07 21:39:26'),
(65, 'want_to_accept', 19, 21, 'Laudantium molestiae quam eius aperiam ab. Porro assumenda numquam est quas excepturi. Itaque ipsum eum laboriosam recusandae id quis distinctio. Porro vero beatae magni ab quaerat ut omnis. Totam ipsa voluptas laboriosam eaque quisquam.', 1, '2014-10-07 21:39:26', '2014-10-07 21:39:26'),
(66, 'accept_confirmed', 18, 15, 'Ea excepturi non magnam voluptatem ab non. Et provident amet vel sequi voluptatum et est repellat.', 1, '2014-10-07 21:39:26', '2014-10-07 21:39:26'),
(67, 'want_to_accept', 5, 6, 'Ipsum atque laudantium officiis labore. Qui vitae excepturi dolores tempore.', 1, '2014-10-07 21:39:26', '2014-10-07 21:39:26'),
(68, 'accept_confirmed', 18, 23, 'Dicta magni alias nemo iure deleniti. Sint sapiente omnis dolores a laborum quod.', 0, '2014-10-07 21:39:26', '2014-10-07 21:39:26'),
(69, 'want_to_accept', 26, 22, 'Aspernatur aut asperiores id officiis. Et rem quaerat voluptatem aperiam dolores rerum et. Illo nobis quia temporibus dicta sequi ratione sit. Provident omnis et eius dolor.', 0, '2014-10-07 21:39:26', '2014-10-07 21:39:26'),
(70, 'want_to_accept', 30, 29, 'Atque at commodi sit eaque et esse.', 1, '2014-10-07 21:39:26', '2014-10-07 21:39:26'),
(71, 'accept_confirmed', 27, 17, 'Ratione et et aut culpa non odit. Impedit natus ullam iusto impedit cum quidem sint. Consequatur quia rerum enim et.', 0, '2014-10-07 21:39:26', '2014-10-07 21:39:26'),
(72, 'accept_confirmed', 1, 27, 'Qui eos aut est alias ullam exercitationem. Quis dolor error necessitatibus et hic non minus vel. Enim quasi ut perspiciatis explicabo exercitationem. Esse provident asperiores incidunt dicta dolorem quaerat sint. Vel consequatur omnis quis nostrum.', 1, '2014-10-07 21:39:26', '2014-10-07 21:39:26'),
(73, 'accept_confirmed', 8, 1, 'Fugiat qui nihil optio eos voluptatibus molestiae. Quisquam perferendis eligendi voluptatem non et aspernatur ut sint. Quia eum qui eos qui. Commodi dolor sapiente ullam consectetur voluptatum.', 0, '2014-10-07 21:39:26', '2014-10-07 21:39:26'),
(74, 'accept_confirmed', 12, 15, 'Sunt maxime quo temporibus laborum eveniet. Harum distinctio ea quaerat.', 0, '2014-10-07 21:39:26', '2014-10-07 21:39:26'),
(75, 'accept_confirmed', 17, 3, 'Iusto saepe labore modi quia est. Occaecati molestiae est voluptates asperiores. Voluptas reprehenderit accusamus officia non.', 1, '2014-10-07 21:39:26', '2014-10-07 21:39:26'),
(76, 'want_to_accept', 1, 16, 'Aliquam minus amet est aliquid quia expedita. Officiis voluptas soluta sit repudiandae. Ut culpa ut commodi minima.', 1, '2014-10-07 21:39:26', '2014-10-07 21:39:26'),
(77, 'accept_confirmed', 23, 6, 'Corporis a nihil eligendi delectus aut numquam est dolore. Nam eligendi sit ab sit qui maxime nostrum sunt. Quo dolorem et nam et consectetur veniam aut. Omnis voluptatem vitae natus voluptate quia dolore. Sequi ratione distinctio aperiam ad quasi.', 1, '2014-10-07 21:39:26', '2014-10-07 21:39:26'),
(78, 'want_to_accept', 26, 10, 'Distinctio maiores qui consequatur itaque architecto. Ut aut eaque quo consectetur eum sed.', 0, '2014-10-07 21:39:26', '2014-10-07 21:39:26'),
(79, 'accept_confirmed', 26, 2, 'Consequatur ipsum id possimus voluptatem rerum.', 1, '2014-10-07 21:39:26', '2014-10-07 21:39:26'),
(80, 'accept_confirmed', 14, 19, 'Ipsa similique odio dolorum eveniet. Magnam ut tempora distinctio recusandae eligendi. Officia non a tenetur voluptatibus. Modi aut omnis eos magni quae occaecati saepe omnis. Sit dolorem ut dolores repellendus possimus quia. Qui qui et temporibus. Rerum ', 0, '2014-10-07 21:39:26', '2014-10-07 21:39:26'),
(81, 'accept_confirmed', 24, 10, 'Qui esse voluptas pariatur deserunt voluptatum.', 1, '2014-10-07 21:39:26', '2014-10-07 21:39:26'),
(82, 'accept_confirmed', 30, 6, 'Omnis eum nihil alias quia assumenda aperiam. Quia adipisci minus ipsa repellendus accusantium harum quidem. Omnis magni et ab aut. Dolores qui fugit est voluptatibus nesciunt.', 0, '2014-10-07 21:39:26', '2014-10-07 21:39:26'),
(83, 'accept_confirmed', 1, 10, 'Similique delectus consequatur unde quia eveniet qui. Ut magni nostrum optio et aut cum. Tempora repellat non incidunt.', 1, '2014-10-07 21:39:26', '2014-10-07 21:39:26'),
(84, 'accept_confirmed', 21, 20, 'Consectetur reiciendis ut est sint. Est sed cum enim dignissimos modi.', 0, '2014-10-07 21:39:26', '2014-10-07 21:39:26'),
(85, 'accept_confirmed', 12, 29, 'Maxime eveniet aliquid deserunt culpa assumenda sit. Consectetur et voluptatem vitae dolor quis est.', 0, '2014-10-07 21:39:26', '2014-10-07 21:39:26'),
(86, 'want_to_accept', 27, 9, 'Adipisci adipisci molestiae consectetur. Molestiae quidem maiores eos. Inventore quaerat necessitatibus odio omnis eos consequuntur.', 1, '2014-10-07 21:39:26', '2014-10-07 21:39:26'),
(87, 'want_to_accept', 24, 8, 'Et expedita ut ut quia eos. Consequuntur quasi fugit error voluptatem dolor. Odio qui vel autem vero odio vitae sit. Dolores perferendis distinctio non aut. Omnis ex consequuntur non at quibusdam mollitia. Sapiente eveniet magni autem et neque voluptas.', 1, '2014-10-07 21:39:26', '2014-10-07 21:39:26'),
(88, 'want_to_accept', 17, 19, 'Provident nemo itaque quas minus porro similique dolore. Voluptatem voluptatum rem labore consectetur enim. Ut ab doloremque autem. Qui animi ex voluptas quia eum facere. Sint ad et maiores soluta praesentium. Ex ipsa ut maiores quo veniam. Inventore aut ', 1, '2014-10-07 21:39:26', '2014-10-07 21:39:26'),
(89, 'want_to_accept', 30, 8, 'Quos magnam voluptas omnis aut quam. Hic laborum adipisci odit nam nulla reiciendis hic. Earum quas dolorem est voluptas aut beatae culpa. Vitae numquam maxime quis asperiores eos est ea. Consequatur qui enim dolorem adipisci.', 1, '2014-10-07 21:39:26', '2014-10-07 21:39:26'),
(90, 'want_to_accept', 5, 11, 'Optio veniam porro omnis voluptatem incidunt. Cupiditate odio repudiandae vel tempora quibusdam est est. Ut cumque ut enim nulla.', 0, '2014-10-07 21:39:26', '2014-10-07 21:39:26'),
(91, 'accept_confirmed', 11, 22, 'Culpa temporibus quia totam modi ut quisquam voluptas ratione. Vitae eum ducimus illo ipsa libero. Qui qui sit libero eum eveniet vitae. Rerum odio nobis qui hic et.', 1, '2014-10-07 21:39:26', '2014-10-07 21:39:26'),
(92, 'accept_confirmed', 11, 29, 'Illum rerum maiores possimus provident.', 0, '2014-10-07 21:39:26', '2014-10-07 21:39:26'),
(93, 'want_to_accept', 17, 24, 'Vitae autem commodi officiis soluta qui minima nisi qui. Doloribus unde saepe voluptate soluta expedita veniam voluptatem est. Qui quasi voluptatem impedit et numquam sit perferendis.', 1, '2014-10-07 21:39:26', '2014-10-07 21:39:26'),
(94, 'want_to_accept', 26, 18, 'Aut iure eius rerum est id laboriosam. Earum sunt at asperiores impedit cumque.', 1, '2014-10-07 21:39:26', '2014-10-07 21:39:26'),
(95, 'accept_confirmed', 13, 30, 'Amet molestiae eveniet dolor architecto quia esse quidem doloribus. Quia aut autem ipsa quam eaque eos ex voluptate.', 0, '2014-10-07 21:39:26', '2014-10-07 21:39:26'),
(96, 'accept_confirmed', 30, 20, 'Dolores cum tempora voluptas laboriosam maxime dolorum voluptatem. Eius cum rerum sequi doloremque numquam. Consectetur dolores accusantium nesciunt corporis aspernatur qui. Quasi commodi optio blanditiis.', 0, '2014-10-07 21:39:26', '2014-10-07 21:39:26'),
(97, 'want_to_accept', 18, 20, 'Et consequatur repudiandae debitis nobis voluptatem. A quos error quo harum nam. Nihil possimus qui possimus impedit molestiae quidem unde. Et sit aut rerum tempore eum. Itaque reiciendis magni sit deserunt sint in. Magni consequuntur cupiditate omnis. Re', 1, '2014-10-07 21:39:26', '2014-10-07 21:39:26'),
(98, 'want_to_accept', 19, 22, 'Nemo eveniet aut aut nobis. Qui repellat nobis laudantium veniam voluptatem rem.', 1, '2014-10-07 21:39:26', '2014-10-07 21:39:26'),
(99, 'want_to_accept', 8, 29, 'Voluptatem vitae voluptates temporibus. Eum adipisci tempora est quaerat ad dicta natus. Similique assumenda placeat sunt iste quo.', 0, '2014-10-07 21:39:26', '2014-10-07 21:39:26'),
(100, 'accept_confirmed', 23, 5, 'Accusamus ab est dolorum harum exercitationem ipsam. Quasi voluptatem molestiae ut sed quasi ipsa ut. Corporis saepe nihil rerum quibusdam et aliquam. Soluta rem et earum pariatur. Nihil sit doloremque autem numquam incidunt. Ullam est dolorem porro quae ', 0, '2014-10-07 21:39:26', '2014-10-07 21:39:26');

-- --------------------------------------------------------

--
-- Table structure for table `profiles`
--

CREATE TABLE IF NOT EXISTS `profiles` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `image` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `gender` tinyint(1) DEFAULT NULL,
  `bio` text COLLATE utf8_unicode_ci,
  `age` int(11) NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `preferences` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `phone_number` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `social_link` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`),
  UNIQUE KEY `profiles_user_id_unique` (`user_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=33 ;

--
-- Dumping data for table `profiles`
--

INSERT INTO `profiles` (`id`, `user_id`, `image`, `name`, `gender`, `bio`, `age`, `email`, `preferences`, `phone_number`, `social_link`, `created_at`, `updated_at`) VALUES
(1, 1, 'app/img/profile.png', 'Violette', 0, 'Ea animi eveniet eum voluptas rerum. Molestiae sint eos ut voluptatem voluptas corrupti deleniti. Ad non aperiam qui. Ea dolore ratione soluta et provident quas. Odio sed consequatur molestiae ut.', 21, 'graham.hettie@thompson.com', 'Et quisquam veniam in velit cupiditate autem perferendis. Quis iste pariatur architecto error quisquam veniam enim. Ipsa velit eveniet voluptatibus quo et est. Ut porro pariatur in et ut vero a maiores. Nostrum ab occaecati vitae officia ea molestiae est ', '433.437.1559x63000', 'facebook.com/bell.gutmann', '2014-10-07 21:39:19', '2014-10-07 21:39:19'),
(2, 2, 'app/img/profile.png', 'Oran', 1, 'Magni nemo et est eligendi. Vel est et natus non dolorem eaque.', 20, 'efriesen@hotmail.com', 'Soluta beatae a deserunt ratione. Optio enim delectus aperiam consequuntur. Amet veniam quisquam ratione ipsam sapiente quod. Dolorem sed sint et.', '1-012-864-4701', 'facebook.com/schamberger.halle', '2014-10-07 21:39:19', '2014-10-07 21:39:19'),
(3, 3, 'app/img/profile.png', 'Lilliana', 0, 'Libero rerum quia omnis aut ipsam consectetur. Ut esse voluptates ut et dicta necessitatibus modi. Cum pariatur ea minus.', 23, 'daniel.gussie@hotmail.com', 'Doloremque velit sint ipsam dolore et delectus veniam. Quia eos deserunt occaecati doloribus dolorem. Voluptas eveniet aut tempora debitis eveniet consequatur. Eaque temporibus repellendus rerum quidem.', '526.883.3847', 'facebook.com/name86', '2014-10-07 21:39:19', '2014-10-07 21:39:19'),
(4, 4, 'app/img/profile.png', 'Eldon', 1, 'Sapiente a modi autem vel quod dolor exercitationem tempore. Dolorem officia qui unde eligendi cupiditate sunt repudiandae. Voluptas illo consequatur maxime atque. Quas quod minus recusandae delectus eligendi temporibus amet. Natus et distinctio laborum id odio quis quod. Earum maiores alias quis quia odio aut repellat.', 25, 'kenyatta15@spencer.com', 'Ut vero cum et quam repudiandae voluptates velit molestiae. Eum occaecati unde non nobis unde. Illo corrupti soluta ea et sed ut doloribus enim.', '677.737.8107x54957', 'facebook.com/norwood.buckridge', '2014-10-07 21:39:19', '2014-10-07 21:39:19'),
(5, 5, 'app/img/profile.png', 'Maiya', 0, 'Et quo eos illo repellat possimus corrupti. Qui velit tempora ut praesentium dignissimos ut. Et quo quisquam nobis dolorum est ut illum. Enim blanditiis vel sit consequatur culpa.', 25, 'imelda74@gmail.com', 'Temporibus est quo et perspiciatis officia quia nesciunt. Et aperiam ad iste qui odit possimus rerum. Reiciendis architecto eligendi eius.', '1-947-570-6590x8700', 'facebook.com/utorp', '2014-10-07 21:39:19', '2014-10-07 21:39:19'),
(6, 6, 'app/img/profile.png', 'Lucile', 1, 'In et sapiente aperiam dolorum deserunt voluptatibus. Eum voluptatibus dolores in mollitia reprehenderit consequuntur aut enim. Suscipit dolor et velit consequatur.', 24, 'odessa87@wintheiser.net', 'Iusto voluptate et eos similique dolores. Ipsam magnam ea ut id dolorem. Non itaque facere blanditiis est. Esse voluptatibus maxime et officiis. Rerum omnis at vitae sequi hic eaque sunt.', '1-388-623-2786x38131', 'facebook.com/sallie93', '2014-10-07 21:39:19', '2014-10-07 21:39:19'),
(7, 7, 'app/img/profile.png', 'Sarai', 0, 'Sed quia quia dolorum nam quia aliquid suscipit. Voluptatum molestiae vero officiis aliquid libero aut et. Et temporibus eligendi rerum quo nihil ut. Reiciendis mollitia nihil amet est error consequuntur.', 23, 'spinka.alden@gmail.com', 'Dignissimos sed iure iure. Qui quidem possimus unde aut aut aliquid vero. Ut sit qui labore itaque sed. Aut ipsam cupiditate debitis aut qui ut in. Eum earum libero saepe quis est dolorum voluptate.', '1-118-244-6911x18634', 'facebook.com/nhessel', '2014-10-07 21:39:19', '2014-10-07 21:39:19'),
(8, 8, 'app/img/profile.png', 'Morton', 0, 'Aut optio sunt ut aut et. Laboriosam quisquam voluptatem error ea veritatis. Libero natus eveniet temporibus rerum. Sed corrupti quia exercitationem. Omnis nostrum vero sit. Consequatur illum voluptatem voluptas ducimus facilis occaecati rerum.', 23, 'brakus.dakota@klocko.com', 'Est error dolor quod. Nesciunt unde repudiandae ducimus ullam velit consectetur quia. Cum magnam magnam quia doloribus rerum necessitatibus. Qui odio delectus officiis ipsa placeat aliquid. Omnis eaque est ut voluptates deleniti. Quasi incidunt accusamus ', '599.475.4373x8910', 'facebook.com/kristoffer89', '2014-10-07 21:39:19', '2014-10-07 21:39:19'),
(9, 9, 'app/img/profile.png', 'Tianna', 1, 'Et exercitationem harum doloremque consequatur est soluta. Libero ut assumenda possimus alias consequatur dolorem quas. Veniam facere quia dolor non. Aut consequatur quidem et dignissimos esse ab ipsum.', 24, 'marina30@hotmail.com', 'Porro voluptas quia eum tenetur praesentium. Voluptatibus et deserunt blanditiis excepturi voluptate eum nesciunt.', '154-251-6829x409', 'facebook.com/abernathy.adrian', '2014-10-07 21:39:19', '2014-10-07 21:39:19'),
(10, 10, 'app/img/profile.png', 'Nia', 1, 'Quod odit cumque numquam modi magnam aut aliquam. Animi officiis doloremque perferendis quod. Voluptas atque aut et adipisci laudantium sapiente. Laborum occaecati iusto est debitis cumque consequatur maxime odio.', 19, 'parker.ottis@yahoo.com', 'Repellat repellendus non quam ut voluptatem officiis. Cupiditate facere et iste et culpa quas voluptas delectus. Dolores voluptates et sed tenetur ipsa veritatis voluptas et. Enim similique repudiandae neque ratione.', '(105)700-1940x541', 'facebook.com/chansen', '2014-10-07 21:39:19', '2014-10-07 21:39:19'),
(11, 11, 'app/img/profile.png', 'Daija', 0, 'Et quos quasi nam fugit totam velit non. Sit quia aut aut doloremque minima. Consectetur rem dolor et minima corporis qui. Ad sequi asperiores voluptate ex id beatae.', 25, 'kling.gus@schmeler.com', 'Repudiandae rerum qui aut earum doloribus deleniti tempora. In consequatur debitis aperiam repellat. Quis omnis cum vel quia impedit consequatur.', '290-724-8198x42150', 'facebook.com/rosemary78', '2014-10-07 21:39:19', '2014-10-07 21:39:19'),
(12, 12, 'app/img/profile.png', 'Giovani', 0, 'Minus minima at voluptatem. Officia autem tempora nobis aut dolores provident. Aliquam quod ab autem voluptas. Aliquam nobis vitae amet itaque qui voluptatem.', 20, 'savannah.wiza@kuhnconnelly.com', 'Error quis quidem officia voluptatibus sequi. Hic et debitis autem nesciunt sunt deleniti non non. Voluptas iste dolore laboriosam ducimus eos sit sapiente. Ut ex vel maiores. Quam quos aut quasi quo.', '446.809.4652x64942', 'facebook.com/fkulas', '2014-10-07 21:39:19', '2014-10-07 21:39:19'),
(13, 13, 'app/img/profile.png', 'Korey', 1, 'Minus ut ex eaque eligendi saepe. Unde est pariatur eligendi repellendus. Voluptate vero sequi autem delectus debitis itaque quia.', 25, 'jamey.lockman@dickens.info', 'Consequatur commodi tempora quia nostrum in. Nihil in molestiae dolorem beatae alias et. Natus enim ut quia id laboriosam non.', '061.006.0456', 'facebook.com/htillman', '2014-10-07 21:39:19', '2014-10-07 21:39:19'),
(14, 14, 'app/img/profile.png', 'Kaycee', 1, 'Dolore et amet recusandae ullam consequatur iure delectus. Nulla molestiae est odio consequatur. Nihil totam accusantium voluptate deserunt assumenda.', 21, 'lyla.paucek@hotmail.com', 'Fugit mollitia dicta deleniti voluptas sed cumque laboriosam. Ad est voluptatem quisquam voluptatibus voluptatum ipsam soluta. Odit tempora voluptate cupiditate unde.', '292.643.8821x846', 'facebook.com/haleigh.ullrich', '2014-10-07 21:39:19', '2014-10-07 21:39:19'),
(15, 15, 'app/img/profile.png', 'Paige', 1, 'Voluptatibus sunt iste quisquam fugit. Repellendus ea ut amet error reiciendis. Ipsa dolorum exercitationem nesciunt ducimus exercitationem. Qui ad omnis cumque culpa incidunt sequi veniam.', 22, 'cordie23@hayes.com', 'Sunt aut et eum voluptatibus doloribus. Quia maxime consequatur totam eos. In sed eos minima et. Et sit veritatis ullam repudiandae laudantium quod voluptate.', '09347291660', 'facebook.com/ratke.ines', '2014-10-07 21:39:19', '2014-10-07 21:39:19'),
(16, 16, 'app/img/profile.png', 'Nyah', 1, 'Ducimus dolor deleniti deleniti nobis quasi quia quas. Occaecati nostrum quos ut accusantium consectetur qui eligendi suscipit. Rerum eum magni officia.', 23, 'crona.muriel@hotmail.com', 'Sint molestiae voluptas amet ex. Quis qui accusamus impedit distinctio pariatur magnam qui. Ut esse et autem quibusdam est iusto.', '02130258293', 'facebook.com/arlie.crooks', '2014-10-07 21:39:19', '2014-10-07 21:39:19'),
(17, 17, 'app/img/profile.png', 'Catalina', 0, 'Dolor qui accusantium ut est doloremque. Voluptatem et dicta dolores expedita doloribus sed sed. Et illum deleniti velit et ea. Qui voluptatibus sint quia similique similique. Qui consequuntur asperiores aut inventore similique.', 22, 'baumbach.corene@gmail.com', 'Et cumque rem doloremque eum omnis. Corporis tempore voluptas quisquam aliquid. Quia magni est ut eum. Exercitationem laboriosam dignissimos et omnis explicabo at.', '103-861-8791', 'facebook.com/lorenzo.kassulke', '2014-10-07 21:39:19', '2014-10-07 21:39:19'),
(18, 18, 'app/img/profile.png', 'Bernhard', 1, 'Perferendis ex voluptates distinctio qui suscipit soluta. Temporibus velit rem voluptate nisi sit vel. Aliquid mollitia iste necessitatibus et totam animi voluptatem commodi. Dolor quis eaque impedit.', 22, 'carolyn.kovacek@hotmail.com', 'Porro non qui iste soluta. Quasi qui numquam ratione eum qui sint. Quam id asperiores et aliquam laudantium. Velit sunt ut assumenda recusandae commodi repudiandae aut.', '233.692.2930', 'facebook.com/giovani33', '2014-10-07 21:39:19', '2014-10-07 21:39:19'),
(19, 19, 'app/img/profile.png', 'Wilma', 1, 'Aut quos consequatur voluptatibus non et rem ut. Itaque ullam exercitationem possimus architecto. Perspiciatis eaque illo rerum et sed quae voluptatem. Optio vero neque illum at ex eos pariatur delectus. Sequi voluptas eius nam. Quaerat neque suscipit facere.', 22, 'harvey.coby@hotmail.com', 'Tempore et nisi est. Beatae doloremque dolor et ab sit aliquid qui beatae. Quae praesentium fuga ad modi maiores dolor rem.', '1-126-974-7003', 'facebook.com/kgrimes', '2014-10-07 21:39:19', '2014-10-07 21:39:19'),
(20, 20, 'app/img/profile.png', 'Dusty', 0, 'Ut saepe iusto magni. Animi ut vero aut neque ut. Maiores sed omnis repellat dicta. Eum ratione maxime quia aperiam error vel voluptatum rerum. Dolor sunt amet libero quisquam culpa sed.', 25, 'johnston.callie@kshlerin.com', 'Optio accusantium quos nostrum. Distinctio qui quo qui est enim rerum quibusdam. Quia unde modi quia exercitationem. Ad ipsa iure est in consequatur labore nihil.', '795-301-0037x83534', 'facebook.com/geovanny.pfeffer', '2014-10-07 21:39:19', '2014-10-07 21:39:19'),
(21, 21, 'app/img/profile.png', 'Aurelia', 0, 'Libero quod alias in doloribus totam blanditiis. Ut autem dicta repudiandae et asperiores. Enim quidem voluptatibus nihil et voluptatum.', 21, 'nolan.anais@pagacbarton.net', 'Deserunt cupiditate velit dolores exercitationem nisi. Est magni at et ad sint. Ut ut blanditiis et doloribus rem molestiae. Sit natus rem atque labore.', '1-078-408-0106', 'facebook.com/lee.upton', '2014-10-07 21:39:19', '2014-10-07 21:39:19'),
(22, 22, 'app/img/profile.png', 'Ibrahim', 0, 'Quae delectus dolores aut earum. Maxime aut placeat alias nostrum est beatae. Eum repellendus deleniti sunt minus dolorem. Et deleniti illo accusantium voluptatem optio ut. Rerum beatae maiores tempora voluptas. Nostrum incidunt sed eveniet inventore. Sit et doloremque consequatur exercitationem vitae.', 21, 'ckutch@gmail.com', 'Suscipit doloremque dignissimos doloremque tempora. At consequatur non quo nemo dolorum aut sit. Dolorem et molestiae labore ullam dolores voluptates voluptas.', '235-693-1196', 'facebook.com/terry.veronica', '2014-10-07 21:39:19', '2014-10-07 21:39:19'),
(23, 23, 'app/img/profile.png', 'Destany', 1, 'Neque expedita at et consequatur. Non hic iste fuga quaerat nihil deserunt rem. Nihil et aut enim placeat hic cumque. Illum soluta quas atque sequi. Deserunt officiis modi mollitia.', 25, 'bertrand.zemlak@yahoo.com', 'Exercitationem sequi a fuga illum quia iste. Recusandae doloremque aspernatur a iusto in est et. Pariatur ducimus cum ut velit laudantium sit sint. Est cumque suscipit est corporis et commodi. Exercitationem quibusdam harum pariatur sed.', '743-201-0447x2766', 'facebook.com/qschimmel', '2014-10-07 21:39:19', '2014-10-07 21:39:19'),
(24, 24, 'app/img/profile.png', 'Tristian', 1, 'Ea reprehenderit sed et veritatis consequatur asperiores. Velit tempore assumenda perspiciatis porro dolor. Architecto dolores quibusdam dolorum qui neque exercitationem. Numquam optio ut voluptate.', 18, 'cbeatty@hotmail.com', 'Quaerat doloremque odio ut aut labore qui velit. Fugit dolore aliquam cumque tenetur dolores. Voluptatem nisi explicabo perspiciatis.', '1-175-704-3003', 'facebook.com/zachariah45', '2014-10-07 21:39:19', '2014-10-07 21:39:19'),
(25, 25, 'app/img/profile.png', 'Andrew', 1, 'Ut perspiciatis eos voluptatibus deserunt. Tenetur quasi praesentium aut eius velit aut. Qui cum vero atque est.', 23, 'owalker@schmittfeil.com', 'Consequatur voluptate omnis accusamus praesentium et explicabo. Quibusdam dolores dolores magni. Nemo explicabo ut voluptatem facere laudantium ipsam. Consectetur non magni molestiae quaerat non qui. Natus ut nemo id soluta qui ex sint.', '+93(8)7955527142', 'facebook.com/kuhn.anahi', '2014-10-07 21:39:19', '2014-10-07 21:39:19'),
(26, 26, 'app/img/profile.png', 'Kenya', 0, 'Dolorem ea est ex nihil voluptatem dolor nemo. Ut distinctio corrupti dolorem tenetur earum optio. At libero aut consectetur et. Eligendi error veritatis corrupti.', 19, 'emilio18@yahoo.com', 'Quia fugit a consequatur fugit qui nostrum eum dolorem. Dolor nihil alias velit in. Nulla iusto ex error ipsa et. Impedit suscipit quo voluptates vel.', '462.570.6942x06330', 'facebook.com/edwardo.stroman', '2014-10-07 21:39:19', '2014-10-07 21:39:19'),
(27, 27, 'app/img/profile.png', 'Rebecca', 1, 'Natus veniam assumenda velit. Illum ut eaque similique id qui eum. Nemo unde hic minus. Qui suscipit voluptate voluptatem qui blanditiis. Ratione minus voluptates nostrum totam velit vitae recusandae. Eveniet quasi incidunt dolore nesciunt laborum veritatis non. Dolores sed eos dolor nisi magnam provident voluptatibus.', 22, 'beatty.jaden@padbergschroeder.biz', 'Voluptatibus quod doloribus eius velit. Sint aut asperiores debitis eos commodi et quia. Minus et et minima in ut inventore vitae. Molestiae autem nam tempora aut. Dolore esse sit quas. Ipsum id est ducimus rerum aliquid dolor minus animi.', '04774918916', 'facebook.com/schimmel.earnest', '2014-10-07 21:39:19', '2014-10-07 21:39:19'),
(28, 28, 'app/img/profile.png', 'Spencer', 0, 'Aperiam odio enim labore vel eum consequatur eos dolorum. Incidunt ut incidunt blanditiis officiis. Ut labore praesentium omnis ipsum et qui aperiam.', 25, 'harris.ervin@watsicagreenholt.info', 'Qui placeat et culpa non. Soluta et illum et debitis qui quisquam.', '004-379-7827x554', 'facebook.com/hilll.ryley', '2014-10-07 21:39:19', '2014-10-07 21:39:19'),
(29, 29, 'app/img/profile.png', 'Anderson', 0, 'Culpa ut voluptatum voluptatum sit saepe adipisci ipsum. Soluta deserunt corrupti non soluta ex. Facilis aliquam quidem illo quidem architecto. Nisi quis ut ipsum doloribus et corporis ad omnis. Voluptas porro eos praesentium eveniet. Sit porro explicabo laborum magnam alias architecto voluptate.', 20, 'charlotte33@kub.org', 'Libero ab minus laudantium quia rerum quia tenetur laborum. At porro vel nostrum tenetur incidunt. Eaque non quos tempore sunt. Aut cumque dignissimos omnis autem molestias. Sapiente praesentium provident magni repudiandae quibusdam eos quos et. Ab sunt i', '199-948-0914x755', 'facebook.com/lincoln.crist', '2014-10-07 21:39:19', '2014-10-07 21:39:19'),
(30, 30, 'app/img/profile.png', 'Cortney', 1, 'Dolores commodi tenetur saepe voluptatum nostrum exercitationem. Enim magnam omnis esse ut doloremque. Molestias officiis quibusdam fugit ipsa et qui et.', 24, 'marlin.haag@gmail.com', 'Quis deserunt et et necessitatibus. Corrupti voluptatum nostrum recusandae vero ab. Qui voluptas repellendus maiores nulla enim quibusdam sit.', '1-644-793-8521x94541', 'facebook.com/kathryne.predovic', '2014-10-07 21:39:20', '2014-10-07 21:39:20'),
(31, 31, 'app/img/profile.png', 'Letitia', 1, 'Veniam quasi error velit voluptatem. Quasi eius est tenetur praesentium numquam. Et sit dolor recusandae numquam. Repudiandae aut illum ea nostrum tempore dolores beatae.', 22, 'justyn72@yahoo.com', 'Deleniti pariatur ad nemo ut cum ut cum. Quasi est aut ea itaque maxime cumque nobis. Est reiciendis quo autem perspiciatis et quis sit. Expedita et aut quod dolores facere est eligendi. Ut ipsum numquam consequuntur aut qui aut. Dolorem provident eaque e', '564-949-8349', 'facebook.com/igerlach', '2014-10-07 21:39:20', '2014-10-07 21:39:20'),
(32, 32, 'app/img/profile.png', 'Isaiah', 1, 'Officiis dicta sit quo suscipit nihil voluptate. Ea impedit a deleniti eos consequatur aliquid. Fuga voluptatibus quia cum et eum quae.', 23, 'athompson@yahoo.com', 'Vero error nemo perspiciatis non nobis id ex. Earum aut doloremque porro eligendi non repellat sed. Rem alias dolores est labore id. Natus veniam et ducimus et. Distinctio nisi vero quia eum odit rem. Ut hic recusandae quasi et et neque. Eum eius dolores ', '09938637118', 'facebook.com/terence29', '2014-10-07 21:39:20', '2014-10-07 21:39:20');

-- --------------------------------------------------------

--
-- Table structure for table `throttle`
--

CREATE TABLE IF NOT EXISTS `throttle` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL,
  `ip_address` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `attempts` int(11) NOT NULL DEFAULT '0',
  `suspended` tinyint(1) NOT NULL DEFAULT '0',
  `banned` tinyint(1) NOT NULL DEFAULT '0',
  `last_attempt_at` timestamp NULL DEFAULT NULL,
  `suspended_at` timestamp NULL DEFAULT NULL,
  `banned_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `throttle_user_id_index` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `permissions` text COLLATE utf8_unicode_ci,
  `activated` tinyint(1) NOT NULL DEFAULT '0',
  `activation_code` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `activated_at` timestamp NULL DEFAULT NULL,
  `last_login` timestamp NULL DEFAULT NULL,
  `persist_code` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `reset_password_code` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `first_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `last_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`),
  UNIQUE KEY `users_username_unique` (`username`),
  KEY `users_activation_code_index` (`activation_code`),
  KEY `users_reset_password_code_index` (`reset_password_code`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=33 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `permissions`, `activated`, `activation_code`, `activated_at`, `last_login`, `persist_code`, `reset_password_code`, `first_name`, `last_name`, `created_at`, `updated_at`) VALUES
(1, 'yichen', 'yichen@yichen.com', '$2y$10$YrDrHe6lDaBxCLJ3aXCYieQ3mvw/VGyWC2/wxmy/TMPh5LCv0r4Xe', NULL, 1, NULL, NULL, NULL, NULL, NULL, 'Yi Chen', 'Zhu', '2014-10-07 21:39:15', '2014-10-07 21:39:15'),
(2, 'jack', 'jack@jack.com', '$2y$10$trsLhMhGznyXv1oph.oFV.IANCUEYOIZEMWUW4WpB6IEgZ/oWgzxq', NULL, 1, NULL, NULL, NULL, NULL, NULL, 'Jack', 'Yiu', '2014-10-07 21:39:15', '2014-10-07 21:39:15'),
(3, 'burnice76', 'wunsch.skyla@quigley.info', '$2y$10$0g2Vk1M0uDVmSt8F3vWlNOAZloiNK.xxk9.VA5QIkt7BKaPNfjKWy', NULL, 1, NULL, NULL, NULL, NULL, NULL, 'Nayeli', 'Kuphal', '2014-10-07 21:39:16', '2014-10-07 21:39:16'),
(4, 'hans93', 'augustine87@bernierzemlak.com', '$2y$10$RQ9h6jbb5tzi.dCxNGzXGOIICFuY5t.LcG1jjeihl6F0/g7kSQuiy', NULL, 1, NULL, NULL, NULL, NULL, NULL, 'Francesco', 'Hammes', '2014-10-07 21:39:16', '2014-10-07 21:39:16'),
(5, 'klocko.twila', 'jerel75@hotmail.com', '$2y$10$dbFYtPx3sHiQM8D/CmYYsuvq8u.1Z7zIV5xvTA4bZnAIyFKyArag.', NULL, 1, NULL, NULL, NULL, NULL, NULL, 'Maynard', 'Cronin', '2014-10-07 21:39:16', '2014-10-07 21:39:16'),
(6, 'atreutel', 'kklocko@hotmail.com', '$2y$10$QpX/R32eeuWeROYlXBqAoufJM5/Af1sGpHgQdv1WCv.Y.uB/dQPwK', NULL, 1, NULL, NULL, NULL, NULL, NULL, 'Shaniya', 'Mante', '2014-10-07 21:39:16', '2014-10-07 21:39:16'),
(7, 'turner.shaniya', 'rohan.bridgette@gmail.com', '$2y$10$c7qhsDBhPqO/XFMlxKoCOOqGs0T5Fa.JlE3lGlHyV3suLVL5.f19C', NULL, 1, NULL, NULL, NULL, NULL, NULL, 'Zackery', 'Beer', '2014-10-07 21:39:16', '2014-10-07 21:39:16'),
(8, 'erick12', 'goodwin.kassandra@gmail.com', '$2y$10$mzXgXAPZ7wCDcKX4zlMDOeXRJd5V5C0qga9cQPPgsngjFIfEwJW4i', NULL, 1, NULL, NULL, NULL, NULL, NULL, 'Madge', 'Hoppe', '2014-10-07 21:39:16', '2014-10-07 21:39:16'),
(9, 'imani20', 'tschneider@effertzbruen.com', '$2y$10$FN4aFF148p/Miih0EQG6f.4SGos4hCKRTdHTVId2gjEyw05WK.EXu', NULL, 1, NULL, NULL, NULL, NULL, NULL, 'Conor', 'Frami', '2014-10-07 21:39:16', '2014-10-07 21:39:16'),
(10, 'tierra.willms', 'reichel.lorenz@feestlangosh.com', '$2y$10$YOT4VWd3CRCCCAy4TqkabeTBgoeawUDNi0UdSFGsvD2rQCpsvLJ1K', NULL, 1, NULL, NULL, NULL, NULL, NULL, 'Breanne', 'King', '2014-10-07 21:39:16', '2014-10-07 21:39:16'),
(11, 'hobart77', 'destinee.kertzmann@yahoo.com', '$2y$10$rZTuRAa0W.gYycU5OzsB9um3Fudfo9J5VUSPPasCaSof9sBLqZL7G', NULL, 1, NULL, NULL, NULL, NULL, NULL, 'Bobbie', 'Pouros', '2014-10-07 21:39:16', '2014-10-07 21:39:16'),
(12, 'cconn', 'vcruickshank@harrisschumm.net', '$2y$10$XSE18MuokcV/meU7Cl3ZV.99eneu1edV56NHoUH34MaexTvnpVNdG', NULL, 1, NULL, NULL, NULL, NULL, NULL, 'Leland', 'Treutel', '2014-10-07 21:39:17', '2014-10-07 21:39:17'),
(13, 'brycen08', 'samir.rau@yahoo.com', '$2y$10$CBopx6ClI9eIMfMndB1/MOc21E7VymzKQJfqfGPyH7rGiBWLQW/qu', NULL, 1, NULL, NULL, NULL, NULL, NULL, 'Andres', 'Kilback', '2014-10-07 21:39:17', '2014-10-07 21:39:17'),
(14, 'amara.crist', 'juanita.mitchell@handstiedemann.com', '$2y$10$1TfJlWbIuq5IBUg0VFdG0usY9yLnhvyDfZLDbL4FnFDlh4u72hbZ6', NULL, 1, NULL, NULL, NULL, NULL, NULL, 'Krystina', 'Becker', '2014-10-07 21:39:17', '2014-10-07 21:39:17'),
(15, 'halvorson.brady', 'horace60@jerde.info', '$2y$10$M8WTP8KD5CXEylm7loQ8KOPrk5hEOI1RKceQh8KZ0KiKjNJ5pJkOW', NULL, 1, NULL, NULL, NULL, NULL, NULL, 'Lurline', 'Mitchell', '2014-10-07 21:39:17', '2014-10-07 21:39:17'),
(16, 'klittle', 'moses.wehner@yahoo.com', '$2y$10$DxH7y5KrKBYhky/SBTzFlu.CdCs1jVIRwG6auJudrYyOa3cS1tOQC', NULL, 1, NULL, NULL, NULL, NULL, NULL, 'Noah', 'Schultz', '2014-10-07 21:39:17', '2014-10-07 21:39:17'),
(17, 'maritza26', 'ikessler@strosinwilliamson.info', '$2y$10$5/wlI/XdwDyZtFYJjwuLfehIHomqDbmEP.oskvutPKXoFkxajXWgm', NULL, 1, NULL, NULL, NULL, NULL, NULL, 'Kianna', 'Nolan', '2014-10-07 21:39:17', '2014-10-07 21:39:17'),
(18, 'wkreiger', 'cummerata.milo@bernier.com', '$2y$10$xjWiKytiXMZk4fJ1YnZUs.Cwfuye9CEzVRWNR2Va/wu/TUqpfHDeu', NULL, 1, NULL, NULL, NULL, NULL, NULL, 'Scottie', 'Jacobs', '2014-10-07 21:39:17', '2014-10-07 21:39:17'),
(19, 'green.kole', 'hilario67@yahoo.com', '$2y$10$fx8eQw5uL/kN/aYsGn5IxuhPwxWwePs5zwCYRtE4pWe2cBpb6qHna', NULL, 1, NULL, NULL, NULL, NULL, NULL, 'Evert', 'Sanford', '2014-10-07 21:39:17', '2014-10-07 21:39:17'),
(20, 'suzanne.effertz', 'itillman@gmail.com', '$2y$10$SeUVmwDCjCzdxgSPpGOfSO1a2UhKw8TfjrnzVYI/C30drM7mAQwKO', NULL, 1, NULL, NULL, NULL, NULL, NULL, 'Clementine', 'Moen', '2014-10-07 21:39:17', '2014-10-07 21:39:17'),
(21, 'akeem87', 'jace.conroy@kuhnheller.biz', '$2y$10$4Yl9OyCzAvIjoqJrHwbcc.yaQPm7FxWB5zwJEOYp3Y.FEBODOkfNO', NULL, 1, NULL, NULL, NULL, NULL, NULL, 'Gia', 'Wiza', '2014-10-07 21:39:18', '2014-10-07 21:39:18'),
(22, 'saul21', 'porter28@yahoo.com', '$2y$10$W0vFkSPfCIRtGNZ9ie6XVuYP5nduYSJrprySJqWjEzt/DzDrHf0sC', NULL, 1, NULL, NULL, NULL, NULL, NULL, 'Felipa', 'Carter', '2014-10-07 21:39:18', '2014-10-07 21:39:18'),
(23, 'sipes.wallace', 'schamberger.vance@hotmail.com', '$2y$10$P0IQlu/xgIvCZ6z0S.7gdec7pIGsFLszYH7ZJL872PgBS9rPqKmYC', NULL, 1, NULL, NULL, NULL, NULL, NULL, 'Baylee', 'Harris', '2014-10-07 21:39:18', '2014-10-07 21:39:18'),
(24, 'jean45', 'ndaugherty@hessel.com', '$2y$10$WurRsqrNfwvBHLPooONLp.Sm9.Gi7SwOATi3ToB2NRPzKgM2lk5zm', NULL, 1, NULL, NULL, NULL, NULL, NULL, 'Shawna', 'Krajcik', '2014-10-07 21:39:18', '2014-10-07 21:39:18'),
(25, 'clark53', 'gottlieb.brisa@gmail.com', '$2y$10$sTOUMSttoSsSFFnKF8.B/uFaTqXGm7WSr86.g.BvurZsIItM8CJCa', NULL, 1, NULL, NULL, NULL, NULL, NULL, 'Althea', 'Davis', '2014-10-07 21:39:18', '2014-10-07 21:39:18'),
(26, 'destany87', 'bridgette.zulauf@raujakubowski.com', '$2y$10$W8q.RaDeBfdlB.lezsKmnO2lW.ID7Fundd6ncifYp1R5LUGojOQk2', NULL, 1, NULL, NULL, NULL, NULL, NULL, 'Bart', 'Yost', '2014-10-07 21:39:18', '2014-10-07 21:39:18'),
(27, 'clemens01', 'madisyn54@hotmail.com', '$2y$10$SqzNEwzMID5GX8Y8rYgtd.KptUEhX73FRV1S2nAJCx2o4DEQ6mP2i', NULL, 1, NULL, NULL, NULL, NULL, NULL, 'Wallace', 'Maggio', '2014-10-07 21:39:18', '2014-10-07 21:39:18'),
(28, 'victor.metz', 'micheal37@gmail.com', '$2y$10$tqED5i4i6jNrUt3mcblHnuU5Y45nAuJ/pgylccM6IPsReYRUiFcM.', NULL, 1, NULL, NULL, NULL, NULL, NULL, 'Jaylen', 'Douglas', '2014-10-07 21:39:18', '2014-10-07 21:39:18'),
(29, 'rosella.mcclure', 'monique04@gmail.com', '$2y$10$q5yNNwnjkCftfYrUVJY61OSGyZZekT.evAXZump6iWud/G/OiTPN6', NULL, 1, NULL, NULL, NULL, NULL, NULL, 'Maya', 'Keeling', '2014-10-07 21:39:18', '2014-10-07 21:39:18'),
(30, 'daphne20', 'ffahey@fritsch.com', '$2y$10$YwJMQHiZqqDRJiOKGbyI4.B/IpTYmV0T0WMyZ9rSQTlMkEfqTQC36', NULL, 1, NULL, NULL, NULL, NULL, NULL, 'Diana', 'Erdman', '2014-10-07 21:39:19', '2014-10-07 21:39:19'),
(31, 'markus05', 'jhagenes@cronin.net', '$2y$10$HnzsH1MkErxYwuiAlZK/jOh1U/aBVPeHIHt6hSeIHXSJVp0iY8N/u', NULL, 1, NULL, NULL, NULL, NULL, NULL, 'Nona', 'Ullrich', '2014-10-07 21:39:19', '2014-10-07 21:39:19'),
(32, 'allene.botsford', 'conrad70@gmail.com', '$2y$10$t3xjk1T7gNs1Y8yM2DxQmOQfAICzmx/7OuNa2eeotoBEa1K0QO8sG', NULL, 1, NULL, NULL, NULL, NULL, NULL, 'Marquis', 'Simonis', '2014-10-07 21:39:19', '2014-10-07 21:39:19');

-- --------------------------------------------------------

--
-- Table structure for table `users_groups`
--

CREATE TABLE IF NOT EXISTS `users_groups` (
  `user_id` int(10) unsigned NOT NULL,
  `group_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`user_id`,`group_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `activities_joined`
--
ALTER TABLE `activities_joined`
  ADD CONSTRAINT `activities_joined_activity_id_foreign` FOREIGN KEY (`activity_id`) REFERENCES `activities` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_activity_id_foreign` FOREIGN KEY (`activity_id`) REFERENCES `activities` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `notifications_activities`
--
ALTER TABLE `notifications_activities`
  ADD CONSTRAINT `notifications_activities_activity_id_foreign` FOREIGN KEY (`activity_id`) REFERENCES `activities` (`id`) ON DELETE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
