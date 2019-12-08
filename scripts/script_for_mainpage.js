window.onload = function() {

    /* --- код, що відповідає за переключення між темами --- */

    var buttDarkTheme = document.getElementById('theme');
    var paragraphs = document.querySelectorAll('p');
    var header = document.getElementById('about_company');
    var body = document.getElementsByTagName('body');

    var isDark = false; //визначає яка тема активна в даний момент

    function changeTheme() {
        //якщо поточна тема світла
        if(!isDark) {
            isDark = true;
            container.style = 'background-color: #250000';
            header.style = 'color: white';
            for(var i=0; i<paragraphs.length; i++){
                paragraphs[i].style = 'color: white';
            }
            body[0].style = 'background-color: #582100';
        }
        //якщо поточна тема темна
        else {
            isDark = false;
            container.style = 'background-color: white';
            header.style = 'color: black';
            for(var i=0; i<paragraphs.length; i++){
                paragraphs[i].style = 'color: black';
            }
                body[0].style = 'background-color: white';
        }
        
    }
    buttDarkTheme.addEventListener('click', changeTheme);

    /* --- обробники подій --- */

    var logo = document.getElementById('title');

    function MouseOver(){
        header.style.color = "blue";
    }

    function MouseOut(){
        header.style.color = "black";
    }

    header.addEventListener("mouseover",MouseOver);
    header.addEventListener("mouseout", MouseOut);

    title.addEventListener("mouseup", function() {
        title.style = "cursor: crosshair";
    });
    title.addEventListener("mousedown", function() {
        title.style = "cursor: default";
    });

    /** --- код що керує відкриттям/закриттям меню 
            при ширині сторінки менше 600 --- */

    var menuicon = document.getElementById('menu_less600');
    var menulist = document.querySelector('.menulist_less600');

    var isOpen = false;

    function OpenMenu(){
        if(!isOpen) {
            isOpen = true;
            menulist.style = 'display: block;'; 
        }
        else {
            isOpen = false;
            menulist.style = 'display: none;'; 
        }
    }

    menuicon.addEventListener("click", OpenMenu);
}