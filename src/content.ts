// ── Content source of truth ──
// All copy and links in one file. Components are dumb and render from it.
// Unknown values are `null` — the UI hides those elements completely.
// Do not add claims, employers, universities, publications, awards, links, ORCID,
// numbers that are not verified. If a value is not verified, it is `null`.

export type SocialLink = {
  name: 'github' | 'linkedin' | 'orcid' | 'google-scholar';
  url: string;
};

export type Content = {
  // Site identity
  siteTitle: string;
  status: string;
  eyebrow: string;
  h1: string;
  subtitle: string;

  // Research
  researchIntro: string;
  researchPoints: Array<{ name: string; description: string }>;
  projectCard: {
    title: string;
    stage: string;
    intake: string;
    scope: string;
  };

  // Stats (Fig. 1–3)
  stats: Array<{ number: string; label: string }>;

  // Background
  education: Array<{
    degree: string;
    university: string | null;
    year: string | null;
  }>;
  industry: Array<{
    role: string;
    years: string;
    stack: string;
    employer: string | null;
  }>;
  priorResearch: string;
  backgroundLine: string;

  // FAQ
  faqs: Array<{ question: string; answer: string }>;

  // Contact
  email: string;
  social: SocialLink[];

  // Optional assets — hide when absent
  portrait: string | null; // public/portrait.jpg
  cv: string | null; // cv.pdf
  proposal: string | null; // proposal.pdf
};

export const content: Content = {
  // Site identity
  siteTitle: 'Ivan Chiniakin | PhD applicant, AI governance and accountability',
  status: 'PhD applicant, 2027 intake',
  eyebrow: 'Ivan Chiniakin · PhD applicant, 2027 intake',
  h1: 'Accountability when organizations delegate decisions to AI agents',
  subtitle:
    'I am preparing a PhD application on trust, accountability and delegation to AI agents in organizations, comparing how China, the EU and the US structure responsibility.',

  // Research
  researchIntro:
    'Governments and organizations increasingly delegate analytical and decision-making tasks to AI agents. The open question is whether they keep the capacity to oversee those agents, and which accountability regimes help preserve it.',
  researchPoints: [
    { name: 'Delegation.', description: 'Under what conditions do decision-makers hand consequential decisions to AI agents?' },
    { name: 'Oversight capacity.', description: 'Do organizations keep the capacity to oversee agents once analytical work is delegated?' },
    { name: 'Accountability regimes.', description: 'Which regimes, understood as policy designs, make such delegation safe?' },
    { name: 'Comparison.', description: 'How China, the EU and the US structure responsibility.' },
    { name: 'Method.', description: 'Open. I am flexible on context and method and want to shape the design with a supervisor.' },
  ],
  projectCard: {
    title: 'Trust, Accountability and Delegation to AI Agents in Organizations',
    stage: 'PhD proposal',
    intake: '2027',
    scope: 'China, EU, US',
  },

  // Stats (Fig. 1–3)
  stats: [
    { number: '5+', label: 'years of experience building production-grade React applications' },
    { number: '2', label: 'degrees: International Relations (BA), Business Management (Master’s, 2024)' },
    { number: '3', label: 'jurisdictions in the planned comparison: China, EU, US' },
  ],

  // Background
  education: [
    {
      degree: "Master's in Business Management (MBA)",
      university: 'University of Science and Technology of China (USTC)',
      year: '2024',
    },
    {
      degree: "Bachelor's in International Relations (BA)",
      university: null, // TODO: confirm the bachelor's institution before adding it.
      year: null,
    },
  ],
  industry: [
    {
      role: 'Senior Frontend Engineer',
      years: '5+ years',
      stack: 'React, TypeScript, JavaScript, Next.js, Redux, MobX, React Query, GraphQL, WebSockets, micro-frontends, Tailwind CSS, Docker, LLM APIs',
      employer: 'Sixhands Ltd.', // from working CV
    },
    {
      role: 'Earlier project management experience',
      years: '',
      stack: '',
      employer: 'ran software projects for multiple clients',
    },
  ],
  priorResearch:
    'MBA thesis, “Silver Economy in Russia”: IT healthcare innovation for an ageing population. Literature review plus a questionnaire of 132 older respondents, analysed in SPSS (descriptive and correlational statistics).',
  backgroundLine:
    'Building production software gave me a practical view of how automated systems are specified, tested and overseen. International relations and management gave me the policy and organizational lens.',

  // FAQ
  faqs: [
    {
      question: 'What are you applying for?',
      answer: 'A PhD starting in 2027, on trust, accountability and delegation to AI agents in organizations.',
    },
    {
      question: 'Which methods will you use?',
      answer: 'Open. The working idea is a comparison of how China, the EU and the US structure responsibility. I am flexible on context and method.',
    },
    {
      question: 'What if my group is not a fit?',
      answer: 'Tell me which direction suits better. I am glad to take a related topic.',
    },
    {
      question: 'What about funding?',
      answer: 'I am asking supervisors about funding options, including tuition support beyond standard studentships.',
    },
    {
      question: 'What can you send me?',
      answer: 'A CV and a short research proposal. Links are above, or write to me and I will send them.',
    },
  ],

  // Contact
  email: 'chiniakinivan@gmail.com',
  social: [
    { name: 'github', url: 'https://github.com/ch1nya' },
    { name: 'linkedin', url: 'https://linkedin.com/in/chiniakinivan' },
  ],

  // Optional assets — hide when absent
  portrait: 'portrait.png',
  cv: null, // cv.pdf
  proposal: null, // proposal.pdf
};
