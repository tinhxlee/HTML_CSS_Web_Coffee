
window.addEventListener('load',function(){
    const slider = document.querySelector('.slider');
    const dotItems = document.querySelectorAll('.slider-dot-item');
    const sliderMain = document.querySelector('.slider-main');
    const sliderItems = document.querySelectorAll('.slider-item');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    const sliderItemWidth = sliderItems[0].offsetWidth;
    const sliderLength = sliderItems.length;
    let postionX = 0 ;
    let index = 0;
    nextBtn.addEventListener('click', function(){
        changeSlider(1);
    });
    prevBtn.addEventListener('click', function(){
        changeSlider(-1);
    });
    [...dotItems].forEach(item => item.addEventListener('click', function(e){
        [...dotItems].forEach(el => el.classList.remove('active'));
        e.target.classList.add('active');
        const sliderIndex = parseInt(e.target.dataset.index) ;
        index = sliderIndex ;
        postionX = -1 * index * sliderItemWidth;
        sliderMain.style = `transform: translateX(${postionX}px)`;
    }));
        function changeSlider(direction){
            if(direction === 1)
            {
                if(index >= sliderLength - 1){
                    index = sliderLength - 1;
                    return;
                } 
                postionX = postionX - sliderItemWidth ;
                sliderMain.style = `transform: translateX(${postionX}px)`;
                index ++ ;
            }
            else if(direction === -1)
            {
                if(index <= 0){
                    index = 0 ;
                    return;
                } 
                postionX = postionX + sliderItemWidth ;
                sliderMain.style = `transform: translateX(${postionX}px)`;
                index-- ;
            } 
            [...dotItems].forEach(el => el.classList.remove('active'));
            dotItems[index].classList.add('active');    
        }
            
});
