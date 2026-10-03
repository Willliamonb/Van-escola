import styles from './DriversSection.module.css';

export function DriversSection() {
  return (
    <section id="motoristas" className={styles.drivers}>
      <div className={styles.container}>
        
        {/* Lado Esquerdo: Benefícios */}
        <div className={styles.content}>
          <span className={styles.subtitle}>PARA MOTORISTAS</span>
          <h2 className={styles.title}>Seja dono do seu tempo e aumente seus ganhos</h2>
          <p className={styles.description}>
            Oferecemos total flexibilidade para você trabalhar nos seus próprios horários e na sua região, transportando desde pequenos pacotes até cargas maiores.
          </p>

          <div className={styles.benefitsGrid}>
            <div className={styles.benefitItem}>
              <h4>Ganhos Flexíveis</h4>
              <p>Receba repasses transparentes por cada corrida realizada.</p>
            </div>
            <div className={styles.benefitItem}>
              <h4>Escolha suas Corridas</h4>
              <p>Aceite apenas as entregas que se adaptam à sua rota.</p>
            </div>
            <div className={styles.benefitItem}>
              <h4>Pagamento Rápido</h4>
              <p>Receba seus ganhos diretamente na sua conta bancária sem burocracia.</p>
            </div>
            <div className={styles.benefitItem}>
              <h4>Suporte 24h</h4>
              <p>Conte com nossa equipa pronta para te auxiliar durante todo o trajeto.</p>
            </div>
          </div>

          <button className={styles.primaryBtn}>Quero me Cadastrar</button>
        </div>

        {/* Lado Direito: Preview do App do Motorista */}
        <div className={styles.cardWrapper}>
          <div className={styles.driverCard}>
            <div className={styles.profileHeader}>
              <div className={styles.avatar}>CE</div>
              <div>
                <div className={styles.driverName}>Carlos Eduardo</div>
                <div className={styles.driverStatus}>Motorista Premium • ★ 4.9</div>
              </div>
            </div>

            <div className={styles.statsRow}>
              <div className={styles.statBox}>
                <span className={styles.statLabel}>Ganhos da Semana</span>
                <span className={styles.statValue}>R$ 1.842,50</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statLabel}>Corridas Concluídas</span>
                <span className={styles.statValueRuns}>42 corridas</span>
              </div>
            </div>

            <div className={styles.sectionTitle}>Próximas Corridas Disponíveis</div>
            <div className={styles.rideList}>
              <div className={styles.rideItem}>
                <span>📍 Retirada Lapa - SP</span>
                <span>⚡ R$ 28</span>
              </div>
              <div className={styles.rideItem}>
                <span>📍 Entrega Jardins - SP</span>
                <span>📦 R$ 45</span>
              </div>
            </div>

            <div className={styles.estimateBox}>
              <span className={styles.estimateText}>Ganho Estimado: R$ 85,00</span>
              <button className={styles.acceptBtn}>Aceitar</button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}


export default DriversSection;