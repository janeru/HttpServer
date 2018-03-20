// const http = require('http');

// //createServer回傳的是個function
// const server = http.createServer((req, res) => {
//     console.log('有人連線進來')
//         // head永遠是跟瀏覽器溝通
//         //回傳的是文字
//     res.writeHead(200, { 'Content-Type': 'text/plain' })
//     res.write('你已經正常連線進來')
//         //一定要寫這個end,確保網卡的buffer都送出去
//     res.end()
// })

// server.listen(3000)
// console.log('http://127.0.0.1:3000')

// // TODO:html 
// const http = require('http')
//     //判斷路徑：要讀檔的路徑
// const path = require('path')
// const url = require('url')
//     //要讀檔案
// const fs = require('fs')
// const port = 3000
//     //會來這個資料夾檢查有沒有檔案
// const webPath = 'public'

// //createServer回傳的是個function
// const server = http.createServer((req, res) => {
//     console.log('有人連線進來')

//     //urlparse:可以濾掉url後的"?問號後面參數
//     const urlPath = url.parse(req.url)
//     console.log('url:' + req.url)
//     console.log(urlPath)
//     let pathName = urlPath.pathname
//         //判斷是否為預設路徑
//     if (pathName == '/' || pathName == '/index.htm') {
//         pathName == './index.html'
//     }

//     //整理路徑
//     //組合成本機端的檔案路徑：__dirname目前這支程式執行的資料夾,webPaht:public,pathName:就是這裡的index.html
//     let filePath = path.join(__dirname, webPath, pathName)
//     console.log('filePath:' + filePath)

//     //可能會有中文編碼的問題
//     let header = {
//         'Accept-Charset': 'utf-8',
//         'Accept-Language': 'zh-TW',
//         'Content-Type': 'text/html'
//     }


//     //要來讀檔   callback function: ()=>{}
//     fs.readFile(filePath, 'utf8', (error, data) => {
//         // 判斷讀檔是否出錯
//         if (error) {
//             console.log(filePath + '檔案不存在')
//             res.writeHead(404, header)
//             res.write('<h1>404 找不到檔案</h1>')
//             res.end()
//             return
//         }
//         res.writeHead(200, header)
//         res.write(data)
//         res.end()

//     })



//     // head永遠是跟瀏覽器溝通
//     //回傳的是文字
//     // res.writeHead(200, header);
//     // res.write('<h1>簡單的HttpServer</h1>', 'utf8');
//     // res.write('<p>你已經正常連線進來</p>', 'utf8');
//     // //一定要寫這個end,確保網卡的buffer都送出去
//     // res.end();
// })

// server.listen(port)
// console.log('Server running at http://127.0.0.1:' + port)


// //老師的code
// const http = require('http')
// const path = require('path')
// const url = require('url')
// const fs = require('fs')
//     //有系統預設的port沒有的話就丟入3000
// const port = process.env.PORT || 3000

// const webPath = 'public'

// // 建立一個 HttpServer
// // req: 從 Client 端發出的請求
// // res: 由 Server 回傳給 Client 的訊息
// const server = http.createServer((req, res) => {
//     console.log('有人連線進來')


//     let urlPath = url.parse(req.url)

//     console.log('url:' + req.url)

//     let pathName = urlPath.pathname

//     // 判斷是否為預設路徑
//     if (pathName == '/' || pathName == '/index.htm') {
//         pathName = '/index.html'
//     }

//     // 組合成本機端的檔案路徑 
//     let filePath = path.join(__dirname, webPath, pathName)
//     console.log('filePath:' + filePath)


//     let header = {
//         'Accept-Charset': 'utf-8',
//         'Accept-Language': 'zh-TW',
//         'Content-Type': 'text/html'
//     }

//     fs.readFile(filePath, 'utf8', (error, data) => {
//         // 判斷讀檔是否出錯
//         if (error) {
//             console.log(filePath + '檔案不存在')
//             res.writeHead(404, header)
//             res.write('<h1>404 找不到檔案</h1>')
//             res.end()
//             return
//         }
//         res.writeHead(200, header)
//         res.write(data)
//         res.end()

//     })

// })

// server.listen(port)
// console.log('Server running at http://127.0.0.1:' + port)


//test test
const http = require('http')
const path = require('path')
const url = require('url')
const fs = require('fs')
const port = process.env.PORT || 3000

const webPath = 'public'

// 建立一個 HttpServer
// req: 從 Client 端發出的請求
// res: 由 Server 回傳給 Client 的訊息
const server = http.createServer((req, res) => {
    console.log('有人連線進來')


    let urlPath = url.parse(req.url)

    console.log('url:' + req.url)

    let pathName = urlPath.pathname

    // 判斷是否為預設路徑
    if (pathName == '/' || pathName == '/index.htm') {
        pathName = '/index.html'
    }

    // 組合成本機端的檔案路徑 
    let filePath = path.join(__dirname, webPath, pathName)
    console.log('filePath:' + filePath)


    let header = {
        'Accept-Charset': 'utf-8',
        'Accept-Language': 'zh-TW',
        'Content-Type': 'text/html'
    }

    fs.readFile(filePath, 'utf8', (error, data) => {
        // 判斷讀檔是否出錯
        if (error) {
            console.log(filePath + '檔案不存在')
            res.writeHead(404, header)
            res.write('<h1>404 找不到檔案</h1>')
            res.end()
            return
        }
        res.writeHead(200, header)
        res.write(data)
        res.end()

    })

})

server.listen(port)
console.log('Server running at http://127.0.0.1:' + port)