import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    unfollow, toggleFollowingProgress, getUsers
} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";


class UsersContainer extends React.Component<any, any> {

componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber: number) => {

        this.props.getUsers(pageNumber, this.props.pageSize);

    }

    render() {


        return <>
            {this.props.isFetching ? <Preloader />: null}
            <Users onPageChanged={this.onPageChanged}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   pageSize={this.props.pageSize}
                   follow={this.props.follow}
                   totalUsersCount={this.props.totalUsersCount}
                   unfollow={this.props.unfollow}
             toggleFollowingProgress={this.props.toggleFollowingProgress}
                   followingInProgress={this.props.followingInProgress}
            />
        </>

    }
}

let mapStateToProps = (state: any) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}


export default connect(mapStateToProps,
    {
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowingProgress,
        getUsers,
    }
    )(UsersContainer);