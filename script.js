
async function fetchInfo() {
  const res = await fetch("https://ipapi.co/json/");
  const data = await res.json();
  document.getElementById("info").innerHTML = `
    <p><strong>公网 IP:</strong> ${data.ip}</p>
    <p><strong>国家:</strong> ${data.country_name} (${data.country})</p>
    <p><strong>省/州:</strong> ${data.region}</p>
    <p><strong>城市:</strong> ${data.city}</p>
    <p><strong>邮政编码:</strong> ${data.postal}</p>
    <p><strong>运营商:</strong> ${data.org}</p>
    <p><strong>ASN:</strong> ${data.asn}</p>
    <p><strong>经纬度:</strong> ${data.latitude}, ${data.longitude}</p>
    <p><strong>语言:</strong> ${navigator.language}</p>
    <p><strong>设备 UA:</strong> ${navigator.userAgent}</p>
  `;
}
async function capture() {
  alert("截图功能请使用浏览器截图插件或系统截图工具保存页面");
}
fetchInfo();
