import { motion } from 'framer-motion'
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react'
import ProjectVisual from './ProjectVisual.jsx'

export default function ProjectCard({ project, index, onOpenDetails }) {
  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
    >
      <div className="project-card__visual">
        <ProjectVisual type={project.visual} />
      </div>

      <div className="project-card__body">
        <div className="project-card__meta">
          <span className="project-card__number">{project.number}</span>
          <span className="project-card__type">{project.type}</span>
        </div>

        <h3 className="project-card__name">{project.name}</h3>
        <p className="project-card__description">{project.description}</p>

        <div className="project-card__tech">
          {project.tech.map((t) => (
            <span className="tech-badge" key={t}>
              {t}
            </span>
          ))}
        </div>

        <div className="project-card__actions">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--secondary btn--sm"
          >
            <Github size={15} /> View on GitHub
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost btn--sm"
            >
              <ExternalLink size={15} /> Live Demo
            </a>
          )}
          <button
            type="button"
            className="project-card__details-btn"
            onClick={() => onOpenDetails(project)}
          >
            View Details <ArrowUpRight size={16} className="project-card__arrow" />
          </button>
        </div>
      </div>
    </motion.article>
  )
}
