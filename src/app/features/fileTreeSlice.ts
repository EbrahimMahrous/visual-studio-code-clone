import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IFile } from "../../interfaces";

interface IClikedFile {
  activeTapId: string | null;
  filename: string;
  fileContent: string | undefined;
}

interface IInitialState {
  openedFiles: IFile[];
  clickedFile: IClikedFile;
  tapIdToRemove: string | null;
}

const initialState: IInitialState = {
  openedFiles: [],
  clickedFile: {
    activeTapId: null,
    filename: "",
    fileContent: "",
  },
  tapIdToRemove: null,
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
    setTapIdToRemoveAction: (state, action: PayloadAction<string | null>) => {
      state.tapIdToRemove = action.payload;
    },
  },
});

export const {
  setOpenedFilesAction,
  setClickedFileAction,
  setTapIdToRemoveAction,
} = fileTreeSlice.actions;
export default fileTreeSlice.reducer;
