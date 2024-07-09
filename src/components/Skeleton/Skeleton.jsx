import './Skeleton.css'

const Skeleton = () => {
  return (
    <div className='skeleton-container'>
        <div className='skeleton-image'></div>
        <div className='skeleton-detail'>
            <h4 className='skeleton-title'></h4>
            <div className='skeleton-category'></div>
            <div className="skeleton-flex">
                <div className="skeleton-price"></div>
                <div className="skeleton-button"></div>
            </div>
        </div>
    </div>
  )
}

export default Skeleton