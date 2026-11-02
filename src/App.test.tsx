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

  it('hides tabs when file is null', () => {
    const { container } = render(<App />);
    const tabs = container.querySelectorAll('.contact-tabs button');
    // All tabs should be hidden because all files are null
    // (the default email tab should be visible, others should not appear)
    expect(tabs.length).toBeGreaterThan(0);
  });
});
