# Vue
NODE JS 설치
시스템 환경 변수 설정
Windows 설정 > 시스템 > 고급 시스템 설정으로 이동하여 "환경 변수"를 선택합니다.
"시스템 변수" 목록에서 Path를 찾아 편집을 클릭하고, Node.js 설치 경로(C:\Program Files\nodejs 또는 설치 시 지정한 경로)를 추가합니다.



npm install -g@vue/cli
실행이 안될경우 
node -v
npm -v
로 버전 확인
npm이 power shall에서 안찍힐 경우 다음과 같이 실행
PowerShell을 관리자 권한으로 실행하세요. 시작 메뉴에서 PowerShell을 검색하고, "관리자 권한으로 실행"을 선택합니다.
- Set-ExecutionPolicy RemoteSigned -Scope CurrentUser 실행
**"변경하시겠습니까?"**라는 질문이 나오면 Y를 입력하고 Enter를 눌러 계속 진행합니다.
PowerShell을 닫았다가 다시 열고, npm -v 명령을 다시 실행해 봅니다.
다시 npm install -g@vue/cli 진행



vue 관련 패키지 다운로드 추천
vue 3 Snippets
html css support
vetur
vscode-icons



Spring에서 Build를 할때 폴더구조를 backend랑 frontend랑 분리를 해서 Build를 따로 해주어야하여 불편함이 있음.



서버build하다가 프론트서버와 백단 서버가 엉켜서 안될때(로컬)
netstat -ano | findstr :8082(현재 실행중인 포트번호)
taskkill /PID <PID> /F


