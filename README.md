# ELAI’s Garden

게임과 책에서 시작된 에세이를 기록하는 개인 정원입니다.

## Writing workflow

새 글은 완성된 예시 글을 복제하는 대신 `templates/`의 뼈대에서 시작합니다.

- `templates/essay.md`: 경험과 관찰에서 생각을 전개하는 긴 글
- `templates/note.md`: 짧은 관찰, 기술 기록, 진행 중인 생각

템플릿을 복사해 `src/content/writing/<slug>.md`에 두고 내용을 채웁니다. 작성 중에는 `draft: true`, 공개할 때는 `draft: false`를 사용합니다.

AI는 템플릿 설계, 질문 제안, 편집과 검토를 맡되, 게시물의 경험과 판단은 작성자의 목소리로 남기는 것을 기본 원칙으로 합니다.

자세한 사용법은 `templates/README.md`를 참고합니다.

## Stack

- Astro 7 + MDX
- Astro Content Collections
- Cloudflare Pages
- AI-assisted site maintenance

## Local development

```bash
npm install
npm run dev
```

## Cloudflare Pages

- Build command: `npm run build`
- Build output directory: `dist`
- Node.js: 22 or later

에세이와 노트는 `src/content/writing`, 책은 `src/content/books`에 추가합니다.
