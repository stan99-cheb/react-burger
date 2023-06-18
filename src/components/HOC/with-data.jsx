

const withData = (WrapperComponent) => (data) => {
  return function HOC(id) {
    const ingredient = data && data.find(ingredient => ingredient._id === id);

    return (
      <WrapperComponent ingredient={ingredient} />
    );
  };
}

export default withData;