// import React, { useState } from 'react';
// import AceEditor from 'react-ace';
// import Modal from 'react-responsive-modal';
// import 'ace-builds/src-noconflict/mode-sql';
// import 'ace-builds/src-noconflict/theme-monokai';
// import { Button, Table } from 'reactstrap';
// import { axios } from 'axiox';


// const SQLRunner = () => {
//     const [sqlQuery, setSqlQuery] = useState('');
//     const [queryResult, setQueryResult] = useState([]);
//     const [modalOpen, setModalOpen] = useState(false);
//     const handleSubmit = async () => {
//         try {
//           const response = await axios.post('/run_query', { query: sqlQuery });
//           setQueryResult(response.data);
//           setModalOpen(true);
//         } catch (error) {
//           console.error('Error executing SQL query:', error);
//         }
//      };
    
//      const closeModal = () => {
//         setModalOpen(false);
//      };
//      return (
//         <div>
//           <AceEditor
//             mode="sql"
//             theme="monokai"
//             name="sqlQueryEditor"
//             editorProps={{ $blockScrolling: true }}
//             onChange={(value) => setSqlQuery(value)}
//             fontSize={14}
//             showPrintMargin={true}
//             showGutter={true}
//             highlightActiveLine={true}
//             value={sqlQuery}
//             setOptions={{
//               enableBasicAutocompletion: true,
//               enableLiveAutocompletion: true,
//               enableSnippets: false,
//               showLineNumbers: true,
//               tabSize: 2,
//             }}
//           />
//           <Button onClick={handleSubmit}>Execute Query</Button>
//           <Modal open={modalOpen} onClose={closeModal}>
//         <h2>Query Result</h2>
//         <Table>
//           <thead>
//             <tr>
//               {queryResult.length > 0 &&
//                 Object.keys(queryResult[0]).map((key) => <th key={key}>{key}</th>)}
//             </tr>
//           </thead>
//           <tbody>
//             {queryResult.map((row) => (
//               <tr key={row.id}>
//                 {Object.values(row).map((value) => (
//                  <td key={value}>{value}</td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//         <button onClick={closeModal}>Close</button>
//       </Modal>
//     </div>
//  );
// };

// export default SQLRunner;