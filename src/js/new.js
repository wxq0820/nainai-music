import request from '../request.js'
export default function newMusic () {
    this.init()
    this.bind()
}
newMusic.prototype = {
    init: function () {
        this.url = 'http://musicapi.leanapp.cn/top/song?type=0'
        this.requestData()
    },
    bind: function () {

    },
    requestData: function () {
        let that = this
        request({ url: that.url, onSuccess: that.render, onError: function () { console.log('获取数据失败') } })
    },
    render: function (res) {
        let lists = []
        
        for (let index = 0; index < 20; index++) {
            lists.push(res.data[index]);
        }
        
        let musicList = []
        lists.forEach(function (list) {
            let singers = []
            let currentMusic = {}
            list.artists.forEach(artist => {
                singers.push(artist.name)
            })
            singers = singers.join('/')
           
            currentMusic.id = list.id
            currentMusic.al = {}
            currentMusic.al.picUrl = list.album.picUrl
            currentMusic.name = list.name
            currentMusic.singer = singers
            currentMusic.dt = list.duration

            musicList.push(currentMusic)
            let html = `<li class="new-item">
                            <div class="new-img">
                                <img src="" alt="#"/>
                                <span class="new-play iconfont icon-bofang"></span>
                            </div>
                            <div class="detail">
                                <p class="song"></p>
                                <p class="singer"></p>
                            </div>
                        </li>`
            let nodeHtml = new DOMParser().parseFromString(html, 'text/html');
            nodeHtml.querySelector('img').setAttribute('src', list.album.picUrl)
            nodeHtml.querySelector('.song').innerText = list.name
            nodeHtml.querySelector('.singer').innerText = singers
            nodeHtml.querySelector('li').addEventListener('click',function(){
                localStorage['currentMusic'] = JSON.stringify(currentMusic)
                window.location.href = './music.html'
            })
            document.querySelector('.new ul').appendChild(nodeHtml.querySelector('li'))
        })
        musicList.unshift({tag:'最新歌曲'})
        localStorage['musicList'] = JSON.stringify(musicList)
    }
}