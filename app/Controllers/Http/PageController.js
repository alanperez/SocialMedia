'use strict'

class PageController {
  async home({ res, req, view}) {
    return view.render('pages/home')
  }

  async welcome({ res, req, view}) {
    return view.render('pages/welcome')
  }
}

module.exports = PageController
