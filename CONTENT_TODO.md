# CONTENT_TODO.md

Every null value and missing file with the exact place in `src/content.ts` to fill.

## Status: filled in from working CV

| Field | Value | Source |
|-------|-------|--------|
| social[0].url | github.com/ch1nya | working CV |
| social[1].url | linkedin.com/in/chiniakinivan | working CV |
| industry[0].employer | Sixhands Ltd. | working CV |

## Still missing (use `[EMPTY]` placeholder)

| Field | Value | Where to fill |
|-------|-------|---------------|
| education[1].university | unknown | `src/content.ts` line ~104 |
| portrait | no image | `public/portrait.jpg` |
| cv | no PDF | `public/cv.pdf` |
| proposal | no PDF | `public/proposal.pdf` |

## Verified existing facts (from working CV)

- Name: Ivan Chiniakin
- Current role: Senior Frontend Engineer
- Years in industry: 6 years
- Education: MBA (USTC), BA (statistics, data analysis, research methods)
- Email: chiniakinivan@gmail.com
- GitHub: github.com/ch1nya
- LinkedIn: linkedin.com/in/chiniakinivan

## Known corrections from working CV

The working CV shows:
- 6 years in industry (task spec says 5 for front-end dev)
- Different education details → already covered in `content.ts`
- Additional skills (Effector, Redux, etc.) → could be added to a skills section if needed
