import Search from "../base/Search";
import Button from "../base/Button";
import Table from "../table/Table";
import { CategoriasTableHead } from "../utils/categorias/tablesHead";
import { useState } from "react";
import CreateModal from "./CreateCategoriaModal";
import { UseCategorias } from "../../queries/categorias";
import DeleteCategoriaModal from "./DeleteCategoriaModal.jsx";

const Categorias = () => {
  let [createModal, setCreateModal] = useState(false);
  let [deleteModal, setDeleteModal] = useState(false);
  let [categoriaToDelete, setCategoriaToDelete] = useState(null);

  const { data: categorias = [], isLoading, error } = UseCategorias();

  const openDeleteModal = (categoria) => {
    setCategoriaToDelete(categoria);
    setDeleteModal(true);
  };

  return (
    <>
      <div>
        {/* HEADER */}
        <div>
          <h1 className="text-xl font-semibold text-slate-900 tracking-tight">
            Categorías
          </h1>

          <p className="text-sm text-slate-500 mt-1">
            Gestiona ingresos y gastos de forma ordenada
          </p>
        </div>

        {/* ACTION BAR */}
        <div className="flex justify-between items-center mt-6">
          <Search placeholder="Buscar categoría..." />

          <Button width="ml-4" onClick={() => setCreateModal(true)}>
            + Crear categoria
          </Button>
        </div>

        {/* TABLE */}
        {isLoading ? (
          <div className="mt-6 flex items-center justify-center py-12 border border-slate-200 rounded-2xl bg-white">
            <p className="text-sm text-slate-500">Cargando categorías...</p>
          </div>
        ) : categorias.length === 0 ? (
          <div className="mt-6 flex flex-col items-center justify-center py-12 border border-slate-200 rounded-2xl bg-white">
            <p className="text-sm font-medium text-slate-700">
              No hay categorías registradas
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Crea tu primera categoría para comenzar a organizar tus finanzas
            </p>
          </div>
        ) : (
          <Table
            data={categorias}
            th={CategoriasTableHead}
            openDeleteModal={openDeleteModal}
          />
        )}
        {createModal && <CreateModal setCreateModal={setCreateModal} />}
        {deleteModal && (
          <DeleteCategoriaModal
            setDeleteModal={setDeleteModal}
            categoria={categoriaToDelete}
          />
        )}
      </div>
    </>
  );
};

export default Categorias;
