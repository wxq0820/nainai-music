// http://musicapi.leanapp.cn/
export default function ajax (option) {
    let url = option.url
    let type = option.type || 'GET'
    let dataType = option.dataType || 'json'
    let onSuccess = option.onSuccess || function () { }
    let onError = option.onError || function () { }
    let data = option.data || {}

    var dataStr = []
    for (let key in data) {
        dataStr.push(key + '=' + data[key])
    }
    dataStr = dataStr.join('&')

    if (type === 'GET') {
        url += '?' + dataStr
    }

    let xhr = new XMLHttpRequest()
    xhr.open(type, url, true)
    xhr.onload = function () {
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
            if (dataType === 'json') {
                onSuccess(JSON.parse(xhr.responseText))
            } else {
                onSuccess(xhr.responseText)
            }
        } else {
            onError()
        }
    }
    xhr.onError = onError
    if (type === 'POST') {
        xhr.send(dataStr)
    } else {
        xhr.send()
    }
}

