SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "-03:00";


CREATE TABLE `casting` (
  `cas_id` int(11) NOT NULL,
  `cas_tipo` int(11) NOT NULL,
  `cas_nome` varchar(100) DEFAULT NULL,
  `cas_nomeart` varchar(100) DEFAULT NULL,
  `cas_genero` varchar(10) DEFAULT NULL,
  `cas_ano` int DEFAULT NULL,
  `cas_etnia` varchar(50) DEFAULT NULL,
  `cas_peso` decimal(10,2) DEFAULT NULL,
  `cas_dtnasc` datetime DEFAULT NULL,
  `cas_rg` varchar(10) DEFAULT NULL,
  `cas_cpf` varchar(15) DEFAULT NULL,
  `cas_cnh` varchar(15) DEFAULT NULL,
  `cas_drt` varchar(15) DEFAULT NULL,
  `cas_endereco` varchar(255) DEFAULT NULL,
  `cas_altura` decimal(10,2) DEFAULT NULL,
  `cas_manequim` decimal(10,2) DEFAULT NULL,
  `cas_sapato` decimal(10,2) DEFAULT NULL,
  `cas_foto34` varchar(100) DEFAULT NULL,
  `cas_fotobody` varchar(100) DEFAULT NULL,
  `cas_fotosmile` varchar(100) DEFAULT NULL,
  `cas_carro` bit DEFAULT NULL,
  `cas_moto` bit DEFAULT NULL,
  `cas_trator` bit DEFAULT NULL,
  `cas_jetski` bit DEFAULT NULL,
  `cas_portfolio` varchar(100) DEFAULT NULL,
  `cas_skills` varchar(255) DEFAULT NULL,
  `cas_dadosbancarios` varchar(255) DEFAULT NULL,
  `cas_usu_id` int(11) DEFAULT NULL,
  `cas_datamodificacao` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;


CREATE TABLE `usuarios` (
  `usu_id` int(11) NOT NULL,
  `usu_nome` varchar(100) DEFAULT NULL,
  `usu_login` varchar(100) DEFAULT NULL,
  `usu_senha` varchar(100) DEFAULT NULL,
  `usu_tipo` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;


INSERT INTO `usuarios` (`usu_id`, `usu_nome`, `usu_login`, `usu_senha`, `usu_tipo`) VALUES
(1, 'tom', 'tom', 'tom', 0);


ALTER TABLE `casting`
  ADD PRIMARY KEY (`cas_id`);

ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`usu_id`);


ALTER TABLE `casting`
  MODIFY `cast_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;


ALTER TABLE `usuarios`
  MODIFY `usu_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
