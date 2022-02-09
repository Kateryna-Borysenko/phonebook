import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => (
  <nav className={s.container}>

   
      <NavLink exact to="/" className={s.link} activeClassName={s.activeLink}>
      Главная
      </NavLink>
      <NavLink exact to="/contacts" className={s.link} activeClassName={s.activeLink}>
      Контакты
      </NavLink>
 

      {/* <NavLink to="/login " className={s.link} activeClassName={s.activeLink}>
        Sing In
      </NavLink>   */}
      {/* <NavLink to="/register " className={s.link} activeClassName={s.activeLink}>
        Sing Up
      </NavLink> */}
      {/* <NavLink to="/logout " className={s.link} activeClassName={s.activeLink}>
        Sing Up
      </NavLink> */}
    

  </nav>
);

export default Navigation;