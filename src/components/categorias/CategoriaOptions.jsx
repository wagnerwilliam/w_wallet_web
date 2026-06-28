import { UseCategoriasByType } from "../../queries/categorias";

const CategoriaOptions = ({ type }) => {
  const { data: categorias } = UseCategoriasByType(type);

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
