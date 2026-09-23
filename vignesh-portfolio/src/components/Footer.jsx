import { Github, Linkedin, Code2, Mail } from 'lucide-react'
import { personalInfo } from '../data/portfolioData.js'

const links = [
  { icon: Github, href: personalInfo.github, label: 'GitHub' },
  { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
  { icon: Code2, href: personalInfo.leetcode, label: 'LeetCode' },
  { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="footer__name">{personalInfo.name}</span>
          <p className="footer__tagline">Building, learning and growing through software.</p>
        </div>

        <div className="footer__links">
          {links.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto:') ? undefined : '_blank'}
              rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              aria-label={label}
              className="footer__icon"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
      <p className="footer__copyright">© 2026 {personalInfo.name}</p>
    </footer>
  )
}
