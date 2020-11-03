// module.exports = {
//     // publicPath: "./",
//     devServer: {
//         proxy: "http://192.168.11.146:8080"
//     },
//     proxyTable:  {
//       '/api': {
//         target: 'http://localhost:8080/',//设置你调用的接口域名和端口号 别忘了加http
//         changeOrigin: true,    //這裡true表示实现跨域
//         pathRewrite: {
//           '^/api':'/'//这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替 比如我要调用'http://40.00.100.100:3002/user/add'，直接写‘/api/user/add’即可
//         }
//       }
// }

//该文件是项目的配置文件

//解决跨域问题