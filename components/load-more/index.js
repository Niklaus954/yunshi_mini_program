Component({
    externalClasses: ['wr-class', 'wr-class--no-more'],

    options: {multipleSlots: true},

    properties: {
        loadingText: {
            type: String,
            value: '加载中...',
        },
        noMoreText: {
            type: String,
            value: '没有更多了',
        },
        color: {
            type: String,
            value: '#BBBBBB',
        },
        failedColor: {
            type: String,
            value: '#FA550F',
        },
        size: {
            type: null,
            value: '40rpx',
        },
        loadingBackgroundColor: {
            type: String,
            value: '#F5F5F5',
        },
    },
});
