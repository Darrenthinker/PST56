# Netlify 域名设置说明 - 解决方案

## 🔍 当前问题分析

您的 Netlify 上同时配置了两个域名：
- ✅ `www.pst56.com`（主域名）
- ⚠️ `pst56.com`（自动重定向到主域名）

但是：
- 在阿里云DNS中，`pst56.com`（根域名）的A记录还指向旧服务器 `35.213.137.92`
- 这会导致冲突，访问可能不稳定

---

## ✅ 推荐解决方案：移除根域名

### 为什么这样做？
1. **避免DNS冲突**：根域名在阿里云DNS和Netlify都在管理，会产生冲突
2. **保持邮箱正常**：根域名的MX记录必须保留在阿里云DNS，不能被Netlify覆盖
3. **简化配置**：只使用 `www.pst56.com`，配置更简单

---

## 🚀 操作步骤

### 第1步：在 Netlify 上移除根域名

1. 登录 Netlify，进入您的项目
2. 点击左侧菜单 **Domain management**
3. 在域名列表中找到 **`pst56.com`**（没有www的那个）
4. 点击 `pst56.com` 右侧的 **Options** 下拉菜单
5. 选择 **Remove domain**（移除域名）或 **Delete**（删除）
6. 确认删除

### 第2步：确认主域名设置

删除后，确保：
- ✅ **`www.pst56.com`** 标记为 **Primary domain**（主域名，带★）
- ✅ **`pst56.netlify.app`** 是 Netlify 子域名（保留）

### 第3步：等待配置生效

- 等待几分钟让 Netlify 配置生效
- DNS状态会更新

---

## 📝 最终正确的配置

### 在 Netlify 上：
```
✅ www.pst56.com  → Primary domain（主域名）
✅ pst56.netlify.app → Netlify子域名
```

### 在阿里云DNS上：
```
✅ www → CNAME → pst56.netlify.app（网站）
✅ @ → A → 35.213.137.92（根域名，指向旧服务器，不影响）
✅ @ → MX → mxbiz1.qq.com（邮箱）
✅ @ → MX → mxbiz2.qq.com（邮箱）
✅ @ → TXT → v=spf1...（邮箱验证）
✅ mail → CNAME → exmail.qq.com（邮箱）
```

---

## ✅ 这样设置后的效果

1. **访问 `www.pst56.com`** → 显示您制作的网站 ✅
2. **访问 `pst56.com`** → 可能显示旧网站（但这不是问题，主要用www）✅
3. **邮箱功能** → 完全正常 ✅
4. **不会自动跳转** → `www.pst56.com` 不会跳转到根域名 ✅

---

## ⚠️ 如果不想移除根域名

如果您希望 `pst56.com` 也指向 Netlify 的新网站，需要：

1. **在阿里云DNS修改根域名的A记录**：
   - 删除或修改 `@` → A → `35.213.137.92`
   - 添加 `@` → A → Netlify的IP地址（需要向Netlify获取）

2. **保留MX记录**（必须）：
   - 确保所有MX记录都在
   - 确保TXT记录都在

⚠️ **注意**：这种方法更复杂，需要确保不破坏邮箱配置。

---

## 🎯 推荐做法

**最简单安全的方案**：
- ✅ 在 Netlify 上只保留 `www.pst56.com`
- ✅ 删除 Netlify 上的 `pst56.com`
- ✅ 在阿里云DNS中，根域名保持原样（指向旧服务器不影响）
- ✅ 用户主要访问 `www.pst56.com` 即可

