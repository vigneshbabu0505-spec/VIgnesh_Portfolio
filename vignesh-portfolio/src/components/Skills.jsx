import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { skillCategories } from '../data/portfolioData.js'

function IconFor({ name, size = 18 }) {
  const Icon = Icons[name] || Icons.Code2
  return <Icon size={size} />
}

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="section__inner">
        <motion.h2
          className="section__heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Tools I work with.
        </motion.h2>

        <div className="skills__categories">
          {skillCategories.map((category, ci) => (
            <motion.div
              className="skills__category"
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: ci * 0.08 }}
            >
              <div className="skills__category-header">
                <IconFor name={category.icon} size={20} />
                <h3>{category.title}</h3>
              </div>
              <div className="skills__cards">
                {category.skills.map((skill) => (
                  <div className="skill-card" key={skill.name}>
                    <IconFor name={skill.icon} size={17} />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
