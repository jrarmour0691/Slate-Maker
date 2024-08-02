document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('signup-modal');
    var signUpLink = document.getElementById('sign-up-link');
    var closeButton = document.getElementsByClassName('close')[0];

    signUpLink.onclick = function (e) {
        e.preventDefault();
        modal.style.display = 'block';
    }

    closeButton.onclick = function () {
        modal.style.display = 'none';
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});
