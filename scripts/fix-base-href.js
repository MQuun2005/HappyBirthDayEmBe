const fs = require('fs');
const path = require('path');
const indexPath = path.join(__dirname, '../dist/happy-birthday-em-be/browser/index.html');
try {
  let content = fs.readFileSync(indexPath, 'utf8');
  content = content.replace(/<base href="[^"]*">/, '<base href="/HappyBirthDayEmBe/">');
  fs.writeFileSync(indexPath, content, 'utf8');
  console.log('✅ Base href đã được đảm bảo là /HappyBirthDayEmBe/ cho GitHub Pages');
} catch (error) {
  console.error('❌ Lỗi khi sửa base href:', error.message);
  process.exit(1);
}
