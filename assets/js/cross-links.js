/**
 * NIVEX BD Portal - 跨模块智能推荐系统
 * 根据当前页面自动显示相关推荐链接
 * 版本: 1.0 | 2026-02-13
 */
(function() {
  'use strict';

  // ========== 页面关系图谱 ==========
  // 每个页面的推荐链接配置：最多显示4个相关页面
  const LINK_MAP = {
    // ===== 培训模块 =====
    'training/ai-trading-logic.html': {
      title: { cn: '学完产品知识，下一步', vn: 'Sau kiến thức sản phẩm, bước tiếp theo' },
      links: [
        { url: '../scripts/pain-points.html', icon: '🎯', cn: '痛点挖掘框架', vn: 'Khung khai thác điểm đau', desc_cn: '用产品知识精准击中客户痛点', desc_vn: 'Nhắm chính xác điểm đau khách hàng' },
        { url: '../scripts/faq.html', icon: '❓', cn: 'FAQ 32题速查', vn: 'FAQ 32 câu tra nhanh', desc_cn: '客户常问的产品问题', desc_vn: 'Câu hỏi sản phẩm thường gặp' },
        { url: '../resources/product-comparison.html', icon: '📊', cn: 'AI产品对比表', vn: 'Bảng so sánh sản phẩm AI', desc_cn: '5款AI产品横向对比', desc_vn: 'So sánh ngang 5 sản phẩm AI' },
        { url: '../resources/glossary.html', icon: '📖', cn: '专业术语表', vn: 'Bảng thuật ngữ', desc_cn: '120+术语中越双语对照', desc_vn: '120+ thuật ngữ song ngữ Trung-Việt' }
      ]
    },
    'training/partner-vision.html': {
      title: { cn: '了解愿景后，深入学习', vn: 'Sau tầm nhìn, học sâu hơn' },
      links: [
        { url: '../resources/whitepaper.html', icon: '📄', cn: '用户成长白皮书', vn: 'Sách trắng tăng trưởng', desc_cn: '8章完整知识体系', desc_vn: 'Hệ thống kiến thức 8 chương' },
        { url: '../training/ai-trading-logic.html', icon: '🤖', cn: 'AI交易逻辑', vn: 'Logic giao dịch AI', desc_cn: '核心产品技术解析', desc_vn: 'Phân tích kỹ thuật sản phẩm cốt lõi' },
        { url: '../scripts/negotiation-sop.html', icon: '🤝', cn: '五步价值谈判法', vn: '5 bước đàm phán giá trị', desc_cn: '把愿景转化为成交话术', desc_vn: 'Chuyển tầm nhìn thành kịch bản chốt' },
        { url: '../presentations/index.html', icon: '🎬', cn: '演示文件库', vn: 'Thư viện trình bày', desc_cn: 'PPT演示+分享资料', desc_vn: 'PPT trình bày + tài liệu chia sẻ' }
      ]
    },
    'training/bd-assessment.html': {
      title: { cn: '评估之后，开始成长', vn: 'Sau đánh giá, bắt đầu phát triển' },
      links: [
        { url: '../training/elite-team-orientation.html', icon: '🏆', cn: '新人第一课', vn: 'Bài học đầu tiên', desc_cn: 'BD精英团队入职培训', desc_vn: 'Đào tạo nhập môn đội BD tinh nhuệ' },
        { url: '../training/growth-200.html', icon: '💡', cn: '成长200条', vn: '200 điều phát triển', desc_cn: '200条认知金句武装话术', desc_vn: '200 câu vàng nhận thức vũ trang kịch bản' },
        { url: '../daily/goal-action-guide.html', icon: '🎯', cn: '目标行动指南', vn: 'Hướng dẫn hành động mục tiêu', desc_cn: '第一性原理分解目标', desc_vn: 'Phân tích mục tiêu theo nguyên lý đầu tiên' },
        { url: '../customer/lifecycle-sop.html', icon: '🔄', cn: '客户生命周期SOP', vn: 'SOP vòng đời khách hàng', desc_cn: '6步完整客户服务流程', desc_vn: 'Quy trình 6 bước phục vụ khách hàng' }
      ]
    },
    'training/growth-200.html': {
      title: { cn: '掌握认知后，实战运用', vn: 'Sau nhận thức, ứng dụng thực chiến' },
      links: [
        { url: '../scripts/closing-flow.html', icon: '🏁', cn: '5步成交话术链', vn: 'Chuỗi 5 bước chốt đơn', desc_cn: '把认知融入成交流程', desc_vn: 'Tích hợp nhận thức vào quy trình chốt' },
        { url: '../scripts/objection-handling.html', icon: '🛡️', cn: '10大异议处理', vn: '10 phản đối lớn', desc_cn: '用认知回应客户顾虑', desc_vn: 'Dùng nhận thức giải đáp lo ngại' },
        { url: '../scripts/faq.html', icon: '❓', cn: 'FAQ速查', vn: 'FAQ tra nhanh', desc_cn: '32题快速应对指南', desc_vn: 'Hướng dẫn ứng phó nhanh 32 câu' },
        { url: '../customer/success-cases.html', icon: '✅', cn: '成功案例库', vn: 'Thư viện case thành công', desc_cn: '真实案例验证认知', desc_vn: 'Case thực tế xác minh nhận thức' }
      ]
    },
    'training/elite-team-orientation.html': {
      title: { cn: '完成第一课，继续进阶', vn: 'Hoàn thành bài 1, tiếp tục nâng cao' },
      links: [
        { url: '../training/training-system-8-modules.html', icon: '📚', cn: '8大培训模块', vn: '8 mô-đun đào tạo', desc_cn: '系统化完整培训体系', desc_vn: 'Hệ thống đào tạo toàn diện' },
        { url: '../scripts/pain-points.html', icon: '🎯', cn: '痛点挖掘', vn: 'Khai thác điểm đau', desc_cn: '客户痛点识别与回应', desc_vn: 'Nhận diện và phản hồi điểm đau' },
        { url: '../daily/action-plan.html', icon: '⚡', cn: '48小时行动方案', vn: 'Kế hoạch 48 giờ', desc_cn: '快速启动你的第一单', desc_vn: 'Khởi động nhanh đơn đầu tiên' },
        { url: '../customer/lifecycle-sop.html', icon: '🔄', cn: '客户生命周期', vn: 'Vòng đời khách hàng', desc_cn: '从陌生到成交全流程', desc_vn: 'Toàn bộ quy trình từ lạ đến chốt' }
      ]
    },
    'training/training-system-8-modules.html': {
      title: { cn: '培训体系配套工具', vn: 'Công cụ hỗ trợ hệ thống đào tạo' },
      links: [
        { url: '../training/ai-usage-guide.html', icon: '🤖', cn: 'AI使用手册', vn: 'Hướng dẫn sử dụng AI', desc_cn: '让AI成为你的助手', desc_vn: 'Để AI trở thành trợ lý của bạn' },
        { url: '../daily/ai-daily-checklist.html', icon: '📋', cn: '每日AI清单', vn: 'Checklist AI hàng ngày', desc_cn: '5时段AI提问模板', desc_vn: 'Mẫu hỏi AI 5 khung giờ' },
        { url: '../scripts/negotiation-sop.html', icon: '🤝', cn: '谈判话术', vn: 'Kịch bản đàm phán', desc_cn: '五步价值谈判法', desc_vn: '5 bước đàm phán giá trị' },
        { url: '../resources/downloads.html', icon: '📥', cn: '资源下载', vn: 'Tải tài nguyên', desc_cn: '模板与工具下载中心', desc_vn: 'Trung tâm tải mẫu và công cụ' }
      ]
    },
    'training/ai-usage-guide.html': {
      title: { cn: 'AI工具配套资源', vn: 'Tài nguyên hỗ trợ công cụ AI' },
      links: [
        { url: '../daily/ai-daily-checklist.html', icon: '📋', cn: '每日AI工作清单', vn: 'Checklist AI hàng ngày', desc_cn: '5时段标准化AI使用', desc_vn: 'Sử dụng AI chuẩn hóa 5 khung giờ' },
        { url: '../daily/ai-weekly-analysis.html', icon: '📈', cn: 'AI周报分析', vn: 'Phân tích AI tuần', desc_cn: '用AI生成智能周报', desc_vn: 'Dùng AI tạo báo cáo tuần thông minh' },
        { url: '../scripts/faq.html', icon: '❓', cn: 'FAQ速查', vn: 'FAQ tra nhanh', desc_cn: 'AI帮你快速找答案', desc_vn: 'AI giúp bạn tìm đáp án nhanh' },
        { url: '../scripts/script-tracking.html', icon: '📊', cn: '话术追踪', vn: 'Theo dõi kịch bản', desc_cn: '用数据优化话术效果', desc_vn: 'Tối ưu hiệu quả kịch bản bằng dữ liệu' }
      ]
    },

    // ===== 话术模块 =====
    'scripts/negotiation-sop.html': {
      title: { cn: '谈判之后，继续推进', vn: 'Sau đàm phán, tiếp tục đẩy' },
      links: [
        { url: 'closing-flow.html', icon: '🏁', cn: '5步成交话术链', vn: 'Chuỗi 5 bước chốt đơn', desc_cn: '从谈判到最终成交', desc_vn: 'Từ đàm phán đến chốt cuối cùng' },
        { url: 'objection-handling.html', icon: '🛡️', cn: '异议处理', vn: 'Xử lý phản đối', desc_cn: '客户犹豫时的应对', desc_vn: 'Ứng phó khi khách do dự' },
        { url: '../customer/lifecycle-sop.html', icon: '🔄', cn: '客户生命周期', vn: 'Vòng đời khách hàng', desc_cn: '成交后的长期维护', desc_vn: 'Duy trì dài hạn sau chốt' },
        { url: 'pain-points.html', icon: '🎯', cn: '痛点挖掘', vn: 'Khai thác điểm đau', desc_cn: '谈判前的准备工作', desc_vn: 'Chuẩn bị trước đàm phán' }
      ]
    },
    'scripts/pain-points.html': {
      title: { cn: '挖掘痛点后，进入实战', vn: 'Sau khai thác điểm đau, vào thực chiến' },
      links: [
        { url: 'closing-flow.html', icon: '🏁', cn: '5步成交话术链', vn: 'Chuỗi 5 bước chốt đơn', desc_cn: '痛点 → 成交的完整路径', desc_vn: 'Điểm đau → Đường dẫn chốt hoàn chỉnh' },
        { url: 'negotiation-sop.html', icon: '🤝', cn: '五步价值谈判', vn: '5 bước đàm phán giá trị', desc_cn: '用痛点构建谈判策略', desc_vn: 'Xây chiến lược đàm phán từ điểm đau' },
        { url: 'objection-handling.html', icon: '🛡️', cn: '10大异议处理', vn: '10 phản đối lớn', desc_cn: '痛点背后的真实顾虑', desc_vn: 'Lo ngại thực sự đằng sau điểm đau' },
        { url: '../customer/abc-classification.html', icon: '👥', cn: '客户分类', vn: 'Phân loại khách hàng', desc_cn: '不同客户不同痛点策略', desc_vn: 'Chiến lược điểm đau khác nhau cho từng loại' }
      ]
    },
    'scripts/closing-flow.html': {
      title: { cn: '成交之后，持续经营', vn: 'Sau chốt đơn, kinh doanh liên tục' },
      links: [
        { url: '../customer/lifecycle-sop.html', icon: '🔄', cn: '客户生命周期SOP', vn: 'SOP vòng đời khách hàng', desc_cn: '成交后的6步服务流程', desc_vn: 'Quy trình 6 bước sau chốt' },
        { url: '../customer/follow-up-timeline.html', icon: '📅', cn: '跟进节奏表', vn: 'Bảng nhịp theo dõi', desc_cn: 'Day0-Day90精确跟进', desc_vn: 'Theo dõi chính xác Day0-Day90' },
        { url: '../customer/upsell-guide.html', icon: '📈', cn: '加仓引导', vn: 'Hướng dẫn tăng vốn', desc_cn: '4个黄金加仓时机', desc_vn: '4 thời điểm vàng tăng vốn' },
        { url: '../scripts/referral-system.html', icon: '🔗', cn: '转介绍裂变', vn: 'Giới thiệu lan truyền', desc_cn: '老客户带新客户', desc_vn: 'Khách cũ giới thiệu khách mới' }
      ]
    },
    'scripts/faq.html': {
      title: { cn: 'FAQ配套深度资源', vn: 'Tài nguyên chuyên sâu hỗ trợ FAQ' },
      links: [
        { url: 'objection-handling.html', icon: '🛡️', cn: '深度异议处理', vn: 'Xử lý phản đối chuyên sâu', desc_cn: '10大核心异议完整话术', desc_vn: 'Kịch bản đầy đủ 10 phản đối lớn' },
        { url: '../training/ai-trading-logic.html', icon: '🤖', cn: 'AI交易逻辑', vn: 'Logic giao dịch AI', desc_cn: '深入理解产品原理', desc_vn: 'Hiểu sâu nguyên lý sản phẩm' },
        { url: '../resources/account-guide.html', icon: '📱', cn: '开户操作指南', vn: 'Hướng dẫn mở tài khoản', desc_cn: '客户问开户时直接转发', desc_vn: 'Chuyển tiếp khi khách hỏi mở tài khoản' },
        { url: '../customer/market-volatility.html', icon: '📉', cn: '行情波动应对', vn: 'Ứng phó biến động thị trường', desc_cn: '市场波动时的安抚话术', desc_vn: 'Kịch bản trấn an khi thị trường biến động' }
      ]
    },
    'scripts/objection-handling.html': {
      title: { cn: '异议处理进阶资源', vn: 'Tài nguyên nâng cao xử lý phản đối' },
      links: [
        { url: 'market-objections.html', icon: '🌍', cn: '市场异议库', vn: 'Thư viện phản đối thị trường', desc_cn: '越南/中国/韩国市场异议', desc_vn: 'Phản đối thị trường VN/TQ/HQ' },
        { url: 'objection-collection.html', icon: '📝', cn: '异议收集机制', vn: 'Cơ chế thu thập phản đối', desc_cn: '持续优化异议库', desc_vn: 'Liên tục tối ưu thư viện phản đối' },
        { url: 'closing-flow.html', icon: '🏁', cn: '成交话术链', vn: 'Chuỗi chốt đơn', desc_cn: '解决异议后直接成交', desc_vn: 'Chốt ngay sau khi giải quyết phản đối' },
        { url: '../customer/churn-warning.html', icon: '⚠️', cn: '流失预警', vn: 'Cảnh báo rời bỏ', desc_cn: '老客户异议=流失信号', desc_vn: 'Phản đối khách cũ = tín hiệu rời bỏ' }
      ]
    },
    'scripts/market-objections.html': {
      title: { cn: '市场异议配套工具', vn: 'Công cụ hỗ trợ phản đối thị trường' },
      links: [
        { url: 'objection-handling.html', icon: '🛡️', cn: '通用异议处理', vn: 'Xử lý phản đối chung', desc_cn: '10大核心异议', desc_vn: '10 phản đối cốt lõi' },
        { url: 'vietnam-market-map.html', icon: '🇻🇳', cn: '越南获客地图', vn: 'Bản đồ khách hàng VN', desc_cn: '34省市场分级+策略', desc_vn: 'Phân cấp 34 tỉnh + chiến lược' },
        { url: 'zalo-operation-sop.html', icon: '💬', cn: 'Zalo运营SOP', vn: 'SOP vận hành Zalo', desc_cn: '越南市场核心渠道', desc_vn: 'Kênh cốt lõi thị trường VN' },
        { url: 'objection-collection.html', icon: '📝', cn: '异议收集', vn: 'Thu thập phản đối', desc_cn: '本地化异议持续迭代', desc_vn: 'Lặp lại liên tục phản đối bản địa' }
      ]
    },
    'scripts/objection-collection.html': {
      title: { cn: '异议迭代相关工具', vn: 'Công cụ lặp lại phản đối' },
      links: [
        { url: 'objection-handling.html', icon: '🛡️', cn: '异议处理库', vn: 'Thư viện xử lý phản đối', desc_cn: '当前10大核心异议', desc_vn: '10 phản đối cốt lõi hiện tại' },
        { url: 'script-tracking.html', icon: '📊', cn: '话术效果追踪', vn: 'Theo dõi hiệu quả kịch bản', desc_cn: '数据驱动话术优化', desc_vn: 'Tối ưu kịch bản dựa trên dữ liệu' },
        { url: '../daily/ai-weekly-analysis.html', icon: '📈', cn: 'AI周报分析', vn: 'Phân tích AI tuần', desc_cn: '用AI分析异议趋势', desc_vn: 'Dùng AI phân tích xu hướng phản đối' },
        { url: 'market-objections.html', icon: '🌍', cn: '市场异议库', vn: 'Thư viện phản đối thị trường', desc_cn: '按市场分类的异议', desc_vn: 'Phản đối phân loại theo thị trường' }
      ]
    },
    'scripts/marketing-content.html': {
      title: { cn: '营销内容配套', vn: 'Hỗ trợ nội dung marketing' },
      links: [
        { url: 'video-scripts.html', icon: '🎬', cn: '视频话术脚本', vn: 'Kịch bản video', desc_cn: '视频+语音内容制作', desc_vn: 'Sản xuất nội dung video + giọng nói' },
        { url: 'zalo-guide.html', icon: '💬', cn: 'Zalo运营手册', vn: 'Sổ tay Zalo', desc_cn: 'Zalo发布与互动指南', desc_vn: 'Hướng dẫn đăng bài và tương tác Zalo' },
        { url: '../resources/media-library.html', icon: '🖼️', cn: '素材资料库', vn: 'Thư viện tài liệu', desc_cn: '图片/海报/视频素材', desc_vn: 'Hình ảnh/Poster/Video' },
        { url: 'zalo-operation-sop.html', icon: '📱', cn: 'Zalo运营SOP', vn: 'SOP Zalo', desc_cn: '标准化社交运营流程', desc_vn: 'Quy trình vận hành mạng xã hội chuẩn' }
      ]
    },
    'scripts/video-scripts.html': {
      title: { cn: '视频制作配套资源', vn: 'Tài nguyên hỗ trợ sản xuất video' },
      links: [
        { url: 'marketing-content.html', icon: '📝', cn: '营销文案全集', vn: 'Toàn tập văn bản marketing', desc_cn: '配合视频的文案素材', desc_vn: 'Văn bản hỗ trợ video' },
        { url: '../resources/media-library.html', icon: '🖼️', cn: '素材资料库', vn: 'Thư viện tài liệu', desc_cn: '视频制作所需素材', desc_vn: 'Tài liệu cần cho sản xuất video' },
        { url: 'zalo-operation-sop.html', icon: '💬', cn: 'Zalo运营SOP', vn: 'SOP Zalo', desc_cn: '视频发布最佳渠道', desc_vn: 'Kênh phát hành video tốt nhất' },
        { url: 'offline-salon-guide.html', icon: '🏢', cn: '线下沙龙手册', vn: 'Sổ tay salon offline', desc_cn: '现场演示+录制机会', desc_vn: 'Cơ hội trình diễn + ghi hình tại chỗ' }
      ]
    },
    'scripts/script-tracking.html': {
      title: { cn: '话术追踪配套工具', vn: 'Công cụ hỗ trợ theo dõi kịch bản' },
      links: [
        { url: '../daily/weekly-data-card.html', icon: '📊', cn: '周数据卡', vn: 'Thẻ dữ liệu tuần', desc_cn: '统一数据收集标准', desc_vn: 'Tiêu chuẩn thu thập dữ liệu thống nhất' },
        { url: '../daily/ai-weekly-analysis.html', icon: '📈', cn: 'AI周报分析', vn: 'Phân tích AI tuần', desc_cn: 'AI自动生成分析报告', desc_vn: 'AI tự động tạo báo cáo phân tích' },
        { url: 'objection-collection.html', icon: '📝', cn: '异议收集', vn: 'Thu thập phản đối', desc_cn: '从追踪发现新异议', desc_vn: 'Phát hiện phản đối mới từ theo dõi' },
        { url: 'closing-flow.html', icon: '🏁', cn: '成交话术链', vn: 'Chuỗi chốt đơn', desc_cn: '优化成交转化率', desc_vn: 'Tối ưu tỷ lệ chuyển đổi chốt' }
      ]
    },
    'scripts/vietnam-market-map.html': {
      title: { cn: '越南获客实战工具包', vn: 'Bộ công cụ thực chiến khách hàng VN' },
      links: [
        { url: 'zalo-operation-sop.html', icon: '💬', cn: 'Zalo运营SOP', vn: 'SOP Zalo', desc_cn: '越南第一获客渠道', desc_vn: 'Kênh khách hàng #1 Việt Nam' },
        { url: 'offline-salon-guide.html', icon: '🏢', cn: '线下沙龙手册', vn: 'Sổ tay salon offline', desc_cn: '本地化线下活动', desc_vn: 'Sự kiện offline bản địa' },
        { url: 'referral-system.html', icon: '🔗', cn: '转介绍裂变', vn: 'Giới thiệu lan truyền', desc_cn: '口碑裂变增长引擎', desc_vn: 'Động cơ tăng trưởng truyền miệng' },
        { url: 'market-objections.html', icon: '🌍', cn: '市场异议库', vn: 'Thư viện phản đối thị trường', desc_cn: '越南市场6大异议', desc_vn: '6 phản đối lớn thị trường VN' }
      ]
    },
    'scripts/zalo-operation-sop.html': {
      title: { cn: 'Zalo运营配套工具', vn: 'Công cụ hỗ trợ vận hành Zalo' },
      links: [
        { url: 'zalo-guide.html', icon: '📖', cn: 'Zalo基础手册', vn: 'Sổ tay Zalo cơ bản', desc_cn: 'Zalo运营入门基础', desc_vn: 'Cơ bản vận hành Zalo cho người mới' },
        { url: 'marketing-content.html', icon: '📝', cn: '营销文案', vn: 'Văn bản marketing', desc_cn: 'Zalo朋友圈发布素材', desc_vn: 'Tài liệu đăng Zalo Moments' },
        { url: 'vietnam-market-map.html', icon: '🗺️', cn: '越南获客地图', vn: 'Bản đồ khách VN', desc_cn: '配合Zalo的地区策略', desc_vn: 'Chiến lược khu vực kết hợp Zalo' },
        { url: 'referral-system.html', icon: '🔗', cn: '转介绍裂变', vn: 'Giới thiệu lan truyền', desc_cn: 'Zalo群裂变增长', desc_vn: 'Tăng trưởng lan truyền nhóm Zalo' }
      ]
    },
    'scripts/zalo-guide.html': {
      title: { cn: 'Zalo学习进阶', vn: 'Nâng cao Zalo' },
      links: [
        { url: 'zalo-operation-sop.html', icon: '📱', cn: 'Zalo深度SOP', vn: 'SOP Zalo chuyên sâu', desc_cn: '更详细的运营标准', desc_vn: 'Tiêu chuẩn vận hành chi tiết hơn' },
        { url: 'marketing-content.html', icon: '📝', cn: '营销文案', vn: 'Văn bản marketing', desc_cn: '更多发布内容模板', desc_vn: 'Thêm mẫu nội dung đăng bài' },
        { url: 'video-scripts.html', icon: '🎬', cn: '视频脚本', vn: 'Kịch bản video', desc_cn: 'Zalo视频内容制作', desc_vn: 'Sản xuất nội dung video Zalo' },
        { url: 'vietnam-market-map.html', icon: '🗺️', cn: '获客地图', vn: 'Bản đồ khách', desc_cn: '找到你的目标市场', desc_vn: 'Tìm thị trường mục tiêu của bạn' }
      ]
    },
    'scripts/offline-salon-guide.html': {
      title: { cn: '沙龙配套资源', vn: 'Tài nguyên hỗ trợ salon' },
      links: [
        { url: 'referral-system.html', icon: '🔗', cn: '转介绍裂变', vn: 'Giới thiệu lan truyền', desc_cn: '沙龙后的裂变转化', desc_vn: 'Chuyển đổi lan truyền sau salon' },
        { url: 'zalo-operation-sop.html', icon: '💬', cn: 'Zalo运营SOP', vn: 'SOP Zalo', desc_cn: '沙龙参与者的线上跟进', desc_vn: 'Theo dõi online người tham gia salon' },
        { url: '../resources/media-library.html', icon: '🖼️', cn: '素材资料库', vn: 'Thư viện tài liệu', desc_cn: '沙龙需要的PPT和海报', desc_vn: 'PPT và poster cần cho salon' },
        { url: 'vietnam-market-map.html', icon: '🗺️', cn: '获客地图', vn: 'Bản đồ khách', desc_cn: '选择沙龙举办城市', desc_vn: 'Chọn thành phố tổ chức salon' }
      ]
    },
    'scripts/referral-system.html': {
      title: { cn: '转介绍配套工具', vn: 'Công cụ hỗ trợ giới thiệu' },
      links: [
        { url: '../customer/success-cases.html', icon: '✅', cn: '成功案例库', vn: 'Thư viện case thành công', desc_cn: '用真实案例激发转介绍', desc_vn: 'Dùng case thực để kích thích giới thiệu' },
        { url: '../customer/upsell-guide.html', icon: '📈', cn: '加仓引导', vn: 'Hướng dẫn tăng vốn', desc_cn: '加仓客户=最佳推荐人', desc_vn: 'Khách tăng vốn = người giới thiệu tốt nhất' },
        { url: 'zalo-operation-sop.html', icon: '💬', cn: 'Zalo运营SOP', vn: 'SOP Zalo', desc_cn: 'Zalo群转介绍话术', desc_vn: 'Kịch bản giới thiệu nhóm Zalo' },
        { url: '../daily/goal-action-guide.html', icon: '🎯', cn: '目标行动指南', vn: 'Hướng dẫn hành động', desc_cn: '转介绍纳入KPI目标', desc_vn: 'Đưa giới thiệu vào mục tiêu KPI' }
      ]
    },

    // ===== 客户模块 =====
    'customer/lifecycle-sop.html': {
      title: { cn: '客户管理配套工具', vn: 'Công cụ quản lý khách hàng' },
      links: [
        { url: 'abc-classification.html', icon: '👥', cn: '客户分类', vn: 'Phân loại khách hàng', desc_cn: 'A/B/C分级管理标准', desc_vn: 'Tiêu chuẩn quản lý phân cấp A/B/C' },
        { url: 'follow-up-timeline.html', icon: '📅', cn: '跟进节奏表', vn: 'Bảng nhịp theo dõi', desc_cn: 'Day0-Day90精确跟进', desc_vn: 'Theo dõi chính xác Day0-Day90' },
        { url: '../scripts/closing-flow.html', icon: '🏁', cn: '成交话术链', vn: 'Chuỗi chốt đơn', desc_cn: '推动客户进入下一步', desc_vn: 'Đẩy khách sang bước tiếp' },
        { url: 'churn-warning.html', icon: '⚠️', cn: '流失预警', vn: 'Cảnh báo rời bỏ', desc_cn: '及时发现流失信号', desc_vn: 'Phát hiện tín hiệu rời bỏ kịp thời' }
      ]
    },
    'customer/abc-classification.html': {
      title: { cn: '分类后的下一步', vn: 'Bước tiếp theo sau phân loại' },
      links: [
        { url: 'lifecycle-sop.html', icon: '🔄', cn: '生命周期SOP', vn: 'SOP vòng đời', desc_cn: '完整客户服务流程', desc_vn: 'Quy trình phục vụ đầy đủ' },
        { url: 'vip-strategy.html', icon: '👑', cn: 'A类大客户策略', vn: 'Chiến lược VIP loại A', desc_cn: '$20,000+专属服务方案', desc_vn: 'Phương án phục vụ riêng $20,000+' },
        { url: 'follow-up-timeline.html', icon: '📅', cn: '跟进节奏表', vn: 'Bảng nhịp theo dõi', desc_cn: '分级别差异化跟进', desc_vn: 'Theo dõi khác biệt theo cấp' },
        { url: '../daily/goal-action-guide.html', icon: '🎯', cn: '目标行动指南', vn: 'Hướng dẫn hành động', desc_cn: '精力分配与目标管理', desc_vn: 'Phân bổ công sức và quản lý mục tiêu' }
      ]
    },
    'customer/follow-up-timeline.html': {
      title: { cn: '跟进过程中的工具', vn: 'Công cụ trong quá trình theo dõi' },
      links: [
        { url: 'churn-warning.html', icon: '⚠️', cn: '流失预警', vn: 'Cảnh báo rời bỏ', desc_cn: '跟进中发现流失信号', desc_vn: 'Phát hiện tín hiệu rời bỏ khi theo dõi' },
        { url: 'market-volatility.html', icon: '📉', cn: '行情波动应对', vn: 'Ứng phó biến động', desc_cn: '波动期特殊跟进策略', desc_vn: 'Chiến lược theo dõi đặc biệt khi biến động' },
        { url: 'upsell-guide.html', icon: '📈', cn: '加仓引导', vn: 'Hướng dẫn tăng vốn', desc_cn: '跟进中发现加仓机会', desc_vn: 'Phát hiện cơ hội tăng vốn khi theo dõi' },
        { url: '../daily/ai-daily-checklist.html', icon: '📋', cn: '每日AI清单', vn: 'Checklist AI hàng ngày', desc_cn: 'AI辅助日常跟进', desc_vn: 'AI hỗ trợ theo dõi hàng ngày' }
      ]
    },
    'customer/vip-strategy.html': {
      title: { cn: '大客户服务配套', vn: 'Hỗ trợ phục vụ VIP' },
      links: [
        { url: 'success-cases.html', icon: '✅', cn: '成功案例库', vn: 'Thư viện case thành công', desc_cn: '大客户成功案例参考', desc_vn: 'Tham khảo case thành công VIP' },
        { url: 'upsell-guide.html', icon: '📈', cn: '加仓引导', vn: 'Hướng dẫn tăng vốn', desc_cn: 'VIP客户加仓策略', desc_vn: 'Chiến lược tăng vốn khách VIP' },
        { url: '../scripts/referral-system.html', icon: '🔗', cn: '转介绍裂变', vn: 'Giới thiệu lan truyền', desc_cn: 'VIP是最佳推荐人', desc_vn: 'VIP là người giới thiệu tốt nhất' },
        { url: 'lifecycle-sop.html', icon: '🔄', cn: '生命周期SOP', vn: 'SOP vòng đời', desc_cn: '回顾完整服务流程', desc_vn: 'Xem lại quy trình phục vụ đầy đủ' }
      ]
    },
    'customer/churn-warning.html': {
      title: { cn: '挽回客户的工具', vn: 'Công cụ giữ chân khách hàng' },
      links: [
        { url: 'market-volatility.html', icon: '📉', cn: '行情波动应对', vn: 'Ứng phó biến động', desc_cn: '波动是流失主因', desc_vn: 'Biến động là nguyên nhân chính rời bỏ' },
        { url: 'follow-up-timeline.html', icon: '📅', cn: '跟进节奏', vn: 'Nhịp theo dõi', desc_cn: '重建跟进节奏', desc_vn: 'Xây lại nhịp theo dõi' },
        { url: '../scripts/objection-handling.html', icon: '🛡️', cn: '异议处理', vn: 'Xử lý phản đối', desc_cn: '老客户的新顾虑', desc_vn: 'Lo ngại mới của khách cũ' },
        { url: 'success-cases.html', icon: '✅', cn: '成功案例', vn: 'Case thành công', desc_cn: '用案例重建信心', desc_vn: 'Dùng case xây lại niềm tin' }
      ]
    },
    'customer/market-volatility.html': {
      title: { cn: '波动期配套工具', vn: 'Công cụ hỗ trợ khi biến động' },
      links: [
        { url: 'churn-warning.html', icon: '⚠️', cn: '流失预警', vn: 'Cảnh báo rời bỏ', desc_cn: '波动期=流失高峰', desc_vn: 'Biến động = đỉnh rời bỏ' },
        { url: '../scripts/faq.html', icon: '❓', cn: 'FAQ速查', vn: 'FAQ tra nhanh', desc_cn: '行情问题快速回应', desc_vn: 'Phản hồi nhanh vấn đề thị trường' },
        { url: 'follow-up-timeline.html', icon: '📅', cn: '跟进节奏', vn: 'Nhịp theo dõi', desc_cn: '波动期加密跟进', desc_vn: 'Tăng cường theo dõi khi biến động' },
        { url: '../scripts/video-scripts.html', icon: '🎬', cn: '视频脚本', vn: 'Kịch bản video', desc_cn: '录制安抚视频', desc_vn: 'Ghi hình video trấn an' }
      ]
    },
    'customer/upsell-guide.html': {
      title: { cn: '加仓相关资源', vn: 'Tài nguyên liên quan tăng vốn' },
      links: [
        { url: 'success-cases.html', icon: '✅', cn: '成功案例', vn: 'Case thành công', desc_cn: '加仓成功的真实案例', desc_vn: 'Case thực tế tăng vốn thành công' },
        { url: '../scripts/closing-flow.html', icon: '🏁', cn: '成交话术链', vn: 'Chuỗi chốt đơn', desc_cn: '加仓本质是二次成交', desc_vn: 'Tăng vốn bản chất là chốt lần hai' },
        { url: '../scripts/referral-system.html', icon: '🔗', cn: '转介绍裂变', vn: 'Giới thiệu lan truyền', desc_cn: '加仓客户带来新客', desc_vn: 'Khách tăng vốn mang lại khách mới' },
        { url: 'vip-strategy.html', icon: '👑', cn: '大客户策略', vn: 'Chiến lược VIP', desc_cn: '大额加仓的VIP服务', desc_vn: 'Phục vụ VIP cho tăng vốn lớn' }
      ]
    },
    'customer/success-cases.html': {
      title: { cn: '案例运用场景', vn: 'Tình huống ứng dụng case' },
      links: [
        { url: '../scripts/closing-flow.html', icon: '🏁', cn: '成交话术链', vn: 'Chuỗi chốt đơn', desc_cn: '用案例助力成交', desc_vn: 'Dùng case hỗ trợ chốt' },
        { url: 'upsell-guide.html', icon: '📈', cn: '加仓引导', vn: 'Hướng dẫn tăng vốn', desc_cn: '案例激发加仓意愿', desc_vn: 'Case kích thích ý muốn tăng vốn' },
        { url: '../scripts/referral-system.html', icon: '🔗', cn: '转介绍裂变', vn: 'Giới thiệu lan truyền', desc_cn: '成功客户最愿意推荐', desc_vn: 'Khách thành công sẵn sàng giới thiệu nhất' },
        { url: '../scripts/objection-handling.html', icon: '🛡️', cn: '异议处理', vn: 'Xử lý phản đối', desc_cn: '用案例回应客户顾虑', desc_vn: 'Dùng case giải đáp lo ngại' }
      ]
    },

    // ===== 日常模块 =====
    'daily/goal-action-guide.html': {
      title: { cn: '目标执行配套工具', vn: 'Công cụ thực hiện mục tiêu' },
      links: [
        { url: 'action-plan.html', icon: '⚡', cn: '48小时行动方案', vn: 'Kế hoạch 48 giờ', desc_cn: '目标分解后立即执行', desc_vn: 'Thực hiện ngay sau khi phân tích mục tiêu' },
        { url: 'ai-daily-checklist.html', icon: '📋', cn: '每日AI清单', vn: 'Checklist AI hàng ngày', desc_cn: '每天的标准化动作', desc_vn: 'Hành động chuẩn hóa mỗi ngày' },
        { url: 'weekly-data-card.html', icon: '📊', cn: '周数据卡', vn: 'Thẻ dữ liệu tuần', desc_cn: '追踪目标完成进度', desc_vn: 'Theo dõi tiến độ hoàn thành mục tiêu' },
        { url: '../scripts/vietnam-market-map.html', icon: '🗺️', cn: '越南获客地图', vn: 'Bản đồ khách VN', desc_cn: '找到你的目标市场', desc_vn: 'Tìm thị trường mục tiêu của bạn' }
      ]
    },
    'daily/action-plan.html': {
      title: { cn: '行动方案配套', vn: 'Hỗ trợ kế hoạch hành động' },
      links: [
        { url: '../scripts/closing-flow.html', icon: '🏁', cn: '成交话术链', vn: 'Chuỗi chốt đơn', desc_cn: '48小时内完成首单', desc_vn: 'Hoàn thành đơn đầu trong 48 giờ' },
        { url: '../customer/lifecycle-sop.html', icon: '🔄', cn: '客户生命周期', vn: 'Vòng đời khách hàng', desc_cn: '成交后立即启动维护', desc_vn: 'Bắt đầu chăm sóc ngay sau chốt' },
        { url: 'goal-action-guide.html', icon: '🎯', cn: '目标行动指南', vn: 'Hướng dẫn hành động', desc_cn: '更长期的目标规划', desc_vn: 'Kế hoạch mục tiêu dài hạn hơn' },
        { url: '../scripts/pain-points.html', icon: '🎯', cn: '痛点挖掘', vn: 'Khai thác điểm đau', desc_cn: '快速识别客户需求', desc_vn: 'Nhận diện nhanh nhu cầu khách hàng' }
      ]
    },
    'daily/ai-daily-checklist.html': {
      title: { cn: 'AI工作流配套', vn: 'Hỗ trợ quy trình AI' },
      links: [
        { url: '../training/ai-usage-guide.html', icon: '🤖', cn: 'AI使用手册', vn: 'Hướng dẫn sử dụng AI', desc_cn: '更详细的AI使用指南', desc_vn: 'Hướng dẫn sử dụng AI chi tiết hơn' },
        { url: 'ai-weekly-analysis.html', icon: '📈', cn: 'AI周报分析', vn: 'Phân tích AI tuần', desc_cn: '每周用AI生成报告', desc_vn: 'Hàng tuần dùng AI tạo báo cáo' },
        { url: '../scripts/faq.html', icon: '❓', cn: 'FAQ速查', vn: 'FAQ tra nhanh', desc_cn: 'AI最常辅助回答的问题', desc_vn: 'Câu hỏi AI thường hỗ trợ trả lời nhất' },
        { url: 'goal-action-guide.html', icon: '🎯', cn: '目标行动指南', vn: 'Hướng dẫn hành động', desc_cn: 'AI清单服务于目标达成', desc_vn: 'Checklist AI phục vụ đạt mục tiêu' }
      ]
    },
    'daily/weekly-data-card.html': {
      title: { cn: '数据分析工具链', vn: 'Chuỗi công cụ phân tích dữ liệu' },
      links: [
        { url: 'ai-weekly-analysis.html', icon: '📈', cn: 'AI周报分析', vn: 'Phân tích AI tuần', desc_cn: '数据卡 → AI自动分析', desc_vn: 'Thẻ dữ liệu → AI tự động phân tích' },
        { url: 'weekly-report-example.html', icon: '📄', cn: '标杆周报', vn: 'Báo cáo tuần chuẩn', desc_cn: '参考标准周报格式', desc_vn: 'Tham khảo định dạng báo cáo chuẩn' },
        { url: '../scripts/script-tracking.html', icon: '📊', cn: '话术追踪', vn: 'Theo dõi kịch bản', desc_cn: '话术效果数据化', desc_vn: 'Số hóa hiệu quả kịch bản' },
        { url: 'meeting-agenda.html', icon: '🗓️', cn: '周会议程', vn: 'Chương trình họp tuần', desc_cn: '在周会汇报数据', desc_vn: 'Báo cáo dữ liệu trong họp tuần' }
      ]
    },
    'daily/ai-weekly-analysis.html': {
      title: { cn: 'AI分析配套资源', vn: 'Tài nguyên hỗ trợ phân tích AI' },
      links: [
        { url: 'weekly-data-card.html', icon: '📊', cn: '周数据卡', vn: 'Thẻ dữ liệu tuần', desc_cn: 'AI分析的数据来源', desc_vn: 'Nguồn dữ liệu cho phân tích AI' },
        { url: '../scripts/script-tracking.html', icon: '📊', cn: '话术追踪', vn: 'Theo dõi kịch bản', desc_cn: '追踪话术转化效果', desc_vn: 'Theo dõi hiệu quả chuyển đổi kịch bản' },
        { url: '../scripts/objection-collection.html', icon: '📝', cn: '异议收集', vn: 'Thu thập phản đối', desc_cn: '从报告发现异议趋势', desc_vn: 'Phát hiện xu hướng phản đối từ báo cáo' },
        { url: 'meeting-agenda.html', icon: '🗓️', cn: '周会议程', vn: 'Chương trình họp tuần', desc_cn: '分析结果在周会分享', desc_vn: 'Chia sẻ kết quả phân tích trong họp tuần' }
      ]
    },
    'daily/weekly-report-example.html': {
      title: { cn: '周报相关工具', vn: 'Công cụ liên quan báo cáo tuần' },
      links: [
        { url: 'weekly-data-card.html', icon: '📊', cn: '周数据卡', vn: 'Thẻ dữ liệu tuần', desc_cn: '标准化数据收集', desc_vn: 'Thu thập dữ liệu chuẩn hóa' },
        { url: 'ai-weekly-analysis.html', icon: '📈', cn: 'AI周报分析', vn: 'Phân tích AI tuần', desc_cn: 'AI自动生成分析', desc_vn: 'AI tự động tạo phân tích' },
        { url: '../resources/downloads.html', icon: '📥', cn: '资源下载', vn: 'Tải tài nguyên', desc_cn: '下载周报模板', desc_vn: 'Tải mẫu báo cáo tuần' },
        { url: 'meeting-agenda.html', icon: '🗓️', cn: '周会议程', vn: 'Chương trình họp tuần', desc_cn: '周报配合周会使用', desc_vn: 'Báo cáo tuần kết hợp họp tuần' }
      ]
    },
    'daily/meeting-agenda.html': {
      title: { cn: '周会配套工具', vn: 'Công cụ hỗ trợ họp tuần' },
      links: [
        { url: 'weekly-report-example.html', icon: '📄', cn: '标杆周报', vn: 'Báo cáo tuần chuẩn', desc_cn: '会前准备周报', desc_vn: 'Chuẩn bị báo cáo trước họp' },
        { url: 'weekly-data-card.html', icon: '📊', cn: '周数据卡', vn: 'Thẻ dữ liệu tuần', desc_cn: '周会数据汇报', desc_vn: 'Báo cáo dữ liệu trong họp tuần' },
        { url: 'ai-weekly-analysis.html', icon: '📈', cn: 'AI分析', vn: 'Phân tích AI', desc_cn: '会议中的数据分析', desc_vn: 'Phân tích dữ liệu trong cuộc họp' },
        { url: '../resources/downloads.html', icon: '📥', cn: '资源下载', vn: 'Tải tài nguyên', desc_cn: '下载会议模板', desc_vn: 'Tải mẫu cuộc họp' }
      ]
    },

    // ===== 资源模块 =====
    'resources/whitepaper.html': {
      title: { cn: '白皮书延伸阅读', vn: 'Đọc thêm từ sách trắng' },
      links: [
        { url: '../training/partner-vision.html', icon: '🔭', cn: '五年路线图', vn: 'Lộ trình 5 năm', desc_cn: '公司战略与长期愿景', desc_vn: 'Chiến lược công ty và tầm nhìn dài hạn' },
        { url: '../training/ai-trading-logic.html', icon: '🤖', cn: 'AI交易逻辑', vn: 'Logic giao dịch AI', desc_cn: '深入理解核心技术', desc_vn: 'Hiểu sâu công nghệ cốt lõi' },
        { url: '../scripts/negotiation-sop.html', icon: '🤝', cn: '价值谈判法', vn: 'Đàm phán giá trị', desc_cn: '把知识转化为谈判力', desc_vn: 'Chuyển kiến thức thành sức đàm phán' },
        { url: '../daily/goal-action-guide.html', icon: '🎯', cn: '目标行动指南', vn: 'Hướng dẫn hành động', desc_cn: '第一性原理实践', desc_vn: 'Thực hành nguyên lý đầu tiên' }
      ]
    },
    'resources/media-library.html': {
      title: { cn: '素材使用指南', vn: 'Hướng dẫn sử dụng tài liệu' },
      links: [
        { url: '../scripts/marketing-content.html', icon: '📝', cn: '营销文案', vn: 'Văn bản marketing', desc_cn: '配合素材的文案模板', desc_vn: 'Mẫu văn bản kết hợp tài liệu' },
        { url: '../scripts/video-scripts.html', icon: '🎬', cn: '视频脚本', vn: 'Kịch bản video', desc_cn: '视频素材使用脚本', desc_vn: 'Kịch bản sử dụng video' },
        { url: 'downloads.html', icon: '📥', cn: '资源下载', vn: 'Tải tài nguyên', desc_cn: '更多可下载模板', desc_vn: 'Thêm mẫu có thể tải' },
        { url: '../presentations/index.html', icon: '🎬', cn: '演示文件库', vn: 'Thư viện trình bày', desc_cn: '完整PPT演示文件', desc_vn: 'File PPT trình bày đầy đủ' }
      ]
    },
    'resources/account-guide.html': {
      title: { cn: '开户后的下一步', vn: 'Bước tiếp theo sau mở tài khoản' },
      links: [
        { url: '../customer/lifecycle-sop.html', icon: '🔄', cn: '客户生命周期', vn: 'Vòng đời khách hàng', desc_cn: '开户后进入维护流程', desc_vn: 'Vào quy trình chăm sóc sau mở tài khoản' },
        { url: '../customer/follow-up-timeline.html', icon: '📅', cn: '跟进节奏表', vn: 'Bảng nhịp theo dõi', desc_cn: '新开户客户跟进计划', desc_vn: 'Kế hoạch theo dõi khách mới mở tài khoản' },
        { url: '../training/ai-trading-logic.html', icon: '🤖', cn: 'AI交易逻辑', vn: 'Logic giao dịch AI', desc_cn: '帮客户理解产品', desc_vn: 'Giúp khách hiểu sản phẩm' },
        { url: '../scripts/faq.html', icon: '❓', cn: 'FAQ速查', vn: 'FAQ tra nhanh', desc_cn: '开户常见问题解答', desc_vn: 'Giải đáp thắc mắc mở tài khoản' }
      ]
    },
    'resources/product-comparison.html': {
      title: { cn: '产品对比后的下一步', vn: 'Bước tiếp theo sau so sánh' },
      links: [
        { url: '../training/ai-trading-logic.html', icon: '🤖', cn: 'AI交易逻辑', vn: 'Logic giao dịch AI', desc_cn: '深入了解我们的优势', desc_vn: 'Hiểu sâu lợi thế của chúng ta' },
        { url: '../scripts/objection-handling.html', icon: '🛡️', cn: '异议处理', vn: 'Xử lý phản đối', desc_cn: '客户对比后的疑虑', desc_vn: 'Lo ngại của khách sau khi so sánh' },
        { url: 'glossary.html', icon: '📖', cn: '术语表', vn: 'Bảng thuật ngữ', desc_cn: '专业术语快速查阅', desc_vn: 'Tra nhanh thuật ngữ chuyên môn' },
        { url: '../scripts/closing-flow.html', icon: '🏁', cn: '成交话术链', vn: 'Chuỗi chốt đơn', desc_cn: '对比优势直接成交', desc_vn: 'Chốt trực tiếp từ lợi thế so sánh' }
      ]
    },
    'resources/downloads.html': {
      title: { cn: '下载资源使用场景', vn: 'Tình huống sử dụng tài nguyên tải' },
      links: [
        { url: '../daily/weekly-report-example.html', icon: '📄', cn: '标杆周报', vn: 'Báo cáo tuần chuẩn', desc_cn: '周报模板使用示例', desc_vn: 'Ví dụ sử dụng mẫu báo cáo tuần' },
        { url: '../daily/meeting-agenda.html', icon: '🗓️', cn: '周会议程', vn: 'Chương trình họp tuần', desc_cn: '会议模板使用指南', desc_vn: 'Hướng dẫn sử dụng mẫu cuộc họp' },
        { url: 'media-library.html', icon: '🖼️', cn: '素材资料库', vn: 'Thư viện tài liệu', desc_cn: '更多在线素材', desc_vn: 'Thêm tài liệu trực tuyến' },
        { url: '../customer/follow-up-timeline.html', icon: '📅', cn: '跟进节奏表', vn: 'Bảng nhịp theo dõi', desc_cn: '跟进模板的使用场景', desc_vn: 'Tình huống sử dụng mẫu theo dõi' }
      ]
    },
    'resources/glossary.html': {
      title: { cn: '术语学习配套', vn: 'Hỗ trợ học thuật ngữ' },
      links: [
        { url: '../training/ai-trading-logic.html', icon: '🤖', cn: 'AI交易逻辑', vn: 'Logic giao dịch AI', desc_cn: '术语在实际产品中的应用', desc_vn: 'Ứng dụng thuật ngữ trong sản phẩm thực tế' },
        { url: 'product-comparison.html', icon: '📊', cn: '产品对比', vn: 'So sánh sản phẩm', desc_cn: '对比中常用的术语', desc_vn: 'Thuật ngữ thường dùng khi so sánh' },
        { url: '../scripts/faq.html', icon: '❓', cn: 'FAQ速查', vn: 'FAQ tra nhanh', desc_cn: '客户问术语时的解释', desc_vn: 'Giải thích khi khách hỏi thuật ngữ' },
        { url: 'translation-workflow.html', icon: '🌍', cn: '翻译工作流', vn: 'Quy trình dịch thuật', desc_cn: '术语翻译标准', desc_vn: 'Tiêu chuẩn dịch thuật ngữ' }
      ]
    },
    'resources/multilingual-status.html': {
      title: { cn: '多语言管理工具', vn: 'Công cụ quản lý đa ngữ' },
      links: [
        { url: 'translation-workflow.html', icon: '🔄', cn: '翻译工作流SOP', vn: 'SOP quy trình dịch', desc_cn: '母版→翻译5步流程', desc_vn: 'Quy trình 5 bước Bản gốc → Dịch' },
        { url: 'glossary.html', icon: '📖', cn: '术语表', vn: 'Bảng thuật ngữ', desc_cn: '翻译参考术语标准', desc_vn: 'Tiêu chuẩn thuật ngữ tham khảo dịch' },
        { url: '../presentations/index.html', icon: '🎬', cn: '演示文件库', vn: 'Thư viện trình bày', desc_cn: '多语言PPT版本', desc_vn: 'Phiên bản PPT đa ngữ' },
        { url: 'media-library.html', icon: '🖼️', cn: '素材资料库', vn: 'Thư viện tài liệu', desc_cn: '多语言素材状态', desc_vn: 'Trạng thái tài liệu đa ngữ' }
      ]
    },
    'resources/translation-workflow.html': {
      title: { cn: '翻译工具链', vn: 'Chuỗi công cụ dịch thuật' },
      links: [
        { url: 'multilingual-status.html', icon: '📋', cn: '版本管理', vn: 'Quản lý phiên bản', desc_cn: '查看翻译进度总览', desc_vn: 'Xem tổng quan tiến độ dịch' },
        { url: 'glossary.html', icon: '📖', cn: '术语表', vn: 'Bảng thuật ngữ', desc_cn: '翻译时的术语参考', desc_vn: 'Tham khảo thuật ngữ khi dịch' },
        { url: '../training/ai-usage-guide.html', icon: '🤖', cn: 'AI使用手册', vn: 'Hướng dẫn AI', desc_cn: '用AI辅助翻译', desc_vn: 'Dùng AI hỗ trợ dịch thuật' },
        { url: 'downloads.html', icon: '📥', cn: '资源下载', vn: 'Tải tài nguyên', desc_cn: '下载翻译模板', desc_vn: 'Tải mẫu dịch thuật' }
      ]
    }
  };

  // ========== 渲染推荐组件 ==========
  function renderCrossLinks() {
    // 获取当前页面路径
    var path = window.location.pathname;

    // 标准化路径 - 提取相对路径
    var pageKey = '';
    var segments = path.split('/');

    // 尝试匹配: module/page.html
    for (var i = segments.length - 2; i >= 0; i--) {
      var candidate = segments[i] + '/' + segments[segments.length - 1];
      if (LINK_MAP[candidate]) {
        pageKey = candidate;
        break;
      }
    }

    if (!pageKey) return; // 当前页面没有推荐配置

    var config = LINK_MAP[pageKey];
    var lang = document.documentElement.getAttribute('data-lang') || 'cn';

    // 构建HTML
    var html = '<div class="cross-links-section" style="' +
      'margin-top: 60px; padding: 40px 0; ' +
      'border-top: 2px solid rgba(127,255,0,0.15);">' +
      '<div class="container">' +
      '<h3 style="text-align: center; margin-bottom: 8px; color: #7fff00; font-size: 1.1rem; letter-spacing: 2px;">' +
      '📎 <span class="cn-only">相关推荐</span><span class="vn-only">Đề xuất liên quan</span>' +
      '<span class="en-only">Related</span><span class="ko-only">관련 추천</span><span class="ja-only">関連</span></h3>' +
      '<p style="text-align: center; color: #888; font-size: 0.9rem; margin-bottom: 30px;">' +
      '<span class="cn-only">' + config.title.cn + '</span>' +
      '<span class="vn-only">' + config.title.vn + '</span></p>' +
      '<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px;">';

    for (var i = 0; i < config.links.length; i++) {
      var link = config.links[i];
      html += '<a href="' + link.url + '" style="' +
        'display: block; text-decoration: none; ' +
        'background: #151515; border-radius: 12px; padding: 20px; ' +
        'border: 1px solid rgba(255,255,255,0.05); ' +
        'transition: all 0.3s ease;"' +
        ' onmouseover="this.style.transform=\'translateY(-3px)\';this.style.borderColor=\'rgba(127,255,0,0.3)\';this.style.boxShadow=\'0 8px 25px rgba(0,0,0,0.3)\'"' +
        ' onmouseout="this.style.transform=\'none\';this.style.borderColor=\'rgba(255,255,255,0.05)\';this.style.boxShadow=\'none\'">' +
        '<div style="font-size: 1.5rem; margin-bottom: 10px;">' + link.icon + '</div>' +
        '<div style="color: #fff; font-weight: 700; font-size: 0.95rem; margin-bottom: 6px;">' +
        '<span class="cn-only">' + link.cn + '</span>' +
        '<span class="vn-only">' + link.vn + '</span></div>' +
        '<div style="color: #888; font-size: 0.8rem; line-height: 1.4;">' +
        '<span class="cn-only">' + link.desc_cn + '</span>' +
        '<span class="vn-only">' + link.desc_vn + '</span></div>' +
        '</a>';
    }

    html += '</div>' +
      '<div style="text-align: center; margin-top: 25px;">' +
      '<a href="' + getHomeUrl(pageKey) + '" style="color: #888; font-size: 0.85rem; text-decoration: none;">' +
      '<span class="cn-only">🏠 返回首页</span><span class="vn-only">🏠 Về trang chủ</span>' +
      '<span class="en-only">🏠 Home</span><span class="ko-only">🏠 홈</span><span class="ja-only">🏠 ホーム</span>' +
      '</a>' +
      ' &nbsp;·&nbsp; ' +
      '<a href="' + getSitemapUrl(pageKey) + '" style="color: #888; font-size: 0.85rem; text-decoration: none;">' +
      '<span class="cn-only">🗺️ 全站索引</span><span class="vn-only">🗺️ Chỉ mục toàn trang</span>' +
      '<span class="en-only">🗺️ Site Map</span><span class="ko-only">🗺️ 사이트맵</span><span class="ja-only">🗺️ サイトマップ</span>' +
      '</a>' +
      '</div>' +
      '</div></div>';

    // 响应式样式
    var style = document.createElement('style');
    style.textContent = '@media(max-width:992px){.cross-links-section [style*="grid-template-columns: repeat(4"]{grid-template-columns:repeat(2,1fr)!important}}' +
      '@media(max-width:480px){.cross-links-section [style*="grid-template-columns: repeat(4"]{grid-template-columns:1fr!important}}';
    document.head.appendChild(style);

    // 插入到footer前面
    var footer = document.querySelector('footer') || document.querySelector('.footer') || document.querySelector('.site-footer');
    if (footer) {
      footer.insertAdjacentHTML('beforebegin', html);
    } else {
      // 如果没有footer，插入到body末尾script前
      var scripts = document.querySelectorAll('body > script');
      if (scripts.length > 0) {
        scripts[0].insertAdjacentHTML('beforebegin', html);
      } else {
        document.body.insertAdjacentHTML('beforeend', html);
      }
    }
  }

  // 根据页面层级获取首页URL
  function getHomeUrl(pageKey) {
    if (pageKey.indexOf('/') !== -1) {
      return '../index.html';
    }
    return 'index.html';
  }

  // 根据页面层级获取站点地图URL
  function getSitemapUrl(pageKey) {
    if (pageKey.indexOf('/') !== -1) {
      return '../site-map.html';
    }
    return 'site-map.html';
  }

  // DOM Ready 后执行
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderCrossLinks);
  } else {
    renderCrossLinks();
  }
})();
