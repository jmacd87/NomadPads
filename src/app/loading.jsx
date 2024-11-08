'use-client'
import ClipLoader from 'react-spinners/ClipLoader'

const LoadingPage = () => {
    return ( 
    <div className={"flex items-center justify-center h-screen mt-[-65px]"}>
        <ClipLoader color="#3b82f6" size={50} aria-label="Loading Spinner" /> 
    </div>
    );
}
 
export default LoadingPage;