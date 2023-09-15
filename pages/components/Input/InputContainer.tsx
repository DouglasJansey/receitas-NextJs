import { useState } from "react";

export default function InputsIngredientes() {
  const [formData, setFormData] = useState({
    name,
    ingredients: "",
    quantity: "",
  });
  const handleInput = (ev: any) => {
    const { name, value } = ev;
    console.log(name, value)
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div>
      <label>Ingredientes: </label>
      <input
        value={formData.ingredients}
        type="text"
        name="ingredients"
        onChange={(e) => handleInput(e.target)}
      />
      <label>Quantidade: </label>
      <input
        value={formData.quantity}
        type="text"
        name="quantity"
        onChange={(e) => handleInput(e.target)}
      />
    </div>
  );
}
