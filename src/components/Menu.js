import '../styles/Styles.css'

function Menu() {
    return (
        <div className='menu'>
            <li className='sticki'> 
                <ul><a href="#top" className='home'>McDave Umoh</a></ul>
                <ul><a href="#top">About</a></ul>
                <ul><a href="#top">Contact</a></ul>
                <ul><a href="#top">Service</a></ul>
            </li>
        </div>
    );
}

export default Menu;