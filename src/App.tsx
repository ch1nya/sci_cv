import { useState } from 'react';
import { Copy, Moon, Sun } from 'lucide-react';
import { Toaster, toast } from 'sonner';
import { content } from './content';

const sections = [
  { id: 'research', label: 'Research' },
  { id: 'background', label: 'Background' },
  { id: 'applying', label: 'Applying' },
];

const socialLabels = {
  github: 'GitHub',
  linkedin: 'LinkedIn',
  orcid: 'ORCID',
  'google-scholar': 'Google Scholar',
} as const;

async function copyEmail() {
  try {
    if (navigator.clipboard?.writeText) await navigator.clipboard.writeText(content.email);
    else {
      const field = document.createElement('textarea');
      field.value = content.email;
      field.style.position = 'fixed';
      field.style.opacity = '0';
      document.body.append(field);
      field.select();
      if (!document.execCommand('copy')) throw new Error('Clipboard copy failed');
      field.remove();
    }
    toast.success('Email copied');
  } catch {
    toast.error('Could not copy email');
  }
}

function ThemeToggle() {
  const [dark, setDark] = useState(document.documentElement.dataset.theme === 'dark');
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? 'dark' : 'light';
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };
  return (
    <button
      type='button'
      className='theme-toggle'
      onClick={toggle}
      aria-label={'Switch to ' + (dark ? 'light' : 'dark') + ' theme'}
    >
      {dark ? <Sun size={16} aria-hidden='true' /> : <Moon size={16} aria-hidden='true' />}
    </button>
  );
}

function Profile() {
  return (
    <aside className='profile'>
      <div className='profile-id'>
        {content.portrait && (
          <img
            className='portrait'
            src={import.meta.env.BASE_URL + content.portrait}
            alt='Ivan Chiniakin'
            width='88'
            height='88'
          />
        )}
        <div>
          <p className='name'>{content.name}</p>
          <p className='role'>{content.role}</p>
        </div>
      </div>
      {content.location && <p className='location'>{content.location}</p>}

      <nav className='profile-nav' aria-label='Sections'>
        {sections.map((section) => (
          <a key={section.id} href={'#' + section.id}>{section.label}</a>
        ))}
      </nav>

      <ul className='profile-links'>
        <li><a href={'mailto:' + content.email}>Write an email</a></li>
        <li>
          <button type='button' className='inline-button' onClick={copyEmail}>
            Copy address <Copy size={13} aria-hidden='true' />
          </button>
        </li>
        {content.cv && <li><a href={content.cv} download>CV (PDF)</a></li>}
        {content.proposal && <li><a href={content.proposal} download>Research proposal (PDF)</a></li>}
        {content.social.map((item) => (
          <li key={item.name}>
            <a href={item.url} target='_blank' rel='noreferrer'>{socialLabels[item.name]} ↗</a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function Intro() {
  return (
    <header className='intro'>
      <h1>{content.h1}</h1>
      <p className='summary'>{content.summary}</p>
    </header>
  );
}

function Research() {
  const { research } = content;
  return (
    <section id='research' aria-labelledby='research-title'>
      <h2 id='research-title'>Research</h2>
      <p>{research.intro}</p>

      <ol className='flow' aria-label='Study design in three steps'>
        {research.steps.map((step, index) => (
          <li key={step.label}>
            <span className='flow-index'>{index + 1}</span>
            <strong>{step.label}</strong>
            <span>{step.text}</span>
          </li>
        ))}
      </ol>
      <p className='flow-optional'>
        <strong>{research.optionalStep.label}</strong>
        <span>{research.optionalStep.text}</span>
      </p>

      <div className='studies'>
        {research.studies.map((study) => (
          <article key={study.title}>
            <h3>{study.title}</h3>
            <p className='study-question'>{study.question}</p>
            <p className='study-design'>{study.design}</p>
          </article>
        ))}
      </div>

      <p>{research.extension}</p>
      {research.notes.map((note) => (
        <p key={note.label}>
          <strong className='inline-label'>{note.label}.</strong> {note.text}
        </p>
      ))}
    </section>
  );
}

function Background() {
  return (
    <section id='background' aria-labelledby='background-title'>
      <h2 id='background-title'>Background</h2>

      <h3 className='label'>Education</h3>
      <ul className='records'>
        {content.education.map((item) => (
          <li key={item.degree}>
            <div>
              <strong>{item.degree}</strong>
              {item.university && <span>{item.university}</span>}
            </div>
            {item.year && <time>{item.year}</time>}
          </li>
        ))}
      </ul>

      <h3 className='label'>Experience</h3>
      <ul className='records'>
        {content.experience.map((item) => (
          <li key={item.role}>
            <div>
              <strong>{item.role}, {item.years}</strong>
              <span>{item.detail}</span>
            </div>
            {item.employer && <span className='record-meta'>{item.employer}</span>}
          </li>
        ))}
      </ul>

      <h3 className='label'>Prior research</h3>
      <p>{content.priorResearch}</p>
      <p>{content.backgroundNote}</p>
    </section>
  );
}

function Applying() {
  return (
    <section id='applying' aria-labelledby='applying-title'>
      <h2 id='applying-title'>Applying</h2>
      <dl className='facts'>
        {content.applying.map((fact) => (
          <div key={fact.label}>
            <dt>{fact.label}</dt>
            <dd>{fact.text}</dd>
          </div>
        ))}
        <div>
          <dt>Contact</dt>
          <dd>
            <button type='button' className='inline-button' onClick={copyEmail} title='Click to copy'>
              {content.email} <Copy size={13} aria-hidden='true' />
            </button>
          </dd>
        </div>
      </dl>
    </section>
  );
}

export default function App() {
  return (
    <div className='page'>
      <ThemeToggle />
      <div className='layout'>
        <Profile />
        <main id='main'>
          <Intro />
          <Research />
          <Background />
          <Applying />
          <footer className='page-footer'>Last updated {content.updated}</footer>
        </main>
      </div>
      <Toaster position='bottom-right' richColors closeButton />
    </div>
  );
}
