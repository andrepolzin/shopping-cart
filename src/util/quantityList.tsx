const showQuantity = () => {
  const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const newOptions = options.map((option) => {
    return (
      <option key={option} value={option}>
        {option}
      </option>
    );
  });

  return newOptions;
};

export default showQuantity;
