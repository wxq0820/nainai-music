// https://music.163.com/song/media/outer/url?id=1838485946.mp3
//http://musicapi.leanapp.cn/lyric?id=id
import '../css/common.css'
import '../css/music.css'

import timeTool from './time.js';

function $ (node) {
    return document.querySelector(node)
}

function music () {
    this.init()
}
music.prototype = {
    init: function () {
        this.musicList = JSON.parse(localStorage['musicList'])
        this.currentMusic = JSON.parse(localStorage['currentMusic'])

        this.index = 0

        this.audio = new Audio()
        this.audio.autoplay = true
        this.songUrl = ''
        this.audio.src = ''

        this.isPlaying = null

        $('.tag').innerText = this.musicList[0].tag
        this.bind()
        this.render()
    },
    bind: function () {
        let that = this
        $('.left').addEventListener('click', function () {
            that.getIndex()
            if (that.index <= 1) {
                that.index = that.musicList.length
            }
            that.currentMusic = that.musicList[that.index - 1]
            that.render()
        })
        $('.state').addEventListener('click', function () {
            if ($('.state').classList.contains('icon-play')) {
                this.classList.add('icon-pause')
                this.classList.remove('icon-play')
                that.audio.play()
            } else if ($('.state').classList.contains('icon-pause')) {
                this.classList.remove('icon-pause')
                this.classList.add('icon-play')
                that.audio.pause()
            }
        })
        $('.right').addEventListener('click', function () {
            that.getIndex()
            if (that.index >= that.musicList.length - 1) {
                that.index = 0
            }
            that.currentMusic = that.musicList[that.index + 1]
            that.render()
        })
        this.audio.addEventListener('play', function () {
            $('.state').classList.remove('icon-play')
            $('.state').classList.add('icon-pause')
            $('.progress-bar').addEventListener('click', function (e) {
               
                $('.progress').style.width = e.offsetX + 'px'
                that.audio.currentTime = (e.offsetX / $('.progress-bar').offsetWidth) * that.audio.duration
            })
            that.isPlaying = setInterval(function () {
                that.progress()
            }, 1000)
        })
        this.audio.addEventListener('pause', function () {
            clearInterval(that.isPlaying)
        })
        this.audio.addEventListener('ended', function () {
            that.getIndex()
            if (that.index >= that.musicList.length - 1) {
                that.index = 0
            }
            that.currentMusic = that.musicList[that.index + 1]
            that.render()
        })
    },
    render: function () {

        this.songUrl = `https://music.163.com/song/media/outer/url?id=${this.currentMusic.id}.mp3`
        this.audio.src = this.songUrl
        $('.song-pic img').setAttribute('src', this.currentMusic.al.picUrl)

        $('.song').innerText = this.currentMusic.name
        $('.singer').innerText = this.currentMusic.singer
        $('.bg').style.backgroundImage = "url('" + this.currentMusic.al.picUrl + "')"
        $('.state').classList.remove('icon-plat')
        $('.time').innerText = timeTool(this.currentMusic.dt)
    },
    getIndex: function () {
        this.musicList.forEach((item, index) => {
            if (item.name === this.currentMusic.name && item.singer === this.currentMusic.singer) {
                this.index = index
            }
        })
    },
    progress: function () {
        let totalTime = this.audio.duration
        let currentTime = this.audio.currentTime
        let minute = Math.floor(currentTime / 60)
        let second = Math.floor(currentTime % 60)
        second = second < 10 ? '0' + second : second
        minute = minute < 10 ? '0' + minute : minute
        let time = minute + ':' + second
        $('.time-progress').innerText = time
        let width = (currentTime / totalTime) * 100 + '%'
        $('.progress').animate([
            { width: $('.progress').offsetWidth+'px' },
            { width: width }
        ], {
            duration: 300,
        })
        $('.progress').style.width = width
    }
}
window.onload=function(){
    new music()
}
