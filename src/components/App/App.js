import { Navigate, Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Map } from "./Map/Map";
import { Vacancies } from "./Vacancies/Vacancies";

import { useEffect, useState } from "react";
import { loadUserVacancies, loadVacancy } from "../../redux/actions";
import * as React from 'react';

const ActiveVacancies = React.lazy( () => import( './ActiveVacancies/ActiveVacancies' ) )
const Vacancy = React.lazy( () => import( './Vacancy/Vacancy' ) )
const Error = React.lazy( () => import( './../ErrorPage/Error' ) )
const CreateVacancy = React.lazy( () => import( './CreateVacancy/CreateVacancy' ) );

const HeadBlock = styled.div`
  display:flex;
  justify-content: space-between;
`
const Name = styled.h1`
  font-size: 40px;
  color: #29ab08;
  margin: 22px 10vw 0 0;
`


export default function App() {
    const address = useSelector( state => state.profile.role === 'user' );
    const dispatch = useDispatch();
    const profile = useSelector( state => state.profile )
    const windowSize = window.screen.width;
    const [url] = useState( address ? 'my-vacancies' : 'active-vacancies' )
    useEffect( () => {
        dispatch( loadVacancy() );
        if ( address ) {
            dispatch( loadUserVacancies( profile.id ) );
        }
    }, [address, dispatch, profile.id] );

    return ( <div>
        <HeadBlock>
            <Header />
            <div>
                <Name>{profile.login}</Name>
            </div>
        </HeadBlock>
        <Routes>
            <Route path={'/'} element={<Map />}>
                <Route path={'/vacancies'} element={<Vacancies />}>
                    {( windowSize >= 800 ) && <Route path={':id'} element={<React.Suspense>
                        <Vacancy />
                    </React.Suspense>} />}
                </Route>
                {( windowSize < 800 ) && <Route path={'vacancies/:id'} element={
                    <React.Suspense>
                        <Vacancy />
                    </React.Suspense>
                } />}
                <Route path={address ? 'my-vacancies/*' : 'active-vacancies/*'} element={<React.Suspense>
                    <ActiveVacancies />
                </React.Suspense>}>
                    {( windowSize >= 800 ) && <Route path={':id'} element={<React.Suspense>
                        <Vacancy />
                    </React.Suspense>} />}
                </Route>
                {( windowSize < 800 ) && <Route path={`${url}/:id`} element={
                    <React.Suspense>
                        <Vacancy />
                    </React.Suspense>
                } />}

                {!address && <Route path={'create-vacancy'} element={<React.Suspense><CreateVacancy /></React.Suspense>} />}
                {address && <Route path={'create-vacancy'} element={<Navigate to={'/vacancies'} replace />} />}
                <Route
                    path="/login"
                    element={<Navigate to="/vacancies" replace />} />
                <Route path="*" element={<React.Suspense><Error /></React.Suspense>} />
            </Route>
        </Routes>
    </div> )
}