import styles from './StatsSection.module.css';

export function StatsSection() {
  const stats = [
    { id: 1, number: '50K+', label: 'ENTREGAS REALIZADAS' },
    { id: 2, number: '10K+', label: 'MOTORISTAS ATIVOS' },
    { id: 3, number: '500+', label: 'EMPRESAS ATENDIDAS' },
    { id: 4, number: '98%', label: 'SATISFAÇÃO DOS CLIENTES' },
  ];

  return (
    <section className={styles.stats}>
      <div className={styles.container}>
        {stats.map((stat) => (
          <div key={stat.id} className={styles.statItem}>
            <span className={styles.number}>{stat.number}</span>
            <span className={styles.label}>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}


export default StatsSection;