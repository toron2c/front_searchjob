import {useSelector} from "react-redux";
import ErrorComponent from "./MessagesComponent/ErrorComponent";
import SuccessComponent from "./MessagesComponent/SuccesComponent";


export default function InfoRegistration() {
    const infoMessage = useSelector(state=> state.auth.status);
    return (<div>
        {infoMessage.success && <SuccessComponent />}
        {infoMessage.error && <ErrorComponent />}
    </div>)
}