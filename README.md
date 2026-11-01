## Для запуску застосунку потрібні вствновлені програми:
- Docker Desktop

## Запуск через Docker Compose

1. Скопіювати репозиторій та перейти в теку проєкту
```bash
git clone https://github.com/ncjnjnnjondcd/servers.git
cd servers
```

2. Зберіть та запустіть проєкт через термінал 


```bash
docker-compose build
docker-compose up -d
```

3. Після запуску сервіс доступний за адресою: http://localhost:3000

## Тестування системних ендпоінтів:
 - http://localhost:3000/health/live

 Очікувана відповідь: `200 OK`
```json
{
  "status": "alive",
  "timestamp": "2026-10-30T20:25:12.345Z"
}
```
 - http://localhost:3000/health/ready

Очікувана відповідь: `200 OK`
```json
{
  "status": "ready",
  "database": "not_connected_yet",
  "timestamp": "2026-10-30T20:25:12.345Z"
}
```
## Зупити застосунок:
```bash
docker-compose down
```