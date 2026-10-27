# 개인 프로필 웹사이트

Node.js가 설치된 상태에서 프로젝트 루트에서 실행하세요. 외부 패키지 설치나 빌드는 필요하지 않습니다.

```sh
npm start
```

브라우저에서 http://localhost:3000 을 엽니다. `npm run dev`도 같은 서버를 실행합니다. 종료는 `Ctrl+C`입니다. 포트를 변경하려면 macOS/Linux에서 `PORT=3001 npm start`를 실행하세요.

배포할 파일은 `public/`, 로컬 서버 코드는 `scripts/`, 원본 디자인은 `stitch_export/`에 분리했습니다. 웹사이트 파일 내용은 변경하지 않았습니다.

Vercel에는 프로젝트 루트를 연결하세요. `vercel.json`이 프레임워크를 Other, 빌드·설치 명령을 비움, 출력 폴더를 `public`로 지정합니다. Node.js 서버는 로컬 개발용이며 Vercel에서는 정적 파일만 제공합니다. 설정 근거: [Vercel 공식 문서](https://vercel.com/docs/project-configuration/vercel-json).

- `public/index.html`: 프로필, 소개, 프로젝트, 연락처
- `public/styles.css`: Stitch 색상·글꼴·레이아웃 및 모바일 반응형 스타일
- `public/script.js`: 모바일 메뉴, 현재 영역 표시, 이메일 복사, 문의 메일 작성
- `stitch_export/`: 원본 디자인 (보존)

이름, 경력, 성과, 사진, 프로젝트, 소셜 계정은 예시입니다. `public/index.html`에서 실제 내용과 프로젝트 URL을 교체하세요. 이메일을 바꾸려면 `public/index.html`의 이메일 표시와 `mailto:` 링크, `public/script.js`의 `email` 값을 함께 수정하세요.

프로젝트는 `https://example.com/projects/...` 예시 주소로 연결됩니다. 소셜 링크도 예시 주소입니다. 문의 폼은 서버로 전송하지 않으며 기본 메일 앱에서 내용을 확인하고 전송합니다. 기기에 메일 앱 설정이 필요합니다.

원본 이미지와 Google Fonts/Material Symbols는 외부 URL을 사용하므로 인터넷 연결이 필요합니다. React, Next.js, Tailwind 런타임은 사용하지 않습니다.
