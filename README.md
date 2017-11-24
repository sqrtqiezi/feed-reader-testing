前端学位订阅阅读器测试项目
================

## 项目目的
掌握 [Jasmine](https://jasmine.github.io/) 测试框架的基本用法

## 评审标准 
[https://review.udacity.com/#!/projects/3442558598/rubric](https://review.udacity.com/#!/projects/3442558598/rubric)

## 我如何完成这个项目
1. 上一下 javascript Testing [课程](https://www.udacity.com/course/ud549)
2. 下载[必要的项目资源](http://github.com/udacity/frontend-nanodegree-feedreader)
3. 在浏览器里面查看一下应用的功能
4. 查看项目的 HTMl (**./index.html**), CSS (**./css/style.css**) 和 JavaScript (**./js/app.js**) 文件来对项目的工作原理有一个基本的了解。
5. 查看 Jasmine spec 文件 **./jasmine/spec/feedreader.js** 然后翻阅阅读 [Jasmine 文档](http://jasmine.github.io)。
6. 编辑 **./js/app.js** 里面的 `allFeeds` 变量使给出的测试通不过，然后观察Jasmine是怎么展示你应用的错误信息的。
7. 将 `allFeeds` 变量返回给一个短暂的状态。
8. 编写一个测试遍历 allFeeds 对象里面的所有的源来保证有链接字段而且链接不是空的。
9. 编写一个测试遍历 allFeeds 对象里面的所有的源来保证有名字字段而且不是空的。
10. 写一个叫做 `"The menu"` 的测试用例
11. 写一个测试用例保证菜单元素默认是隐藏的。你需要分析 html 和 css 来搞清楚我们是怎么实现隐藏/展示菜单元素的。
12. 写一个测试用例保证当菜单图标被点击的时候菜单会切换可见状态。这个测试应该包含两个 expectation ： 党点击图标的时候菜单是否显示，再次点击的时候是否隐藏。
13. 写一个叫做 `"Initial Entries"` 的测试用例
14. 写一个测试保证 `loadFeed` 函数被调用而且工作正常，即在 `.feed` 容器元素里面至少有一个 `.entry` 的元素。
15. 写一个叫做 `"New Feed Selection"` 的测试用例
16. 写一个测试保证当用 `loadFeed` 函数加载一个新源的时候内容会真的改变。
17. 每个测试都不应该依赖别的测试的结果。
18. 回调函数应该用来保证在测试运行之前源已经被加载。
19. 实现未定义变量和数组越界的错误处理。
20. 当完成所有任务的时候，所有的测试也应该通过。
21. 写一个 README 文件来详细说明运行应用的步骤。如果你已经添加了额外的测试（来提高测试覆盖率），请提供文档说明这些未来的功能点是什么和你编写的测试在检查什么。
