import { motion } from 'framer-motion'
import { Heart, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer
      style={{
        backgroundColor: 'var(--card)',
        borderTop: '1px solid var(--border)',
        padding: '2rem 0'
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem'
        }}
      >
        <p style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          Feito com <Heart size={16} style={{ color: 'var(--primary)' }} /> por Adriano Rosa
        </p>

        <p style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem' }}>
          &copy; {new Date().getFullYear()} Todos os direitos reservados
        </p>

        <motion.button
          onClick={scrollToTop}
          style={{
            width: '2.5rem',
            height: '2.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '0.5rem',
            backgroundColor: 'var(--secondary)',
            border: '1px solid var(--border)',
            color: 'var(--foreground)',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          whileHover={{ backgroundColor: 'var(--primary)', color: 'var(--background)' }}
          whileTap={{ scale: 0.95 }}
          aria-label="Voltar ao topo"
        >
          <ArrowUp size={18} />
        </motion.button>
      </div>
    </footer>
  )
}
