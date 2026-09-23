import { motion } from 'framer-motion'
import { aboutContent } from '../data/portfolioData.js'

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' },
  }),
}

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="section__inner about__grid">
        <motion.div
          className="about__text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section__heading">{aboutContent.heading}</h2>
          {aboutContent.paragraphs.map((p, i) => (
            <p className="about__paragraph" key={i}>
              {p}
            </p>
          ))}
        </motion.div>
      </div>

      <div className="about__stats">
        {aboutContent.stats.map((stat, i) => (
          <motion.div
            className="stat-card"
            key={stat.label}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <span className="stat-card__value">{stat.value}</span>
            <span className="stat-card__label">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
