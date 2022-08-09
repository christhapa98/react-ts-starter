export default function Footer() {
    return (
        <footer className="page-footer bg-dark font-small blue">
            <div className="footer-copyright text-white text-center py-3">© {(new Date().getFullYear())} Copyright:
                 Riddhasoft.com
            </div>
        </footer>
    )
}
