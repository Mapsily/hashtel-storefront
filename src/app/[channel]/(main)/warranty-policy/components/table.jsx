const urlRegex = /https?:\/\/[^\s/$.?#].[^\s]*/g;

export default function Table({ data }) {
  return (
    <>
      <table className="lg:w-[70%] w-full  table-auto border-spacing-2 border rounded-2xl  border-collapse">
        <thead className="bg-slate-200">
          <tr>
            {data.tableHead
              ? data.tableHead.map((item, index) => (
                  <th key={index} className="text-start px-4 py-2 w-min-[50%]">
                    {item}
                  </th>
                ))
              : ""}
          </tr>
        </thead>
        <tbody>
          {data.tableBody
            ? data.tableBody.map((item, index) => {
                const urlMatch = item.col2.match(urlRegex);
               return ( <tr key={index}>
                  <td className="text-start px-4 py-2 w-min-[50%]">{item.col1}</td>
                  <td className="text-start px-4 py-2 w-min-[50%]">
                    {urlMatch ? <a href={item.col2} rel="noopener" target="_black">{item.col2}</a> : item.col2}
                  </td>
                </tr>);
              })
            : ""}
        </tbody>
      </table>
    </>
  );
}
