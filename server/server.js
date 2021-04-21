import app from './app';
import http from 'http';
import logger from './lib/console';
import { sequelize } from './models';

// 포트번호
const { PORT } = process.env;

//DB 생성
sequelize.sync();

// 서버 생성
const server = http.createServer(app);

// 서버 실행
server.listen(PORT || 8080, () => {
  logger.green(`Server started on Port ${PORT || 8080}`);
});