# ATI2000 기업 웹사이트

장비 관리 기능을 갖춘 ATI2000의 프리미엄 다국어 기업 웹사이트입니다.

## 주요 기능

- 🌐 다국어 지원 (영어, 한국어, 중국어 간체)
- 🎨 프리미엄 버건디/와인 레드 디자인 테마
- 📱 완전 반응형 (데스크톱, 태블릿, 모바일)
- 🔐 장비 관리용 관리자 패널
- ⚡ Next.js 14 및 TypeScript로 구축
- 🎯 SEO 친화적 및 접근성 고려

## 시작하기

### 필수 요구사항

- Node.js 18+ 및 npm/yarn

### 설치 방법

1. 의존성 설치:
```bash
npm install
```

2. 개발 서버 실행:
```bash
npm run dev
```

3. 브라우저에서 [http://localhost:3000](http://localhost:3000) 열기

## 프로젝트 구조

```
/
├── app/                    # Next.js App Router
│   ├── [locale]/          # 국제화된 라우트
│   ├── admin/             # 관리자 패널
│   └── api/               # API 라우트
├── components/            # React 컴포넌트
├── data/                  # JSON 데이터 파일
├── lib/                   # 유틸리티 및 헬퍼 함수
├── messages/              # i18n 번역 파일
└── public/                # 정적 자산
```

## 장비 추가하기

1. `/admin`으로 이동 (기본 비밀번호: `admin123`)
2. "Add New Equipment" 클릭
3. 다음 정보를 입력:
   - 제목 (영어, 한국어, 중국어)
   - 설명 (다국어)
   - 사양
   - 이미지 업로드
4. "Save" 클릭

장비 데이터는 `data/equipment.json`에 저장됩니다.

## 다국어 콘텐츠 편집

번역 파일은 `messages/` 폴더에 있습니다:
- `messages/en.json` - 영어 (기본)
- `messages/ko.json` - 한국어
- `messages/zh.json` - 중국어 간체

이 JSON 파일들을 편집하여 사이트 전체의 콘텐츠를 업데이트할 수 있습니다.

## 테마 색상 변경

`tailwind.config.ts`를 편집하여 색상 팔레트를 수정할 수 있습니다:
- `burgundy.*` - 버건디 색상 변형
- `wine.*` - 와인 레드 색상 변형
- `primary.*` - 기본 색상 스킴

## 관리자 접근

기본 인증 정보:
- 사용자 이름: `admin`
- 비밀번호: `admin123`

**중요**: 프로덕션 환경에서는 `app/admin/login/page.tsx`를 수정하여 이 인증 정보를 변경하세요.

## 프로덕션 빌드

```bash
npm run build
npm start
```

## 라이선스

Proprietary - ATI2000
