import request from '../request.js'
export default function officialTop () {
    this.init()
    this.bind()
}
officialTop.prototype = {
    init: function () {
        this.url = 'http://musicapi.leanapp.cn/playlist/hot'
        this.requestData()
    },
    bind: function () {

    },
    requestData: function () {
        let that = this
        request({ url: that.url, onSuccess: that.render, onError: function () { console.log('获取数据失败') } })
    },
    render: function (res) {
        res.tags.forEach(function (tag) {
            let html = `<li class="official-top-item">
                            <span></span>
                            <span class="official-top-play iconfont icon-bofang"></span>
                        </li>`
            let nodeHtml = new DOMParser().parseFromString(html, 'text/html');
            nodeHtml.querySelector('span').innerText = tag.name
            document.querySelector('.official-top ul').appendChild(nodeHtml.querySelector('li'))
        })
    }
}