export function newTextNode(value) {
    return {
        nodeName: '#text',
        value: value,
        parentNode: undefined,
        attrs: [],
        __location: undefined,
    };
}
export function newCommentNode(comment) {
    return {
        nodeName: '#comment',
        data: comment,
        parentNode: undefined,
        attrs: [],
        __location: undefined
    };
}

export function newElement(tagName, namespace) {
    return {
        nodeName: tagName,
        tagName: tagName,
        childNodes: [],
        namespaceURI: namespace || 'http://www.w3.org/1999/xhtml',
        attrs: [],
        parentNode: undefined,
        __location: undefined
    };
}

