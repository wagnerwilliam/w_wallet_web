import { UseCategoriasByType } from "../../queries/categorias";
import { useContext } from "react";
import Context from "../../context/Context";

const CategoriaOptions = ({ type }) => {
  const { token } = useContext(Context);
  const { data: categorias } = UseCategoriasByType(type, token);

  return (
    <>
      {categorias
        .filter((categoria) => categoria.type === type && categoria.is_active)
        .map((categoria) => (
          <option key={categoria._id} value={categoria._id}>
            {categoria.name}
          </option>
        ))}
    </>
  );
};

export default CategoriaOptions;
