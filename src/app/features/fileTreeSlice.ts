import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IFile } from "../../interfaces";

interface IClikedFile {
  filename: string;
  fileContent: string | undefined;
}

interface IInitialState {
  openedFiles: IFile[];
  clickedFile: IClikedFile;
}

const initialState: IInitialState = {
  openedFiles: [],
  clickedFile: {
    filename: "",
    fileContent: "",
  },
};

const fileTreeSlice = createSlice({
  name: "fileTree",
  initialState,
  reducers: {
    setOpenedFilesAction: (state, action: PayloadAction<IFile[]>) => {
      state.openedFiles = action.payload;
    },
    setClickedFileAction: (state, action: PayloadAction<IClikedFile>) => {
      state.clickedFile = action.payload;
    },
  },
});

export const { setOpenedFilesAction, setClickedFileAction } =
  fileTreeSlice.actions;
export default fileTreeSlice.reducer;
