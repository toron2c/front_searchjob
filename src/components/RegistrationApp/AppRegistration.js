import {Route, Routes} from "react-router-dom";
import React from 'react';
import StartPage, {BlockSignIn, ButtonSignIn, TitleHeader} from "./StartPage/StartPage";
import Header from "../Header/Header";

const Error = React.lazy(()=> import('../ErrorPage/Error'))
const Registration = React.lazy(()=> import('./Registration/Registration'));
const SignIn = React.lazy(()=> import('./SignIn/SignIn'))

export default function AppRegistration() {
  return (
      <div>
          <TitleHeader>
              <Header />
              <BlockSignIn>
                  <ButtonSignIn to="/login">Войти</ButtonSignIn>
              </BlockSignIn>
          </TitleHeader>
        <Routes>
            <Route path='/' element={<StartPage />} />
            <Route path={'/company-signup'} element={<React.Suspense><Registration /></React.Suspense>} />
            <Route path={'/signup'} element={<React.Suspense><Registration /></React.Suspense>} />
            <Route path={'/login'} element={<React.Suspense><SignIn /></React.Suspense>} />
            <Route path={"*"} element={<React.Suspense><Error /></React.Suspense>} />
        </Routes>
      </div>)
}

