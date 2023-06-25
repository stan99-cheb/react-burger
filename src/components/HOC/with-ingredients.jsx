const withIngredients = (WrapperComponent) => (ingredients) => {
  return function HOC(id) {
    const ingredient = ingredients && ingredients.find(ingredient => ingredient._id === id);

    if (!ingredient) return null;

    return (
      <WrapperComponent ingredient={ingredient} />
    );
  };
}

export default withIngredients;