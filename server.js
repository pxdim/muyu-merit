const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// 設定靜態檔案目錄
app.use(express.static(__dirname));

// 主路由 - 返回 muyu.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'muyu.html'));
});

// 處理所有其他路由，重定向到主頁
app.get('*', (req, res) => {
    res.redirect('/');
});

// 啟動伺服器
app.listen(PORT, () => {
    console.log(`🙏 木魚伺服器運行在 http://localhost:${PORT}`);
    console.log(`✨ 開始積累功德吧！`);
});