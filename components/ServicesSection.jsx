import styles from './ServicesSection.module.css';

export function ServicesSection() {
  const services = [
    {
      id: 1,
      icon: '⚡',
      tag: 'EXPRESSO',
      tagClass: styles.tagExpress,
      title: 'Entregas Rápidas',
      description: 'Documentos e pequenos volumes entregues na sua cidade em questão de minutos com motoboys dedicados.',
    },
    {
      id: 2,
      icon: '📦',
      tag: 'TRANSPORTE',
      tagClass: styles.tagTransport,
      title: 'Carretos e Mudanças',
      description: 'Veículos maiores como vans, utilitários e caminhões prontos para transportar a carga no tamanho da sua necessidade.',
    },
    {
      id: 3,
      icon: '🏢',
      tag: 'CORPORATIVO',
      tagClass: styles.tagCorporate,
      title: 'Logística Empresarial',
      description: 'Otimize a operação do seu negócio com contratos mensais, faturamento flexível e integração via API.',
    },
    {
      id: 4,
      icon: '📍',
      tag: 'RASTREIO',
      tagClass: styles.tagTracking,
      title: 'Rastreio em Tempo Real',
      description: 'Monitore sua carga e compartilhe o link de rastreio direto com o seu cliente em tempo real.',
    },
  ];

  return (
    <section id="servicos" className={styles.services}>
      <div className={styles.container}>
        
        <div className={styles.header}>
          <span className={styles.subtitle}>NOSSOS SERVIÇOS</span>
          <h2 className={styles.title}>Soluções completas para todas as suas necessidades</h2>
        </div>

        <div className={styles.grid}>
          {services.map((service) => (
            <div key={service.id} className={styles.card}>
              <div>
                <div className={styles.cardHeader}>
                  <div className={styles.iconWrapper}>{service.icon}</div>
                  <span className={`${styles.tag} ${service.tagClass}`}>{service.tag}</span>
                </div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDescription}>{service.description}</p>
              </div>

              <button className={styles.cardLink}>
                Saiba mais <span>→</span>
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ServicesSection;