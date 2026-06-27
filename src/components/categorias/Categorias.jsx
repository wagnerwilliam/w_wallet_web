import Search from "../base/Search";
import Button from "../base/Button";
import Table from "../table/Table";
import { CategoriasTableHead } from "../utils/categorias/tablesHead.js";
import { useState } from "react";
import CreateModal from "./CreateCategoriaModal";
import { UseCategorias } from "../../queries/categorias.js";
import DeleteCategoriaModal from "./DeleteCategoriaModal.jsx";
import UpdateCategoriaModal from "./UpdateCategoriaModal.jsx";
import { MODALS } from "../utils/modals.js";

const Categorias = () => {
  let [modal, setModal] = useState(null);
  let [selectedtCategoria, setSelectedCategoria] = useState(null);
  let [search, setSearch] = useState("");

  const { data: categorias = [], isLoading, error } = UseCategorias();

  const openModal = (type, categoria = null) => {
    setModal(type);
    setSelectedCategoria(categoria);
  };

  const closeModal = () => {
    setModal(null);
    setSelectedCategoria(null);
  };

  const filteredCategorias = categorias.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.type.toLowerCase().includes(search.toLocaleLowerCase()),
  );

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
          <Search
            value={search}
            onChange={() => setSearch(event.target.value)}
            placeholder="Buscar categoría..."
          />

          <Button width="ml-4" onClick={() => openModal(MODALS.CREATE)}>
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
            data={filteredCategorias}
            th={CategoriasTableHead}
            openModal={openModal}
          />
        )}
        {modal === MODALS.CREATE && (
          <CreateModal onClose={() => closeModal()} />
        )}
        {modal === MODALS.DELETE && (
          <DeleteCategoriaModal
            closeModal={() => closeModal()}
            categoria={selectedtCategoria}
          />
        )}
        {modal === MODALS.UPDATE && (
          <UpdateCategoriaModal
            closeModal={() => closeModal()}
            categoria={selectedtCategoria}
          />
        )}
      </div>
    </>
  );
};

export default Categorias;
