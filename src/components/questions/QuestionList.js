import '../App.css';
import { graphql, useStaticQuery } from "gatsby"
import moment from 'moment';
import { Link } from 'react-router-dom'
import React, { useState } from 'react';
import ReactTable from "react-table-6";  
import "react-table-6/react-table.css" 

const App = () => {
  const data = useStaticQuery(graphql`{
    allVorailApp {
      nodes {
        key
        createdAt
        soundId
        tags
        kind
        user {
          name
          userId
        }
      }
    }
  }`)

  const tableData = data.allVorailApp.nodes;
  const populateData = (resData) => {
    let arr = [];
    resData.forEach((question) => {
      if (question.kind >= 500 && question.tags) {
        arr.push({
          question: <Link to={`/answer/${question.key}`} style={{ textDecoration: 'underline' }}>{question.tags[0]}</Link>,
          name: question.user.name,
          file: <audio style={{ width: "100%" }} src={"https://storage.googleapis.com/vorail/" + question.user.userId + "/" + question.soundId} controls preload="none" />,
          date: question.createdAt,
          key: question.key,
        })
       
      }
    })
    return arr
  }
  const newData = populateData(tableData);
  const columns = React.useMemo(
    () => [
      {
        Header: 'Question',
        accessor: 'question', // accessor is the "key" in the data
        Cell: props => <span>{props.value}</span>, // Custom cell components!
        style: { 'whiteSpace': 'unset', 'textAlign': 'center' },
        // width:"auto"
      },
      {
        Header: 'Name',
        accessor: 'name',
        Cell: props => <span>{props.value}</span>, // Custom cell components!
        style: { 'whiteSpace': 'unset', 'textAlign': 'center' },
        // width:'auto'
      }, {
        Header: 'Audio',
        accessor: 'file',
        Cell: props => <span>{props.value}</span>, // Custom cell components!
        style: { 'whiteSpace': 'unset', 'textAlign': 'center' },
        // width:"50%"
      }, {
        Header: 'Date',
        accessor: 'date',
        Cell: props => <span>{props.value == null ?"Loading" :moment.unix(props.value).fromNow() }</span>, // Custom cell components!
        style: { 'whiteSpace': 'unset', 'textAlign': 'center' },
        // width:"auto"
      },
    ],
    []
  )
return (
  <center>
    <div className="App"> 
      <div className="tableWrapper">
        <ReactTable 
          data={newData} 
          columns={columns} 
          defaultPageSize = {10} 
          pageSizeOptions = {[5,10,20,50]}  
        /> 
      </div>
    </div> 
</center>
  ) 
}

export default App
