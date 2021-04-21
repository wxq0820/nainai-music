import request from '../request.js'

export default function recommendMusic (node) {
    this.init(node)
}
recommendMusic.prototype = {
    init: function (node) {
        this.node = node
        this.url = 'https://musicapi.leanapp.cn/top/playlist'
        this.requestData()

    },
    bind: function () {
        
    },
    requestData: function () {
        let that = this
        request({ url: that.url, onSuccess: render, onError: function () { console.log('获取数据失败') } })
    }
}
function render (res) {
    let lists = []
    for (let index = 0; index < 10; index++) {
        lists.push(res.playlists[index]);
    }
    lists.forEach(function (list) {
        let html = `<li class="recommend-item">
                       <a href="#">
                            <div class="img-wrap">
                                <img src="" alt="#"/>
                            </div>
                            <p></p>
                        </a>
                    </li>`
        let nodeHtml = new DOMParser().parseFromString(html, 'text/html');
        nodeHtml.querySelector('img').setAttribute('src', list.coverImgUrl)
        nodeHtml.querySelector('p').innerText = list.name
        nodeHtml.querySelector('li').dataset.id = list.id
        nodeHtml.querySelector('li').addEventListener('click',function(){
            window.location.href = './list.html?id='+ this.dataset.id
        })
        document.querySelector('.recommend ul').appendChild(nodeHtml.querySelector('li'))
    })

}
