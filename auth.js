function autenticar() {
    const username = prompt("enter ur username (teste)");
    const password = prompt("enter ur password (1234)");

    const usercorreto = "teste";
    const passcorreta = "1234";

    if (username === usercorreto && password === passcorreta) {
        document.getElementById("conteudoWeb").style.display = "block";
        alert("welcome to my portfolio!");
        navegacao();
        mostrarSection('homehome');
    } else {
        alert("oops! you got it wrong! username is teste and password is 1234 ;)");
    }
}
function mostrarSection(sectionId) {
    const sections = document.querySelectorAll('.contentsection');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.style.display = 'block';
    }
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active-nav-link');
    });
    const activeNavLink = document.querySelector(`.nav-link[data-target="${sectionId}"]`);
    if (activeNavLink) {
        activeNavLink.classList.add('active-nav-link');
    }
}

function navegacao() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetSectionId = this.dataset.target;
            mostrarSection(targetSectionId);
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const toggleBotao = document.querySelectorAll('.togglebotaoCodigo');

    toggleBotao.forEach(button => {
        button.addEventListener('click', () => {
            const codeContent = button.nextElementSibling;
            if (codeContent) {
                codeContent.classList.toggle('conteudoescondido');
                if (codeContent.classList.contains('conteudoescondido')) {
                    if (button.conteudoTexto.includes('Code')) {
                        button.conteudoTexto = 'show code';
                    } else if (button.conteudoTexto.includes('Image')) {
                        button.conteudoTexto = 'show image';
                    }
                } else {
                    if (button.conteudoTexto.includes('Code')) {
                        button.conteudoTexto = 'hide code';
                    } else if (button.conteudoTexto.includes('Image')) {
                        button.conteudoTexto = 'hide image';
                    }
                }
            }
        });
    });
});

autenticar();