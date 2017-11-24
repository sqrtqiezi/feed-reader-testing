$(function () {
  describe('RSS Feeds', function () {
    it('are defined', function () {
      expect(allFeeds).toBeDefined()
      expect(allFeeds.length).not.toBe(0)
    })

    it('everyone has valid link', function () {
      allFeeds.forEach(function (item) {
        expect(item.url).toBeDefined()
        expect(item.url).not.toBe(null)
      })
    })

    it('everyone has valid name', function () {
      allFeeds.forEach(function (item) {
        expect(item.name).toBeDefined()
        expect(item.name).not.toBe(null)
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
      loadFeed(0, function () {
        done()
      })
    })

    it('has entries', function (done) {
      expect(loadFeed).toHaveBeenCalled()
      expect($('.feed .entry').length).toBeGreaterThan(0)
      done()
    })
  })

  describe('New Feed Selection', function () {
    var originalArticleTitle
    
    beforeEach(function (done) {
      originalArticleTitle = $('.feed .entry h2').eq(0).text()
      // 加载新的 Feed
      loadFeed(1, function () {
        done()
      })
    })

    it('entries changed', function (done) {
      // 判断第一条 article 标题是否变化
      expect($('.feed .entry h2').eq(0).text()).not.toBe(originalArticleTitle)
      done()
    })
  })

}())
