import React from "react";
import axios from "axios";
import Users from "./Users";

class UsersAPIComponent extends React.Component<any, any> {

    constructor(props: any) {
        super(props);


        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {

            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });

    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {

            this.props.setUsers(response.data.items);

        });
    }

    render() {


        return <Users onPageChanged={this.onPageChanged} currentPage={this.props.currentPage} users={this.props.users}
                      pageSize={this.props.pageSize} follow={this.props.follow} totalUsersCount={this.props.totalUsersCount}
                      unfollow={this.props.unfollow}/>

    }
}

export default UsersAPIComponent;