import ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";
import axios from "axios";

// import "./styles.css";
/* 
class App extends Component {
    state = {
        users: [],
        columns: [
            {
                dataField: "id",
                text: "ID",
                sort: true
            },
            {
                dataField: "title",
                text: "Title"
            },
            {
                dataField: "name",
                text: "User Name",
                filter: textFilter()
            }
        ]
    };

    componentDidMount() {
        axios
            .get("https://randomuser.me/api/?results=100&inc=name&nat=us")
            .then(json =>
                json.data.results.map((result, index) => ({
                    name: `${result.name.first} ${result.name.last}`,
                    title: result.name.title,
                    id: index
                }))
            )
            .then(
                newData => this.setState({ users: newData })
                // , console.log(newData)
            )
            .catch(error => alert(error));
    }

    render() {
        return (
            <div className="container" style={{ marginTop: 50 }}>
                <BootstrapTable
                    striped
                    hover
                    keyField="id"
                    data={this.state.users}
                    columns={this.state.columns}
                    filter={filterFactory()}
                    pagination={paginationFactory()}
                />
            </div>
        );
    }
} */

function Groups() {

    let GroupObj = {
        users: [],
        columns: [
            {
                dataField: "id",
                text: "S.No",
                sort: true
            },
            {
                dataField: "name",
                text: "Group Name",
                filter: textFilter()
            },
            {
                dataField: "date",
                text: "Date"
            }
        ]
    };

    let [groupInfo, setGroupInfo] = useState(GroupObj)

    const getGroups = () => {
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        return axios
            .get("https://randomuser.me/api/?results=10&nat=us")
            .then(json =>
                json.data.results.map((result, index) => ({
                    name: 'V' + index,
                    id: index,
                    date: result.registered.date,
                }))
            )
            .then(

                newData => { 
                    console.log('hi', newData)
                    setGroupInfo({ users: newData }) 
                }

                // , console.log(newData)
            )
            .catch(error => alert(error));
    }

    useEffect(() => {
        getGroups()
    }, []);

    return (
        <div className="container" style={{ marginTop: 50 }}>
            <BootstrapTable
                striped
                hover
                keyField="id"
                data={groupInfo.users}
                columns={groupInfo.columns}
                filter={filterFactory()}
                pagination={paginationFactory()}
            />
        </div>
    );
}

export default Groups;
