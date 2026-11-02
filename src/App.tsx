import React, { useState, useCallback } from 'react';
import { content } from './content';

// ── Helpers ──
function assembleEmail(): string {
  return content.email;
}

function copyToClipboard(text: string, onSuccess: () => void): void {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(onSuccess, () => fallbackCopy(text, onSuccess));
  } else {
    fallbackCopy(text, onSuccess);
  }
}

function fallbackCopy(text: string, onSuccess: () => void): void {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.left = '-9999px';
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand('copy');
    onSuccess();
  } catch {
    /* ignore */
  }
  document.body.removeChild(textarea);
}

// ── Types ──
type TabId = 'email' | 'cv' | 'proposal';

interface Tab {
  id: TabId;
  label: string;
  file: string | null;
}

// ── Components ──
const Wordmark: React.FC = () => (
  <a href="#main" className="wordmark">
    Ivan Chiniakin
  </a>
);

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} className="nav-link">
    {children}
  </a>
);

interface HeaderProps {
}

const Header: React.FC<HeaderProps> = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: '#research', label: 'Research' },
    { href: '#background', label: 'Background' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' },
    ...(content.cv ? [{ href: '#contact', label: 'CV' }] : []),
  ] as const;

  return (
    <header className="header">
      <div className="container header-inner">
        <Wordmark />
        <nav className="nav">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
          <button
            className="nav-toggle"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
          <div className={`nav-menu${menuOpen ? ' active' : ''}`} id="mobile-nav">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-menu__link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

const Eyebrow: React.FC = () => (
  <p className="eyebrow">{content.eyebrow}</p>
);

const Subtitle: React.FC = () => <p>{content.subtitle}</p>;

const ContactBlock: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>('email');
  const [copied, setCopied] = useState(false);

  const tabs: Tab[] = ([
    { id: 'email', label: 'email', file: null },
    { id: 'cv', label: 'CV', file: content.cv },
    { id: 'proposal', label: 'proposal', file: content.proposal },
  ] as unknown as Tab[])
    .filter((tab: Tab) => tab.file !== null);

  const handleCopy = useCallback(() => {
    copyToClipboard(assembleEmail(), () => setCopied(true));
    setTimeout(() => setCopied(false), 2000);
  }, []);

  const renderEmail = () => (
    <>
      <span aria-live="polite">
        {copied ? 'Copied' : <code>{assembleEmail()}</code>}
      </span>
      <button
        className="code-block__copy"
        onClick={handleCopy}
        aria-label="Copy email"
      >
        {copied ? '✓' : 'copy'}
      </button>
    </>
  );

  const renderCV = () => (
    <a href={content.cv!} download>
      Download CV
    </a>
  );

  const renderProposal = () => (
    <a href={content.proposal!} download>
      Download proposal PDF
    </a>
  );

  return (
    <div className="contact-tabs" role="tablist" aria-label="Contact options">
      {tabs.map((tab: Tab) => (
        <button
          key={tab.id}
          role="tab"
          aria-selected={activeTab === tab.id}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </button>
      ))}
      <div className="contact-tab-content">
        {activeTab === 'email' && renderEmail()}
        {activeTab === 'cv' && renderCV()}
        {activeTab === 'proposal' && renderProposal()}
      </div>
    </div>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <Eyebrow />
      <div className="hero-body">
        <h1>{content.h1}</h1>
        <Subtitle />
      </div>
      <ContactBlock />
      <div className="hero-actions">
        <a href={`mailto:${content.email}`} className="button primary">
          Write an email
        </a>
        {content.cv && content.cv && (
          <a href={content.cv} className="button" download>
            Download CV
          </a>
        )}
      </div>
    </section>
  );
};

const ResearchPoint: React.FC<{ point: { name: string; description: string } }> = ({ point }) => (
  <li>
    <strong>{point.name}</strong> {point.description}
  </li>
);

const ProjectCard: React.FC = () => (
  <pre className="code-block">
    <code>
      {Object.entries(content.projectCard)
        .map(([key, value]) => `  ${key}  = "${value}"`)
        .join('\n')}
    </code>
  </pre>
);

const Stats: React.FC = () => (
  <div className="stats">
    {content.stats.map((stat, index) => (
      <div key={index} className="stat">
        <span className="stat__number">Fig. {index + 1}.</span>
        <span className="stat__number">{stat.number}</span>
        <span className="stat__label">{stat.label}</span>
      </div>
    ))}
  </div>
);

const BackgroundSection: React.FC = () => {
  const education = content.education.map((edu, index) => (
    <li key={index}>
      <div className="item-header">
        <div>
          <strong>{edu.degree}</strong>
          {edu.university && <span>, {edu.university}</span>}
          <span className="text-muted">{edu.year}</span>
        </div>
      </div>
    </li>
  ));

  const industry = content.industry.map((item, index) => (
    <li key={index}>
      <div className="item-header">
        <div>
          <strong>{item.role}</strong> {item.years && <span>, {item.years}</span>}
          {item.stack && <span> — {item.stack}</span>}
        </div>
        {item.employer && <span className="text-muted">{item.employer}</span>}
      </div>
    </li>
  ));

  return (
    <section className="background-section" id="background">
      <h2>Background</h2>
      <div className="background-section">
        <div className="section-block">
          <h3>Education</h3>
          <ul>{education}</ul>
        </div>
        <div className="section-block">
          <h3>Industry</h3>
          <ul>{industry}</ul>
        </div>
      </div>
      <h3>Prior research</h3>
      <p>{content.priorResearch}</p>
      <p className="text-muted">{content.backgroundLine}</p>
    </section>
  );
};

const FaqItem: React.FC<{ faq: { question: string; answer: string } }> = ({ faq }) => (
  <details>
    <summary>{faq.question}</summary>
    <p>{faq.answer}</p>
  </details>
);

const Faq: React.FC = () => (
  <section className="faq-section" id="faq">
    <h2>FAQ</h2>
    {content.faqs.map((faq, index) => (
      <FaqItem key={index} faq={faq} />
    ))}
  </section>
);

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    copyToClipboard(content.email, () => setCopied(true));
    setTimeout(() => setCopied(false), 2000);
  }, []);

  return (
    <section className="contact-section" id="contact">
      <h2>Contact</h2>
      <div className="email-block">
        <code>{assembleEmail()}</code>
        <button className="code-block__copy" onClick={handleCopy} aria-label="Copy email">
          {copied ? '✓' : '📋 copy'}
        </button>
      </div>
      <noscript>
        <p>chiniakinivan [at] gmail.com</p>
      </noscript>
      {content.social.length > 0 && (
        <div className="social-links">
          {content.social.map((social) => (
            <a key={social.name} href={social.url}>
              {social.name}
            </a>
          ))}
        </div>
      )}
    </section>
  );
};

const Footer: React.FC = () => (
  <footer className="footer">
    <p>&copy; {new Date().getFullYear()} Ivan Chiniakin</p>
    <p>Last updated: {new Date().toISOString().split('T')[0]}</p>
    <div className="footer__links">
      <a href="https://github.com/ch1nya/sci_cv">Source</a>
      <a href="#main">Back to top</a>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <div className="page">
      <Header />
      <main>
        <Hero />
        <section className="research" id="research">
          <h2>Research</h2>
          <p>{content.researchIntro}</p>
          <ul>
            {content.researchPoints.map((point, index) => (
              <ResearchPoint key={index} point={point} />
            ))}
          </ul>
          <ProjectCard />
          {content.proposal && content.proposal && (
            <a href={content.proposal!} className="button" download>
              View proposal PDF
            </a>
          )}
        </section>
        <Stats />
        <BackgroundSection />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
