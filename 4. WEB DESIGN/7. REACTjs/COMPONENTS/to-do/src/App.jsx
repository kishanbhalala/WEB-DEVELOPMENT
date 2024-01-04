import { useState } from 'react'
import './App.css'
import { Table } from './TODO/Table';
import { Modal } from './TODO/Modal';


function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const [rows, setRows] = useState([
    {
      name: "kishan",
      email: "kishanbhalala555@gmail.com",
      country: "india",
      number: 8140413316,
    },
    {
      name: "jeegar",
      email: "jeegarbhalala555@gmail.com",
      country: "berlin",
      number: 9737090757,
    },
  ]);

  const [rowToEdit, setRowToEdit] = useState(null);

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));
  };

  const handleEditRow = (idx) => {
    setRowToEdit(idx);
    setModalOpen(true);
  };

  const handleSubmit = (newRow) => {
    rowToEdit === null
      ? setRows([...rows, newRow])
      : setRows(
        rows.map((currRow, idx) => {
          if (idx !== rowToEdit) return currRow;
          return newRow;
        })
      );
  };

  return (
    <>
      <div className="App">

        <div className='flex items-center justify-between my-5'>
          <div className='text-lg font-semibold pl-2'>Contacts</div>
          <div className='pr-2'>
            <button className='bg-blue-600 px-3 py-2 text-white rounded-md mx-2' onClick={() => setModalOpen(true)}><span><i class="fa-solid fa-user-plus"></i></span>Add Contact</button>
            <button className='bg-blue-600 px-3 py-2 text-white rounded-md mx-2'><i class="fa-solid fa-list-check"></i></button>
            <button className='border border-blue-600 px-3 py-2 text-blue-600 rounded-md mx-2'><i class="fa-brands fa-windows"></i></button>
            <input type="search" className='border outline-none pl-3 py-2 rounded-md ml-2' placeholder='Search Contact' />
          </div>
        </div>

        <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
        {modalOpen && (
          <Modal
            closeModal={() => {
              setModalOpen(false);
              setRowToEdit(null);
            }}
            onSubmit={handleSubmit}
            defaultValue={rowToEdit !== null && rows[rowToEdit]}
          />
        )}
      </div>
    </>
  )
}

export default App
