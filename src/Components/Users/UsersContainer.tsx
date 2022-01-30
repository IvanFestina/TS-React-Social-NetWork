import React from "react";
import {connect} from "react-redux";
import {followAC, setUsersAC, unFollowAC} from "../../redux/usersReducer/action";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {InitialStateType, UserObjectType} from "../../redux/usersReducer/types";
import {Users} from "./Users";

type MapStatePropsType = {
    usersPage: InitialStateType
}
type MapDispatchPropsType = {
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setUsers: (users: UserObjectType[]) => void
}
export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        usersPage: state.usersPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
  return {
        follow: (userID: number) => dispatch(followAC(userID)),
        unFollow: (userID: number) => dispatch(unFollowAC(userID)),
        setUsers: (users: UserObjectType[]) => dispatch(setUsersAC(users))
    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users);