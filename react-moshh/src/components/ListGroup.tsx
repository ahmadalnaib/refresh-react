import { useState } from "react";

function ListGroup() {
  let items = ['Profile', 'Settings', 'Messages', 'Download'];

const [selectIndex, setselectIndex] = useState(-1);


  items.map((item) => <li>{item}</li>);
  return (
    <>
    <li>List</li>
    {items.length === 0 && <p>No items to show</p>}
      <ul className='w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white'>
        {items.map((item,index) => (
          <li key={item} className={selectIndex === index ? 'bg-red-500 text-white' : 'bg-white text-black'} onClick={() => setselectIndex(index)}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
