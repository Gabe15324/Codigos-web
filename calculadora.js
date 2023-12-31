html,
/* Estilos padrão para todos os elementos */
* {
    padding: 0;
    margin: 0;
    font-family: 'Josefin Sans', sans-serif;
    box-sizing: border-box;
    transition: .4s;
    max-width: 100%;
    max-height: 100%;
}

body {
    top: 0;
    height: 100%;
    font-family: 'Roboto Mono', monospace;
}

body {
    background-image: url('/assets/image/download.gif');
    background-size: cover;
    background-attachment: fixed;
}

* {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
}

:root {
    --dark: #191919;
    --blue: #382038;
    --white: white;
    --black: black;
    --yellow: #F7DF1E;
}

body {
    background-color: var(--blue);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 0 0 0;
}

body::-webkit-scrollbar {
    width: 5px;
}

body::-webkit-scrollbar-track {
    background-color: var(--blue);
}

body::-webkit-scrollbar-thumb {
    background-color: var(--white);
    border-radius: 20px;
}

.profile-picture {
    width: 100px;
    height: 100px;
}

.profile-picture img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 2px solid var(--white);
}

.name {
    color: var(--white);
    font-size: 20px;
    font-weight: bold;
    margin: 16px 0 20px 0;
}

.links-container {
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 680px;
    row-gap: 20px;
    padding: 10px 0;
}

.links-container a {
    width: 100%;
    background-color: var(--white);
    border: 2px solid var(--black);
    display: flex;
    justify-content: center;
    font-size: 16px;
    text-decoration: none;
    padding: 18px;
    font-weight: 600;
    color: var(--dark);
    box-shadow: 8px 8px 0 var(--black);
}

.links-container a:hover {
    background-color: #F7DF1E;
    box-shadow: 6px 6px 0 var(--black);
    transform: translate(2px 2px);
}

footer {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 25px 0;
}

footer img {
    height: 150px;

}

@media screen and (max-width) {
    .links-container a {
        font-size: 14px;
    }
}

.navbar {
    display: flex;
    top: 0;
    background-color: #ffffff;
    position: flex;
    width: 100%;
}

.navbar a {
    width: 100%;
    background-color: var(--white);
    border: 2px solid var(--black);
    display: flex;
    justify-content: center;
    font-size: 16px;
    text-decoration: none;
    padding: 18px;
    font-weight: 600;
    color: var(--dark);
    box-shadow: 8px 8px 0 var(--black);
}

.navbar a:hover {
    background-color: #F7DF1E;
    box-shadow: 6px 6px 0 var(--black);
    transform: translate(2px 2px);
}

.navbar a.active {
    background-color: #ffffff;
    color: rgb(0, 0, 0);
}

.navbar .icon {
    display: none;
}

@media screen and (max-width: 600px) {
    .navbar a:not(:first-child) {
        font-size: 14px;
    }

    .navbar a.icon {
        float: right;
        display: block;
    }
}

@media screen and (max-width: 600px) {
    .navbar.responsive {
        position: relative;
    }

    .navbar.responsive a.icon {
        position: absolute;
        right: 0;
        top: 0;
    }

    .navbar.responsive a {
        float: none;
        display: block;
        text-align: left;
    }

    .navbar .responsive a:hover {
        background-color: #ffffff;
        color: black;
    }
}

.right-side {
    float: right;
    top: 0;
}
