import Search from "../base/Search.jsx";
import Button from "../base/Button.jsx";
import Table from "../table/Table.jsx";
import { IngresosTableHead } from "../../utils/ingresos/tableHead.js";
import { useState } from "react";
import { MODALS } from "../../utils/modals.js";
import IngresosRow from "../table/IngresosRow.jsx";
import NoRecords from "../base/NoRecords.jsx";
import Loading from "../base/Loading.jsx";
import DataState from "../base/DataState.jsx";
import CreateIngresoModal from "./CreateIngresoModal.jsx";
import DeleteIngresoModal from "./DeleteIngresoModal.jsx";
import UpdateIngresoModal from "./UpdateIngresoModal.jsx";
import { UseIngresos } from "../../queries/ingresos.js";
import { UseCategoriasByType } from "../../queries/categorias.js";

const Ingresos = () => {
  let [modal, setModal] = useState(null);
  let [selectedtIngreso, setSelectedIngreso] = useState(null);
  let [search, setSearch] = useState("");

  // Queries
  const { data: ingresos = [], isLoading, error } = UseIngresos();
  const { data: categorias } = UseCategoriasByType("ingreso");

  console.log("categorias en ingresos" + categorias)
  //validar uso de useMemo
  const categoriasMap = Object.fromEntries(
    categorias?.map((c) => [c._id, c.name]),
  );

  const openModal = (type, categoria = null) => {
    setModal(type);
    setSelectedIngreso(categoria);
  };

  const closeModal = () => {
    setModal(null);
    setSelectedIngreso(null);
  };

  const filteredIngresos = [];
  return (
    <>
      {/* HEADER */}
      <div>
        <h1 className="text-xl font-semibold text-slate-900 tracking-tight">
          Ingresos
        </h1>

        <p className="text-sm text-slate-500 mt-1">
          Registra y administra todos tus ingresos.
        </p>
      </div>

      {/* ACTION BAR */}
      <div className="flex justify-between items-center mt-6">
        <Search
          value={search}
          onChange={() => setSearch(event.target.value)}
          placeholder="Buscar ingreso..."
        />

        <Button width="ml-4" onClick={() => openModal(MODALS.CREATE)}>
          + Crear ingreso
        </Button>
      </div>

      {/* TABLE */}
      <DataState
        isLoading={isLoading}
        isError={error}
        data={ingresos}
        loadingComponent={<Loading description="Cargando ingresos..." />}
        errorComponent={
          <NoRecords title="Error" description="No se pudieron cargar datos" />
        }
        emptyComponent={
          <NoRecords
            title="No hay ingresos registrados"
            description="Registra tu primer ingreso para empezar a controlar tu dinero"
          />
        }
      >
        <Table
          data={ingresos}
          th={IngresosTableHead}
          openModal={openModal}
          Row={IngresosRow}
          extra={{ categoriasMap }}
        />
      </DataState>

      {/* MODAL */}
      {modal === MODALS.CREATE && (
        <CreateIngresoModal
          onClose={() => closeModal()}
          categorias={categorias}
        />
      )}
      {modal === MODALS.DELETE && (
        <DeleteIngresoModal
          closeModal={() => closeModal()}
          ingreso={selectedtIngreso}
        />
      )}
      {modal === MODALS.UPDATE && (
        <UpdateIngresoModal closeModal={() => closeModal()} ingreso={data[0]} />
      )}
    </>
  );
};

export default Ingresos;
