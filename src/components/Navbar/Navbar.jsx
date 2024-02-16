import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

import { AuthContext } from '../../context/auth-context';

import './Navbar.scss';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({ width: undefined, height: undefined });

  const { user } = useContext(AuthContext);

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => setMenuOpen((prev) => !prev);

  return (
    <div className='navbar-container'>
      <nav
        className={`navbar ${menuOpen ? 'isMenu' : ''}`}
        onClick={(e) => (menuOpen ? setMenuOpen(false) : null)}
      >
        <ul>
          <li>
            <Link to='/employees'>الموظفين</Link>
          </li>
          <li>
            <Link to='/leave-request'>طلب اجازة</Link>
          </li>
          <li>
            <Link to='/print-leaves'>طباعة اجازة</Link>
          </li>
          {user.role === '1' && (
            <>
              <li>
                <Link to='/acception'>الموافقة على الاجازة</Link>
              </li>
              <li>
                <Link to='/users'>المستخدمين</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
      <div className='navbar_content-toggle'>
        {!menuOpen ? (
          <BiMenuAltLeft size='1.6em' onClick={menuToggleHandler} />
        ) : (
          <AiOutlineClose size='1.6em' onClick={menuToggleHandler} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
