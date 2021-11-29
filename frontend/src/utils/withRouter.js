import {useLocation, useNavigate, useParams} from 'react-router-dom';

function withRouter (Child){
 
    return (props) => {
        
        const location = useLocation();
        const navigate = useNavigate();
        const params = useParams()

        return <Child {...props} params={params} location={ location} navigate={navigate} />;
    }
}   

export default withRouter  