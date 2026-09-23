import { motion } from 'framer-motion'
import { Code2, ArrowUpRight } from 'lucide-react'
import { codingProfile } from '../data/portfolioData.js'

export default function Coding() {
  return (
    <section className="section coding">
      <div className="section__inner">
        <motion.div
          className="coding-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="coding-card__icon">
            <Code2 size={22} />
          </div>
          <div className="coding-card__text">
            <h3>{codingProfile.heading}</h3>
            <p>{codingProfile.text}</p>
          </div>
          <a
            href={codingProfile.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--secondary btn--sm"
          >
            {codingProfile.buttonText} <ArrowUpRight size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
