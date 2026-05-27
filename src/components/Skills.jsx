import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skills } from '../data/data'

const categories = [
  { id: 'frontend', label: 'Frontend', gradient: 'linear-gradient(90deg, #e34c26, #61dafb)' },
  { id: 'backend', label: 'Backend', gradient: 'linear-gradient(90deg, #3776ab, #336791)' },
  { id: 'data', label: 'Data', gradient: 'linear-gradient(90deg, #f2c811, #217346)' },
  { id: 'tools', label: 'Tools', gradient: 'linear-gradient(90deg, #f05032, #14b8a6)' }
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="section" style={{ backgroundColor: 'var(--card)' }}>
      <div className="container" ref={ref}>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 className="section-title">Habilidades</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Tecnologias e ferramentas que utilizo no dia a dia
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {categories.map((category, catIndex) => {
            const categorySkills = skills.filter(s => s.category === category.id)
            if (categorySkills.length === 0) return null

            return (
              <motion.div
                key={category.id}
                initial={{ y: 50, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * catIndex }}
                style={{
                  padding: '1.5rem',
                  backgroundColor: 'var(--secondary)',
                  borderRadius: '1rem',
                  border: '1px solid var(--border)'
                }}
              >
                <h3 style={{
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  marginBottom: '1.5rem',
                  paddingBottom: '0.75rem',
                  borderBottom: '1px solid var(--border)'
                }}>
                  {category.label}
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {categorySkills.map((skill, index) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill}
                      isInView={isInView}
                      delay={0.2 + catIndex * 0.1 + index * 0.1}
                      gradient={category.gradient}
                    />
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function SkillBar({ skill, isInView, delay, gradient }) {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
        <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>{skill.name}</span>
        <span style={{ fontSize: '0.75rem', color: 'var(--muted-foreground)' }}>{skill.level}%</span>
      </div>
      <div className="progress-bar">
        <motion.div
          className="progress-fill"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
          style={{ background: gradient }}
        />
      </div>
    </div>
  )
}
