// 刘美怡 · 诗歌数据服务器：读取同目录 db.json，通过 3004 端口提供 /poems 接口
const lmy_http = require("http");
const lmy_fs = require("fs");
const lmy_path = require("path");

const lmy_port = 3004;
const lmy_dbFile = lmy_path.join(__dirname, "db.json");

// 读取 db.json 并返回解析后的数据对象
function lmy_readDb() {
  return JSON.parse(lmy_fs.readFileSync(lmy_dbFile, "utf-8"));
}

const lmy_server = lmy_http.createServer((lmy_req, lmy_res) => {
  // 允许跨域，本地 HTML（file:// 或其他端口）也能 fetch
  lmy_res.setHeader("Access-Control-Allow-Origin", "*");
  lmy_res.setHeader("Content-Type", "application/json; charset=utf-8");

  if (lmy_req.url === "/poems") {
    // 只返回 poems 数组（图片 pic、标题 title、内容 content）
    lmy_res.end(JSON.stringify(lmy_readDb().poems));
  } else if (lmy_req.url === "/" || lmy_req.url === "/db") {
    // 返回完整 db.json 内容
    lmy_res.end(JSON.stringify(lmy_readDb()));
  } else {
    lmy_res.statusCode = 404;
    lmy_res.end(JSON.stringify({ message: "Not Found" }));
  }
});

lmy_server.listen(lmy_port, () => {
  console.log(`诗歌数据服务器已启动：http://localhost:${lmy_port}/poems`);
});
