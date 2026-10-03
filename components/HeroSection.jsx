import styles from './HeroSection.module.css';

export function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        
        {/* Lado Esquerdo: Textos e Ações */}
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.badgeDot}></span>
            CONECTANDO A LOGÍSTICA
          </div>

          <h1 className={styles.title}>
            Mais que entregas.
            <span className={styles.titleHighlight}>Novas possibilidades.</span>
          </h1>

          <p className={styles.description}>
            Conectamos clientes, motoristas parceiros e empresas em todo o Brasil. Uma plataforma única para envios rápidos, seguros e totalmente rastreáveis.
          </p>

          <div className={styles.ctaGroup}>
            <button className={styles.primaryBtn}>Solicitar Entrega</button>
            <button className={styles.secondaryBtn}>Seja um Motorista</button>
          </div>

          <div className={styles.featuresList}>
            <div className={styles.featureItem}>
              <span className={styles.checkIcon}>✓</span> Coleta Rápida
            </div>
            <div className={styles.featureItem}>
              <span className={styles.checkIcon}>✓</span> Rastreio Online
            </div>
            <div className={styles.featureItem}>
              <span className={styles.checkIcon}>✓</span> Suporte 24/7
            </div>
            <div className={styles.featureItem}>
              <span className={styles.checkIcon}>✓</span> Preços Justos
            </div>
          </div>
        </div>

        {/* Lado Direito: Card de Rastreamento em Tempo Real */}
        <div className={styles.cardWrapper}>
          <div className={styles.trackingCard}>
            <div className={styles.cardHeader}>
              <div className={styles.statusGroup}>
                <span className={styles.statusDot}></span>
                <span className={styles.statusTitle}>Entrada em Tempo Real</span>
              </div>
              <span className={styles.statusTag}>A caminho</span>
            </div>

            <div className={styles.timeline}>
              <div className={styles.timelineItem}>
                <span className={styles.stepLabel}>RETIRADA</span>
                <span className={styles.stepValue}>Av. Paulista, 1000 - SP</span>
              </div>

              <div className={styles.timelineBadge}>
                DASH-102-123
              </div>

              <div className={styles.timelineItem}>
                <span className={styles.stepLabel}>FAZ ENTREGA</span>
                <span className={styles.stepValue}>Rua das Flores, 450 - RJ</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default HeroSection;