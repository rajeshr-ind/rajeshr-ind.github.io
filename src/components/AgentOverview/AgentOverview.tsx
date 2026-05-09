import React, { useEffect, useState } from 'react';
import styles from './AgentOverview.module.css';

const BentoCell = ({ 
  emoji, 
  title, 
  description, 
  delay, 
  className = '',
  style = {}
}: { 
  emoji: string; 
  title: string; 
  description: string; 
  delay: number;
  className?: string;
  style?: React.CSSProperties;
}) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`${styles.bentoCell} ${className} ${animate ? styles.animateCell : ''}`}
      style={{
        opacity: animate ? 1 : 0,
        ...style
      }}
    >
      <div className={styles.emoji}>{emoji}</div>
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

const AgentOverview = () => {
  return (
    <div className={styles.bentoContainer}>
      <div className={styles.gradientMesh}>
        <div className={styles.blob} style={{ width: '500px', height: '500px', top: '-160px', right: '-120px', background: '#7C3AED', opacity: 0.15 }} />
        <div className={styles.blob} style={{ width: '360px', height: '360px', bottom: '-100px', left: '-80px', background: '#06B6D4', opacity: 0.1 }} />
      </div>

      {/* Row 1 */}
      <BentoCell 
        delay={100} emoji="🗺️" 
        title="Planning" description="Breaks goals into executable steps" 
      />
      <BentoCell 
        delay={200} emoji="🔁" 
        title="ReAct Loop" description="Reason → Act → Observe → repeat" 
        style={{ gridColumn: 2 }}
      />
      <BentoCell 
        delay={300} emoji="🔋" 
        title="24 × 7" description="Operates continuously without fatigue" 
        style={{ gridColumn: 3 }}
      />
      <BentoCell 
        delay={400} emoji="✨" 
        title="LLM Powered" description="Language model as reasoning engine" 
        style={{ gridColumn: 4 }}
      />

      {/* Row 2-3 Left */}
      <BentoCell 
        delay={500} emoji="🎯" 
        title="Goal-Oriented" description="Pursues defined outcomes across steps" 
        className={styles.tall}
      />

      {/* Hero */}
      <div 
        className={`${styles.bentoCell} ${styles.hero} ${styles.animateCell}`}
        style={{ animationDelay: '0.6s' }}
      >
        <div className={styles.heroEmoji}>🤖</div>
        <h3>Autonomous</h3>
        <p>Acts independently to complete tasks without step-by-step human instruction</p>
      </div>

      {/* Row 2-3 Right */}
      <BentoCell 
        delay={700} emoji="🧰" 
        title="Tool Use" description="APIs · search · code execution" 
        style={{ gridColumn: 4, gridRow: 2 }}
      />
      <BentoCell 
        delay={800} emoji="🧠" 
        title="Memory" description="Short-term context · long-term retrieval" 
        style={{ gridColumn: 4, gridRow: 3 }}
      />

      {/* Row 4 */}
      <BentoCell 
        delay={900} emoji="🤝" 
        title="Multiple Agents" description="Specialists collaborate in parallel" 
        style={{ gridColumn: 1, gridRow: 4 }}
      />
      <BentoCell 
        delay={1000} emoji="🧑‍💻" 
        title="Human in Loop" description="Approval · oversight · exceptions" 
        style={{ gridColumn: 2, gridRow: 4 }}
      />
      <BentoCell 
        delay={1100} emoji="🛡️" 
        title="Guardrails" description="Policies · permissions · audit · safety" 
        style={{ gridColumn: 3, gridRow: 4 }}
      />
      <BentoCell 
        delay={1200} emoji="⚡" 
        title="Adaptable" description="Adjusts plans based on observations" 
        style={{ gridColumn: 4, gridRow: 4 }}
      />

      {/* Row 5 */}
      <BentoCell 
        delay={1300} emoji="🔍" 
        title="Live Knowledge" description="Retrieval-augmented with live context" 
        style={{ gridColumn: 1, gridRow: 5 }}
      />
      <BentoCell 
        delay={1400} emoji="💬" 
        title="Communicates" description="Talks to users, systems & agents" 
        style={{ gridColumn: 2, gridRow: 5 }}
      />
      <BentoCell 
        delay={1500} emoji="🧩" 
        title="Problem Solving" description="Handles multi-step, ambiguous tasks" 
        style={{ gridColumn: 3, gridRow: 5 }}
      />
      <BentoCell 
        delay={1600} emoji="⚠️" 
        title="May Hallucinate" description="Validation & grounding are essential" 
        style={{ gridColumn: 4, gridRow: 5, background: 'rgba(245, 158, 11, 0.15)', border: '1px solid rgba(245, 158, 11, 0.3)' }}
      />
    </div>
  );
};

export default AgentOverview;
