import '../style.css'
import javascriptLogo from '../assets/javascript.svg'
import viteLogo from '../assets/vite.svg'
import heroImg from '../assets/hero.png'
import { setupCounter } from '../counter.js'
import Signup from './Signup.js'
import Login from './Login.js'
import Home from './Home.js'

export const signupHTML = `
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    
</head>
<body>
    <div class="signup-container">
        <div class="form-header">
            <h2>Home</h2>
        </div>

        <div class="form-content">
        <p>Welcome to the Home page!</p>
        </div>
    </div>
    }
  </body>
`
export default Home

// export function renderSignup(container = document.querySelector('#app')) {
//   if (!container) return;
//   container.innerHTML = signupHTML;

//   const toLogin = container.querySelector('#to-login-link');
//   if (toLogin) {
//     toLogin.addEventListener('click', (e) => {
//       e.preventDefault();
//       // Simple client-side navigation: reload main.js default content
//       import('../main.jsx').then(mod => {
//         if (mod && typeof mod.default === 'function') mod.default();
//         // If main.js doesn't export default, you can call a named function instead
//       }).catch(() => {
//         window.location.reload();
//       });
//     });
//   }
// }

// export default Home

// //  return (
//     <>
//       <div className='min-h-screen bg-gray-50 p-2 sm:p-4 md:p-8'>
//         <div className='max-w-7xl mx-auto flex flex-col gap-6 bg-white border shadow-sm p-4 sm:p-6 rounded-lg'>
//           <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4'>
//             <h1 className='text-center'>ระบบรายงานการปฏิบัติงานประจำวัน</h1>
//             <Link 
//               to="/new-record"
//               className='border text-center bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded'>
//               สร้างบันทึก
//             </Link>
//           </div>
//           {/** ค้นหาข้อมูล */}
//           <div className="flex gap-2 items-center">
//             <label className="font-bold">ค้นหาข้อมูล</label>
//             <input
//               type="text"
//               placeholder="ค้นหาบัวศรีไอดี ชื่อบุคลากร รายละเอียดงาน หรือรายละเอียดความคืบหน้าหรือความสำเร็จ"
//               className="border p-2 rounded-lg w-full md:w-1/2"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)} />
//             <div>ผลลัพธ์ {filteredData.length} จากทั้งหมด {data.length} รายการ ({Math.floor(data_minutes / 420)} วัน {Math.floor((data_minutes % 420) / 60)} ชั่วโมง {data_minutes % 60} นาที)</div>
//           </div>
//           {/** ตารางแสดงข้อมูล */}
//           <div className='w-full overflow-x-auto'>
//             {
//               dataPreview.length ? (
//                 <table className='w-full border-collapse'>
//                   <thead>
//                     <tr>
//                       <th className='whitespace-nowrap'>ที่</th>
//                       <th className='whitespace-nowrap'>บุคลากร</th>
//                       <th className='whitespace-nowrap'>วันที่ปฏิบัติงาน</th>
//                       <th className='whitespace-nowrap'>รายละเอียดงาน</th>
//                       <th className='whitespace-nowrap'>รายละเอียดความคืบหน้า / ความสำเร็จ</th>
//                       <th>ระยะเวลา (ชั่วโมง)</th>
//                       <th className='whitespace-nowrap'>เอกสารประกอบ</th>
//                       <th className='whitespace-nowrap right-0 bg-gray-200'>จัดการ</th>
//                     </tr>
//                   </thead>
//                   <tbody className='divide-y divide-gray-200'>
//                   {
//                     dataPreview.map((x, idx) => {
//                       return(
//                         <tr key={idx} className='hover:bg-gray-50 transition-colors'>
//                           <td className='text-center'>{(offset * (page - 1)) + (idx + 1)}</td>
//                           <td className='whitespace-nowrap font-medium'>{x.name}</td>
//                           <td className='whitespace-nowrap'>{new Date(x.workDate).toLocaleDateString('th-TH', {day: 'numeric', month: 'long', year: 'numeric'})}</td>
//                           <td className='truncate max-w-62.5'>
//                             {x.description}     
//                           </td>
//                           <td className='truncate max-w-62.5'>
//                             {x.progression}    
//                           </td>
//                           <td className='text-center'>
//                             {`${x.hours}:${String(x.minutes).padStart(2,0)}`}
//                           </td>
//                           <td className='whitespace-nowrap'>
//                             {
//                               x.fileNames.map((x, idx) => (
//                                 <Link
//                                   to={`${import.meta.env.VITE_API}/upload/${x}`}
//                                   target='_blank'
//                                   className='block'
//                                   key={idx}>
//                                   {x}
//                                 </Link>
//                               )
//                             )}
//                           </td>
//                           <td className='right-0 bg-white md:bg-transparent'>
//                           { 
//                             x.username === localStorage.getItem('username') &&
//                             <div className='flex flex-col'>
//                               <Link 
//                                 to={`/edit/${x._id}`}
//                                 className='border p-1 bg-blue-500 hover:bg-blue-400 text-white text-center'>แก้ไข</Link>
//                               <button 
//                                 onClick={() => handleDelete(x._id)}
//                                 className='border p-1 bg-red-500 hover:bg-red-400 text-white text-center'>
//                                 ลบ
//                               </button>
//                             </div>
//                           }
//                           </td>
//                         </tr>
//                       )
//                     })
//                   }
//                   </tbody>
//                 </table>) : 
//                 'ไม่พบข้อมูล'
//               }
//           </div>
//           {/** หน้า */}
//           <div className='flex gap-4 items-center'>
//             <button onClick={() => page > 1 && setPage(page-1)} className='flex-1 cursor-pointer'>ก่อนหน้า</button>
//             <div>หน้า </div>
//             <input 
//               value={page} 
//               name='page' 
//               type='number' 
//               min={1} 
//               max={pages} 
//               onChange={(e) => {
//                 const val = parseInt(e.target.value, 10);
//                 if (!isNaN(val) && (val < pages+1) && (val > 0)) {
//                   setPage(val);
//                 }}} />
//             <div> จาก {pages} </div>
//             <button onClick={() => page < pages && setPage(page+1)} className='flex-1 cursor-pointer'>ถัดไป</button>
//           </div>
//           {/** ข้อมูลส่วนบุคคล */}
//           <div className='border p-4 rounded'>
//             <h1 className='text-center'>ข้อมูลส่วนบุคคล</h1>
//             <div>ชื่อผู้ใช้งาน: {localStorage.getItem('username')}</div>
//             <div>ชื่อบุคลากร: {localStorage.getItem('name')}</div>
//             <div>จำนวนบันทึก: {mytask.length} รายการ</div>
//             <div>รวมเวลาทำงาน: {Math.floor(mytask_minutes / 420)} วัน {Math.floor((mytask_minutes % 420) / 60)} ชั่วโมง {mytask_minutes % 60} นาที</div>
//           </div>
//           {/** เมนู */}
//           <div className='flex justify-end mt-4 gap-4'>
//             {
//               localStorage.getItem('username') === 'songyot' &&
//               <>
//                 <button className='bg-green-500' onClick={(e) => exportToExcel(e, data)}>
//                   ดาวน์โหลดเป็น Excel
//                 </button>
//               </>
//             }
//             <button 
//               onClick={handleSignOut}
//               className='bg-red-500 hover:bg-red-400'>
//               ออกจากระบบ
//             </button>
//           </div>
//         </div>
//       </div> 
//     </>
//   )
// }

// export default Home