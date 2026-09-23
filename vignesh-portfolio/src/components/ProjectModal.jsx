import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Github, ExternalLink } from 'lucide-react'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal__close" onClick={onClose} aria-label="Close project details">
              <X size={20} />
            </button>

            <span className="modal__type">{project.type}</span>
            <h3 id="modal-title" className="modal__title">
              {project.name}
            </h3>

            <section className="modal__section">
              <h4>Project overview</h4>
              <p>{project.description}</p>
            </section>

            <section className="modal__section">
              <h4>Architecture</h4>
              <p>{project.architecture}</p>
            </section>

            <section className="modal__section">
              <h4>Features</h4>
              <ul className="modal__list modal__list--grid">
                {project.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </section>

            <section className="modal__section">
              <h4>Tech stack</h4>
              <div className="project-card__tech">
                {project.tech.map((t) => (
                  <span className="tech-badge" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </section>

            <section className="modal__section">
              <h4>My contribution</h4>
              <p>{project.contribution}</p>
            </section>

            <section className="modal__section">
              <h4>Future improvements</h4>
              <ul className="modal__list">
                {project.futureImprovements.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </section>

            <div className="modal__actions">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn--secondary btn--sm">
                <Github size={15} /> View on GitHub
              </a>
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn--ghost btn--sm">
                  <ExternalLink size={15} /> Live Demo
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
