-- phpMyAdmin SQL Dump
-- version 4.4.15.1
-- http://www.phpmyadmin.net
--
-- Host: mysql669.umbler.com
-- Generation Time: Oct 17, 2019 at 12:53 AM
-- Server version: 5.6.40
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `quemsomos`
--

CREATE TABLE IF NOT EXISTS `quemsomos` (
  `qsm_id` int(11) NOT NULL,
  `qsm_descricao` text NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `quemsomos`
--

INSERT INTO `quemsomos` (`qsm_id`, `qsm_descricao`) VALUES
(1, 'Especializada em casting de elenco e figurantes, a Galharufa é uma agência que surgiu para inovar e desafiar o mercado audio visual. <br><br>\\r\\n Sob o comando da produtora <strong>Juliana Azevedo</strong>, a Galharufa surgiu em 2007 e se consolidou no mercado brasileiro em fornecimento de casting para novelas, cinema, séries, publicidade, catálogos e eventos. <br><br>\\r\\n\\r\\n Atualmente, a Galharufa conta com uma equipe altamente qualificada para atender de maneira satisfatória seus clientes e parceiros, sendo assim como o time de profissionais que abrilhantam seu casting. <br><br>\\r\\n Especializada em pesquisa de elenco, a Galharufa possui um amplo casting em todo o territorio nacional, sempre visando a excelência em seu atendimento a clientes e agenciados.');

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
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `servicos`
--

INSERT INTO `servicos` (`svc_id`, `svc_descricao`, `svc_img`, `svc_titulo`, `svc_conteudo`, `svc_iconclass`) VALUES
(1, 'Curso de interpretação', '/images/icon-interpretacao.png', 'Curso de Interpretação para TV e Cinema', '<h4>Curso de Interpretação para TV e Cinema</h4>\\n          <p>\\n            O curso de interpretação para TV e cinema da <strong>agência galharufa</strong> proporciona aos alunos o domínio das técnicas de atuação para câmera, permitindo que eles desenvolvam suas habilidades cênicas nas linguagens de televisão e cinema.\\n          </p>\\n          <p>Além de exercícios práticos com gravações, leituras e avaliações, o curso é uma introdução para a carreira de ator ou aprimoramento para aqueles que já possuem uma base em teatro.\\n          </p>\\n          <p>\\n            A partir da gravação de cenas dramáticas e de constante avaliação do professor, são trabalhadas técnicas de posicionamento em cena, noções de enquadramento, áreas, planos e movimentos de câmera, entre outros exercícios específicos para atuação na câmera.\\n          </p>\\n          <p>\\n            Com textos de teledramaturgia, séries e cinema, o aluno aprende a construir personagens partindo de pontos pré-definidos ou de criação própria.\\n          </p>\\n          <p><strong>Conteúdo:</strong></p>\\n\\n          <ol>\\n            <li>Posicionamento entre ator e câmera</li>\\n            <li>Exercícios práticos, simulações e improvisações</li>\\n            <li>Exercícios de sensibilização com a cena e de estimulo</li>\\n            <li>Intensidade do olhar</li>\\n            <li>Dicção, entonação de voz e limpeza de sotaques</li>\\n            <li>Linguagem Naturalista, Realista e Coloquial</li>\\n            <li>Limpeza e criação de mascaras faciais</li>\\n            <li>Conscientização de plano, contra plano e ambientação no estúdio</li>\\n            <li>Trabalho em grupo</li>\\n            <li>A percepção do outro</li>\\n            <li>Retorno do lúdico.</li>\\n            <li>Avaliação e Auto Avaliação</li>\\n            <li>Improvisação com exercícios de foco, objetivo, conflito e argumentação</li>\\n            <li>Improviso com pré definições de texto e personagem.</li>\\n            <li>Expressão corporal e exploração do espaço, utilizando o corpo e a voz como ferramentas.</li>\\n            <li>Desinibição e a espontaneidade, auxiliando a superar a timidez e expandir com eficácia sua comunicação.</li>\\n          </ol>\\n\\n          <p>\\n            <strong>\\n              Solicite seu orçamento através do e-mail <a href="mailto:atendimento@agenciagalharufa.com.br">atendimento@agenciagalharufa.com.br</a> ou através da nossa página de <a href="" ng-click="path(``/contato``);">Contato</a>\\n            </strong>\\n          </p>', 'bg-yellow-main'),
(3, 'Curso de Circo', '/images/icon-circo.png', 'Curso de Circo', '\\r\\n\\r\\n          <h4>Curso de Circo</h4>\\r\\n\\r\\n          <p>Este Projeto tem a importância de atender ao público em geral sem restrições de idade.</p>\\r\\n          <p> Nosso foco de divulgação será a cultura, dando a possibilidade de conhecerem o mundo circense com técnicas renovadas, equipamentos e aparelhos diferenciados, buscando encantar e resgatar a criança que existe em cada um de nós.</p>\\r\\n          <p>\\r\\n            Proporcionar um diálogo melhor com o público e, conseqüentemente, reacendendo seu desejo em conhecer melhor mundo do circo, doando artes circenses e recebendo cultura popular.\\r\\n          </p>\\r\\n          <p>Entre causos e prosas surge uma história de paixão inseparável pelo circo. As oficinas circenses irão proporcionar aos participantes a oportunidade de conhecer e praticar algumas atividades com equipamentos de circo Tradicional.\\r\\n          </p>\\r\\n\\r\\n          <p>\\r\\n            <strong>\\r\\n              Solicite seu orçamento através do e-mail <a href="mailto:atendimento@agenciagalharufa.com.br">atendimento@agenciagalharufa.com.br</a> ou através da nossa página de <a href="" ng-click="path(``/contato``);">Contato</a>\\r\\n            </strong>\\r\\n          </p>\\r\\n\\r\\n        ', 'bg-salmon-light'),
(4, 'Material fotográfico', '/images/icon-foto.png', 'Material fotográfico', '\\r\\n          <h4>Material fotográfico</h4>\\r\\n\\r\\n          <p>\\r\\n            A importância de uma boa apresentação de material é essencial para aprovação do cliente, ou seja, possuir um material fotográfico de qualidade é o primeiro passo para obter o sucesso desejado na sua carreira.\\r\\n          </p>\\r\\n          <p>Nosso material é composto por:</p>\\r\\n\\r\\n          <ul>\\r\\n            <li>20 fotos contendo 10 delas tratadas pela equipe de design.</li>\\r\\n            <li>2 trocas de look(roupa)</li>\\r\\n            <li>Maquiagem inclusa no pacote</li>\\r\\n            <li><span class="red-text">*</span> Todas as fotos são realizadas em estudio</li>\\r\\n          </ul>\\r\\n\\r\\n\\r\\n          <p>\\r\\n            <strong>\\r\\n              Solicite seu orçamento através do e-mail <a href="mailto:atendimento@agenciagalharufa.com.br">atendimento@agenciagalharufa.com.br</a> ou através da nossa página de <a href="" ng-click="path(``/contato``);">Contato</a>\\r\\n            </strong>\\r\\n          </p>\\r\\n        `,', 'bg-purple-light'),
(5, 'Eventos', '/images/icon-eventos.png', 'Eventos', '\\r\\n          <h4>Seja única! Seja Galharufa!</h4>\\r\\n          <h6>Seu evento influencia todos os outros!</h6>\\r\\n          <div class="spacing"></div>\\r\\n\\r\\n          <p>A nossa missão é oferecer serviços em organizações e produções de eventos com qualidade e profissionalismo, buscando a satisfação de seus clientes.</p>\\r\\n          <p>\\r\\n            A nossa equipe de profissionais é treinada especificamente para cada segmento, garantido o sucesso do evento.\\r\\n          </p>\\r\\n\\r\\n          <ul>\\r\\n            <li>Recepcionistas</li>\\r\\n            <li>Bartenders</li>\\r\\n            <li>Garçons</li>\\r\\n            <li>Seguranças</li>\\r\\n            <li>Promotoras</li>\\r\\n            <li>Degustadoras</li>\\r\\n            <li>Equipe de limpeza</li>\\r\\n            <li>DJ``s</li>\\r\\n          </ul>\\r\\n        ', 'bg-yellow-main'),
(6, 'Agenciamento', '/images/icon-agenciamento.png', 'Agenciamento', '\\r\\n          <h4>Venha ser agenciado pela Galharufa!</h4>\\r\\n\\r\\n          <div class="spacing"></div>\\r\\n\\r\\n          <p><strong>Departamento Galharufa Infanto Juvenil</strong> - de 06 meses à 17 anos:\\r\\n            <br>\\r\\n            Para pré-avaliação  – enviar 03 fotos com nome e data de nascimento e telefone para contato com DDD para <a href="mailto:infantil@agenciagalharufa.com.br" target="_blank">infantil@agenciagalharufa.com.br</a> e aguarde resposta.</p>\\r\\n\\r\\n            <p><strong>Departamento Galharufa Adulto</strong> - A partir de 18 anos: <br>\\r\\n              Para pré-avaliação – ENVIAR MATERIAL  - 03 fotos nome,data de nascimento, telefone para contato com DDD para <a href="mailto:contato@agenciagalharufa.com.br" target="_blank">contato@agenciagalharufa.com.br</a></p>\\r\\n\\r\\n              <p>Para pré avaliação - para ATORES, alem do material acima, encaminhar currículo atualizado e link de atuação (se tiver) <a href="mailto:contato@agenciagalharufa.com.br" target="_blank">contato@agenciagalharufa.com.br</a> e aguarde resposta</p>\\r\\n\\r\\n            ', 'bg-yellow-main'),
(7, 'Moda', '/images/icon-moda.png', 'Moda', '`\\r\\n          <p>A Agência Galharufa, conta com uma equipe de produção de moda altamente qualificada para atender a demanda do setor.\\r\\n            <br>\\r\\n          Na criação ou desenvolvimento de seu projeto, conte conosco!</p>\\r\\n\\r\\n          <div class="row">\\r\\n            <div class="col s12 m3 l3 xl3">\\r\\n              <ul>\\r\\n                <li><strong>Equipe produção de backstage</strong></li>\\r\\n                <li> Staffs</li>\\r\\n                <li> Camareira</li>\\r\\n                <li>Assistentes</li>\\r\\n                <li>Produtores</li>\\r\\n                <li>Diretores</li>\\r\\n              </ul>\\r\\n\\r\\n              <div class="spacing"></div>\\r\\n\\r\\n              <ul>\\r\\n                <li><strong>Figurinos de época e atuais</strong></li>\\r\\n                <li>Acervo</li>\\r\\n                <li>Cenário</li>\\r\\n                <li>Peças</li>\\r\\n                <li>Equipamentos</li>\\r\\n                <li>Locações</li>\\r\\n              </ul>\\r\\n            </div>\\r\\n            <div class="col s12 m3 l3 xl3">\\r\\n              <ul>\\r\\n                <li><strong>Assessoria de imagem</strong> </li>\\r\\n                <li>Personal style</li>\\r\\n                <li>Artista</li>\\r\\n                <li>Marca</li>\\r\\n                <li>Empresa ou Produto</li>\\r\\n                <li>Personalidade</li>\\r\\n              </ul>\\r\\n            </div>\\r\\n            <div class="col s12 m3 l3 xl3">\\r\\n              <ul>\\r\\n                <li><strong>Desfile</strong></li>\\r\\n                <li>Equipe</li>\\r\\n                <li>Projeto</li>\\r\\n                <li>Criação</li>\\r\\n                <li>Desenvolvimento</li>\\r\\n                <li>Marketing</li>\\r\\n              </ul>\\r\\n            </div>\\r\\n            <div class="col s12 m3 l3 xl3">          <ul>\\r\\n              <li><strong>Confecção de figurinos</strong></li>\\r\\n              <li>Criação</li>\\r\\n              <li>Elaboração</li>\\r\\n              <li>Finalização</li>\\r\\n              <li>Desenvolvimento</li>\\r\\n              <li>Estilistas</li>\\r\\n              <li>Modelagem</li>\\r\\n              <li>Ateliê</li>\\r\\n            </ul></div>\\r\\n          </div>\\r\\n        ', 'bg-purple-light'),
(8, 'Convênios', '/images/icon-partner.png', 'Convênios', '<h4>Convênios</h4>\\n\\n<p>Lista de empresas conveniadas:</p>\\n<p>\\n<ul>\\n    <li>Convenio 1: <a href="http://www.uol.com.br" target="_blank">Link aqui</a></li>\\n    <li>Convenio 2: <a href="http://www.uol.com.br" target="_blank">Link aqui</a></li>\\n    <li>Convenio 3: <a href="http://www.uol.com.br" target="_blank">Link aqui</a></li>\\n    <li>Convenio 4: <a href="http://www.uol.com.br" target="_blank">Link aqui</a></li>\\n</ul>\\n</p>', 'bg-yellow-main');

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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`usu_id`, `usu_nome`, `usu_login`, `usu_senha`, `usu_tipo`) VALUES
(1, 'pam', 'pam', 'Auros3011', 0),
(2, 'juliana', 'ju', 'aipapai84', 1);

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
  MODIFY `cas_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `quemsomos`
--
ALTER TABLE `quemsomos`
  MODIFY `qsm_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `servicos`
--
ALTER TABLE `servicos`
  MODIFY `svc_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `usu_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
