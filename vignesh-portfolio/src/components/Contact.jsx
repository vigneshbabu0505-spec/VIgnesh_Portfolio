import { motion } from 'framer-motion'
import { Github, Linkedin, Code2, Send } from 'lucide-react'
import { contactContent, personalInfo } from '../data/portfolioData.js'

const socials = [
  { icon: Github, href: personalInfo.github, label: 'GitHub' },
  { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
  { icon: Code2, href: personalInfo.leetcode, label: 'LeetCode' },
]

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="section__inner contact__inner">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section__heading">{contactContent.heading}</h2>
          <p className="contact__text">{contactContent.text}</p>

          <a
            href={`mailto:${personalInfo.email}?subject=Portfolio%20Contact`}
            className="btn btn--primary btn--lg"
          >
            <Send size={17} /> {contactContent.buttonText}
          </a>

          <div className="contact__socials">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="hero__social-icon"
              >
                <Icon size={19} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
