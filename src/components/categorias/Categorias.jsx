import Search from "../base/Search";
import Button from "../base/Button";
import Table from "../table/Table";
import { CategoriasTableHead } from "../../utils/categorias/tablesHead.js";
import { useState } from "react";
import CreateModal from "./CreateCategoriaModal";
import { UseCategorias } from "../../queries/categorias.js";
import DeleteCategoriaModal from "./DeleteCategoriaModal.jsx";
import UpdateCategoriaModal from "./UpdateCategoriaModal.jsx";
import { MODALS } from "../../utils/modals.js";
import CategoriasRow from "../table/CategoriasRow";
import NoRecords from "../base/NoRecords.jsx";
import Loading from "../base/Loading.jsx";
import DataState from "../base/DataState.jsx";
import { useContext } from "react";
import Context from "../../context/Context.jsx";

const Categorias = () => {
  let [modal, setModal] = useState(null);
  let [selectedCategoria, setSelectedCategoria] = useState(null);
  let [search, setSearch] = useState("");

  let { token } = useContext(Context);

  const { data: categorias = [], isLoading, error } = UseCategorias(token);

  const openModal = (type, categoria = null) => {
    setModal(type);
    setSelectedCategoria(categoria);
  };

  const closeModal = () => {
    setModal(null);
    setSelectedCategoria(null);
  };

  // TODO:Solucion momentanea se debe buscar mejor forma de filtrar.
  const filteredCategorias = (
    Array.isArray(categorias) ? categorias : []
  ).filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      String(c.value).toLowerCase().includes(search.toLocaleLowerCase()),
  );

  return (
    <>
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
      <DataState
        isLoading={isLoading}
        isError={error}
        data={categorias}
        loadingComponent={<Loading description="Cargando categorías..." />}
        errorComponent={
          <NoRecords title="Error" description="No se pudieron cargar datos" />
        }
        emptyComponent={
          <NoRecords
            title="No hay categorías registradas"
            description="Crea tu primera categoría"
          />
        }
      >
        <Table
          data={filteredCategorias ?? []}
          th={CategoriasTableHead}
          openModal={openModal}
          Row={CategoriasRow}
        />
      </DataState>

      {/* MODAL */}
      {modal === MODALS.CREATE && <CreateModal onClose={() => closeModal()} />}
      {modal === MODALS.DELETE && (
        <DeleteCategoriaModal
          closeModal={() => closeModal()}
          categoria={selectedCategoria}
        />
      )}
      {modal === MODALS.UPDATE && (
        <UpdateCategoriaModal
          closeModal={() => closeModal()}
          categoria={selectedCategoria}
        />
      )}
    </>
  );
};

export default Categorias;
