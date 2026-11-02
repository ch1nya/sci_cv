import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import App from './App';

describe('App rendering', () => {
  it('renders the app without TODO, null, undefined, or lorem', () => {
    const { container } = render(<App />);
    const text = container.textContent || '';
    expect(text).not.toContain('TODO');
    expect(text).not.toContain('null');
    expect(text).not.toContain('undefined');
    expect(text).not.toContain('lorem');
  });

  it('hides elements with null content', () => {
    const { container } = render(<App />);
    const html = container.innerHTML;
    expect(html).not.toContain('null');
  });

  it('renders the email correctly', () => {
    const { container } = render(<App />);
    const text = container.textContent || '';
    expect(text).toContain('chiniakinivan@gmail.com');
  });

  it('renders the mailto link correctly', () => {
    const { container } = render(<App />);
    const mailtoLink = container.querySelector('a[href^="mailto:"]');
    expect(mailtoLink).not.toBeNull();
    if (mailtoLink) {
      expect(mailtoLink).toHaveAttribute('href', 'mailto:chiniakinivan@gmail.com');
    }
  });

  it('renders the GitHub profile portrait and hides absent downloadable files', () => {
    const { container } = render(<App />);
    expect(container.querySelector('.hero-portrait')?.getAttribute('src')).toMatch(/\/portrait\.png$/);
    expect(container.querySelector('a[download]')).toBeNull();
  });
});
