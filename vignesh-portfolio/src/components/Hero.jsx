import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Github, Linkedin, Mail, Code2, ArrowDown, Download, Send } from 'lucide-react'
import { personalInfo, heroContent } from '../data/portfolioData.js'

const socialLinks = [
  { icon: Github, href: personalInfo.github, label: 'GitHub' },
  { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
  { icon: Code2, href: personalInfo.leetcode, label: 'LeetCode' },
  { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
]

export default function Hero() {
  const ref = useRef(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 })
  const rotateX = useTransform(springY, [-0.5, 0.5], [6, -6])
  const rotateY = useTransform(springX, [-0.5, 0.5], [-6, 6])

  const handleMouseMove = (e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const scrollToProjects = (e) => {
    e.preventDefault()
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="hero"
      ref={ref}
      onMouseMove={handleMouseMove}
    >
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__grid" />
        <div className="hero__glow hero__glow--1" />
        <div className="hero__glow hero__glow--2" />
      </div>

      <div className="hero__inner">
        <motion.div
          className="hero__text"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="eyebrow">{heroContent.eyebrow}</p>
          <h1 className="hero__heading">
            {heroContent.headingPrefix}
            <span className="accent">{heroContent.headingHighlight}</span>
            {heroContent.headingSuffix}
          </h1>
          <p className="hero__subheading">{heroContent.subheading}</p>
          <p className="hero__secondary">{heroContent.secondaryLine}</p>

          <div className="hero__actions">
            <a href="#projects" onClick={scrollToProjects} className="btn btn--primary">
              View My Projects
            </a>
            <a href={personalInfo.resumePath} download className="btn btn--secondary">
              <Download size={16} /> Download Resume
            </a>
            <a href={`mailto:${personalInfo.email}`} className="btn btn--ghost">
              <Send size={16} /> Contact Me
            </a>
          </div>

          <div className="hero__socials">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto:') ? undefined : '_blank'}
                rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                aria-label={label}
                className="hero__social-icon"
              >
                <Icon size={19} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="hero__photo-wrap"
          style={{ rotateX, rotateY }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
        >
          <div className="hero__photo-frame">
            <img
              src={personalInfo.profilePhoto}
              alt="Vignesh B, aspiring backend software developer"
              className="hero__photo"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
                e.currentTarget.parentElement.classList.add('hero__photo-frame--empty')
              }}
            />
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="hero__scroll-indicator"
        aria-label="Scroll to About section"
        onClick={(e) => {
          e.preventDefault()
          document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
        }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  )
}
