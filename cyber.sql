-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1
-- Время создания: Мар 15 2025 г., 19:50
-- Версия сервера: 10.1.19-MariaDB
-- Версия PHP: 5.6.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `cyber`
--

-- --------------------------------------------------------

--
-- Структура таблицы `gpus`
--

CREATE TABLE `gpus` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL COMMENT 'Название видеокарты',
  `brand` varchar(50) NOT NULL COMMENT 'Производитель (например, NVIDIA, AMD)',
  `model` varchar(50) DEFAULT NULL COMMENT 'Модель (например, RTX 3080, RX 6800 XT)',
  `memory_size` int(11) NOT NULL COMMENT 'Объем памяти (в МБ)',
  `chip_frequency` int(11) NOT NULL COMMENT 'Частота чипа (в МГц)',
  `release_year` int(11) DEFAULT NULL COMMENT 'Год выпуска',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `gpus`
--

INSERT INTO `gpus` (`id`, `name`, `brand`, `model`, `memory_size`, `chip_frequency`, `release_year`, `created_at`) VALUES
(1, 'GeForce RTX 4090', 'NVIDIA', 'RTX 4090', 24576, 2235, 2022, '2025-01-26 18:15:53'),
(2, 'GeForce RTX 4080', 'NVIDIA', 'RTX 4080', 16384, 2205, 2022, '2025-01-26 18:15:53'),
(3, 'GeForce RTX 4070 Ti', 'NVIDIA', 'RTX 4070 Ti', 12288, 2520, 2023, '2025-01-26 18:15:53'),
(4, 'GeForce RTX 3060 Ti', 'NVIDIA', 'RTX 3060 Ti', 8192, 1770, 2020, '2025-01-26 18:15:53'),
(5, 'GeForce GTX 1660 Ti', 'NVIDIA', 'GTX 1660 Ti', 6144, 1770, 2019, '2025-01-26 18:15:53'),
(6, 'GeForce RTX 3050', 'NVIDIA', 'RTX 3050', 8192, 1800, 2022, '2025-01-26 18:15:53'),
(7, 'GeForce RTX 3090', 'NVIDIA', 'RTX 3090', 24576, 1700, 2020, '2025-01-26 18:15:53'),
(8, 'GeForce RTX 3080 Ti', 'NVIDIA', 'RTX 3080 Ti', 12288, 1665, 2021, '2025-01-26 18:15:53'),
(9, 'GeForce GTX 1650', 'NVIDIA', 'GTX 1650', 4096, 1485, 2019, '2025-01-26 18:15:53'),
(10, 'GeForce GTX 1060', 'NVIDIA', 'GTX 1060', 6144, 1708, 2016, '2025-01-26 18:15:53'),
(11, 'GeForce RTX 4070', 'NVIDIA', 'RTX 4070', 12288, 2400, 2023, '2025-01-26 18:15:53'),
(12, 'GeForce GTX 1080 Ti', 'NVIDIA', 'GTX 1080 Ti', 11264, 1582, 2017, '2025-01-26 18:15:53'),
(13, 'GeForce GTX 1070 Ti', 'NVIDIA', 'GTX 1070 Ti', 8192, 1607, 2017, '2025-01-26 18:15:53'),
(14, 'GeForce GTX 1080', 'NVIDIA', 'GTX 1080', 8192, 1607, 2016, '2025-01-26 18:15:53'),
(15, 'GeForce GTX 980 Ti', 'NVIDIA', 'GTX 980 Ti', 6144, 1000, 2015, '2025-01-26 18:15:53'),
(16, 'GeForce GTX 970', 'NVIDIA', 'GTX 970', 4096, 1050, 2014, '2025-01-26 18:15:53'),
(17, 'GeForce RTX 3060', 'NVIDIA', 'RTX 3060', 12288, 1777, 2021, '2025-01-26 18:15:53'),
(18, 'GeForce GTX 780 Ti', 'NVIDIA', 'GTX 780 Ti', 3072, 875, 2013, '2025-01-26 18:15:53'),
(19, 'GeForce GTX 750 Ti', 'NVIDIA', 'GTX 750 Ti', 2048, 1020, 2014, '2025-01-26 18:15:53'),
(20, 'GeForce GTX 680', 'NVIDIA', 'GTX 680', 2048, 1058, 2012, '2025-01-26 18:15:53'),
(21, 'GeForce RTX 2080 Ti', 'NVIDIA', 'RTX 2080 Ti', 11264, 1545, 2018, '2025-01-26 18:15:53'),
(22, 'GeForce RTX 2080 Super', 'NVIDIA', 'RTX 2080 Super', 8192, 1650, 2019, '2025-01-26 18:15:53'),
(23, 'GeForce GTX 950', 'NVIDIA', 'GTX 950', 2048, 1024, 2015, '2025-01-26 18:15:53'),
(24, 'GeForce GTX 745', 'NVIDIA', 'GTX 745', 4096, 1250, 2015, '2025-01-26 18:15:53'),
(25, 'GeForce GT 730', 'NVIDIA', 'GT 730', 2048, 902, 2014, '2025-01-26 18:15:53'),
(26, 'GeForce GTX 1070', 'NVIDIA', 'GTX 1070', 8192, 1607, 2016, '2025-01-26 18:15:53'),
(27, 'GeForce GTX 1050 Ti', 'NVIDIA', 'GTX 1050 Ti', 4096, 1290, 2016, '2025-01-26 18:15:53'),
(28, 'GeForce GTX 1650 Super', 'NVIDIA', 'GTX 1650 Super', 4096, 1530, 2019, '2025-01-26 18:15:53'),
(29, 'GeForce GTX 960', 'NVIDIA', 'GTX 960', 4096, 1127, 2015, '2025-01-26 18:15:53'),
(160, 'Radeon RX 6900 XT', 'AMD', 'RX 6900 XT', 16384, 2250, 2020, '2025-01-26 18:18:03'),
(161, 'Radeon RX 6800 XT', 'AMD', 'RX 6800 XT', 16384, 2250, 2020, '2025-01-26 18:18:03'),
(162, 'Radeon RX 6800', 'AMD', 'RX 6800', 16384, 2100, 2020, '2025-01-26 18:18:03'),
(163, 'Radeon RX 6700 XT', 'AMD', 'RX 6700 XT', 12288, 2581, 2021, '2025-01-26 18:18:03'),
(164, 'Radeon RX 6600 XT', 'AMD', 'RX 6600 XT', 8192, 2589, 2021, '2025-01-26 18:18:03'),
(165, 'Radeon RX 6600', 'AMD', 'RX 6600', 8192, 2044, 2021, '2025-01-26 18:18:03'),
(166, 'Radeon RX 5700 XT', 'AMD', 'RX 5700 XT', 8192, 1905, 2019, '2025-01-26 18:18:03'),
(167, 'Radeon RX 5700', 'AMD', 'RX 5700', 8192, 1750, 2019, '2025-01-26 18:18:03'),
(168, 'Radeon RX 5600 XT', 'AMD', 'RX 5600 XT', 6144, 1560, 2020, '2025-01-26 18:18:03'),
(169, 'Radeon RX 5500 XT', 'AMD', 'RX 5500 XT', 4096, 1845, 2020, '2025-01-26 18:18:03'),
(170, 'Radeon RX 580', 'AMD', 'RX 580', 8192, 1257, 2017, '2025-01-26 18:18:03'),
(171, 'Radeon RX 570', 'AMD', 'RX 570', 8192, 1168, 2017, '2025-01-26 18:18:03'),
(172, 'Radeon RX 480', 'AMD', 'RX 480', 8192, 1120, 2016, '2025-01-26 18:18:03'),
(173, 'Radeon RX 470', 'AMD', 'RX 470', 8192, 926, 2016, '2025-01-26 18:18:03'),
(174, 'Radeon RX Vega 64', 'AMD', 'RX Vega 64', 8192, 1546, 2017, '2025-01-26 18:18:03'),
(175, 'Radeon RX Vega 56', 'AMD', 'RX Vega 56', 8192, 1471, 2017, '2025-01-26 18:18:03'),
(176, 'Radeon RX 295X2', 'AMD', 'RX 295X2', 8192, 1018, 2014, '2025-01-26 18:18:03'),
(177, 'Radeon R9 290X', 'AMD', 'R9 290X', 4096, 1000, 2013, '2025-01-26 18:18:03'),
(178, 'Radeon R9 290', 'AMD', 'R9 290', 4096, 947, 2013, '2025-01-26 18:18:03'),
(179, 'Radeon R9 280X', 'AMD', 'R9 280X', 4096, 1000, 2013, '2025-01-26 18:18:03'),
(180, 'Radeon R9 270X', 'AMD', 'R9 270X', 4096, 1050, 2013, '2025-01-26 18:18:03'),
(181, 'Radeon R7 370', 'AMD', 'R7 370', 4096, 975, 2015, '2025-01-26 18:18:03'),
(182, 'Radeon R7 360', 'AMD', 'R7 360', 2048, 1050, 2015, '2025-01-26 18:18:03'),
(183, 'Radeon R9 275X', 'AMD', 'R9 275X', 4096, 950, 2014, '2025-01-26 18:18:03'),
(184, 'Radeon R9 280', 'AMD', 'R9 280', 4096, 933, 2014, '2025-01-26 18:18:03'),
(185, 'Radeon RX 560', 'AMD', 'RX 560', 4096, 1275, 2017, '2025-01-26 18:18:03'),
(186, 'Radeon RX 550', 'AMD', 'RX 550', 2048, 1183, 2017, '2025-01-26 18:18:03'),
(187, 'Radeon R5 240', 'AMD', 'R5 240', 2048, 780, 2014, '2025-01-26 18:18:03'),
(188, 'Radeon R5 230', 'AMD', 'R5 230', 2048, 625, 2013, '2025-01-26 18:18:03'),
(189, 'Radeon R7 250', 'AMD', 'R7 250', 2048, 1150, 2013, '2025-01-26 18:18:03'),
(190, 'Radeon R9 390X', 'AMD', 'R9 390X', 8192, 1050, 2015, '2025-01-26 18:18:03'),
(191, 'Radeon R9 380X', 'AMD', 'R9 380X', 4096, 970, 2015, '2025-01-26 18:18:03');

