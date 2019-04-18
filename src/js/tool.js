function insertHtml(position, target, domNode) {
    position = position.toLowerCase();
    target = target || document.body;
    switch (position) {
        case 'beforebegin':
            target.insertAdjacentHTML('beforeBegin', domNode);
            return target.previousSibling;
        case 'afterbegin':
            target.insertAdjacentHTML('afterBegin', domNode);
            return target.firstChild;
        case 'beforeend':
            target.insertAdjacentHTML('beforeEnd', domNode);
            return target.lastChild;
        case 'afterend':
            target.insertAdjacentHTML('afterEnd', domNode);
            return target.nextSibling;
        case 'all':
            target.innerHTML = domNode;
            break;
    }
}
function addEventSamp(target, evt, fn) {
    if (!(target && evt && typeof fn === 'function')) { return; }
    if (target.addEventListener) {
        target.addEventListener(evt, fn, false);
    } else if (target.attachEvent) {
        target.attachEvent('on' + evt, fn);
    }
}