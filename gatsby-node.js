const axios = require('axios')

exports.sourceNodes = async ({ 
    actions, 
    createNodeId, 
    createContentDigest 
}) => {
    const result = await axios({
        method: 'GET',
        url: "https://vorail-app.appspot.com/app/v1/qa/questions/my-subscribed?userId=_3fd816cf762fdcbc98de5fd281c52738",
    }).catch(error=>{
        console.error(result)
    })

    questions = result.data.questions
    questions.forEach(question => {
        const node = {
            ...question,
            // addisneger: `https://storage.googleapis.com/vorail/${question.user.userId}/${question.soundId}`,
            id: createNodeId(question.key),
            internal: {
                type: 'vorailApp',
                contentDigest: createContentDigest(question),
            },
        }
        actions.createNode(node)
    })
    
    // const nodeData = {
    //     title: 'Test Node',
    //     description: 'This is test node',
    // }
    // const newNode = {
    //     ...nodeData,
    //     id: createNodeId('TestNode-id'),
    //     internal: {
    //         type: 'TestNode',
    //         contentDigest: createContentDigest(nodeData)
    //     }
    // }
    // actions.createNode(newNode);
}

const path = require("path");

exports.onCreatePage = async ({page, actions}) =>{
    const {createPage} = actions
    console.log('Page - ' + page.page);
    if(page.path.match(/^\/answer/)){
        createPage({
            path: "/answer",
            matchPath: "/answer/*",
            component: path.resolve("src/pages/answers.js")
        })
    }
}