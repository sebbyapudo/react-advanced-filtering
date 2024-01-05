import Category from './Category/Category.js'
import Price from './Price/Price.js'
import Colors from './Colors/Colors.js'
import './Sidebar.css'

function Sidebar({handlChange}) {
  return <>
    <section className='sidebar'>
      <div className='logo-container'>
        <h1>🛒</h1>
      </div>

    <Category handlChange={handlChange}/>
    <Price handlChange={handlChange}/>
    <Colors handlChange={handlChange}/>
    </section>
  </>
}

export default Sidebar;
