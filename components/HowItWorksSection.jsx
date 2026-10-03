import styles from './HowItWorksSection.module.css';

export function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      title: 'Faça sua Solicitação',
      description: 'Informe a origem da encomenda, o endereço de destino e escolha o veículo ideal para a sua necessidade.',
    },
    {
      number: '02',
      title: 'Conectamos Você',
      description: 'Nossa tecnologia encontra o motorista parceiro ideal mais próximo para aceitar a sua entrega em questão de segundos.',
    },
    {
      number: '03',
      title: 'Entrega Garantida',
      description: 'Acompanhe a rota em tempo real no mapa e receba a confirmação digital de entrega assim que for concluída.',
    },
  ];

  return (
    <section id="como-funciona" className={styles.howItWorks}>
      <div className={styles.container}>
        
        <div className={styles.header}>
          <span className={styles.subtitle}>COMO FUNCIONA</span>
          <h2 className={styles.title}>Tudo resolvido em apenas 3 passos simples</h2>
        </div>

        <div className={styles.grid}>
          {steps.map((step) => (
            <div key={step.number} className={styles.stepCard}>
              <div className={styles.stepNumber}>{step.number}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default HowItWorksSection;