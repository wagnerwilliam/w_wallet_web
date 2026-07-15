import { UseCategoriasByType } from "../../queries/categorias";

/**
 * Renderiza las opciones de un selector de categorías,
 * mostrando únicamente las categorías activas del tipo solicitado.
 */

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