-- --------------------------------------------------------

--
-- Структура таблицы `payments`
--

CREATE TABLE `payments` (
  `id` int(11) NOT NULL,
  `request_id` int(11) NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `status` enum('pending','successful','failed') DEFAULT 'pending',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `postamats`
--

CREATE TABLE `postamats` (
  `id` int(11) NOT NULL,
  `latitude` decimal(10,8) NOT NULL,
  `longitude` decimal(11,8) NOT NULL,
  `availability` enum('active','inactive') DEFAULT 'active',
  `address` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `postamats`
--

INSERT INTO `postamats` (`id`, `latitude`, `longitude`, `availability`, `address`) VALUES
(1, '54.51670000', '36.28840000', 'inactive', 'ул. Маршала Жукова, 38'),
(2, '54.51090000', '36.27550000', 'active', 'ул. Тульская, 67'),
(3, '54.49770000', '36.22830000', 'active', 'Тульское Шоссе, 4А'),
(4, '54.55170000', '36.26870000', 'active', 'ул. Поселковая, 251'),
(6, '54.54807000', '36.28782500', 'active', 'ул. Зерновая, 4');

-- --------------------------------------------------------

--
-- Структура таблицы `requests`
--

CREATE TABLE `requests` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `service_id` int(11) NOT NULL,
  `postamat_id` int(11) NOT NULL,
  `status` enum('created','in_progress','completed','paid') DEFAULT 'created',
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `postamat_drop_code` varchar(20) NOT NULL,
  `postamat_pickup_code` varchar(20) NOT NULL,
  `gpu_id` int(11) NOT NULL COMMENT 'Ссылка на видеокарту'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `reviews`
--

CREATE TABLE `reviews` (
  `id` int(11) NOT NULL,
  `opinion` text NOT NULL,
  `rating` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `service_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `reviews`
--

INSERT INTO `reviews` (`id`, `opinion`, `rating`, `user_id`, `service_id`, `created_at`) VALUES
(1, 'Отличный сервис, очень доволен!', 5, 1, 1, '2025-02-18 20:06:24'),
(2, 'Хорошая работа, рекомендую!', 4, 2, 2, '2025-02-18 20:06:24'),
(3, 'Все было сделано быстро и качественно, спасибо!', 5, 3, 3, '2025-02-18 20:06:24'),
(4, 'Мне все понравилось, буду обращаться снова.', 4, 4, 4, '2025-02-18 20:06:24'),
(5, 'Очень хороший опыт, рекомендую всем!', 5, 5, 5, '2025-02-18 20:06:24'),
(6, 'Сервис отличный, результат превзошел ожидания!', 5, 6, 6, '2025-02-18 20:06:24'),
(7, 'Хороший сервис, но можно было бы улучшить время ожидания.', 4, 7, 7, '2025-02-18 20:06:24'),
(8, 'Отличное обслуживание, все прошло гладко.', 5, 8, 8, '2025-02-18 20:06:24'),
(9, 'Очень профессионально, я доволен результатом.', 5, 9, 9, '2025-02-18 20:06:24'),
(10, 'Хороший сервис, но цена могла бы быть ниже.', 4, 10, 10, '2025-02-18 20:06:24');

-- --------------------------------------------------------

--
-- Структура таблицы `services`
--

CREATE TABLE `services` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `description` text,
  `price` decimal(10,2) NOT NULL,
  `estimated_time` int(11) DEFAULT NULL COMMENT 'Время в минутах'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `services`
--

INSERT INTO `services` (`id`, `title`, `description`, `price`, `estimated_time`) VALUES
(1, 'Чистка видеокарты', 'Чистка от пыли и замена термопасты', '2000.00', 2),
(2, 'Замена термопасты', 'Замена термопасты на видеокарте', '1600.00', 1),
(3, 'Пайка видеокарты', 'Восстановление соединений на видеокарте', '4000.00', 7),
(4, 'Установка драйвера', 'Установка и настройка драйвера видеокарты', '800.00', 1),
(5, 'Тестирование видеокарты', 'Тестирование работоспособности видеокарты', '1000.00', 1),
(6, 'Обновление BIOS видеокарты', 'Обновление BIOS видеокарты', '1500.00', 2),
(7, 'Диагностика видеокарты', 'Диагностика и проверка видеокарты на ошибки', '1200.00', 1),
(8, 'Ремонт блока питания видеокарты', 'Ремонт блока питания видеокарты', '3500.00', 4),
(9, 'Ремонт охлаждения видеокарты', 'Ремонт системы охлаждения видеокарты', '2500.00', 3),
(10, 'Заменить вентилятор видеокарты', 'Замена неисправного вентилятора видеокарты', '1800.00', 1),
(11, 'Проверка температуры видеокарты', 'Проверка и настройка температуры видеокарты', '800.00', 1),
(12, 'Настройка видеокарты для майнинга', 'Оптимизация видеокарты для майнинга', '5000.00', 7),
(13, 'Ремонт SMD компонентов видеокарты', 'Ремонт SMD компонентов видеокарты', '6000.00', 10),
(14, 'Замена чипа видеокарты', 'Полная замена видеочипа на новой видеокарте', '10000.00', 14),
(15, 'Чистка от пыли и замена термопасты', 'Чистка от пыли и замена термопасты на видеокарте', '3000.00', 2),
(16, 'Ремонт видеокарты после перегрева', 'Ремонт видеокарты после перегрева или повреждения', '8000.00', 7),
(17, 'Установка видеокарты в систему', 'Установка видеокарты в рабочую систему', '1000.00', 1),
(18, 'Восстановление контактов видеокарты', 'Восстановление поврежденных контактов на видеокарте', '4000.00', 5),
(19, 'Сборка и настройка компьютера с видеокартой', 'Комплексная сборка и настройка ПК с установкой видеокарты', '5000.00', 3),
(20, 'Ремонт видеокарты после короткого замыкания', 'Ремонт видеокарты после короткого замыкания в блоке питания', '9000.00', 10),
(21, 'Восстановление видеокарты после удара', 'Ремонт поврежденных частей видеокарты после механического удара', '7000.00', 8),
(22, 'Пайка микросхем видеокарты', 'Пайка микросхем видеокарты и восстановление работы', '4500.00', 6),
(23, 'Ремонт видеокарты с поврежденным слотом PCIe', 'Ремонт видеокарты с повреждением PCIe слота', '5500.00', 7),
(24, 'Замена корпуса видеокарты', 'Замена корпуса видеокарты с повреждениями', '3500.00', 4),
(25, 'Ремонт видеокарты для геймеров', 'Ремонт видеокарты с улучшением её производительности для игр', '6000.00', 5),
(26, 'Ремонт видеокарты для майнинга', 'Оптимизация и ремонт видеокарт для майнинга', '7000.00', 6),
(27, 'Диагностика и настройка видеокарты для VR', 'Диагностика и настройка видеокарты для виртуальной реальности', '4000.00', 3),
(28, 'Замена памяти видеокарты', 'Замена неисправной памяти на видеокарте', '8500.00', 8),
(29, 'Восстановление проводных соединений видеокарты', 'Восстановление проводных соединений на видеокарте', '2500.00', 4),
(30, 'Замена платы видеокарты', 'Полная замена платы видеокарты', '12000.00', 10),
(31, 'Тестирование видеокарты на майнинг-ферме', 'Тестирование работы видеокарты в условиях майнинг-фермы', '2000.00', 2),
(32, 'Настройка видеокарты для максимальной производительности', 'Настройка видеокарты для максимальной работы в играх и приложениях', '4500.00', 4),
(33, 'Замена резисторов и конденсаторов на видеокарте', 'Замена поврежденных резисторов и конденсаторов на видеокарте', '3500.00', 5),
(34, 'Ремонт видеокарты с проблемами в питании', 'Ремонт видеокарты с проблемами в цепях питания', '8000.00', 7);

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `phone_number` varchar(15) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(255) NOT NULL COMMENT 'Пароль пользователя',
  `isAdmin` tinyint(1) DEFAULT '0',
  `verification_code` varchar(6) DEFAULT NULL,
  `is_verified` tinyint(1) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `phone_number`, `name`, `email`, `password`, `isAdmin`, `verification_code`, `is_verified`) VALUES
(1, '79001234567', 'Иван Иванов', 'ivanov@example.com', '123', 0, NULL, 0),
(2, '79007654321', 'Петр Петров', 'petrov@example.com', '123', 0, NULL, 0),
(3, '79009876543', 'Сергей Сергеев', 'sergeev@example.com', '123', 0, NULL, 0),
(4, '79003456789', 'Анна Смирнова', 'smirnova@example.com', '123', 0, NULL, 0),
(5, '79006543210', 'Ольга Кузнецова', 'kuznetsova@example.com', '123', 0, NULL, 0),
(6, '79004567891', 'Екатерина Иванова', 'ivanova@example.com', '123', 0, NULL, 0),
(7, '79007891234', 'Дмитрий Соколов', 'sokolov@example.com', '123', 0, NULL, 0),
(8, '79005678912', 'Мария Ковалева', 'kovaleva@example.com', '123', 0, NULL, 0),
(9, '79004321098', 'Алексей Морозов', 'morozov@example.com', '123', 0, NULL, 0),
(10, '79003219876', 'Наталья Васильева', 'vasilieva@example.com', '123', 0, NULL, 0);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `gpus`
--
ALTER TABLE `gpus`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Индексы таблицы `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `request_id` (`request_id`);

--
-- Индексы таблицы `postamats`
--
ALTER TABLE `postamats`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `requests`
--
ALTER TABLE `requests`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `service_id` (`service_id`),
  ADD KEY `postamat_id` (`postamat_id`),
  ADD KEY `gpu_id` (`gpu_id`);

--
-- Индексы таблицы `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `service_id` (`service_id`);

--
-- Индексы таблицы `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `phone_number` (`phone_number`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `gpus`
--
ALTER TABLE `gpus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=192;
--
-- AUTO_INCREMENT для таблицы `payments`
--
ALTER TABLE `payments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT для таблицы `postamats`
--
ALTER TABLE `postamats`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT для таблицы `requests`
--
ALTER TABLE `requests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT для таблицы `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
--
-- AUTO_INCREMENT для таблицы `services`
--
ALTER TABLE `services`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `payments`
--
ALTER TABLE `payments`
  ADD CONSTRAINT `payments_ibfk_1` FOREIGN KEY (`request_id`) REFERENCES `requests` (`id`);

--
-- Ограничения внешнего ключа таблицы `requests`
--
ALTER TABLE `requests`
  ADD CONSTRAINT `requests_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `requests_ibfk_2` FOREIGN KEY (`service_id`) REFERENCES `services` (`id`),
  ADD CONSTRAINT `requests_ibfk_3` FOREIGN KEY (`postamat_id`) REFERENCES `postamats` (`id`),
  ADD CONSTRAINT `requests_ibfk_4` FOREIGN KEY (`gpu_id`) REFERENCES `gpus` (`id`);

--
-- Ограничения внешнего ключа таблицы `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `reviews_ibfk_2` FOREIGN KEY (`service_id`) REFERENCES `services` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
