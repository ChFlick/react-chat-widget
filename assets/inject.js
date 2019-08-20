
function injectDOMElement(tagName, targetSelector, options) {
    const element = document.createElement(tagName);
    Object.keys(options).forEach(key => element[key] = options[key]);
    document.querySelector(targetSelector).appendChild(element);
    return element;
}

let isOpen = false;
window.addEventListener('message', function (payload) {
    const data = payload.data;
    if (!data || !data.chatAction) {
        return;
    }

    if (!isOpen && data.chatAction === 'toggle') {
        isOpen = true;
        document.querySelector('#chat-widget-frame').setAttribute('class', 'rcw-widget-container rcw-open');
        document.querySelector('#chat-widget').setAttribute('class', 'rcw-widget-container rcw-open');
    } else {
        isOpen = false;
        document.querySelector('#chat-widget-frame').setAttribute('class', 'rcw-launcher');
        document.querySelector('#chat-widget').setAttribute('class', 'rcw-widget-container');
    }

});

function init(host) {
    const cssHref = './inject.css';
    injectDOMElement('link', 'head', { rel: 'stylesheet', href: cssHref });

    const iframeHTML = '<iframe width="1000" height="1000" id="chat-widget" frameborder="0" src="' + host + '/" class="rcw-launcher"/>';
    injectDOMElement('div', 'body', { id: 'chat-widget-frame', innerHTML: iframeHTML, className: 'rcw-widget-container' });
}

window.WebChat = { init: init }