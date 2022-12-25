# Smilegate Winter://Dev.Camp 
# 개인 프로젝트 - URL Shortener (개발 완료)
## **프로젝트 소개**
***
입력창에 http 주소를 넣으면 줄여진 url을 제공한다.   
* 랜덤으로 키를 생성한 후 데이터베이스에 해당 키가 존재하는지 확인한다.   
* 이미 존재하면 unique한 키가 생성될 때까지 반복한다.
* unique한 키 뒤에 길이가 8인 랜덤 키를 생성하여 요청한 정보를 확인할 수 있는 admin_url을 생성한다.
* http://127.0.0.1:8000/ 뒤에 unique한 키를 이어붙여 데이터베이스에 저장할 url을 생성한다.   
* 줄여진 url을 주소창에 입력하면 리다이렉트하여 이동하고자 하는 페이지로 이동한다.

***
## **실행 방법**
1. 프로젝트 폴더에서 가상환경을 만든다.
```
PS> python -m venv 가상환경
```
2. 가상 환경 폴더로 이동한 후 Scripts 폴더 안의 activate.bat을 실행하여 가상 환경을 활성화시킨다.
```
PS> cd 가상환경/Scripts
PS> activate
```
3. FastAPI, uvicorn, sqlalchemy, python-dotenv,validators, axios을 다운받는다.
```
$ python -m pip install fastapi==0.75.0 uvicorn==0.17.6
$ python -m pip install sqlalchemy==1.4.32
$ python -m pip install python-dotenv==0.19.2
$ python -m pip install validators==0.18.2
npm install axios
```
4. 서버를 연다.
```
$ uvicorn shortener_app.main:app --reload
$ npm run dev
```
***
## **사용한 기술 스택**
<img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white">
<img src="https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white">
<img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white">

***
## **UI**
![Alt text](/UI.png)
