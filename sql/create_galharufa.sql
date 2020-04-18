SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "-03:00";


CREATE TABLE IF NOT EXISTS `casting` (
  `cas_id` int(11) NOT NULL,
  `cas_tipo` varchar(25) NOT NULL,
  `cas_nome` varchar(100) DEFAULT NULL,
  `cas_nomeart` varchar(100) DEFAULT NULL,
  `cas_genero` varchar(10) DEFAULT NULL,
  `cas_ano` int(11) DEFAULT NULL,
  `cas_nacionalidade` varchar(50) DEFAULT NULL,
  `cas_torax` decimal(10,2) DEFAULT NULL,
  `cas_terno` decimal(10,2) DEFAULT NULL,
  `cas_camisa` decimal(10,2) DEFAULT NULL,
  `cas_busto` decimal(10,2) DEFAULT NULL,
  `cas_cintura` decimal(10,2) DEFAULT NULL,
  `cas_quadril` decimal(10,2) DEFAULT NULL,
  `cas_etnia` varchar(50) DEFAULT NULL,
  `cas_cabelo` varchar(50) DEFAULT NULL,
  `cas_olhos` varchar(50) DEFAULT NULL,
  `cas_peso` decimal(10,2) DEFAULT NULL,
  `cas_dtnasc` datetime DEFAULT NULL,
  `cas_rg` varchar(10) DEFAULT NULL,
  `cas_cpf` varchar(15) DEFAULT NULL,
  `cas_cnh` varchar(15) DEFAULT NULL,
  `cas_drt` varchar(15) DEFAULT NULL,
  `cas_endereco` varchar(255) DEFAULT NULL,
  `cas_altura` decimal(10,2) DEFAULT NULL,
  `cas_manequim` varchar(10) DEFAULT NULL,
  `cas_sapato` decimal(10,2) DEFAULT NULL,
  `cas_foto34` varchar(100) DEFAULT NULL,
  `cas_fotobody` varchar(100) DEFAULT NULL,
  `cas_fotosmile` varchar(100) DEFAULT NULL,
  `cas_carro` bit(1) DEFAULT NULL,
  `cas_moto` bit(1) DEFAULT NULL,
  `cas_trator` bit(1) DEFAULT NULL,
  `cas_jetski` bit(1) DEFAULT NULL,
  `cas_portfolio` varchar(100) DEFAULT NULL,
  `cas_youtube2` varchar(255) DEFAULT NULL,
  `cas_vimeo` varchar(255) DEFAULT NULL,
  `cas_vimeo2` varchar(255) DEFAULT NULL,
  `cas_skills` varchar(255) DEFAULT NULL,
  `cas_dadosbancarios` varchar(255) DEFAULT NULL,
  `cas_usu_id` int(11) DEFAULT NULL,
  `cas_datamodificacao` datetime DEFAULT NULL,
  `cas_phone` varchar(100) DEFAULT NULL,
  `cas_mobile` varchar(100) DEFAULT NULL,
  `cas_email` varchar(100) DEFAULT NULL,
  `cas_habilidade` varchar(255) NOT NULL,
  `cas_minicurriculum` varchar(255) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=240 DEFAULT CHARSET=utf8;


CREATE TABLE `usuarios` (
  `usu_id` int(11) NOT NULL,
  `usu_nome` varchar(100) DEFAULT NULL,
  `usu_login` varchar(100) DEFAULT NULL,
  `usu_senha` varchar(100) DEFAULT NULL,
  `usu_tipo` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;


CREATE TABLE `servicos` (
  `svc_id` int(11) NOT NULL,
  `svc_descricao` varchar(100) DEFAULT NULL,
  `svc_img` varchar(50) DEFAULT NULL,
  `svc_titulo` varchar(100) DEFAULT NULL,
  `svc_conteudo` varchar(10000) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;



INSERT INTO `usuarios` (`usu_id`, `usu_nome`, `usu_login`, `usu_senha`, `usu_tipo`) VALUES
(1, 'pam', 'pam', 'pam', 0);

INSERT INTO `usuarios` (`usu_id`, `usu_nome`, `usu_login`, `usu_senha`, `usu_tipo`) VALUES
(2, 'ju', 'ju', 'ju', 1);


INSERT INTO `servicos` (`svc_id`, `svc_descricao`, `svc_img`, `svc_titulo`, `svc_conteudo`) VALUES
(1, 'Curso de interpretação', '/images/icon-interpretacao.png', 'Curso de Interpretação para TV e Cinema', '');

INSERT INTO `servicos` (`svc_id`, `svc_descricao`, `svc_img`, `svc_titulo`, `svc_conteudo`) VALUES
(2, 'Curso de circo', '/images/icon-circo.png', 'Curso de Circo', '');

INSERT INTO `servicos` (`svc_id`, `svc_descricao`, `svc_img`, `svc_titulo`, `svc_conteudo`) VALUES
(3, 'Material fotográfico', '/images/icon-foto.png', 'Material fotográfico', '');

INSERT INTO `servicos` (`svc_id`, `svc_descricao`, `svc_img`, `svc_titulo`, `svc_conteudo`) VALUES
(4, 'Eventos', '/images/icon-eventos.png', 'Eventos', '');

INSERT INTO `servicos` (`svc_id`, `svc_descricao`, `svc_img`, `svc_titulo`, `svc_conteudo`) VALUES
(5, 'Audiovisual', '/images/icon-audiovisual.png', 'Audiovisual', '');

INSERT INTO `servicos` (`svc_id`, `svc_descricao`, `svc_img`, `svc_titulo`, `svc_conteudo`) VALUES
(6, 'Moda', '/images/icon-moda.png', 'Moda', '');




ALTER TABLE `casting`
  ADD PRIMARY KEY (`cas_id`);

ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`usu_id`);

ALTER TABLE `servicos`
  ADD PRIMARY KEY (`svc_id`);



ALTER TABLE `casting`
  MODIFY `cas_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;


ALTER TABLE `usuarios`
  MODIFY `usu_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;


