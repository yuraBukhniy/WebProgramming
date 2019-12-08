window.onload = function() {

    /* --- код, що відповідає за переключення між темами --- */
    
    var buttDarkTheme = document.getElementById('theme');
    var paragraphs = document.querySelectorAll('p');
    var header = document.getElementsByTagName('h2');
    var body = document.getElementsByTagName('body');
    var labels = document.querySelectorAll('label');

    var isDark = false; //визначає яка тема активна в даний момент
    function changeTheme() {
        //якщо поточна тема світла
        if(!isDark) {
            isDark = true;
            container.style = 'background-color: #250000';
            
            for(var i=0; i<paragraphs.length; i++){
                paragraphs[i].style = 'color: white';
            }
            for(var i=0; i<header.length; i++){
                header[i].style = 'color: white';
            }
            body[0].style = 'background-color: #582100';
            for(var i=0; i<labels.length; i++){
                labels[i].style = 'color: white';
            }
        }
        //якщо поточна тема темна
        else {
            isDark = false;
            container.style = 'background-color: white';
            
            for(var i=0; i<paragraphs.length; i++){
                paragraphs[i].style = 'color: black';
            }
            for(var i=0; i<header.length; i++){
                header[i].style = 'color: black';
            }
            body[0].style = 'background-color: white';
            for(var i=0; i<labels.length; i++){
                labels[i].style = 'color: black';
            }
        }
        
    }

    buttDarkTheme.addEventListener('click', changeTheme);

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