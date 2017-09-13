(function(){
    var dataSet = [
        {
            title : 'test1',
            imgSrc: '/images/lorempixel.jpg'
        },
        {
            title : 'test2',
            imgSrc: '/images/lorempixel-1.jpg'
        },
        {
            title : 'test3',
            imgSrc: '/images/lorempixel-2.jpg'
        },
        {
            title : 'test4',
            imgSrc: '/images/lorempixel-3.jpg'
        },
        {
            title : 'test5',
            imgSrc: '/images/lorempixel-4.jpg'
        }
    ];
    var newsBoxContainer = document.getElementById('newsBoxContainer');
    var newsContainerContent = document.createElement('div');
    for (var i = 0; i < dataSet.length; i++) {
        var newDivElem = document.createElement('div');
        var newImgElem = document.createElement('img');
        var newNewsTitle = document.createElement('p');
        newDivElem.classList = 'news-box';
        newImgElem.src = dataSet[i].imgSrc;
        newImgElem.classList = 'news-box-img';
        newDivElem.appendChild(newImgElem);
        newNewsTitle.classList = 'news-box-title';
        newNewsTitle.textContent = dataSet[i].title;
        newDivElem.append(newNewsTitle);
        newsContainerContent.appendChild(newDivElem);
    }
    newsBoxContainer.appendChild(newsContainerContent);
    newsBoxContainer.addEventListener('click', newsBoxContainerEventHandler);

    function newsBoxContainerEventHandler(evt) {
        var newsBox = document.getElementsByClassName('news-box');
        var target = evt.target;
        console.log(target.parentNode.nextSibling);
    }
    function touchStartEventHandler() {
        console.log('start');
    }
    function touchEndEventHandler() {
        console.log('end');
    }
    window.scroll= function(){
        console.log(1);
    }
}());