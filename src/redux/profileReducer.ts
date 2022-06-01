import {v1} from "uuid";
import {Dispatch} from "redux";
import {profileApi, usersAPI} from "../api/api";
import {setToggleFollowingProgressAC} from "./userReducer";

const initialState = {
    posts: [
        {id: '1', message: "Hello, my name's Ivan", likesCount: 5},
        {id: '2', message: "I'm fine, thanks", likesCount: 22},
        {id: '3', message: "I'm not fine", likesCount: 202},
    ],
    profile: null,
    status: '',
}

//REDUCER

export const profileReducer = (state: initialStateProfilePageType = initialState, action: ProfileActionsTypes): initialStateProfilePageType => {
    switch (action.type) {
        case 'ADD-POST': {
            const newPost = {
                id: v1(),
                message: action.textForNewPost,
                likesCount: 0,
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        }
        case "SET-USER-PROFILE":
            return {...state, profile: action.profile}
        case "SET-STATUS":
            return {...state, status: action.status}
        default:
            return state
    }
}

// A C T I O N S

export const addPostAC = (messageForNewPost: string) => ({
    type: "ADD-POST",
    textForNewPost: messageForNewPost
} as const)
export const setUserProfileAC = (profile: ProfileType | null) => ({
    type: "SET-USER-PROFILE",
    profile,
} as const)
export const setStatusAC = (status: string) => ({type: "SET-STATUS", status,} as const)

// T H U N K S

export const getUserProfileTC = (userId: number) => async (dispatch: Dispatch) => {
//описываем тип, который возвращается из userId - PathParamsType
    const response = await usersAPI.getProfile(userId)
    dispatch(setUserProfileAC(response))
}

export const getStatusTC = (userId: number) => async (dispatch: Dispatch) => {
    const response = await profileApi.getStatus(userId)
    dispatch(setStatusAC(response))
}

export const updateStatusTC = (status: string) => async (dispatch: Dispatch) => {
    const response = await profileApi.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatusAC(status))
    }
}

// T Y P E S

export type postsObjectType = {
    id: string;
    message: string
    likesCount: number
}
export type initialStateProfilePageType = {
    posts: Array<postsObjectType>
    profile: ProfileType | null
    status: string
}

export type ProfileType = {
    aboutMe: string
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsPropsType
    photos: PhotosType
}
export type ContactsPropsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type PhotosType = {
    small: string
    large: string
}

export type ProfileActionsTypes = ReturnType<typeof addPostAC>
    | ReturnType<typeof setUserProfileAC>
    | ReturnType<typeof setToggleFollowingProgressAC>
    | ReturnType<typeof setStatusAC>