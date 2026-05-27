"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Phone, Send, MapPin } from "lucide-react"
import { portfolioData } from "@/lib/data"

export function Contact() {
  const contactLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "AdrianoR85",
      href: portfolioData.personal.github
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "Adriano Rosa",
      href: portfolioData.personal.linkedin
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: portfolioData.personal.email,
      href: `mailto:${portfolioData.personal.email}`
    }
  ]

  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Vamos Conversar?</h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto" />
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Estou sempre aberto a novas oportunidades e colaborações. Entre em contato!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="p-6 bg-card rounded-2xl border border-border">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">Santa Catarina, Brasil</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Conecte-se Comigo</h3>
              <div className="space-y-4">
                {contactLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 bg-secondary rounded-xl hover:bg-secondary/80 transition-colors group"
                  >
                    <span className="p-2 bg-background rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {link.icon}
                    </span>
                    <div>
                      <p className="text-sm text-muted-foreground">{link.label}</p>
                      <p className="font-medium">{link.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <form 
              action={`mailto:${portfolioData.personal.email}`}
              method="post"
              encType="text/plain"
              className="p-6 bg-card rounded-2xl border border-border space-y-5"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                  placeholder="Sua mensagem..."
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors"
              >
                <Send className="w-5 h-5" />
                Enviar Mensagem
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
