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
import CreateTender from './Pages/Organization/CreateTender/CreateTender';
import ReasonForCancellation from './components/cancellation/ReasonForCancellation';
import OrganizationFeedback from './Pages/Organization/OrganizationFeedback/OrganizationFeedback';
import OrganizationHome from './Pages/Organization/OrganizationHome/OrganizationHome';
import OrganizationNotification from './Pages/Organization/OrganizationNotification/OrganizationNotification';

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
					// Organization
					<Route
						path='/organization/home'
						element={<OrganizationHome />}
					/>
					<Route
						path='/organization/manage-tender'
						element={<TenderTable />}
					/>
					<Route
						path='/organization/manage-tender/table'
						// Should have an id
						element={<ManageTenderTable />}
					/>
					<Route
						path='/organization/create-tender'
						element={<CreateTender />}
					/>
					<Route
						path='/organization/cancel-tender'
						element={<ReasonForCancellation />}
					/>
					<Route
						path='/organization/feedback'
						element={<OrganizationFeedback />}
					/>
					<Route
						path='/organization/notification'
						element={<OrganizationNotification />}
					/>


				</Routes>
			</div>
		</div>
	);
};

export default App;
