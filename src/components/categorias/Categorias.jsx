import Row from "../table/Row";
import Search from "../base/Search";
import Button from "../base/Button";
import Table from "../table/Table";
import { CategoriasTableHead } from "../utils/tablesHead";
import { useState, useEffect } from "react";
import CreateCategoryModal from "../base/CreateCategorymodal";

const Categorias = () => {
  const categorias = [
    { nombre: "Comida", tipo: "Gasto", color: "#EF4444" },
    { nombre: "Salario", tipo: "Ingreso", color: "#10B981" },
    { nombre: "Salario", tipo: "Ingreso", color: "#10B981" },
    { nombre: "Salario", tipo: "Ingreso", color: "#10B981" },
    { nombre: "Salario", tipo: "Ingreso", color: "#10B981" },
  ];

  let [modal, setModal] = useState(false);

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

          <Button width="ml-4" onClick={() => setModal(true)}>
            + Crear categoria
          </Button>
        </div>

        {/* TABLE */}

        <Table data={categorias} th={CategoriasTableHead} />
        <CreateCategoryModal open={modal} setModal={setModal} />
      </div>
    </>
  );
};

export default Categorias;
