// lib
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import isAuthenticated from "../../ultils/isAuthenticate";
// Component

// =================================================================

const useStyles = createUseStyles({
  ScreenSaver: {
    height: "100vh",
  },
  title: {
    fontSize: "5rem",
  },
  desc: {
    fontSize: "1.6rem",
    color: "#a2c3d9",
  },
  screenSaver__buttons: {
    display: "flex",
    marginTop: "3rem",
  },
  screenSaver__button: {
    textTransform: "capitalize",
    fontWeight: "bold",
  },
});

function ScreenSaver() {
  const classes = useStyles();

  const isAuthen = isAuthenticated();

  return (
    <div className={classes.ScreenSaver}>
      <div className="content">
        <h1 className={classes.title}>Todo App</h1>
        <p className={classes.desc}>
          Keep track of the daily tasks in life and get that satisfaction upon
          copletion.
        </p>
        <div className={classes.screenSaver__buttons + " btns--flex"}>
          <Link to={isAuthen ? "/collections" : "/signIn"}>
            <button
              className={`${classes.screenSaver__button} button btn--none-border btn--bg-pink btn--bb-pink btn--hover-trans`}
            >
              get start
            </button>
          </Link>
          <Link to="/">
            <button
              className={`${classes.screenSaver__button}  button btn--none-border btn--bg-gray btn--bb-gray btn--hover-trans`}
            >
              learn more
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default ScreenSaver;
