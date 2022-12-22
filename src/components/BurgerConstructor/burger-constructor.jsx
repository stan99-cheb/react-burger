import React, { useCallback } from 'react';
import { useDrop } from 'react-dnd';
import { useDispatch, useSelector } from "react-redux";
import classes from './burger-constructor.module.css';
import { ConstructorElement, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from "../Modal/modal";
import OrderDetails from "../OrderDetails/order-details";
import * as api from '../../utils/api';
import { BASE_URL } from "../../utils/constants";
import { IngredientConstructor } from '../IngredientConstructor/ingredient-constructor';
import { add, update } from '../../services/slices/selected-ingredients';
import { getOrderNumber } from '../../services/slices/order-number';

const BurgerConstructor = () => {
    const dispatch = useDispatch();
    const selectedIngredients = useSelector(state => state.selectedIngredients);
    const orderNumber = useSelector(state => state.orderNumber.value);
    const status = useSelector(state => state.orderNumber.status);
    const [isModal, setModal] = React.useState(false);

    const [, dropRef] = useDrop({
        accept: 'ingredient',
        drop: (ingredient) => {
            dispatch(add(ingredient));
        },
    });

    const closeModal = () => {
        setModal(false);
    };

    const makeOrder = () => {
        const array = [...selectedIngredients.otherIngredients.map(item => item._id), selectedIngredients.bun._id];
        dispatch(getOrderNumber({ url: BASE_URL, array }));
        setModal(true);
    };

    const costBurger = React.useMemo(() => {
        return (
            (selectedIngredients.bun ? selectedIngredients.bun.price * 2 : 0) +
            selectedIngredients.otherIngredients.reduce((acc, ingredient) => acc + ingredient.price, 0)
        );
    }, [selectedIngredients]);

    const moveIngredient = useCallback(
        (dragIndex, hoverIndex) => {
            const array = [...selectedIngredients.otherIngredients];
            [array[dragIndex], array[hoverIndex]] =
                [array[hoverIndex], array[dragIndex]];
            dispatch(update(array));
        }, [selectedIngredients, dispatch]);

    const renderIngredients = useCallback((ingredient, index) => {
        return (
            <IngredientConstructor
                ingredient={ingredient}
                key={index}
                index={index}
                moveIngredient={moveIngredient}
            />
        )
    }, [moveIngredient]);

    return (
        <div className={classes.burger} ref={dropRef}>
            {selectedIngredients.bun &&
                <div className={classes.burger__components}>
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text={selectedIngredients.bun.name + ' (верх)'}
                        price={selectedIngredients.bun.price}
                        thumbnail={selectedIngredients.bun.image}
                        extraClass={classes.burger__item_top}
                    />
                    <ul className={classes.burger__container}>
                        {selectedIngredients.otherIngredients
                            .map((ingredient, index) =>
                                renderIngredients(ingredient, index)
                            )}
                    </ul>
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text={selectedIngredients.bun.name + ' (низ)'}
                        price={selectedIngredients.bun.price}
                        thumbnail={selectedIngredients.bun.image}
                        extraClass={classes.burger__item_bottom}
                    />
                </div>
            }
            <div className={classes.burger__result}>
                <div className={classes.burger__sum}>
                    <p className="text text_type_digits-medium">{costBurger ? costBurger : 0}</p>
                    <CurrencyIcon type="primary" />
                </div>
                <Button type="primary" size="large" onClick={makeOrder} htmlType="button">
                    Оформить заказ
                </Button>
            </div>
            {isModal && status === 'idle' && (
                <Modal closeModal={closeModal}>
                    <OrderDetails orderNumber={orderNumber.at(-1)} />
                </Modal>
            )}
        </div>
    );
};

export default BurgerConstructor;
