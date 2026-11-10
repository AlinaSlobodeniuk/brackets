
const server = http.createServer((req, res) => {
    
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    if (req.url === '/' || req.url === '/index') {
        res.statusCode = 200;
        res.end('<h1>Головна сторінка</h1>');
    } else if (req.url === '/about') {
        res.statusCode = 200;
        res.end('<h1>Про нас</h1>');
    } else {
      
        res.statusCode = 404;
        res.end('<h1>Сторінку не знайдено</h1>');
    }
});

server.listen(PORT, () => {
    console.log(`Сервер успішно запущено! Відкрийте у браузері: http://localhost:${PORT}`);
}); 