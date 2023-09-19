const bur = document.getElementById('burger');
const menu = document.getElementById('menu');

bur.onclick = function()
{
    if(menu.classList.contains('hidden'))
    {
        menu.classList.remove('hidden');
    }
    else
    {
        menu.classList.add('hidden');
    }
}