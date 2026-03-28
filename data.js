// data.js
window.SITE_DATA = {
  // 常规笔记列表
  notes: [
    {
      id: "note1",
      title: "一个人的万物起源",
      author: "周忠和",
      genre: "科普",
      field: "自然科学",
      link: "notes/note1.html"  // 相对路径，指向笔记详情页
    },
    {
      id: "note2",
      title: "太阳落在了哪座山",
      author: "乔叶",
      genre: "散文",
      field: "文学",
      link: "notes/note2.html"
    },
    {
      id: "note3",
      title: "纸上谈爱：情书集",
      author: "张冲波、骆淑景",
      genre: "书信",
      field: "文学",
      link: "notes/note3.html"
    },
    // ... 更多笔记
  ],

  // 常规资源列表（外部链接或本地文件）
  resources: [
    {
      id: "res1",
      title: "三体",
      author: "刘慈欣",
      genre: "科幻",
      field: "文学",
      link: "https://kdocs.cn/l/xxxxx"  // WPS 分享链接
    },
    {
      id: "res2",
      title: "流浪地球",
      author: "刘慈欣",
      genre: "科幻",
      field: "文学",
      link: "resources/the_wandering_earth.pdf"  // 本地 PDF
    },
    // ... 更多资源
  ],

  // 画画模块 - 正规计划
  regularPlan: [
    {
      title: "素描基础",
      author: "李静",
      link: "notes/sketch.html"  // 可跳转
    },
    {
      title: "色彩理论",
      author: "王明",
      link: "notes/color.html"
    }
  ],

  // 画画模块 - 辅修课程
  minorCourses: [
    {
      title: "速写技巧",
      author: "张华",
      link: "notes/sketch_skills.html"
    }
  ],

  // 筛选标签定义（自动从数据中提取，也可以手动定义）
  filters: {
    author: [],      // 自动生成
    genre: [],       // 自动生成
    field: []        // 自动生成
  }
};
