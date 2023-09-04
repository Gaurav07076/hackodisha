import '../../index.css'
import './nav.css'

import Logo from '../../assets/pitcher.png'
import Cart from '../../assets/cart.png'
import User from '../../assets/user.png'
import Carousel from '../../assets/carousel.png'
import {Link} from 'react-router-dom';

const Nav = () => {
    return (
        <div className="flexC sticky z_20">
            <div className="nav_container flex">
                <Link to="/">
                    <div className="logo_container flex ">
                        <h1 className="logotxt">H</h1>  {/*handy pots.co */}
                        <img className="logo" src={Logo} alt="dd" />
                        <h1 className="logotxt">.</h1>
                    </div>
                </Link>
                
                
                <div className="navopt_container flex">
                    
                        <Link to="/catalog">
                            <div className="navopt flex">
                                <img className="navopt_img" src={Carousel} alt="dd" />
                            </div>
                        </Link>
                        <div className="navopt flex">
                            <Link to="/cart">
                                <img className="navopt_img" src={Cart} alt="dd" />
                            </Link>
                        </div>
                        <div className="navopt flex">
                            <Link to="/signup">
                                <img className="navopt_img" src={User} alt="dd" />
                            </Link>
                        </div>
                   
                   
                </div>
            </div>
            <div className="dividerthin"> </div>
            
            
        </div>
        
    )
}

export default Nav