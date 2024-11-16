import ItemList from './itemList';

const RestaurantCategory = ({resCategoryData, showItems, setShowIndex}) => {
  
  const handleClick = () => setShowIndex();
  
  return (
    <div>
        <div className='w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4'>
           <div onClick={handleClick} className='flex justify-between cursor-pointer'>
                <span className='font-bold text-lg'>
                    {resCategoryData.title} ({resCategoryData.itemCards.length})
                </span>
                <span>⬇️</span>
           </div>
          {showItems && <ItemList items={resCategoryData.itemCards}/>}
        </div>
    </div>
  )
}

export default RestaurantCategory