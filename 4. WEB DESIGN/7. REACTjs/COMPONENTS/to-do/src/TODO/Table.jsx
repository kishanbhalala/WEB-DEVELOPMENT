import React from "react";
import "./Table.css";

export const Table = ({ rows, deleteRow, editRow }) => {
    return (
        <>

            <div>
                <table className="table-fixed w-full">
                    <thead>
                        <tr className="bg-[#dddddd]">
                            <th className='pl-10'>Name</th>
                            <th>Email</th>
                            <th>Country</th>
                            <th className="pl-32">Phone</th>
                            <th className='text-right pr-20'>Actions</th>
                        </tr>

                    </thead>
                    <tbody>
                        {rows.map((row, idx) => {
                            return (
                                <tr key={idx}>
                                    <td className="pl-10"><span><img className='h-10 w-10 rounded-full bg-cover mr-3 inline-block' src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" /></span>{row.name}</td>
                                    <td>{row.email}</td>
                                    <td>{row.country}</td>
                                    <td className="pl-32">
                                        {row.number}
                                    </td>
                                    <td className='text-end'>
                                        <div className="pr-7 py-3">
                                            <button className='border border-blue-600 py-2 px-3 text-blue-600 rounded-md' onClick={() => editRow(idx)}>Edit</button>
                                            <button className='border border-red-600 py-2 px-3 text-red-600 rounded-md ml-5' onClick={() => deleteRow(idx)}>Delete</button>
                                        </div>
                                    </td>

                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
};