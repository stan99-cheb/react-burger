import PropTypes from 'prop-types';
import classes from './order-details.module.css';
import iconDone from '../../images/icon-done.svg';

const OrderDetails = ({ orderNumber }) => {

    return (
        <>
            <p className={`${classes["order-id"]} text text_type_digits-large`}>{orderNumber}</p>
            <p className={`${classes.title} text text_type_main-medium`}>идентификатор заказа</p>
            <img className={classes["icon-done"]} src={iconDone} alt="Иконка Done"></img>
            <p className={`${classes["text-one"]} text text_type_main-default`}>Ваш заказ начали готовить</p>
            <p className={`${classes["text-two"]} text text_type_main-default`}>Дождитесь готовности на орбитальной станции</p>
        </>
    );
};

OrderDetails.propTypes = {
    orderNumber: PropTypes.number.isRequired
};

export default OrderDetails;