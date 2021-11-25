export default function Footer(){
    const d = new Date()
    return(
        <footer>
            &copy; {d.getFullYear()} Robert Bagwell
        </footer>
    )
}