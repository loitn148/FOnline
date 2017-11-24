
var comment = document.getElementById('comment');
var relative_film = document.getElementById('relative-film');
var tag_comment = document.getElementById('tag-comment');
var tag_relative_film = document.getElementById('tag-relative-film');
comment.addEventListener('click', function () {
    tag_relative_film.setAttribute('style', 'display:none');
    tag_comment.setAttribute('style', 'display:block');
    comment.setAttribute('class', 'title active');
    relative_film.setAttribute('class', 'title');
});
relative_film.addEventListener('click', function () {
    tag_relative_film.setAttribute('style', 'display:flex');
    tag_comment.setAttribute('style', 'display:none');
    relative_film.setAttribute('class', 'title active');
    comment.setAttribute('class', 'title');
});


