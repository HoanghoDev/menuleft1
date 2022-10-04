let items = document.querySelectorAll('.item');
let action = document.getElementById('action');
let icondowns = document.querySelectorAll('.fa-chevron-down');


items.forEach(item => {
    item.addEventListener('click', function(e){
        if( this.classList.contains('active') || e.target.classList.contains('fa-chevron-down')){
            return;
        }
        items.forEach(remove_active => {
            remove_active.classList.remove('active');
        });
        console.log(e.target);
        this.classList.add('active');
        document.documentElement.style.setProperty('--height-begin', action.offsetHeight + 'px');
        document.documentElement.style.setProperty('--top-begin', action.offsetTop + 'px');
        document.documentElement.style.setProperty('--height-end', this.offsetHeight + 'px');
        document.documentElement.style.setProperty('--top-end', this.offsetTop + 'px');
        action.classList.remove('runanimation');
        void action.offsetWidth;
        action.classList.add('runanimation');
    },false)
})
icondowns.forEach(icon =>{
    icon.addEventListener('click', function(){
        this.classList.toggle('showMenuChild');
        items.forEach(item => {
            if(item.classList.contains('active')){
                document.documentElement.style.setProperty('--height-end', item.offsetHeight + 'px');
                document.documentElement.style.setProperty('--top-end', item.offsetTop + 'px');
                return;
            }
        });
    })
})
