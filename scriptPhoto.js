const photo=document.querySelectorAll('.photos');  // queryselector for getting single class. if bunch of tags have same classname you should use  queryselectorAll
const mainImage=document.querySelector('.hero-section');
const closeButton=document.querySelector('.close-image');
const popImage=document.querySelector('.pop-image');
const mainContainer=document.querySelector('.container')


photo.forEach((i)=>{                                // if you are giving same class name to bunch of tags , you need to iterate them to access individual class name
i.addEventListener('click',function imageChanger(){
    
    popImage.style.background=`url(${i.src}) center/cover no-repeat`;
    popImage.style.display='block';
    mainContainer.style.filter='blur(5px)';
    popImage.style.filter='blur(0px)';
    document.body.style.overflow='hidden';

}
)});

closeButton.addEventListener('click',function closeImage(){
    popImage.style.display='none';
    mainContainer.style.filter='blur(0px)'
    document.body.style.overflow='auto'

})