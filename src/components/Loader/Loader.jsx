import { Circles } from 'react-loader-spinner';

function Loader() {
  return (
    <div className='loaderWrapper'>
      <Circles
        height="120"
        width="120"
        color="orangered"
        ariaLabel="circles-loading"
        visible={true}
      />
    </div>
  );
}

export default Loader;
