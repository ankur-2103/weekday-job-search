import { JobModel } from "./job.model";

export interface DataState {
  data: JobModel[]; // Define your data model here
  loading: boolean;
  error: string | null;
}
