# 빠른 시작 가이드

## 설치 및 실행

```bash
# 1. 프로젝트 디렉토리로 이동
cd /Users/seth/ati2000-website

# 2. 의존성 설치
npm install

# 3. 개발 서버 실행
npm run dev
```

브라우저에서 **http://localhost:3000** 접속

## 주요 페이지

- **홈페이지**: http://localhost:3000 (자동으로 /en으로 리다이렉트)
- **회사 개요**: http://localhost:3000/en/company
- **장비 및 시설**: http://localhost:3000/en/equipment
- **기술 및 역량**: http://localhost:3000/en/technology
- **고객 및 파트너**: http://localhost:3000/en/clients
- **연락처**: http://localhost:3000/en/contact

## 관리자 페이지

- **로그인**: http://localhost:3000/admin/login
  - Username: `admin`
  - Password: `admin123`

- **장비 관리**: http://localhost:3000/admin/equipment
  - 장비 추가/수정/삭제 가능
  - 다국어 콘텐츠 입력
  - 이미지 업로드

## 언어 전환

헤더 우측 상단의 언어 버튼(EN, KO, ZH)을 클릭하여 언어를 전환할 수 있습니다.

## 문제 해결

### 포트가 이미 사용 중인 경우
```bash
# 다른 포트로 실행
PORT=3001 npm run dev
```

### 의존성 설치 오류
```bash
# 캐시 삭제 후 재설치
rm -rf node_modules package-lock.json
npm install
```

### 빌드 오류
```bash
# .next 폴더 삭제 후 재빌드
rm -rf .next
npm run build
```

## 다음 단계

1. `messages/` 폴더의 JSON 파일을 편집하여 콘텐츠 수정
2. `data/equipment.json`에 장비 데이터 추가 (또는 관리자 페이지 사용)
3. `tailwind.config.ts`에서 색상 테마 수정
4. 프로덕션 배포 준비

자세한 내용은 `SETUP.md`와 `PROJECT_SUMMARY.md`를 참고하세요.
