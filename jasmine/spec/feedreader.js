$(function () {
  describe('RSS Feeds', function () {
    it('are defined', function () {
      expect(allFeeds).toBeDefined()
      expect(allFeeds.length).not.toBe(0)
    })

    function sameDetection (item) {
      expect(item.name).not.toBe(null)
      expect(item.name).not.toBe('')
    }

    it('everyone has valid link', function () {
      allFeeds.forEach(function (item) {
        sameDetection(item)
      })
    })

    it('everyone has valid name', function () {
      allFeeds.forEach(function (item) {
        sameDetection(item)
      })
    })
  })

  describe('The Menu', function () {
    var $trigger, $body

    beforeEach(function () {
      $trigger = $('.menu-icon-link')
      $body = $('body')
    })

    /**
     * body 上是否有 class menu-hidden，为菜单是否隐藏的判断条件
     */
    it('are invisibled', function () {
      expect($('body').attr('class')).toContain('menu-hidden')
    })

    it('should toggle class show when click event fired', function () {
      $trigger.trigger('click')
      expect($body.attr('class')).not.toContain('menu-hidden')
      $trigger.trigger('click')
      expect($body.attr('class')).toContain('menu-hidden')
    })
  })

  describe('Initial Entries', function () {
    beforeEach(function (done) {
      // 定义 spy ，帮助测试 loadFeed 调用情况
      spyOn(window, 'loadFeed').and.callThrough()
      loadFeed(0, done)
    })

    it('has entries', function () {
      expect(loadFeed).toHaveBeenCalled()
      expect($('.feed .entry').length).toBeGreaterThan(0)
    })
  })

  describe('New Feed Selection', function () {
    var originalArticleTitle, originalTimeout

    beforeAll(function () {
      // 网络好慢，让子弹多飞一会儿
      originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL
      jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000
    })

    beforeEach(function (done) {
      // 加载新的 Feed
      loadFeed(0, function () {
        originalArticleTitle = $('.feed .entry h2').eq(0).text()
        loadFeed(1, done)
      })
    })

    it('entries changed', function () {
      // 判断第一条 article 标题是否变化
      expect($('.feed .entry h2').eq(0).text()).not.toBe(originalArticleTitle)
    })

    afterAll(function () {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout
    })
  })

}())
