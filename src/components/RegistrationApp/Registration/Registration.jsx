
import {useSelector} from "react-redux";
import {useEffect} from "react";
import FormRegistration from "./FormRegistration/FormRegistration";
import InfoRegistration from "./InfoRegistration/InfoRegistration";




export default function Registration() {
    const showInfo = useSelector(state=> {
        return state.auth.status.sending
    })

    useEffect(()=> {},[showInfo])

    return (<div>
        {!showInfo ? <FormRegistration /> : <InfoRegistration />}
    </div>)
}