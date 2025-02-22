const express = require('express');
const cors = require('cors');

const app = express();
const port = 5001; // 確保端口正確

app.use(cors()); // 允許跨域請求

// **新增這一行來處理根路徑 "/"**
app.get('/', (req, res) => {
    res.send('伺服器運行中！🚀');
});

// 測試 API 端點
app.get('/api/status', (req, res) => {
    res.json({ message: '伺服器正常運行', status: 'OK' });
});

// 啟動伺服器
app.listen(port, () => {
    console.log(`伺服器運行中：http://localhost:${port}`);
});
