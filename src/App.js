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
import OrganizationHistory from './Pages/Organization/OrganizationHistory/OrganizationHistory';
import OrganizationProfile from './Pages/Organization/OrganizationProfile/OrganizationProfile';
import OrganizationLogin from './Pages/Organization/OrganizationAuth/OrganizationLogin';
import OrganizationForgotPassword from './Pages/Organization/OrganizationAuth/OrganizationForgorPassword';
import OrganizationTwoFactor from './Pages/Organization/OrganizationAuth/OrganizationTwoFactor';
import OrganizationSignUp from './Pages/Organization/OrganizationAuth/OrganizationSignUp';
import OrganizationHelpCenter from './Pages/Organization/OrganizationHelpCenter/OrganizationHelpCenter';
import EditProfile from './Pages/Organization/EditProfile/EditProfile';
import EvaluateTender from './Pages/Organization/EvaluateTender/EvaluateTender'
import BidDetails from './Pages/Bidder/BidDetails/BidDetails';
import ApprovalCheck from './Pages/Bidder/ApprovalCheck/ApprovalCheck';
import ApproveTender from './Pages/Bidder/ApproveTender/ApproveTender';
import BidTender from './Pages/Bidder/BidTender/BidTender';
import ViewTender from './Pages/Bidder/ViewTender/ViewTender';
import BidderNotification from './Pages/Bidder/BidderNotification/BidderNotification';
import BidderEditProfile from './Pages/Bidder/BidderEditProfile/BidderEditProfile';
import BidderFeedback from './Pages/Bidder/BidderFeedback/BidderFeedback';
import OrganizationResetPassword from './Pages/Organization/OrganizationAuth/OrganizationRestPassword';
import CancelReason from './Pages/Bidder/CancelReason/CancelReason';
import ChangePassword from './Pages/Bidder/ChangePassword/ChangePassword';

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
						path='/bidder/notification'
						element={<BidderNotification />}
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
						path='/bidder/change-password'
						element={<ChangePassword />}
					/>
					<Route
						path='/bidder/edit-profile'
						element={<BidderEditProfile />}
					/>
					<Route
						path='/bidder/bid-tender'
						element={<BidTender />}
					/>
					<Route
						path='/bidder/bid-details/:bidId'
						element={<BidDetails />}
					/>
					<Route
						path='/bidder/approve'
						element={<ApproveTender />}
					/>
					<Route
						path='/bidder/approval/:id'
						element={<ApprovalCheck />}
					/>
					<Route
						path='/bidder/view-tender'
						element={<ViewTender />}
					/>
					<Route
						path='/bidder/feedback'
						element={<BidderFeedback />}
					/>
					<Route
						path='/bidder/view-tender/:id'
						element={<CancelReason />}
					/>

					{/*// Organization*/}
					<Route
						path='/organization/signup'
						element={<OrganizationSignUp />}
					/>
					<Route
						path='/organization/home'
						element={<OrganizationHome />}
					/>
					<Route
						path='/organization/profile'
						element={<OrganizationProfile />}
					/><Route
						path='/organization/login'
						element={<OrganizationLogin />}
					/>
					<Route
						path='/organization/forgot-password'
						element={<OrganizationForgotPassword />}
					/>
					<Route
						path='/organization/reset-password'
						element={<OrganizationResetPassword />}
					/>
					<Route
						path='/organization/otp'
						element={<OrganizationTwoFactor />}
					/>

					<Route
						path='/organization/manage-tender'
						element={<TenderTable />}
					/>
					<Route
						path='/organization/manage-tender/:id'
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
					<Route
						path='/organization/help-center'
						element={<OrganizationHelpCenter />}
					/>
					<Route
						path='/organization/history'
						element={<OrganizationHistory />}
					/>
					<Route
						path='/organization/edit-profile'
						element={<EditProfile />}
					/>
					<Route
						path='/organization/evaluate-tender'
						element={<EvaluateTender />}
					/>

				</Routes>
			</div>
		</div>
	);
};

export default App;
