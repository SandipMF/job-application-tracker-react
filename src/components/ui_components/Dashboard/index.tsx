import type React from "react";
import { useEffect, useState } from "react";
import type { JobApplication } from "../../../types";
import {
  deleteJobApplication,
  getAllJobApplications,
} from "../../../services/jobApplicationApis";
import { JobApplicationSummary } from "../jobSummary/JobApplicationSummary";
import { JobApplicationForm } from "../JobCreate/JobApplicationForm";
import { JobApplicationListTable } from "../JobList/jobApplicationListTable";
import { appState } from "../../../state";
import { EditJobApplication } from "../JobEdit/EditJobApplication";
//note:  Page=>page
const Dashboard: React.FC = () => {
  // State variable for handle edit form UI
  const [editApplicationData, setEditApplicationData] =
    useState<JobApplication | null>(null);

  useEffect(() => {
    getAllJobApplications();
  }, []);
  return (
    <>
      {/* Using navigation for title */}
      <nav>
        <div>
          <h1>Job Application Tracker System</h1>

          <button
            onClick={() => {
              console.log("Click on login button");
            }}
          >
            LogOut
          </button>
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
          onDelete={async (application: JobApplication) => {
            // Get confirmation before perform delete operation
            if (confirm(`Delete application for ${application.company}?`)) {
              await deleteJobApplication(application._id!)
                .then(async (response) => {
                  if (response.data) {
                    await getAllJobApplications();
                  }
                })
                .catch((error: Error) => {
                  console.log(error);
                });
            }
          }}
        />
      </div>
      {/* For open edit form */}
      {editApplicationData && (
        <EditJobApplication
          application={editApplicationData}
          index={appState.jobApplications.findIndex(
            (app) => app._id === editApplicationData._id
          )}
          onClose={() => {
            setEditApplicationData(null);
          }}
        />
      )}
    </>
  );
};

export default Dashboard;
