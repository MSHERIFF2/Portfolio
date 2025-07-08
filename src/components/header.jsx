import './style/style.css';
function Header(){
   const handleClick = () => {
        alert('call: 07075721393\n OR\n Email: muritalasheriff ')}
        
    return(
        < div className="header">
       
            <ul className='nav-menu'>
                <a href="#skills-section">Tech. Tools</a>
                <a href="#Projects-section">Projects</a>                
                <a href="#" onClick={handleClick}>Let Talk</a>
            </ul>
            
      
        </div>
    )
}

export default Header;