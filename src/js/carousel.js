export default function carousel (node) {
    this.init(node)
    this.bind()
    this.autoPlay()
}
carousel.prototype = {
    init: function (node) {
        this.node = node
        this.img_ct = this.node.querySelector('.img-ct')
        this.imgs = this.img_ct.querySelectorAll('li')
        this.left = this.node.querySelector('.left')
        this.right = this.node.querySelector('.right')
        this.dot = this.node.querySelector('.dot')

        this.imgsCount = this.imgs.length
        this.index = 0
        this.isAnimate = false
        this.timeClock = null

        //轮播前后各插入最后一个和第一个子元素做无缝衔接
        this.img_ct.insertBefore(this.img_ct.lastElementChild.cloneNode(true), this.img_ct.children[0])
        this.img_ct.appendChild(this.imgs[0].cloneNode(true))

        //设置所有轮播图片容器的宽度
        this.navWidth = document.querySelector('.wrap').offsetWidth
        this.imgs.forEach(img => {
            img.style.width = this.navWidth + 'px'
        });
        this.img_ct.firstElementChild.style.width = this.navWidth + 'px'
        this.img_ct.lastElementChild.style.width = this.navWidth + 'px'

        //设置图片容器的宽度和left值
        this.imgWidth = this.img_ct.querySelector('img').width
        this.img_ct.width = this.imgWidth * (this.imgsCount + 2) + 'px'
        this.img_ct.style.left = -this.imgWidth + 'px'
    },
    bind: function () { //所有交互处理函数
        let that = this

        //窗口放大缩小后重新获取轮播图片容器的总宽度以及left值和每个图片容器的宽度
        window.onresize = function () {
            that.navWidth = document.querySelector('.wrap').offsetWidth
            that.imgs.forEach(img => {
                img.style.width = that.navWidth + 'px'
            });

            that.imgWidth = that.img_ct.querySelector('img').width
            that.img_ct.width = that.imgWidth * (that.imgsCount + 2) + 'px'
            that.img_ct.style.left = -that.imgWidth + 'px'
        }

        //点击<向前翻页
        this.left.addEventListener('click', function () {
            that.preImg(1)
        })
        //点击>向后翻页
        this.right.addEventListener('click', function () {
            that.nextImg(1)
        })
        //点击导航点后根据下标判断向前/向后翻页，为导航点添加active class
        this.dot.addEventListener('click', function (e) {
            let arrNodes = Array.prototype.slice.call(that.node.querySelectorAll('.dot li'))
            let dotIndex = arrNodes.indexOf(e.target)
            if (that.index < dotIndex) {
                that.nextImg(dotIndex - that.index)
            } else {
                that.preImg(that.index - dotIndex)
            }
            for (let index = 0; index < that.dot.children.length; index++) {
                that.dot.children[index].classList.remove('active')
            }
            e.target.classList.add('active')
        })
        //鼠标移入停止自动轮播
        this.node.addEventListener('mouseenter', function () {
            that.stopPlay()
        })
        //鼠标移出开始自动轮播
        this.node.addEventListener('mouseleave', function () {
            that.autoPlay()
        })
    },
    preImg: function (step) { //向前翻页
        var that = this
        if (this.isAnimate) return

        this.isAnimate = true

        that.img_ct.animate([
            { left: that.img_ct.style.left },
            { left: (that.img_ct.offsetLeft + that.img_ct.querySelector('img').width * step) + 'px' }
        ], {
            duration: 600,

        })

        that.index -= step
        //当前下标小于零时将倒数第一张图片设置为当前图片，否则显示前一张图，并对导航点做对应处理
        if (that.index < 0) {
            that.img_ct.style.left = -(that.img_ct.querySelector('img').width * that.imgsCount) + 'px'
            that.index = that.imgsCount - 1
        } else {
            that.img_ct.style.left = (that.img_ct.offsetLeft + that.img_ct.querySelector('img').width * step) + 'px'
        }

        for (let index = 0; index < that.dot.children.length; index++) {
            that.dot.children[index].classList.remove('active')
        }
        that.dot.children[that.index].classList.add('active')
        that.isAnimate = false
    },
    nextImg: function (step) { //向后翻页
        var that = this
        if (this.isAnimate) return

        this.isAnimate = true

        that.img_ct.animate([
            { left: that.img_ct.style.left },
            { left: (that.img_ct.offsetLeft - that.img_ct.querySelector('img').width * step) + 'px' }
        ], {
            duration: 600,

        })

        that.index += step
        //当前下标小于零时将倒数第一张图片设置为当前图片，否则显示前一张图，并对导航点做对应处理
        if (that.index === that.imgsCount) {
            that.img_ct.style.left = -that.img_ct.querySelector('img').width + 'px'
            that.index = 0
        } else {
            that.img_ct.style.left = (that.img_ct.offsetLeft - that.img_ct.querySelector('img').width * step) + 'px'
        }

        for (let index = 0; index < that.dot.children.length; index++) {
            that.dot.children[index].classList.remove('active')
        }
        that.dot.children[that.index].classList.add('active')
        that.isAnimate = false
    },
    autoPlay: function () { //自动轮播
        let that = this
        that.timeClock = setInterval(()=> {
            that.nextImg(1)
        }, 2000)
    },
    stopPlay: function () { //停止轮播
        clearInterval(this.timeClock)
    }
}