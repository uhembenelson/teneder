import React from 'react';
import './App.css';
import Welcome from './Pages/Welcome/Welcome';
import { Route, Routes } from 'react-router-dom';
import SignUp from './Pages/Bidder/SignUp/SignUp';
import Login from './Pages/Bidder/Login/Login';
import ForgotPassword from './Pages/Bidder/ForgotPassword/ForgotPassword';
import ResetPassword from './Pages/Bidder/ResetPassword/ResetPassword';
import TwoFactor from './Pages/Bidder/TwoFactor/TwoFactor';
import BidderHome from './Pages/Bidder/BidderHome/BidderHome';
import BidderHistory from './Pages/Bidder/BidderHistory/BidderHistory';
import HelpCenter from './Pages/Bidder/HelpCenter/HelpCenter';
import BidderProfile from './Pages/Bidder/BidderProfile/BidderProfile';
// import LoginMode from './components/LoginMode/LoginMode';
import TenderTable from './components/tables/tenderTable/TenderTable';
import ManageTenderTable from './components/tables/manageTenderTable/ManageTenderTable';

const App = () => {
	return (
		<div className='container'>
			<div className='app'>
				<Routes>
					<Route
						path='/'
						element={<Welcome />}
					/>
					<Route
						path='/bidder/signup'
						element={<SignUp />}
					/>
					<Route
						path='/bidder/signin'
						element={<Login />}
					/>
					<Route
						path='/bidder/twofactor'
						element={<TwoFactor />}
					/>
					<Route
						path='/bidder/forgot-password'
						element={<ForgotPassword />}
					/>
					<Route
						path='/bidder/reset-password'
						element={<ResetPassword />}
					/>
					<Route
						path='/bidder/home'
						element={<BidderHome />}
					/>
					<Route
						path='/bidder/history'
						element={<BidderHistory />}
					/>
					<Route
						path='/bidder/Help-center'
						element={<HelpCenter />}
					/>
					<Route
						path='/bidder/profile'
						element={<BidderProfile />}
					/>
					<Route
						path='/table'
						element={<TenderTable />}
					/>
					<Route
						path='/manage-tender'
						element={<ManageTenderTable />}
					/>
				</Routes>
			</div>
		</div>
	);
};

export default App;
