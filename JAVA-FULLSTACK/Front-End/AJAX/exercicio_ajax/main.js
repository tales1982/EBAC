$(function(){
    $('.profile-link').on('click', function() {
        
        const username = 'tales1982';
        const endpoint = `https://api.github.com/users/${username}`;
        const nome = document.querySelector('.profile-username');
        const image = document.querySelector('.profile-avatar');
        const public_repo = document.querySelector('#repo_public');
        const seguidores = document.querySelector('#seguidores');
        const seguindo = document.querySelector('#seguindo');


        fetch(endpoint)
        .then(function(res){
            console.log(res)
            return res.json();
        })
        .then(function(json){
            const avatar = json.avatar_url;
            const login = json.login;
            const public_repos = json.public_repos;
            const numSeguidores = json.following;
            const numSeguindo = json.followers;
            seguindo.innerHTML = json.followers;
            seguidores.innerHTML = numSeguidores;
            public_repo.innerHTML = public_repos;
            nome.innerHTML = json.login;
            image.src = json.avatar_url;
        })


    });
})