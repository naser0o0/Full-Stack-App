import {Route, createBrowserRouter, createRoutesFromElements} from "react-router-dom";
import HomePage from '../Components/HomPage/HomePage';
import LoginForm from '../Components/Forms/LoginForm';
import RegisterForm from '../Components/Forms/RegisterForm';
import ErrorPage from "../Components/AssetComponent/ErrorPage";
import Layout from "../layout/Layout";

export const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
        <Route index element={<HomePage/>} />
        <Route path='/login' element={<LoginForm/>} />
        <Route path='/registration' element={<RegisterForm/>} />
        <Route path='*' element={<ErrorPage/>} />
    </Route>

));
