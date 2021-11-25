export default function Nav(){
    return (
        <nav id="top_nav" class="navbar">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Demos and fun things</a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="/eight_ball">Magic 8 Ball</a>
                        <a class="dropdown-item" href="/rock_paper_scissors">Rock Paper Scissors</a>
                        <a class="dropdown-item" href="/gallery">Gallery</a>
                        <a class="dropdown-item" href="/collage_creator">Collage Creator</a>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
    )
}