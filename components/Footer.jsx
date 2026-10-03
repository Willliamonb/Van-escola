import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        <div className={styles.topRow}>
          {/* Coluna do Logo */}
          <div className={styles.brandCol}>
            <div className={styles.logoArea}>
              <div className={styles.logoIcon}>L</div>
              <span className={styles.logoText}>Lumio</span>
            </div>
            <p className={styles.brandText}>
              A plataforma inteligente de logística e entregas conexas que transforma a experiência do transporte em todo o Brasil.
            </p>
            <div className={styles.socials}>
              <button className={styles.socialBtn}>in</button>
              <button className={styles.socialBtn}>f</button>
              <button className={styles.socialBtn}>tw</button>
              <button className={styles.socialBtn}>ig</button>
            </div>
          </div>

          {/* Coluna 1: Soluções */}
          <div className={styles.linksCol}>
            <h4>SOLUÇÕES</h4>
            <ul className={styles.linksList}>
              <li><a href="#">Entregas Rápidas</a></li>
              <li><a href="#">Motoristas</a></li>
              <li><a href="#">Corporativo</a></li>
              <li><a href="#">Rastreio</a></li>
            </ul>
          </div>

          {/* Coluna 2: Empresa */}
          <div className={styles.linksCol}>
            <h4>EMPRESA</h4>
            <ul className={styles.linksList}>
              <li><a href="#">Sobre Nós</a></li>
              <li><a href="#">Carreiras</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Imprensa</a></li>
            </ul>
          </div>

          {/* Coluna 3: Contato */}
          <div className={styles.linksCol}>
            <h4>CONTATO</h4>
            <ul className={styles.linksList}>
              <li><a href="#">Suporte 24/7</a></li>
              <li><a href="#">Trabalhe Conosco</a></li>
              <li><a href="#">Vendas</a></li>
              <li><a href="#">Perguntas Frequentes</a></li>
            </ul>
          </div>
        </div>

        {/* Rodapé Inferior */}
        <div className={styles.bottomBar}>
          <span>© 2026 Lumio Tecnologia S.A. Todos os direitos reservados.</span>
          <div className={styles.bottomLinks}>
            <a href="#">Termos de Serviço</a>
            <a href="#">Privacidade</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;