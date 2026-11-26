import logo from '@img/logo.svg'
import user from '@avatars/user-3.svg'
 
export function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <a className="logo" href="main.html" aria-label="Шесть городов - на главную">
          <img className="logo__mark" src={logo} width="32" height="32" alt="" />
          <span className="logo__text">six<span>cities</span></span>
        </a>
        <nav className="user-nav" aria-label="Пользователь">
          <a className="user-nav__link" href="favorites.html">
            <img className="user-nav__avatar" src={user} width="32" height="32" alt="" />
            <span className="user-nav__email">oliver.conner@gmail.com</span>
            <span className="user-nav__count" aria-label="В избранном: 3">3</span>
          </a>
          <a className="user-nav__link user-nav__link--signout" href="main.html">
            <span className="user-nav__label">Sign out</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M8 4H4v12h4M12 6l4 4-4 4M16 10H8" stroke-linecap="round" stroke-linejoin="round" /></svg>
          </a>
        </nav>
      </div>
    </header>
  );
}