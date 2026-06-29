//validar usando use memo
export const categoriasMap = (categorias) => {
  return Object.fromEntries(categorias?.map((c) => [c._id, c.name]));
};
