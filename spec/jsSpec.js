const describe = (description, fn) => {
  console.log(description)
  fn()
}

const it = (msg, fn) => {
  console.log(' ' + msg, fn)
}

const matchers = (exp) => ({
  toEq: (val) => {
    if (exp === val) {
      console.log('%c    passed', 'color: #00ff00')
    } else {
      console.log(`%c    Failed. (expect ${exp} to equal ${val})`, 'color: #ff0000')
    }
  },
  isInstanceOf: (val) => {
    if (exp instanceof val) {
      console.log('%c    passed', 'color: #00ff00')
    } else {
      console.log(`%c    Failed. (expect ${exp} to be instance of ${val})`, 'color: #ff0000')
    }
  }
})

const expect = (exp) => matchers(exp)

