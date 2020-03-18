/**
 * @babel/core @babel/preset-env
 *  babel 默认只转译 es6 syntax
 */
const print = () => {
  const div = document.createElement('div')
  div.innerHTML = 'hello pc-chatting'
  return div
}
document.body.appendChild(print())
/**
 * 需要转译 es6 api
 * 需要 polyfill
 */
const promise4242 = function() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('resolve!')
      resolve('success!')
    }, 1000)
  })
}
promise4242().then(res => console.log('promise returns : ', res))

// @babel/runtime 无法模拟实例上的方法 ，但在core-js@3中可以 polyfill
console.log((['3', '4'].includes(3)))