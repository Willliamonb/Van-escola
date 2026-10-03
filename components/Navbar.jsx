import styles from './Navbar.module.css';

export function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        
        {/* Logótipo */}
        <a href="#" className={styles.logoArea}>
          <div className={styles.logoIcon}>L</div>
          <span className={styles.logoText}>Lumio</span>
        </a>

        {/* Links de Navegação */}
        <nav className={styles.nav}>
          <a href="#servicos" className={styles.navLink}>Serviços</a>
          <a href="#como-funciona" className={styles.navLink}>Como Funciona</a>
          <a href="#motoristas" className={styles.navLink}>Motoristas</a>
          <a href="#empresas" className={styles.navLink}>Empresas</a>
          <a href="#suporte" className={styles.navLink}>Suporte</a>
        </nav>

        {/* Botões de Ação */}
        <div className={styles.actions}>
          <button className={styles.loginBtn}>Entrar</button>
          <button className={styles.primaryBtn}>Começar Agora</button>
        </div>

      </div>
    </header>
  );
}

export default Navbar;