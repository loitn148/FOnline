
    var cabinets = document.getElementById('cabinets');
    var character = document.getElementById('character');
    var cabinets_flim = document.getElementById('cabinets-flim');
    var list_character = document.getElementById('list-character');
    cabinets.addEventListener('click', function () {
        list_character.setAttribute('style', 'display:none');
        cabinets_flim.setAttribute('style', 'display:flex');
        cabinets.setAttribute('class', 'tab-item active');
        character.setAttribute('class', 'tab-item');
    });
    character.addEventListener('click', function () {
        list_character.setAttribute('style', 'display:flex');
        cabinets_flim.setAttribute('style', 'display:none');
        character.setAttribute('class', 'tab-item active');
        cabinets.setAttribute('class', 'tab-item');
    });


