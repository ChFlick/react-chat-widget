
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
    const styles = document.createElement('style');
    styles.innerHTML = `
    .rcw-widget-container {
        bottom: 0;
        display: flex;
        flex-direction: column;
        margin: 0 20px 20px 0;
        max-width: 370px;
        position: fixed;
        right: 0;
        z-index: 9999;
    }
    
    .rcw-opened {
        width: 90vw;
    }
    
    .rcw-launcher {
        align-self: flex-end;
        border: 0;
        border-radius: 50%;
        height: 100px;
        margin-top: 10px;
        width: 100px;
    }`;
    document.head.appendChild(styles);

    const iframeHTML = '<iframe width="1000" height="1000" id="chat-widget" frameborder="0" src="' + host + '/" class="rcw-launcher"/>';
    injectDOMElement('div', 'body', { id: 'chat-widget-frame', innerHTML: iframeHTML, className: 'rcw-widget-container' });
}

window.WebChat = { init: init }