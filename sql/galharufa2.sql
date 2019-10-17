-- phpMyAdmin SQL Dump
-- version 4.4.15.1
-- http://www.phpmyadmin.net
--
-- Host: mysql427.umbler.com
-- Generation Time: Sep 29, 2019 at 04:27 AM
-- Server version: 5.6.40-log
-- PHP Version: 5.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `galharufa`
--

-- --------------------------------------------------------

--
-- Table structure for table `casting`
--

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
  `cas_habilidade` varchar(255) NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=24 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `casting`
--

-- INSERT INTO `casting` (`cas_id`, `cas_tipo`, `cas_nome`, `cas_nomeart`, `cas_genero`, `cas_ano`, `cas_nacionalidade`, `cas_torax`, `cas_terno`, `cas_camisa`, `cas_busto`, `cas_cintura`, `cas_quadril`, `cas_etnia`, `cas_cabelo`, `cas_olhos`, `cas_peso`, `cas_dtnasc`, `cas_rg`, `cas_cpf`, `cas_cnh`, `cas_drt`, `cas_endereco`, `cas_altura`, `cas_manequim`, `cas_sapato`, `cas_foto34`, `cas_fotobody`, `cas_fotosmile`, `cas_carro`, `cas_moto`, `cas_trator`, `cas_jetski`, `cas_portfolio`, `cas_youtube2`, `cas_vimeo`, `cas_vimeo2`, `cas_skills`, `cas_dadosbancarios`, `cas_usu_id`, `cas_datamodificacao`, `cas_phone`, `cas_mobile`, `cas_email`, `cas_habilidade`) VALUES
-- (19, 'Crianças', 'crianca crianca', 'crianca 001', 'F', 1998, 'brasil', '0.00', '0.00', '0.00', '130.00', '130.00', '130.00', 'Asiático', 'Ruivo', 'Verdes', '45.00', '1996-11-30 00:00:00', '329839283', '382983928', '38293829', '83928392839', '', '130.00', '130', '130.00', '', '', '', b'0', b'0', b'0', b'0', 'https://www.youtube.com/watch?v=MYQf-0bO3q4', NULL, NULL, NULL, '', 'rerwdfsdsfwd', 1, '2019-06-29 23:41:30', '38921893819238', '3892839283928', 'crianca@email.com', 'crianca;teste'),
-- (20, 'Modelo', 'modelo modelo', 'modelo art', 'M', 1989, 'brasil', '115.00', '115.00', '115.00', '0.00', '0.00', '0.00', 'Negro', 'Colorido', 'Azuis', '90.00', '1955-01-01 00:00:00', '3182903810', '83028302803', '3092830283', '302830283', '3028309283', '187.00', '20', '40.00', 'undefined', 'undefined', 'undefined', b'0', b'0', b'0', b'0', '', '', '', '', '', 'eiqoweiohqwiehiquweq', 3, '2018-11-01 07:14:29', '3u9128301820938', '38028301283081', 'modelo@email.com', 'modelo;teste001'),
-- (18, 'Modelo', 'Pamella G Santos', 'Pam Gaiguer', 'F', 2017, 'Brasil', '0.00', '0.00', '0.00', '75.00', '75.00', '102.00', 'Branco', 'Colorido', 'Castanhos', '89.00', '1988-11-30 00:00:00', '3789739172', '739273982739', '39827392739', '39273927392', '617/100 bowen terrace', '170.00', '18', '38.00', '/images/casting/ft34_PamellaGSantos.png', '', '', b'1', b'1', b'0', b'0', 'https://www.youtube.com/watch?v=kBhbyiISYtA&t=1s', NULL, NULL, NULL, '', 'blabla', 3, '2018-11-21 23:19:55', '', '0426134903', 'pam@email.com', 'cantar;dirigir;bartender'),
-- (23, 'Figuração', 'pam2', 'pam2', 'F', 1988, 'pam2', '0.00', '0.00', '0.00', '38298.00', '83983.00', '38293829.00', 'Branco', 'Grisalhos', 'Castanhos', '89.00', '1992-11-30 00:00:00', '4238409238', '380283028', '382093820', '302983028302', '', '3829832.00', '3829832', '28198219.00', '/images/casting/ft34_pam2.jpg', '/images/casting/ftbd_pam2.jpg', '/images/casting/ftsm_pam2.jpeg', b'1', b'1', b'0', b'0', 'https://www.youtube.com/watch?v=MYQf-0bO3q4', NULL, NULL, NULL, '', '', 3, '2018-11-22 00:13:22', '3491283091820', '38203801283018', 'email@email.com', 'ola;tudo;bem'),
-- (21, 'Figuração', 'figurante', 'figurante art', 'F', 1999, 'heiuaheiah', '0.00', '0.00', '0.00', '1290.00', '901292.00', '291029.00', 'Pardo', 'Loiro', 'Castanhos', '90.00', '1992-11-30 00:00:00', 'eokoej', 'ejisjeiaj', '2hushdush', 'ejajiajd', '', '210291.00', '312029', '291029.00', '', '', '', b'0', b'0', b'0', b'0', '', NULL, NULL, NULL, '', '', 3, '2018-11-02 01:24:25', '18028102810', '28109280182', 'fig@art.com', 'testing;figurante'),
-- (22, 'Atores', 'TALITA GOMES DA SILVA', 'TALITA GOMES', 'F', 1986, 'BRASILEIRA', '0.00', '0.00', '0.00', '86.00', '60.00', '89.00', 'Branco', 'Castanho', 'Castanhos', '50.00', '1986-04-15 00:00:00', '44009802-6', '33965033840', '', '22.023', 'R. GUIRA 120', '165.00', '36', '35.00', '/images/casting/ft34_TALITAGOMESDASILVA.jpg', '/images/casting/ftbd_TALITAGOMESDASILVA.jpg', '/images/casting/ftsm_TALITAGOMESDASILVA.jpg', b'1', b'0', b'0', b'0', 'https://www.youtube.com/watch?v=ByfYoofNvrI', NULL, NULL, NULL, '', 'ITAU AG 0056 CC74888-2', 3, '2018-11-21 23:42:10', '( 11 ) 995449905', '( 11 ) 995449905', 'talitagomes120@hotmail.com', 'MODELO DE MAO;MODELO DE PE;APRESENTADORA');

