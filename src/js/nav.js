export default function(nodes){
    nodes.forEach((node) => {
        node.addEventListener('click', function () {
            nodes.forEach((node)=> {
                node.classList.remove('active')
            })
            node.classList.add('active')
            if (node === document.querySelector('.my')){
                document.querySelector('.my-favo').classList.add('active')
            }else{
                document.querySelector('.my-favo').classList.remove('active')
            }
        })
    })
}


