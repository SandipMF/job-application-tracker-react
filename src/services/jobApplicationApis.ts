import axios from "axios";
import type { JobApplication } from "../types";
import { appState } from "../state";
import { storeDataInLocalStorage } from "../storage";

const API_BASE_URL = "http://localhost:8081";
// note: context
export const getAllJobApplications = () =>
  axios
    .get(`${API_BASE_URL}/applications`)
    .then((response) => {
      const responseData: JobApplication[] | null = response.data;
      console.log(`getAllJobApplications response => ${responseData}`);
      if (responseData && responseData.length > 0) {
        appState.jobApplications = responseData;
        storeDataInLocalStorage(appState.jobApplications);
      }
      console.log(appState.jobApplications);
    })
    .catch((error: Error) => {
      console.log(error);
    });

export const createNewJobApplication = (applicationData: JobApplication) =>
  axios.post(`${API_BASE_URL}/applications`, applicationData);

export const deleteJobApplication = (id: string) =>
  axios.delete(`${API_BASE_URL}/applications/${id}`);

export const editJobApplication = (id: string, data: JobApplication) =>
  axios.patch(`${API_BASE_URL}/applications/${id}`, data);
