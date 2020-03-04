const describe = (description, fn) => {
  console.log("Test: ")
  console.log(description)
  fn()
  console.log("")
}

const it = (msg, fn) => describe(' ' + msg, fn)

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
