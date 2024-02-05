const btns = document.querySelectorAll('.tab-btn')
const about = document.querySelector('.about')
const articles = document.querySelectorAll('.content')

about.addEventListener('click', function(e){
    const id = e.target.dataset.id;
    if(id){
        // remove active frm other buttons
        btns.forEach(function(btn){
            btn.classList.add('active')
            e.target.classList.remove('active')
        })
        // hide other articles
        articles.forEach(function(article){
            article.classList.remove('active')
        })
        const element = document.getElementById(id)
        element.classList.add('active');
    }
})