-- --------------------------------------------------------

--
-- Table structure for table `quemsomos`
--

CREATE TABLE IF NOT EXISTS `quemsomos` (
  `qsm_id` int(11) NOT NULL,
  `qsm_descricao` text NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `quemsomos`
--

INSERT INTO `quemsomos` (`qsm_id`, `qsm_descricao`) VALUES
(1, 'Especializada em casting de elenco e figurantes, a Galharufa é uma agência que surgiu para inovar e desafiar o mercado audio visual. <br><br>\r\n            Sob o comando da produtora <strong>Juliana Azevedo</strong>, a Galharufa surgiu em 2007 e se consolidou no mercado brasileiro em fornecimento de casting para novelas, cinema, séries, publicidade, catálogos e eventos. <br><br>\r\n\r\n            Atualmente, a Galharufa conta com uma equipe altamente qualificada para atender de maneira satisfatória seus clientes e parceiros, sendo assim como o time de profissionais que abrilhantam seu casting. <br><br>\r\n            Especializada em pesquisa de elenco, a Galharufa possui um amplo casting em todo o territorio nacional, sempre visando a excelência em seu atendimento a clientes e agenciados.');

-- --------------------------------------------------------

--
-- Table structure for table `servicos`
--

CREATE TABLE IF NOT EXISTS `servicos` (
  `svc_id` int(11) NOT NULL,
  `svc_descricao` varchar(100) DEFAULT NULL,
  `svc_img` varchar(50) DEFAULT NULL,
  `svc_titulo` varchar(100) DEFAULT NULL,
  `svc_conteudo` text NOT NULL,
  `svc_iconclass` varchar(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `servicos`
--

INSERT INTO `servicos` (`svc_id`, `svc_descricao`, `svc_img`, `svc_titulo`, `svc_conteudo`, `svc_iconclass`) VALUES
(1, 'Curso de interpretação', '/images/icon-interpretacao.png', 'Curso de Interpretação para TV e Cinema', '<h4>Curso de Interpretação para TV e Cinema</h4>\n          <p>\n            O curso de interpretação para TV e cinema da <strong>agência galharufa</strong> proporciona aos alunos o domínio das técnicas de atuação para câmera, permitindo que eles desenvolvam suas habilidades cênicas nas linguagens de televisão e cinema.\n          </p>\n          <p>Além de exercícios práticos com gravações, leituras e avaliações, o curso é uma introdução para a carreira de ator ou aprimoramento para aqueles que já possuem uma base em teatro.\n          </p>\n          <p>\n            A partir da gravação de cenas dramáticas e de constante avaliação do professor, são trabalhadas técnicas de posicionamento em cena, noções de enquadramento, áreas, planos e movimentos de câmera, entre outros exercícios específicos para atuação na câmera.\n          </p>\n          <p>\n            Com textos de teledramaturgia, séries e cinema, o aluno aprende a construir personagens partindo de pontos pré-definidos ou de criação própria.\n          </p>\n          <p><strong>Conteúdo:</strong></p>\n\n          <ol>\n            <li>Posicionamento entre ator e câmera</li>\n            <li>Exercícios práticos, simulações e improvisações</li>\n            <li>Exercícios de sensibilização com a cena e de estimulo</li>\n            <li>Intensidade do olhar</li>\n            <li>Dicção, entonação de voz e limpeza de sotaques</li>\n            <li>Linguagem Naturalista, Realista e Coloquial</li>\n            <li>Limpeza e criação de mascaras faciais</li>\n            <li>Conscientização de plano, contra plano e ambientação no estúdio</li>\n            <li>Trabalho em grupo</li>\n            <li>A percepção do outro</li>\n            <li>Retorno do lúdico.</li>\n            <li>Avaliação e Auto Avaliação</li>\n            <li>Improvisação com exercícios de foco, objetivo, conflito e argumentação</li>\n            <li>Improviso com pré definições de texto e personagem.</li>\n            <li>Expressão corporal e exploração do espaço, utilizando o corpo e a voz como ferramentas.</li>\n            <li>Desinibição e a espontaneidade, auxiliando a superar a timidez e expandir com eficácia sua comunicação.</li>\n          </ol>\n\n          <p>\n            <strong>\n              Solicite seu orçamento através do e-mail <a href="mailto:atendimento@agenciagalharufa.com.br">atendimento@agenciagalharufa.com.br</a> ou através da nossa página de <a href="" ng-click="path(''/contato'');">Contato</a>\n            </strong>\n          </p>', 'bg-yellow-main'),
(8, 'Videobook', '/images/icon-videobook.png', 'Videobook', '<h4>Videobook</h4>\n\n          <p>O videbook é a maior ferramenta  de divulgação para atores, extremamente utilizado na aprovação para testes de longas, séries e publicidades.</p>\n          <p>Realize seu monólogo conosco, com direção e escolha de textos no seu perfil!.</p>\n\n          <p>\n            <strong>\n              Solicite seu orçamento através do e-mail <a href="mailto:atendimento@agenciagalharufa.com.br">atendimento@agenciagalharufa.com.br</a> ou através da nossa página de <a href="" ng-click="path(''/contato'');">Contato</a>\n            </strong>\n          </p>', 'bg-salmon-light'),
(2, 'Curso de circo', '/images/icon-circo.png', 'Curso de Circo', '\r\n\r\n          <h4>Curso de Circo</h4>\r\n\r\n          <p>Este Projeto tem a importância de atender ao público em geral sem restrições de idade.</p>\r\n          <p> Nosso foco de divulgação será a cultura, dando a possibilidade de conhecerem o mundo circense com técnicas renovadas, equipamentos e aparelhos diferenciados, buscando encantar e resgatar a criança que existe em cada um de nós.</p>\r\n          <p>\r\n            Proporcionar um diálogo melhor com o público e, conseqüentemente, reacendendo seu desejo em conhecer melhor mundo do circo, doando artes circenses e recebendo cultura popular.\r\n          </p>\r\n          <p>Entre causos e prosas surge uma história de paixão inseparável pelo circo. As oficinas circenses irão proporcionar aos participantes a oportunidade de conhecer e praticar algumas atividades com equipamentos de circo Tradicional.\r\n          </p>\r\n\r\n          <p>\r\n            <strong>\r\n              Solicite seu orçamento através do e-mail <a href="mailto:atendimento@agenciagalharufa.com.br">atendimento@agenciagalharufa.com.br</a> ou através da nossa página de <a href="" ng-click="path(''/contato'');">Contato</a>\r\n            </strong>\r\n          </p>\r\n\r\n        ', 'bg-salmon-light'),
(3, 'Material fotográfico', '/images/icon-foto.png', 'Material fotográfico', '\r\n          <h4>Material fotográfico</h4>\r\n\r\n          <p>\r\n            A importância de uma boa apresentação de material é essencial para aprovação do cliente, ou seja, possuir um material fotográfico de qualidade é o primeiro passo para obter o sucesso desejado na sua carreira.\r\n          </p>\r\n          <p>Nosso material é composto por:</p>\r\n\r\n          <ul>\r\n            <li>20 fotos contendo 10 delas tratadas pela equipe de design.</li>\r\n            <li>2 trocas de look(roupa)</li>\r\n            <li>Maquiagem inclusa no pacote</li>\r\n            <li><span class="red-text">*</span> Todas as fotos são realizadas em estudio</li>\r\n          </ul>\r\n\r\n\r\n          <p>\r\n            <strong>\r\n              Solicite seu orçamento através do e-mail <a href="mailto:atendimento@agenciagalharufa.com.br">atendimento@agenciagalharufa.com.br</a> ou através da nossa página de <a href="" ng-click="path(''/contato'');">Contato</a>\r\n            </strong>\r\n          </p>\r\n        ', 'bg-purple-light'),
(4, 'Eventos', '/images/icon-eventos.png', 'Eventos', '\r\n          <h4>Seja única! Seja Galharufa!</h4>\r\n          <h6>Seu evento influencia todos os outros!</h6>\r\n          <div class="spacing"></div>\r\n\r\n          <p>A nossa missão é oferecer serviços em organizações e produções de eventos com qualidade e profissionalismo, buscando a satisfação de seus clientes.</p>\r\n          <p>\r\n            A nossa equipe de profissionais é treinada especificamente para cada segmento, garantido o sucesso do evento.\r\n          </p>\r\n\r\n          <ul>\r\n            <li>Recepcionistas</li>\r\n            <li>Bartenders</li>\r\n            <li>Garçons</li>\r\n            <li>Seguranças</li>\r\n            <li>Promotoras</li>\r\n            <li>Degustadoras</li>\r\n            <li>Equipe de limpeza</li>\r\n            <li>DJ''s</li>\r\n          </ul>\r\n        ', 'bg-yellow-main'),
(7, 'Agenciamento', '/images/icon-agenciamento.png', 'Agenciamento', '\r\n          <h4>Venha ser agenciado pela Galharufa!</h4>\r\n\r\n          <div class="spacing"></div>\r\n\r\n          <p><strong>Departamento Galharufa Infanto Juvenil</strong> - de 06 meses à 17 anos:\r\n            <br>\r\n            Para pré-avaliação  – enviar 03 fotos com nome e data de nascimento e telefone para contato com DDD para <a href="mailto:infantil@agenciagalharufa.com.br" target="_blank">infantil@agenciagalharufa.com.br</a> e aguarde resposta.</p>\r\n\r\n            <p><strong>Departamento Galharufa Adulto</strong> - A partir de 18 anos: <br>\r\n              Para pré-avaliação – ENVIAR MATERIAL  - 03 fotos nome,data de nascimento, telefone para contato com DDD para <a href="mailto:contato@agenciagalharufa.com.br" target="_blank">contato@agenciagalharufa.com.br</a></p>\r\n\r\n              <p>Para pré avaliação - para ATORES, alem do material acima, encaminhar currículo atualizado e link de atuação (se tiver) <a href="mailto:contato@agenciagalharufa.com.br" target="_blank">contato@agenciagalharufa.com.br</a> e aguarde resposta</p>\r\n\r\n            ', 'bg-yellow-main'),
(6, 'Moda', '/images/icon-moda.png', 'Moda', '\r\n          <p>A Agência Galharufa, conta com uma equipe de produção de moda altamente qualificada para atender a demanda do setor.\r\n            <br>\r\n          Na criação ou desenvolvimento de seu projeto, conte conosco!</p>\r\n\r\n          <div class="row">\r\n            <div class="col s12 m3 l3 xl3">\r\n              <ul>\r\n                <li><strong>Equipe produção de backstage</strong></li>\r\n                <li> Staffs</li>\r\n                <li> Camareira</li>\r\n                <li>Assistentes</li>\r\n                <li>Produtores</li>\r\n                <li>Diretores</li>\r\n              </ul>\r\n\r\n              <div class="spacing"></div>\r\n\r\n              <ul>\r\n                <li><strong>Figurinos de época e atuais</strong></li>\r\n                <li>Acervo</li>\r\n                <li>Cenário</li>\r\n                <li>Peças</li>\r\n                <li>Equipamentos</li>\r\n                <li>Locações</li>\r\n              </ul>\r\n            </div>\r\n            <div class="col s12 m3 l3 xl3">\r\n              <ul>\r\n                <li><strong>Assessoria de imagem</strong> </li>\r\n                <li>Personal style</li>\r\n                <li>Artista</li>\r\n                <li>Marca</li>\r\n                <li>Empresa ou Produto</li>\r\n                <li>Personalidade</li>\r\n              </ul>\r\n            </div>\r\n            <div class="col s12 m3 l3 xl3">\r\n              <ul>\r\n                <li><strong>Desfile</strong></li>\r\n                <li>Equipe</li>\r\n                <li>Projeto</li>\r\n                <li>Criação</li>\r\n                <li>Desenvolvimento</li>\r\n                <li>Marketing</li>\r\n              </ul>\r\n            </div>\r\n            <div class="col s12 m3 l3 xl3">          <ul>\r\n              <li><strong>Confecção de figurinos</strong></li>\r\n              <li>Criação</li>\r\n              <li>Elaboração</li>\r\n              <li>Finalização</li>\r\n              <li>Desenvolvimento</li>\r\n              <li>Estilistas</li>\r\n              <li>Modelagem</li>\r\n              <li>Ateliê</li>\r\n            </ul></div>\r\n          </div>\r\n        ', 'bg-purple-light'),
(9, 'Convênios', '/images/icon-partner.png', 'Convênios', '<h4>Convênios</h4>\n\n<p>Lista de empresas conveniadas:</p>\n<p>\n<ul>\n    <li>Convenio 1: <a href="http://www.uol.com.br" target="_blank">Link aqui</a></li>\n    <li>Convenio 2: <a href="http://www.uol.com.br" target="_blank">Link aqui</a></li>\n    <li>Convenio 3: <a href="http://www.uol.com.br" target="_blank">Link aqui</a></li>\n    <li>Convenio 4: <a href="http://www.uol.com.br" target="_blank">Link aqui</a></li>\n</ul>\n</p>', 'bg-purple-light');

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE IF NOT EXISTS `usuarios` (
  `usu_id` int(11) NOT NULL,
  `usu_nome` varchar(100) DEFAULT NULL,
  `usu_login` varchar(100) DEFAULT NULL,
  `usu_senha` varchar(100) DEFAULT NULL,
  `usu_tipo` int(11) NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`usu_id`, `usu_nome`, `usu_login`, `usu_senha`, `usu_tipo`) VALUES
(1, 'pam', 'pam', 'pam', 0),
(3, 'ju', 'ju', 'ju', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `casting`
--
ALTER TABLE `casting`
  ADD PRIMARY KEY (`cas_id`);

--
-- Indexes for table `quemsomos`
--
ALTER TABLE `quemsomos`
  ADD PRIMARY KEY (`qsm_id`);

--
-- Indexes for table `servicos`
--
ALTER TABLE `servicos`
  ADD PRIMARY KEY (`svc_id`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`usu_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `casting`
--
ALTER TABLE `casting`
  MODIFY `cas_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=24;
--
-- AUTO_INCREMENT for table `quemsomos`
--
ALTER TABLE `quemsomos`
  MODIFY `qsm_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `usu_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
