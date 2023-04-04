import {createContext, useState} from 'react'
import { v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()
export const FeedbackProvider = ({children})=>{
    const [feedback, setFeedback] = useState([
        {
            id:1,
            text:'This item is feedback 1',
            rating:10
        },
        {
            id:2,
            text:'This item is feedback 2',
            rating:9
        },
        {
            id:3,
            text:'This item is feedback 3',
            rating:8
        }
    ])
    

    const [feedbackEdit, setFeedbackEdit] = useState({
        item:{},
        edit:false
    })
    const updateFeedback =  (id, updateItem) =>{
            setFeedback(
                feedback.map((item) =>(item.id === id ? {...item, ...updateItem}: item))
                )
        }
    const addFeedback = (newFeedback) =>{
        newFeedback.id = uuidv4()
        setFeedback([newFeedback,...feedback])
    }
    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you wanna delete?')) {
             setFeedback(feedback.filter((item) => item.id !== id)) 
        }
      
    }   
    const editFeedback = (item) =>{
        setFeedbackEdit({
            item,
            edit:true
        })
    }

    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}
export default FeedbackContext