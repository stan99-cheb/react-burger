import classes from './loader.module.css';

const Loader = () => {
  return (
    <div className={classes.container}>
      <div className={classes.loader}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Loader;