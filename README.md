前端学位订阅阅读器测试项目
================

## 项目目的
掌握 [Jasmine](https://jasmine.github.io/) 测试框架的基本用法

## 评审标准 
[https://review.udacity.com/#!/projects/3442558598/rubric](https://review.udacity.com/#!/projects/3442558598/rubric)

## 如何运行
项目包含 Jasmine Standalone 的所有文件，在浏览器中打开 index.html 即可运行测试。

## 测试用例

* RSS Feeds
    * 「are defined」 断言全局数组对象 allFeeds 已经定义，且长度不为 0
    * 「everyone has valid link」 断言 allFeeds 的所有成员都有属性 url，且 url 不为 null 或空字符串
    * 「everyone has valid name」 断言 allFeeds 的所有成员都有属性 name，且 name 不为 null 或空字符串

* The Menu 
    * 在 describe 作用域声明变量 $trigger、$body，并在 beforeEach 为变量复制，使代码简洁一些
    * 「are invisibled」 观察样式文件可知 app 通过 body 上是否有类名 menu-hidden 来控制 Menu 的隐藏。断言初始时，body 上是否有 menu-hidden 类
    * 「should toggle class show when click event fired」 在 menu-icon-link 链接上先后触发两次 click 事件，断言 body 移除 menu-hidden 类，并再次添加

* Initial Entries
    * Jasmine 的异步测试机制是：当 beforeAll, afterAll, beforeEach, afterEach, 以及 it 的回调函数中有异步操作时，需要向回调函数传入 done 函数，并且在异步操作结束处调用 done()。（我在这里一开始的理解有误，以为当一个 suite 中有异步操作的时候，suite 中所有 it 函数都需要传入 done，在第一次审阅之后，以及群里同学都提醒下，重新阅读文档，纠正了误解。
    * 在 beforeEach 中异步调用 loadFeed 函数
    * 「has entries」 断言 .feed 包含 .entry 的子节点个数大于 0

* New Feed Selection
    * 测试当重新执行 loadFeed 当时候，entry 列表会发生改变。loadFeed 需要执行两次，且国内网路对 feedburner.com 并不友好，我在 beforeAll 中修改 jasmine 的异步超时时间 DEFAULT_TIMEOUT_INTERVAL 为 20 秒
    * 在第一次 loadFeed 的回调函数中保存 entry 列表的第一篇文章标题，并再次调用 loadFeed ，传入不同的源地址，回调为 done 函数
    * 「entries changed」 断言此时的 entry 列表第一篇文章标题，与保存的文章标题不同