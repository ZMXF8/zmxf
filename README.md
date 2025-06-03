# 🌐 ZMXF 网络检站 | ZMXF Net Check

一个全球最强的网络检测工具，由 **付星晨 + ChatGPT** 联合开发。支持公网 IP 查询、运营商识别、城市定位、浏览器 UA 提取、多语言地址显示、截图保存等强大功能。

> **Live demo:** https://zmxf.vercel.app/

---

## 🚀 项目功能 Features

- 公网 IP 自动识别
- 地理位置（国家、省州、城市、邮编、经纬度）
- ISP 运营商与 ASN 信息
- 浏览器 UA / 语言提取
- 支持中英文地址
- 一键截图保存（代替传统 PDF 导出）
- 页面美化，移动端适配

---

## 🧠 在线体验 Demo

- **Vercel 部署地址（推荐）**  
  👉 https://zmxf.vercel.app/

- **Cloudflare Workers 在线体验**  
  👉 https://zmxftest.pages.dev/  
  （或者你自己的 workers.dev 子域名）

---

## 📦 快速部署方式

### ✅ 方法一：部署到 Vercel（免费 + 支持自定义域名）

1. Fork 或下载本仓库到 GitHub
2. 注册并登录 [vercel.com](https://vercel.com/)
3. 新建项目，导入你的 GitHub 仓库
4. 自动构建完成，无需配置！
5. 可选：绑定自定义域名（如 `ip.zmxf.cn`）

---

### ⚡ 方法二：部署到 Cloudflare Workers（超轻量 + 全球加速）

1. 注册 [Cloudflare](https://dash.cloudflare.com/)
2. 进入 `Workers & Pages` 面板 → 创建新的 Worker
3. 将 `worker.js` 内容粘贴替换默认内容
4. 点击部署即可访问（如 `https://zmxf.workers.dev`）

> ✅ 支持 Pages UI 界面美化，推荐结合页面一起部署！

---

## 🖼️ 使用说明 Usage

- 打开网站后自动获取您的网络信息
- 点击 `📸 一键截图保存` 按钮可将信息截图保存到本地
- 可分享截图给他人排查网络问题

---

## 📝 作者与鸣谢

- 项目联合开发：**付星晨 + ChatGPT**
- 使用技术：Cloudflare Workers、Vercel Pages、HTML/CSS/JS、JSZip、html2canvas

---

## 📄 License

MIT License - 开源自由使用，欢迎改进与推广。
附加:https://man.throbbing-term-b7fc.workers.dev/
