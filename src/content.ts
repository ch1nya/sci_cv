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

    // Stats
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

    // Optional assets
    portrait: string | null;
    cv: string | null;
    proposal: string | null;
};

export const content: Content = {
    // Site identity
    siteTitle:
        'Ivan Chiniakin | PhD Applicant | AI Governance, Accountability and Organizational Decision-Making',

    status: 'Prospective PhD researcher · 2027 intake',

    eyebrow:
        'Ivan Chiniakin · Research in AI Governance and Organizational Accountability',

    h1:
        'Governing AI agents in organizational decision-making',

    subtitle:
        'I am an interdisciplinary researcher with a background in international relations, business management, and software engineering. My proposed doctoral research examines how organizations delegate decision-making to AI agents, maintain meaningful human oversight, and allocate accountability across different institutional and regulatory contexts.',

    // Research
    researchIntro:
        'As AI agents move from analytical assistance towards increasingly autonomous organizational tasks, fundamental questions emerge about human oversight, organizational accountability, and the distribution of decision-making authority. My research investigates the institutional, organizational, and governance conditions under which AI delegation can remain accountable, transparent, and subject to meaningful human control.',

    researchPoints: [
        {
            name: 'AI delegation and decision-making',
            description:
                'How and under what organizational conditions do managers delegate analytical and consequential decision-making tasks to AI agents? How does the scope of delegation affect managerial authority and human agency?',
        },
        {
            name: 'Human oversight and organizational capabilities',
            description:
                'How can organizations retain the expertise, critical judgment, and institutional capacity required to evaluate, challenge, and supervise AI-generated decisions?',
        },
        {
            name: 'Accountability and governance mechanisms',
            description:
                'How should responsibility, oversight obligations, and decision rights be allocated between human decision-makers, organizations, and AI-enabled systems?',
        },
        {
            name: 'Comparative institutional analysis',
            description:
                'How do regulatory frameworks and institutional approaches in China, the European Union, and the United States shape organizational accountability and the governance of AI-enabled decision-making?',
        },
        {
            name: 'Research design and methodology',
            description:
                'The comparative research design and empirical methodology will be refined in consultation with the prospective supervisor, with consideration of qualitative, comparative, and mixed-methods approaches.',
        },
    ],

    projectCard: {
        title:
            'AI Governance, Organizational Accountability and Human Oversight in AI-Agent-Mediated Decision-Making',
        stage: 'Proposed doctoral research',
        intake: '2027',
        scope: 'China · European Union · United States',
    },

    // Selected profile indicators
    stats: [],

    // Background
    education: [
        {
            degree: "Master's Degree in Business Management",
            university:
                'University of Science and Technology of China (USTC)',
            year: '2024',
        },
        {
            degree: "Bachelor's Degree in International Relations",
            university: 'Tomsk State University',
            year: '2019',
        },
    ],

    industry: [
        {
            role: 'Senior Frontend Engineer',
            years: '5+ years',
            stack:
                'Software Engineering, React, TypeScript, JavaScript, Next.js, Redux, MobX, React Query, GraphQL, WebSockets, Micro-frontend Architecture, Docker, LLM APIs, AI-enabled Product Development',
            employer: 'Sber',
        },
        {
            role: 'Project Management',
            years: '4 years',
            stack:
                'Digital Product Development, Project Coordination, Cross-functional Team Management, Agile Project Management, Jira, Confluence',
            employer: null,
        },
    ],

    priorResearch:
        'Master’s thesis: “Silver Economy in Russia: IT Healthcare Innovation for an Ageing Population.” The study examined the potential of digital healthcare solutions to address the needs of an ageing population. Research activities included a literature review and a questionnaire administered to 132 older respondents. The collected data were analysed using SPSS, including descriptive and correlational statistical methods.',

    backgroundLine:
        'My academic background in international relations and business management provides an interdisciplinary foundation for examining institutional governance and organizational decision-making. My professional experience in software engineering adds a practical understanding of how digital systems are designed, developed, integrated, and evaluated in organizational environments, including products involving AI technologies.',

    // FAQ
    faqs: [
        {
            question: 'What doctoral research are you proposing?',
            answer:
                'My proposed PhD research examines AI governance, organizational accountability, and human oversight in AI-agent-mediated decision-making. I am particularly interested in how organizations can delegate tasks to AI agents while retaining the capacity to evaluate decisions, allocate responsibility, and exercise meaningful oversight.',
        },
        {
            question: 'What is the proposed geographical scope?',
            answer:
                'The initial comparative scope covers China, the European Union, and the United States. I am interested in how differences in institutional arrangements and regulatory approaches influence organizational practices and accountability mechanisms.',
        },
        {
            question: 'Which academic fields are relevant to the project?',
            answer:
                'The project is interdisciplinary and may contribute to Information Systems, Technology and Innovation Management, Organization Studies, AI Governance, Business and Management, Digital Transformation, and Public Policy.',
        },
        {
            question: 'Which research methods are you considering?',
            answer:
                'The research design remains open to refinement with a prospective supervisor. Potential approaches include comparative institutional analysis, qualitative case studies, semi-structured interviews, document analysis, and mixed-methods research, subject to research questions and data availability.',
        },
        {
            question: 'Why does your professional background relate to this topic?',
            answer:
                'My experience in software engineering provides practical exposure to the development and integration of digital systems, including AI-enabled products. Combined with my academic training in international relations and management, this experience informs my interest in the relationship between technological delegation, organizational capabilities, and accountability.',
        },
        {
            question: 'Are you seeking doctoral funding?',
            answer:
                'Yes. I am exploring fully funded and partially funded doctoral opportunities, including university scholarships, research studentships, tuition support, and external research funding for the 2027 intake.',
        },
        {
            question: 'What materials are available?',
            answer:
                'My academic CV and research proposal can be shared upon request. Please contact me by email for the latest application materials.',
        },
    ],

    // Contact
    email: 'chiniakinivan@gmail.com',

    social: [
        {
            name: 'github',
            url: 'https://github.com/ch1nya',
        },
        {
            name: 'linkedin',
            url: 'https://linkedin.com/in/chiniakinivan',
        },
    ],

    // Optional assets
    portrait: 'portrait.png',
    cv: null,
    proposal: null,
};
