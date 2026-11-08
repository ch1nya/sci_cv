/**
 * Маркеры докрученного (Ctrl+F "ДОКРУТИЛ"):
 *  🔴 факт/план, которого не было в исходном CV: сделай правдой или удали
 *  🟡 реальный факт, переупакован под новую тему: проверь формулировку
 *  🟢 создано с нуля: доработай руками
 * Всё без маркера взято из прежнего контента без изменений.
 */

export type SocialLink = {
    name: 'github' | 'linkedin' | 'orcid' | 'google-scholar';
    url: string;
};

export type Content = {
    // Identity
    name: string;
    role: string;
    location: string | null;
    h1: string;
    summary: string;

    // Contact and assets
    email: string;
    social: SocialLink[];
    portrait: string | null;
    cv: string | null;
    proposal: string | null;

    // Research
    research: {
        intro: string;
        steps: Array<{ label: string; text: string }>;
        optionalStep: { label: string; text: string };
        studies: Array<{ title: string; question: string; design: string }>;
        extension: string;
        notes: Array<{ label: string; text: string }>;
    };

    // Background
    education: Array<{ degree: string; university: string | null; year: string | null }>;
    experience: Array<{ role: string; years: string; detail: string; employer: string | null }>;
    priorResearch: string;
    backgroundNote: string;

    // Applying
    applying: Array<{ label: string; text: string }>;
    updated: string;
};

export const content: Content = {
    name: 'Ivan Chiniakin',

    role: 'PhD applicant · 2027 intake',

    // из первого сайта (location + open to relocation)
    location: 'Saint Petersburg, Russia · open to relocation',

    // 🟡 ДОКРУТИЛ-ФРЕЙМ: новая тема
    h1: 'Do people let AI agents act for them?',

    // 🟡 ДОКРУТИЛ-ФРЕЙМ: сокращённое описание проекта
    summary:
        'I study what people actually hand over to AI agents when the agent can spend their money, and which design and governance rules make that delegation safer and more accountable. My approach is behavioural experiments with working agent prototypes and real stakes.',

    email: 'chiniakinivan@gmail.com',

    social: [
        { name: 'github', url: 'https://github.com/ch1nya' },
        { name: 'linkedin', url: 'https://linkedin.com/in/chiniakinivan' },
    ],

    portrait: 'portrait.png',
    cv: null,
    proposal: null,

    research: {
        // 🟡 ДОКРУТИЛ-ФРЕЙМ: утверждение про "мало поведенческих данных" основано на беглом обзоре, проверь по литературе
        intro:
            'Agents that act rather than recommend are arriving in payments and commerce, and rules for them are being written with little behavioural evidence. I test what people do, not only what they say.',

        // 🟢 ДОКРУТИЛ-НОВОЕ: схема исследования
        steps: [
            { label: 'Say', text: 'Stated willingness to delegate' },
            { label: 'Do', text: 'Real purchases, real stakes' },
            { label: 'Error', text: 'The agent fails: who is blamed, does trust recover?' },
        ],

        // 🟢 ДОКРУТИЛ-НОВОЕ
        optionalStep: {
            label: 'Optional',
            text: 'Audit agents in a mock marketplace for platform bias',
        },

        // 🟢 ДОКРУТИЛ-НОВОЕ: два исследования
        studies: [
            {
                title: 'Study 1 · Say versus do',
                question: 'Do consumers delegate what they say they will?',
                design:
                    'Online experiment with a prototype agent. Participants state what they would delegate, then decide with real money at stake. I vary authorisation rules, spending limits and undo windows.',
            },
            {
                title: 'Study 2 · After an error',
                question: 'How do trust and delegation change when the agent makes a mistake?',
                design:
                    'Repeated tasks with an error midway, fully disclosed in a debrief. I vary liability arrangements, explanations and the option to undo.',
            },
        ],

        // 🟢 ДОКРУТИЛ-НОВОЕ: опциональное третье исследование
        extension:
            'A possible third study would audit how agents choose in a controlled mock marketplace when products carry platform-affiliation cues, then test with people whether disclosing those cues changes delegation.',

        notes: [
            {
                // 🔴 ДОКРУТИЛ-ФАКТ: методы это планы, не опыт
                label: 'Methods',
                text: 'I plan to learn experimental design and power analysis, mixed-effects models, pre-registration and reproducible analysis in Python or R. I have not run behavioural experiments yet; my starting point is a survey study analysed in SPSS.',
            },
            {
                // 🟢 ДОКРУТИЛ-НОВОЕ: готовность адаптировать тему
                label: 'Scope',
                text: 'The area is fixed, the specifics are not. If a supervisor works on adjacent questions, such as trust calibration, human–AI collaboration, accountability for agent errors, platform governance or delegation in organisations, I am glad to adapt the design and context.',
            },
        ],
    },

    education: [
        {
            degree: "Master's in Business Management",
            university: 'University of Science and Technology of China (USTC)',
            // ⚠️ ПРОВЕРЬ: здесь 2024, в другом CV было 2023
            year: '2024',
        },
        {
            degree: "Bachelor's in International Relations",
            university: 'Tomsk State University',
            year: '2019',
        },
    ],

    experience: [
        {
            role: 'Senior Frontend Engineer',
            years: '5+ years',
            // 🟡 ДОКРУТИЛ-ФРЕЙМ: стек сокращён до релевантного (в оригинале 14 технологий)
            detail: 'React, TypeScript, LLM APIs, AI-enabled products',
            employer: 'Sber',
        },
        {
            role: 'Project Manager',
            years: '4 years',
            detail: 'Digital products, cross-functional teams, Agile',
            employer: null,
        },
    ],

    priorResearch:
        'Master’s thesis, “Silver Economy in Russia: IT Healthcare Innovation for an Ageing Population”: a literature review plus a questionnaire of 132 older respondents, analysed in SPSS (descriptive and correlational statistics). It measured attitudes, not behaviour, which is what motivates my move to experiments.',

    // 🟡 ДОКРУТИЛ-ФРЕЙМ: LLM APIs из твоего стека поданы как способность строить прототипы
    backgroundNote:
        'Software engineering, including work with LLM APIs, lets me build the agent prototypes and testing environments these experiments need.',

    applying: [
        { label: 'Intake', text: '2027' },
        {
            label: 'Funding',
            text: 'Seeking fully or partially funded positions: scholarships, studentships, tuition support.',
        },
        { label: 'Materials', text: 'CV and research proposal on request.' },
    ],

    updated: 'November 2026',
};
