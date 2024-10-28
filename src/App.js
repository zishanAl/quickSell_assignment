import React, { useCallback, useEffect, useState } from 'react';
import Header from './components/TopBar';
import Grid from './components/Board';
import { GET_TICKETS_URL } from './apiRequest';
import { loadGrid, mapUsersByUserId } from './utils';
import Loader from './components/Spinner';
import './App.css';

function TicketApp() {
  const [taskList, setTaskList] = useState([]);
  const [userProfiles, setUserProfiles] = useState({});
  const [organizedData, setOrganizedData] = useState({});
  const [currentGrouping, setCurrentGrouping] = useState("status");
  const [currentOrdering, setCurrentOrdering] = useState("priority");
  const [isLoading, setIsLoading] = useState(true);

  const storeSettings = useCallback((settings) => {
    Object.keys(settings).forEach((key) => localStorage.setItem(key, settings[key]));
  }, []);

  const retrieveSettings = useCallback(() => {
    setCurrentGrouping(localStorage.getItem("grouping") || "status");
    setCurrentOrdering(localStorage.getItem("ordering") || "priority");
  }, []);

  useEffect(() => {
    retrieveSettings();
    fetch(GET_TICKETS_URL)
      .then((response) => response.json())
      .then((data) => {
        const { tickets, users } = data;
        setTaskList(tickets);
        setUserProfiles(mapUsersByUserId(users));
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [retrieveSettings]);

  useEffect(() => {
    if (!taskList.length) return;
    setOrganizedData(loadGrid(taskList, currentGrouping, currentOrdering));
    setIsLoading(false);
  }, [currentGrouping, currentOrdering, taskList]);

  const updateGrouping = useCallback((newGrouping) => {
    setIsLoading(true);
    setCurrentGrouping(newGrouping);
    storeSettings({ grouping: newGrouping });
  }, [storeSettings]);

  const updateOrdering = useCallback((newOrdering) => {
    setIsLoading(true);
    setCurrentOrdering(newOrdering);
    storeSettings({ ordering: newOrdering });
  }, [storeSettings]);

  return (
    <div className="App">
      <Header
        grouping={currentGrouping}
        setGrouping={updateGrouping}
        ordering={currentOrdering}
        setOrdering={updateOrdering}
      />
      {isLoading ? (
        <Loader />
      ) : (
        <Grid gridData={organizedData} grouping={currentGrouping} userIdToData={userProfiles} />
      )}
    </div>
  );
}

export default TicketApp;
