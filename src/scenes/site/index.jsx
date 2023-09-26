import { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { tokens } from "../../theme";
import "./Header.css"; //
import "./main.js";
import { MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import ScrollReveal from "scrollreveal";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleClick = () => {
    setSelected(title);
  };

  return (
    <MenuItem
      active={selected === icon}
      style={{
        color: colors.grey[100],
      }}
      onClick={handleClick}
    >
      <Link to={to}>{icon}</Link>
    </MenuItem>
  );
};

const Site = () => {
  const theme = useTheme();
  const [selected, setSelected] = useState("Dashboard");

  return (
    <>

      <header class="l-header">
        <nav class="nav bd-grid">
          <div>
            <img src="/assets/img/logo.png" alt="" href="" class="logotipo"></img>
          </div>

          <div class="nav__menu" id="nav-menu">
            <ul class="nav__list">
              <li class="nav__item"><a href="#home" class="nav__link active">Início</a></li>
              <li class="nav__item"><a href="#about" class="nav__link">Sobre</a></li>
              <li class="nav__item"><a href="#skills" class="nav__link">Acontecimentos</a></li>
              <li class="nav__item"><a href="#work" class="nav__link">Espaço de Eventos</a></li>
              <li class="nav__item"><a href="#contact" class="nav__link">Agende Seu Evento</a></li>
              <li class="nav__item"><a href="#contact" class="nav__link"><Link to="/calendar">
                  <WysiwygIcon
                    title="Entrar"
                    selected={selected}
                    setSelected={setSelected}
                  />
                </Link> </a></li>
                
            </ul>
          </div>

          <div class="nav__toggle" id="nav-toggle">
            <i class='bx bx-menu'></i>
          </div>
        </nav>
      </header>
      <main className="l-main">
        <section className="home" id="home">
          <img src="/assets/img/Banner_Maior.png" alt="" className="banner" />
          <div className="home__data">
            <div className="banner-wrapper"></div>
          </div>
        </section>

        <section className="about section" id="about">
          <h2 className="section-title">Sobre</h2>

          <div className="about__container bd-grid">
            <div className="about__img">
              <p className="sobre_cima">NOSSA</p>
              <h1 className="sobre_baixo">HISTÓRIA</h1>
            </div>
            <div>
              <p className="about__text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate cum expedita quo culpa tempora, assumenda, quis fugiat
                ut voluptates soluta, aut earum nemo recusandae cumque
                perferendis! Recusandae alias accusamus atque.
              </p>
            </div>
          </div>
        </section>

        <section className="work section" id="skills">
          <h2 className="section-title-maior">Acontecimentos</h2>
          <div className="work__container bd-grid leftzinho">
            <div className="work__images-left">
              <a href="">
                <div>
                  <img src="/assets/img/work1.png" alt="" />
                </div>
              </a>
              <a href="">
                <img src="/assets/img/work2.png" alt="" />
              </a>
            </div>
            <div className="work__image-right">
              <a href="" className="work__img-tall">
                <img src="/assets/img/work3.png" alt="" />
              </a>
            </div>
          </div>
        </section>

        <section className="work section" id="work">
          <h2 className="section-title-maior">Eventos Realizados</h2>
          <div className="work__container bd-grid">
            <a href="" className="work__img">
              <img src="/assets/img/work1.png" alt="" />
            </a>
            <a href="" className="work__img">
              <img src="/assets/img/work4.jpg" alt="" />
            </a>
            <a href="" className="work__img">
              <img src="/assets/img/work4.jpg" alt="" />
            </a>
            <a href="" className="work__img">
              <img src="/assets/img/work4.jpg" alt="" />
            </a>
            <a href="" className="work__img">
              <img src="/assets/img/work5.jpg" alt="" />
            </a>
            <a href="" className="work__img">
              <img src="/assets/img/work6.jpg" alt="" />
            </a>
          </div>
        </section>

        <section className="contact section" id="contact">
          <h2 className="section-title-maior">Agende seu Evento</h2>

          <div className="contact__container bd-grid">
            <img src="/assets/img/agenda.png" alt="" className="agenda" />
            <form action="" className="contact__form">
              <input type="text" placeholder="Nome:" className="contact__input" />
              <input type="mail" placeholder="Telefone:" className="contact__input" />
              <input type="mail" placeholder="E-mail:" className="contact__input" />
              <input type="mail" placeholder="CPF:" className="contact__input" />
              <input type="button" value="Agendar" className="contact__button button" />
            </form>
          </div>
        </section>
        <footer class="footer">
          <div class="footer_img">
            <img src="/assets/img/logo_endbar.png" alt=""></img>
          </div>
          <div class="footer__social">
            <a href="#" class="footer__icon"><i class='bx bxl-facebook' ></i></a>
            <a href="#" class="footer__icon"><i class='bx bxl-instagram' ></i></a>
            <a href="#" class="footer__icon"><i class='bx bxl-whatsapp' ></i></a>
          </div>

          <p class="footer__copy">&#169; 2023 ADUNISC. Todos direitos reservados. Desenvolvido por Quidittas Web Soluções</p>
        </footer>
      </main>
    </>

  );
};

export default Site;
