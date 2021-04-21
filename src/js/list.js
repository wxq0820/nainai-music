import '../css/common.css'
import '../css/list.css'
import request from '../request.js';
import timeTool from './time.js';
//http://musicapi.leanapp.cn/playlist/detail?id=1838000682

let id = window.location.href.split('?')[1].split('=')[1]

request({
    url: 'https://musicapi.leanapp.cn/playlist/detail',
    data: { id },
    onSuccess: render,
    onError: function () { console.log('获取数据失败') }
})

function render (res) {
    console.log(res)
    document.querySelector('.img-ct img').setAttribute('src', res.playlist.coverImgUrl)
    document.querySelector('.title').innerText = res.playlist.name
    document.querySelector('.avatar').setAttribute('src', res.playlist.creator.avatarUrl)
    document.querySelector('.creater').innerText = res.playlist.creator.nickname
    document.querySelector('.tag').innerText = res.playlist.tags.join('/')
    document.querySelector('.songs-num').innerText = res.playlist.tracks.length
    document.querySelector('.view-counts').innerText = res.playlist.playCount
    document.querySelector('.description').innerText = res.playlist.description

    res.playlist.tracks.forEach((list) => {
        let html = `<li class="item">
                  <span class="song-name"></span>
                  <span class="singer"></span>
                  <span class="album"></span>
                  <span class="duration">1</span>
                </li>`
        let singer = []
        list.ar.forEach((item) => {
            singer.push(item.name)
        })
        singer = singer.join('/')
        list.singer = singer

        let nodeHtml = new DOMParser().parseFromString(html, 'text/html');
        nodeHtml.querySelector('.song-name').innerText = list.name
        nodeHtml.querySelector('.singer').innerText = singer
        nodeHtml.querySelector('.album').innerText = list.al.name
        nodeHtml.querySelector('.duration').innerText = timeTool(list.dt)
        nodeHtml.querySelector('li').dataset.id = list.id
        nodeHtml.querySelector('li').addEventListener('click', function () {
            localStorage['currentMusic'] = JSON.stringify(list)
            window.location.href = './music.html'
        })
        document.querySelector('.song-list').appendChild(nodeHtml.querySelector('li'))
    })
    res.playlist.tracks.unshift({tag:res.playlist.name})
    localStorage['musicList'] = JSON.stringify(res.playlist.tracks)
}