import './Navbar.css';
export default function Navbar({username}) {
    return (
        <>
            <div className="nav">
                <span className="logo">AI Dashboard</span>
                <span className="user-name">{username}</span>
            </div>

        </>
    )

}