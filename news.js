
const api = "eb7e7f5815634947a943425482e02875";
const url = "https://newsapi.org/v2/everything?q=";

let selected ;
apibana('India');

async function apibana(query){
    const news = await fetch(`${url}${query}&apiKey=${api}`);
    const data = await news.json();
    binddata(data);
}
function binddata(data){
    const cardcontainer = document.querySelector('.main-content');
    const newscardtemplate = document.querySelector('.newscardtemplate');
    cardcontainer.innerHTML = '';

    for(let i = 0 ; i < data.articles.length ; i++){
        if(!data.articles[i].urlToImage){
            continue;
        }

        const cardclone = newscardtemplate.content.cloneNode(true);

        fillcard(cardclone,data.articles[i]);
        
        cardcontainer.appendChild(cardclone);
        
    }
}
function colorchange(){
    if(selected !== 'IPL'){
        document.getElementById('topic1').classList.remove('blue');
    }
    if(selected !== 'Finance'){
        document.getElementById('topic2').classList.remove('blue');
    }
    if(selected !== 'Politics'){
        document.getElementById('topic3').classList.remove('blue');
    }
    if(selected !== 'Technology'){
        document.getElementById('topic4').classList.remove('blue');
    }
}
function colorblue(){
    if(selected === 'IPL'){
        document.getElementById('topic1').classList.add('blue');
    }
    if(selected === 'Finance'){
        document.getElementById('topic2').classList.add('blue');
    }
    if(selected === 'Politics'){
        document.getElementById('topic3').classList.add('blue');
    }
    if(selected === 'Technology'){
        document.getElementById('topic4').classList.add('blue');
    }
    colorchange();
}
function fillcard(cardclone , article){

    const title = article.title;
    cardclone.querySelector('.news-title')
    .innerHTML = title;
    const des = article.description;
    cardclone.querySelector('.news-desc')
    .innerHTML = des;
    const time = article.publishedAt;
    cardclone.querySelector('.news-date')
    .innerHTML = time;
    const image = article.urlToImage;
    cardclone.querySelector('.news-img')
    .src = image;

    cardclone.firstElementChild.addEventListener('click' ,()=>{
        window.open(article.url , "_blank");
    });
}