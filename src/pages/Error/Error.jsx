import { useRouteError } from 'react-router-dom';
import { TabTitle } from '../../utilities/TabTitle';

const Error = () => {
    TabTitle('DisneyLand Toys||404-Error')
    const error=useRouteError();
    console.error(error);
    return (
        <div id='error-page' >
            <img className='mx-auto mt-8' src="https://i.ibb.co/0BG0Cjk/404.png" alt="" />
            <h2 className='text-3xl font-bold text-center'>
                <i>{error.statusText || error.message}</i>
            </h2>
            
        </div>
    );
};

export default Error;