import React from 'react'

// Child Component 1
function Header() {
    return (
        <header>
            <nav>
                <img src='https://th.bing.com/th/id/R.f81a6f373c244b1f70f4b7402b5ab372?rik=rbXh4ieLuKt%2bmA&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f09%2fReact_logo_logotype_emblem.png&ehk=QhGOkKcUKCU7FBQgHOajOiJqJBACUTD2Ni6LsfqzCEA%3d&risl=&pid=ImgRaw&r=0' width='40px' />
            </nav>
        </header>
    )
}

// Child Component 2
function MainContent() {
    return (
        <div>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>Apple</li>
                <li>Mango</li>
                <li>Fruit</li>
            </ol>
        </div>
    )
}

// Child Component 3
function Footer() {
    return (
        <footer>
            <small>© 2022 rayhan development. All rights reserved.</small>
        </footer>
    )
}

function index() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

export default index