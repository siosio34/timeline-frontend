# timeline-frontend

http://timeline.ryulth.com/

이 프로젝트는 2019 NAVER D2 FEST mini 썸머 챌린지에 출품하기 위한 프로젝트입니다. 여러 주제 중, 타임라인 주제를 선정하여 진행되었습니다.

* **Backend repo** : https://github.com/Ryulth/timeline-backend

### 참여한 사람
* [김형률](https://github.com/Ryulth) : 백엔드 개발
* [조영제](https://github.com/siosio34) : 프론트엔드 개발
* [이소영](https://github.com/devSoyoung) : 프론트엔드 개발

## Development Configuration

> 이 프로젝트는 [Create React App](https://github.com/facebook/create-react-app)으로 만들어졌습니다.

Repository를 다운 받은 후, 해당 디렉토리에서 아래 명령어를 실행합니다.

```
$ npm install
$ npm start
```

App이 `http://localhost:3000`에서 실행됩니다.

## Build

```
$ npm run build
```

위 명령어를 실행하면 `build` 폴더에 빌드 결과물이 저장됩니다. production mode로 번들하고 최적화하여 수행 성능이 개선됩니다.

> 배포에 대한 추가적인 정보는 [여기](https://facebook.github.io/create-react-app/docs/deployment)를 확인해주세요.

## Feature
이 프로젝트는 기본적인 기능을 담은 타임라인 서비스를 구현하였습니다.
* 회원가입, 로그인/로그아웃
* 새 소식(=이벤트) 작성, 삭제, 이미지 첨부
* 타임라인, 내 소식 목록
* 프로필 수정, 프로필 이미지 업로드
* 친구 목록, 추천 친구, 친구 요청 및 거절, 친구 삭제

### 로그인
![image](https://user-images.githubusercontent.com/42922453/62202242-e7c5b800-b3c3-11e9-9333-7004e03240be.png)

### 회원가입
![image](https://user-images.githubusercontent.com/42922453/62202290-ff9d3c00-b3c3-11e9-933c-14bd143fec3b.png)

### 타임라인
![image](https://user-images.githubusercontent.com/42922453/62202350-1774c000-b3c4-11e9-92fe-8425e6396c3d.png)

### 내 프로필
![image](https://user-images.githubusercontent.com/42922453/62202384-29566300-b3c4-11e9-9262-f874e4aaca3d.png)

### 친구 목록
![image](https://user-images.githubusercontent.com/42922453/62202433-3f642380-b3c4-11e9-85ee-bce6252d3cdc.png)

## Used Open source
프로젝트에 사용된 오픈소스 라이브러리는 아래와 같습니다.

* [@jbuschke/formik-antd](https://www.npmjs.com/package/@jbuschke/formik-antd)
* [antd](https://www.npmjs.com/package/antd)
* [axios](https://www.npmjs.com/package/axios)
* [babel-plugin-import](https://www.npmjs.com/package/babel-plugin-import)
* [connected-react-router](https://www.npmjs.com/package/connected-react-router)
* [customize-cra](https://www.npmjs.com/package/customize-cra)
* [formik](https://www.npmjs.com/package/formik)
* [history](https://www.npmjs.com/package/history)
* [jwt-decode](https://www.npmjs.com/package/jwt-decode)
* [less](https://www.npmjs.com/package/less)
* [less-loader](https://www.npmjs.com/package/less-loader)
* [lodash](https://www.npmjs.com/package/lodash)
* [moment](https://www.npmjs.com/package/moment)
* [prop-types](https://www.npmjs.com/package/prop-types)
* [react](https://www.npmjs.com/package/react)
* [react-app-rewired](https://www.npmjs.com/package/react-app-rewired)
* [react-dom](https://www.npmjs.com/package/react-dom)
* [react-helmet](https://www.npmjs.com/package/react-helmet)
* [react-redux](https://www.npmjs.com/package/react-redux)
* [react-router](https://www.npmjs.com/package/react-router)
* [react-router-dom](https://www.npmjs.com/package/react-router-dom)
* [react-scripts](https://www.npmjs.com/package/react-scripts)
* [redux](https://www.npmjs.com/package/redux)
* [redux-persist](https://www.npmjs.com/package/redux-persist)
* [redux-saga](https://www.npmjs.com/package/redux-saga)
* [reselect](https://www.npmjs.com/package/reselect)
* [styled-components](https://www.npmjs.com/package/styled-components)
* [yup](https://www.npmjs.com/package/yup)
* [create-react-app](https://www.npmjs.com/package/create-react-app)
* [react-image-gallay](https://github.com/xiaolin/react-image-galler)

## License
MIT License
