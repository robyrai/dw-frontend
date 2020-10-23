import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StatisticsComponent from "./components/StatisticsComponent";
import { Header } from "./components/common";
import AddHolidayComponent from './components/AddHolidayComponent';
import ListHolidaysComponent from './components/ListHolidaysComponents';
import UpdatePopulationComponent from './components/UpdatePopulationComponent';
import ListCitiesComponent from './components/ListCitiesComponents';
import ListManufacturerProduct from './components/report/ListManufacturerProduct';
import ListReports from './components/report/ListReports';
import ListCategoryReport from './components/report/ListCategoryReport';
import ManufacturerDetail from './components/report/ManufacturerDetail';
import MembershipTrend from './components/report/MembershipTrend';
import YearlyMembership from './components/report/YearlyMembership';
import CityStoreMembership from './components/report/CityStoreMembership';
import ListRevenueByPopulation from './components/report/ListRevenueByPopulation';
import ListHighestVolumeSearch from './components/report/ListHighestVolumeSearch';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route path="/" exact component={StatisticsComponent}></Route>
            <Route path="/statistics" component={StatisticsComponent}></Route>
            <Route path="/holidays" component={ListHolidaysComponent}></Route>
            <Route path="/add-holiday" component={AddHolidayComponent}></Route>
            <Route path="/population" component={ListCitiesComponent}></Route>
            <Route path="/update-population" component={UpdatePopulationComponent}></Route>
            <Route path="/reports" component={ListReports}></Route>
            <Route path="/manufacturer-product" component={ListManufacturerProduct}></Route>
            <Route path="/mfg-detail/:name" component={ManufacturerDetail}></Route>
            <Route path="/category-report" component={ListCategoryReport}></Route>
            <Route path="/highest-volume-category" component={ListHighestVolumeSearch}></Route>
            <Route path="/revenue-by-population" component={ListRevenueByPopulation}></Route>
            <Route path="/membership-trend" component={MembershipTrend}></Route>
            <Route path="/yearMembershipTrend?year=:year" component={YearlyMembership}></Route>
            <Route path="/cityStoreMembershipTrend?city=:city&state=:state&year=:year" component={CityStoreMembership}></Route>


          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
