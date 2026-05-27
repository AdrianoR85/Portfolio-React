import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle } from 'lucide-react'
import { personalInfo } from '../data/data'

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: '#ea4335'
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'AdrianoR85',
    href: personalInfo.github,
    color: '#ffffff'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Adriano Rosa',
    href: personalInfo.linkedin,
    color: '#0077b5'
  }
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="section">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 className="section-title">Contato</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Vamos conversar? Entre em contato comigo
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
          {/* Contact Links */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1.5rem' }}>
              Informações de Contato
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {contactLinks.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ x: -30, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        padding: '1rem',
                        backgroundColor: 'var(--card)',
                        borderRadius: '0.75rem',
                        border: '1px solid var(--border)',
                        textDecoration: 'none',
                        color: 'inherit',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'var(--primary)'
                        e.currentTarget.style.transform = 'translateX(8px)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--border)'
                        e.currentTarget.style.transform = 'translateX(0)'
                      }}
                    >
                      <div
                        style={{
                          width: '2.5rem',
                          height: '2.5rem',
                          borderRadius: '0.5rem',
                          backgroundColor: 'var(--secondary)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: item.color
                        }}
                      >
                        <item.icon size={20} />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--muted-foreground)' }}>{item.label}</div>
                        <div style={{ fontSize: '0.875rem', fontWeight: 500 }}>{item.value}</div>
                      </div>
                    </a>
                  ) : (
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        padding: '1rem',
                        backgroundColor: 'var(--card)',
                        borderRadius: '0.75rem',
                        border: '1px solid var(--border)'
                      }}
                    >
                      <div
                        style={{
                          width: '2.5rem',
                          height: '2.5rem',
                          borderRadius: '0.5rem',
                          backgroundColor: 'var(--secondary)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: item.color
                        }}
                      >
                        <item.icon size={20} />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--muted-foreground)' }}>{item.label}</div>
                        <div style={{ fontSize: '0.875rem', fontWeight: 500 }}>{item.value}</div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1.5rem' }}>
              Envie uma Mensagem
            </h3>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '3rem',
          backgroundColor: 'var(--card)',
          borderRadius: '1rem',
          border: '1px solid var(--border)',
          textAlign: 'center'
        }}
      >
        <CheckCircle size={48} style={{ color: 'var(--primary)', marginBottom: '1rem' }} />
        <h4 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>
          Mensagem Enviada!
        </h4>
        <p style={{ color: 'var(--muted-foreground)' }}>
          Obrigado pelo contato. Responderei em breve!
        </p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div>
        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>
          Nome
        </label>
        <input
          type="text"
          required
          className="form-input"
          placeholder="Seu nome"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div>
        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>
          Email
        </label>
        <input
          type="email"
          required
          className="form-input"
          placeholder="seu@email.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div>
        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>
          Mensagem
        </label>
        <textarea
          required
          rows={5}
          className="form-input"
          placeholder="Sua mensagem..."
          style={{ resize: 'vertical', minHeight: '120px' }}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>
      <motion.button
        type="submit"
        className="btn btn-primary"
        style={{ width: '100%', marginTop: '0.5rem' }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Send size={18} />
        Enviar Mensagem
      </motion.button>
    </form>
  )
}
