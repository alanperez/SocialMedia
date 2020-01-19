'use strict'

class PageController {
  async home({ res, req, view}) {
    return view.render('pages/home')
  }
}

module.exports = PageController
