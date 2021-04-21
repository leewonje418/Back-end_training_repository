import express from 'express';
import cors from 'cors';
import api from './api'
import * as bodyParser from 'body-parser';

const app = express();

// cors 허용
app.use(cors());

// bodyparser 사용 및 body 객체 파싱 허용
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// api url을 사용하여 api 라우터 실행
app.use('/api', api);

export default app;