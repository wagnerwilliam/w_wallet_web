import Search from "../base/Search.jsx";
import Button from "../base/Button.jsx";
import Table from "../table/Table.jsx";
import { GastosTableHead } from "../../utils/gastos/tableHead.js";
import { useState } from "react";
import { MODALS } from "../../utils/modals.js";
import GastosRow from "../table/GastosRow.jsx";
import NoRecords from "../base/NoRecords.jsx";
import Loading from "../base/Loading.jsx";
import DataState from "../base/DataState.jsx";

import { UseGastos } from "../../queries/gastos.js";

import CreateGastoModal from "./CreateGastoModal.jsx";
import UpdateGastoModal from "./UpdateGastoModal.jsx";
import DeleteGastoModal from "./DeleteGastoModal.jsx";

import { useContext } from "react";
import Context from "../../context/Context.jsx";

const Gastos = () => {
  let [modal, setModal] = useState(null);
  let [selectedtGasto, setSelectedGasto] = useState(null);
  let [search, setSearch] = useState("");
  let { token } = useContext(Context);

  const { data: gastos = [], isLoading, error } = UseGastos(token);

  const openModal = (type, gasto = null) => {
    setModal(type);
    setSelectedGasto(gasto);
  };

  const closeModal = () => {
    setModal(null);
    setSelectedGasto(null);
  };

  // TODO:Solucion momentanea se debe buscar mejor forma de filtrar.
  const filteredGastos = (Array.isArray(gastos) ? gastos : []).filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      String(c.value).toLowerCase().includes(search.toLocaleLowerCase()),
  );

  return (
    <>
      {/* HEADER */}
      <div>
        <h1 className="text-xl font-semibold text-slate-900 tracking-tight">
          Gastos
        </h1>

        <p className="text-sm text-slate-500 mt-1">
          Registra y administra todos tus gastos.
        </p>
      </div>

      {/* ACTION BAR */}
      <div className="flex justify-between items-center mt-6">
        <Search
          value={search}
          onChange={() => setSearch(event.target.value)}
          placeholder="Buscar gasto..."
        />

        <Button width="ml-4" onClick={() => openModal(MODALS.CREATE)}>
          + Crear gasto
        </Button>
      </div>

      {/* TABLE */}
      <DataState
        isLoading={isLoading}
        isError={error}
        data={gastos}
        loadingComponent={<Loading description="Cargando gastos..." />}
        errorComponent={
          <NoRecords title="Error" description="No se pudieron cargar datos" />
        }
        emptyComponent={
          <NoRecords
            title="No hay gastos registrados"
            description="Registra tu primer gasto para empezar a controlar tu dinero"
          />
        }
      >
        <Table
          data={filteredGastos ?? []}
          th={GastosTableHead}
          openModal={openModal}
          Row={GastosRow}
        />
      </DataState>

      {/* MODAL */}
      {modal === MODALS.CREATE && (
        <CreateGastoModal onClose={() => closeModal()} />
      )}
      {modal === MODALS.DELETE && (
        <DeleteGastoModal
          closeModal={() => closeModal()}
          gasto={selectedtGasto}
        />
      )}
      {}
      {modal === MODALS.UPDATE && (
        <UpdateGastoModal
          closeModal={() => closeModal()}
          gasto={selectedtGasto}
        />
      )}
    </>
  );
};

export default Gastos;
