import styles from './CorporateSection.module.css';

export function CorporateSection() {
  return (
    <section id="empresas" className={styles.corporate}>
      <div className={styles.container}>
        
        {/* Lado Esquerdo: Dashboard Simulada */}
        <div className={styles.cardWrapper}>
          <div className={styles.dashboardCard}>
            <div className={styles.dashHeader}>
              <span className={styles.dashTitle}>Visão Geral da Frota</span>
              <span className={styles.dashDate}>Hoje, 14:30</span>
            </div>

            <div className={styles.metricsRow}>
              <div className={styles.metricBox}>
                <span className={styles.metricLabel}>Ativas</span>
                <span className={styles.metricValue}>18</span>
              </div>
              <div className={styles.metricBox}>
                <span className={styles.metricLabel}>Concluídas</span>
                <span className={styles.metricValue}>142</span>
              </div>
              <div className={styles.metricBox}>
                <span className={styles.metricLabel}>Pendentes</span>
                <span className={styles.metricValue}>3</span>
              </div>
            </div>

            <div className={styles.historyTitle}>Últimas Corridas de Hoje</div>
            <div className={styles.historyList}>
              <div className={styles.historyItem}>
                <div>
                  <div className={styles.historyCode}>#LUM-9823</div>
                  <span style={{ color: '#6b7280', fontSize: '0.75rem' }}>Paulista → Jardins</span>
                </div>
                <span className={styles.historyStatus}>Entregue</span>
              </div>
              <div className={styles.historyItem}>
                <div>
                  <div className={styles.historyCode}>#LUM-9824</div>
                  <span style={{ color: '#6b7280', fontSize: '0.75rem' }}>Pinheiros → Moema</span>
                </div>
                <span className={styles.historyStatus}>Em trânsito</span>
              </div>
            </div>
          </div>
        </div>

        {/* Lado Direito: Conteúdo e Vantagens */}
        <div className={styles.content}>
          <span className={styles.subtitle}>PARA EMPRESAS</span>
          <h2 className={styles.title}>Sua logística corporativa simplificada</h2>
          <p className={styles.description}>
            Gerencie múltiplas entregas, acompanhe relatórios em tempo real e reduza custos operacionais com a nossa solução corporativa sob medida.
          </p>

          <div className={styles.featureList}>
            <div className={styles.featureItem}>
              <span className={styles.featureIcon}>✓</span>
              <div className={styles.featureText}>
                <h4>Integração via API</h4>
                <p>Conecte e automatize pedidos diretamente do seu e-commerce ou ERP.</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <span className={styles.featureIcon}>✓</span>
              <div className={styles.featureText}>
                <h4>Dashboard Administrativa</h4>
                <p>Acompanhe todos os envios, relatórios de desempenho e métricas em um só lugar.</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <span className={styles.featureIcon}>✓</span>
              <div className={styles.featureText}>
                <h4>Relatórios de Faturamento</h4>
                <p>Faturamento quinzenal ou mensal com relatórios detalhados por centro de custo.</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <span className={styles.featureIcon}>✓</span>
              <div className={styles.featureText}>
                <h4>Gestão Completa de Frota</h4>
                <p>Acesso a centenas de motoboys, utilitários e caminhões sem custos fixos.</p>
              </div>
            </div>
          </div>

          <button className={styles.primaryBtn}>Falar com Especialista</button>
        </div>

      </div>
    </section>
  );
}

export default CorporateSection;