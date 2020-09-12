import React, {useEffect, useState} from 'react';
// import {Link} from 'react-router-dom';
import '../components/App.css';
import axios from 'axios';
import moment from 'moment';

const Answer = (props) => {
  const [data, setData] = useState([])
  const [title, setTitle] = useState("")
  console.log("answer props", props)
  const queskey = props.match.params.key;
  // console.log("props in answer com",quesData)
 
  const convertEpochToLocalTime = (epochTime) =>{
      
    var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
    d.setUTCSeconds(epochTime);
    return d;
   
  }

  // const loadData =()=>{

    const populateData =async() =>{
  
       const res = await axios.get("https://vorail-app.appspot.com/app/v1/qa/ask-all/thread?key=" + queskey)
      console.log("res", res)
      if(res.data.question.tags){
      setTitle(res.data.question.tags[0])
      }
      let arr=[]
      // let counter=0
      if(res.data.question && res.data.question.answers){
      res.data.question.answers.map((answer,index)=>{
        
        // console.log("counter",counter)
        // const res2 = await axios.get("https://vorail-app.appspot.com/app/v1/qa/ask-all/thread?key="+question.key)
        
        // counter=counter+1
        // let localTime = convertEpochToLocalTime(answer.createdAt)
        // console.log("tags",answer.tags[0])
        arr.push({
          // answer: answer.tags[0], 
          file:<audio className="audioFile" src={"https://storage.googleapis.com/vorail/"+ answer.user.userId + "/" + answer.soundId} controls preload="none"/> , 
          key:answer.key,
          nameDate:<span style={{fontSize:"17px"}}><span style={{fontWeight:500}}>{answer.user.name} </span> - {moment.unix(answer.createdAt).fromNow() }</span>,
          index:index+1 + "."
          
          // name: answer.user.name,
          // date:localTime.toString()
        })
             })
            }

            else{
              arr.push({
                // answer: answer.tags[0], 
                file:<div style={{textAlign: "center"}} >No answers</div>  ,
                // nameDate:<span style={{fontSize:"17px"}}><span style={{fontWeight:500}}>{answer.name} </span> on {answer.date}</span>
                // key:answer.key,
                // name: answer.user.name,
                // date:localTime.toString()
              })
            }
            console.log("array", arr)
      setData(arr)
    }

    useEffect(()=>{
    populateData()
      
    },[])


    
    
  // }

  return (
    <div className="App">
      <div className = "answerWrapper">
  <div className="answerTitle" ><span className="answerTitleSpan" >Tag : {title}</span></div>
  <div className="answerList" >
    {/* { data.length > 0 ? */}
  {  data.map((answer,index)=>
         <div style={{marginBottom:30}} key={index} >
         <div style={{marginBottom:10}}><span style={{marginRight: "14px", fontWeight: 500}}>{answer.index}</span>{answer.nameDate}</div>
         {answer.file}
         </div>
       ) 
      //  : <div style={{textAlign: "center"}} >No answers</div>  
  }
      {/* // } */}
       </div>
     
       </div>
    </div>
  );
}

export default Answer;
