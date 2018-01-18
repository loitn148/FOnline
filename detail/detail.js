
var comment = document.getElementById('comment');
var relative_film = document.getElementById('relative-film');
var character = document.getElementById('character');
var tag_comment = document.getElementById('tag-comment');
var tag_relative_film = document.getElementById('tag-relative-film');
var tag_character = document.getElementById('tag-character');

comment.addEventListener('click', function () {
    tag_relative_film.setAttribute('style', 'display:none');
    tag_comment.setAttribute('style', 'display:block');
    tag_character.setAttribute('style', 'display:none');
    comment.setAttribute('class', 'title active');
    relative_film.setAttribute('class', 'title');
    character.setAttribute('class', 'title');
});
relative_film.addEventListener('click', function () {
    tag_relative_film.setAttribute('style', 'display:flex');
    tag_comment.setAttribute('style', 'display:none');
    tag_character.setAttribute('style', 'display:none');
    relative_film.setAttribute('class', 'title active');
    comment.setAttribute('class', 'title');
    character.setAttribute('class', 'title');
});
character.addEventListener('click', function () {
    tag_relative_film.setAttribute('style', 'display:none');
    tag_comment.setAttribute('style', 'display:none');
    tag_character.setAttribute('style', 'display:flex');
    relative_film.setAttribute('class', 'title');
    comment.setAttribute('class', 'title');
    character.setAttribute('class', 'title active');
});

$(document).ready(function(){
    var _btn = $(".select-option");
    var _listSelect = $(".list-select");
    _btn.click(function(){
        if(_listSelect.hasClass("hide-select")) {
            _listSelect.removeClass("hide-select");
            _listSelect.addClass("show-select");
        } else if(_listSelect.hasClass("show-select")) {
            _listSelect.removeClass("show-select");
            _listSelect.addClass("hide-select");
        }
    });
});


