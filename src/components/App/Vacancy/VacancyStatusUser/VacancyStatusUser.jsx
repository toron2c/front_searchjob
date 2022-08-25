import {VacancyStatusBox, VacancyStatusButtonClosed, VacancyStatusButtonOpen} from "../VacancyStatus/VacancyStatus";
import {useDispatch, useSelector} from "react-redux";
import {deleteResponseOnVacancy, postResponseOnVacancy} from "../../../../redux/actions";



export default function VacancyStatusUser() {
    const dispatch = useDispatch();
    const userId = useSelector(state=> state.profile.id);
    const vacancyId = useSelector(state=>state.vacancy.vacancyId);
    const isSubscribed = useSelector(state=> {
       return state.profile.activeVacancies.find(el=> el === vacancyId)
    });
    const subscribe = (e) => {
        e.preventDefault();
        dispatch(postResponseOnVacancy(userId, vacancyId));
    }
    const unSubscribe = (e) => {
        e.preventDefault();
        dispatch(deleteResponseOnVacancy(userId, vacancyId));
    }

    return (<VacancyStatusBox>
        {isSubscribed && <VacancyStatusButtonClosed onClick={unSubscribe}>Отменить отклик</VacancyStatusButtonClosed>}
        {!isSubscribed && <VacancyStatusButtonOpen onClick={subscribe}>Откликнуться на вакансию</VacancyStatusButtonOpen>}
    </VacancyStatusBox>)
}