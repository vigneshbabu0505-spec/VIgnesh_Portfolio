import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { education } from '../data/portfolioData.js'

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="section__inner">
        <motion.h2
          className="section__heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          {education.heading}
        </motion.h2>

        <div className="education__timeline">
          {education.items.map((item, i) => (
            <motion.div
              className="education-card"
              key={item.college}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
            >
              <div className="education-card__icon">
                <GraduationCap size={22} />
              </div>
              <div className="education-card__content">
                <h3>{item.college}</h3>
                <p className="education-card__degree">{item.degree}</p>
                <div className="education-card__meta">
                  <span>CGPA: {item.cgpa}</span>
                  <span className="education-card__status">{item.status}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
