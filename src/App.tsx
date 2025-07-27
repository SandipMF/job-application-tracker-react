import React, { useState } from "react";
import "./App.css";
import { JobApplicationSummary } from "./components/ui_components/job_summary/JobApplicationSummary";
import { JobApplicationForm } from "./components/ui_components/JobCreate/JobApplicationForm";
import { JobApplicationListTable } from "./components/ui_components/JobList/jobApplicationListTable";
import { EditJobApplication } from "./components/ui_components/JobEdit/EditJobApplication";
import type { JobApplication } from "./types";
import { appState } from "./state";
import { storeDataInLocalStorage } from "./storage";

const App: React.FC = () => {
  // State variable for handle edit form UI
  const [editApplicationData, setEditApplicationData] =
    useState<JobApplication | null>(null);

  return (
    <>
      {/* Using navigation for title */}
      <nav>
        <div>
          <h1>Job Application Tracker System</h1>
        </div>
      </nav>
      {/* For Application Count */}
      <JobApplicationSummary />
      {/* For Creat from with listing table */}
      <div className="form-with-table">
        {/* leftSection(Creat from) */}
        <JobApplicationForm />
        {/* rightSection(Application list table) */}
        <JobApplicationListTable
          applicationListData={appState.jobApplications}
          onEdit={(application) => {
            setEditApplicationData(application);
          }}
          onDelete={(application: JobApplication) => {
            // Get confirmation before perform delete operation
            if (confirm(`Delete application for ${application.company}?`)) {
              const index = appState.jobApplications.findIndex(
                (app) => app.id === application.id
              );
              const updatedList = [...appState.jobApplications];
              updatedList.splice(index, 1);
              appState.jobApplications = updatedList;
              storeDataInLocalStorage(appState.jobApplications);
            }
          }}
        />
      </div>
      {/* For open edit form */}
      {editApplicationData && (
        <EditJobApplication
          application={editApplicationData}
          index={appState.jobApplications.findIndex(
            (app) => app.id === editApplicationData.id
          )}
          onClose={() => {
            setEditApplicationData(null);
          }}
        />
      )}
    </>
  );
};

export default App;
