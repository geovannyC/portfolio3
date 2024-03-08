import { createSlice } from "@reduxjs/toolkit";


import data from "./data.json";
import { InitialDataProps } from "@/schemmas/appSchemmas";


const initialState = {
    principalSkills: data.principalSkills,
    projects: data.projects,
    skills: data.skills,
    social: data.social
} as InitialDataProps;

export const app = createSlice({
    name: "app",
    initialState,
    reducers: {
    },
});
export default app.reducer;