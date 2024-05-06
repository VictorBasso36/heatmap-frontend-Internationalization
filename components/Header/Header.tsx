import User from '../User';
import Logo from '../logo';
import classes from './Header.module.css';

export default async function Header() {
  return (
    <div className={classes.header}>
      <div className={classes.headerContainer}>
        <Logo />
        <User />
      </div>
    </div>
  );
}
