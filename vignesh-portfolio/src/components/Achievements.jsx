import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { achievements } from '../data/portfolioData.js'

export default function Achievements() {
  return (
    <section id="achievements" className="section achievements">
      <div className="section__inner">
        <motion.h2
          className="section__heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Recognition &amp; Leadership
        </motion.h2>

        <div className="achievements__grid">
          {achievements.map((item, i) => {
            const Icon = Icons[item.icon] || Icons.Award
            return (
              <motion.div
                className="achievement-card"
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="achievement-card__icon">
                  <Icon size={20} />
                </div>
                <p>{item.title}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
