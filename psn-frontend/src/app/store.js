import { configureStore } from "@reduxjs/toolkit";
import followingPostReducer from "../feature/followingPost/followingPostSlice";
import followingAccountReducer from "../feature/followingAccounts/followingAccountSlice";
import checkProfileReducer from "../feature/checkProfile/checkProfileSlice";

export const store = configureStore({
    reducer: {
        followingPostReducer: followingPostReducer,
        followingAccountReducer: followingAccountReducer,
        checkProfileReducer: checkProfileReducer,
    },
});