# ATI2000 Website Setup Guide

## 초기 설정

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

## 프로젝트 구조

```
ati2000-website/
├── app/                      # Next.js App Router
│   ├── [locale]/             # 다국어 라우트 (en, ko, zh)
│   │   ├── page.tsx          # 홈페이지
│   │   ├── company/          # 회사 개요
│   │   ├── equipment/        # 장비 및 시설
│   │   ├── technology/        # 기술 및 역량
│   │   ├── clients/          # 고객 및 파트너
│   │   └── contact/          # 연락처
│   ├── admin/                # 관리자 페이지
│   │   ├── login/            # 로그인
│   │   └── equipment/        # 장비 관리
│   └── api/                  # API 라우트
│       └── equipment/        # 장비 API
├── components/               # React 컴포넌트
│   ├── Header.tsx            # 헤더 (네비게이션)
│   ├── Footer.tsx            # 푸터
│   ├── LanguageSwitcher.tsx  # 언어 전환
│   ├── EquipmentList.tsx     # 장비 목록
│   └── admin/                # 관리자 컴포넌트
├── data/                     # 데이터 파일
│   └── equipment.json        # 장비 데이터 (JSON)
├── messages/                 # 다국어 번역 파일
│   ├── en.json               # 영어
│   ├── ko.json               # 한국어
│   └── zh.json               # 중국어 (간체)
├── lib/                      # 유틸리티
│   ├── equipment.ts          # 장비 데이터 관리
│   └── utils.ts              # 공통 유틸리티
└── public/                   # 정적 파일
    └── images/               # 이미지 저장소
```

## 주요 기능

### 1. 다국어 지원 (i18n)

- 기본 언어: 영어 (en)
- 지원 언어: 한국어 (ko), 중국어 간체 (zh)
- 언어 전환은 헤더의 언어 선택기를 통해 가능

### 2. 장비 관리 (Admin)

#### 접근 방법
1. `/admin` 경로로 이동
2. 기본 로그인 정보:
   - Username: `admin`
   - Password: `admin123`

**⚠️ 중요**: 프로덕션 환경에서는 반드시 비밀번호를 변경하세요!

#### 장비 추가/수정/삭제
1. 로그인 후 "Add New Equipment" 버튼 클릭
2. 다음 정보 입력:
   - 제목 (영어, 한국어, 중국어)
   - 설명 (다국어)
   - 사양 (다국어)
   - 이미지 업로드
3. "Save" 버튼으로 저장

#### 데이터 저장 위치
장비 데이터는 `data/equipment.json` 파일에 저장됩니다.

### 3. 콘텐츠 편집

#### 다국어 콘텐츠 수정
`messages/` 폴더의 JSON 파일을 편집하세요:
- `messages/en.json` - 영어 콘텐츠
- `messages/ko.json` - 한국어 콘텐츠
- `messages/zh.json` - 중국어 콘텐츠

#### 페이지별 콘텐츠 구조
각 JSON 파일은 다음 구조를 따릅니다:
```json
{
  "nav": { ... },      // 네비게이션
  "home": { ... },     // 홈페이지
  "company": { ... },  // 회사 개요
  "equipment": { ... }, // 장비
  "technology": { ... }, // 기술
  "clients": { ... },   // 고객
  "contact": { ... },   // 연락처
  "admin": { ... }      // 관리자
}
```

### 4. 테마 색상 변경

`tailwind.config.ts` 파일에서 색상 팔레트를 수정할 수 있습니다:

```typescript
wine: {
  // 와인 레드 계열 색상
  50: '#faf5f5',
  ...
  950: '#2a0f0f',
},
burgundy: {
  // 버건디 계열 색상
  ...
}
```

## 빌드 및 배포

### 프로덕션 빌드

```bash
npm run build
npm start
```

### 환경 변수

현재는 환경 변수가 필요하지 않지만, 향후 추가할 수 있습니다:
- `.env.local` 파일 생성
- 필요한 환경 변수 추가

## 이미지 관리

### 장비 이미지 업로드
현재는 Base64 인코딩된 이미지를 사용합니다. 프로덕션 환경에서는:
1. 이미지 서버 또는 클라우드 스토리지 사용 권장
2. `components/admin/EquipmentForm.tsx`의 이미지 업로드 로직 수정 필요

### 정적 이미지
`public/images/` 폴더에 정적 이미지를 저장하고 다음과 같이 참조:
```tsx
<img src="/images/logo.png" alt="Logo" />
```

## 문제 해결

### 장비 데이터가 표시되지 않음
1. `data/equipment.json` 파일이 존재하는지 확인
2. JSON 형식이 올바른지 확인
3. 브라우저 콘솔에서 에러 확인

### 다국어가 작동하지 않음
1. `middleware.ts`가 올바르게 설정되었는지 확인
2. `messages/` 폴더의 JSON 파일이 올바른 형식인지 확인
3. Next.js 서버 재시작

### 관리자 페이지 접근 불가
1. `/admin/login`으로 직접 이동
2. 세션 스토리지 확인 (브라우저 개발자 도구)
3. 로그인 후 `sessionStorage.getItem('adminAuthenticated')` 확인

## 추가 개발 가이드

### 새 페이지 추가
1. `app/[locale]/` 폴더에 새 폴더 생성
2. `page.tsx` 파일 생성
3. `messages/` 폴더의 각 언어 파일에 번역 추가
4. `components/Header.tsx`에 네비게이션 링크 추가

### 새 컴포넌트 추가
1. `components/` 폴더에 새 컴포넌트 파일 생성
2. TypeScript 타입 정의
3. 필요한 스타일링 (Tailwind CSS)

## 보안 고려사항

1. **관리자 인증**: 현재는 간단한 세션 스토리지 기반 인증을 사용합니다. 프로덕션에서는:
   - JWT 토큰 사용
   - 서버 사이드 세션 관리
   - 비밀번호 해싱 (bcrypt 등)

2. **API 보호**: 관리자 API 엔드포인트에 인증 미들웨어 추가 권장

3. **파일 업로드**: 이미지 업로드 시:
   - 파일 타입 검증
   - 파일 크기 제한
   - 바이러스 스캔 (선택)

## 지원

문제가 발생하거나 질문이 있으시면 개발팀에 문의하세요.
