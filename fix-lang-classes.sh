#!/bin/bash

# 批量修复HTML文件中的语言类名问题
# 将 class="cn/vn/en/ko/ja" 改为 class="cn-only/vn-only/en-only/ko-only/ja-only"

BASE_DIR="/Users/kiki/Desktop/AK日常工作文档/nivex-bd-portal"

echo "开始修复语言类名..."
echo "========================================"

# 统计变量
total_files=0
modified_files=0

# 查找所有HTML文件
while IFS= read -r file; do
    ((total_files++))

    # 检查文件是否包含需要修复的类名
    if grep -q 'class="cn"' "$file" || \
       grep -q 'class="vn"' "$file" || \
       grep -q 'class="en"' "$file" || \
       grep -q 'class="ko"' "$file" || \
       grep -q 'class="ja"' "$file"; then

        echo "修复: $file"

        # 使用 sed 进行替换
        # macOS 需要 -i '' 参数
        sed -i '' \
            -e 's/class="cn"/class="cn-only"/g' \
            -e 's/class="vn"/class="vn-only"/g' \
            -e 's/class="en"/class="en-only"/g' \
            -e 's/class="ko"/class="ko-only"/g' \
            -e 's/class="ja"/class="ja-only"/g' \
            "$file"

        ((modified_files++))
    fi
done < <(find "$BASE_DIR" -name "*.html" -type f)

echo "========================================"
echo "修复完成!"
echo "总文件数: $total_files"
echo "修改文件数: $modified_files"
echo "========================================"
