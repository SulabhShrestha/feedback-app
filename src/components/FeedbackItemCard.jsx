import Card from "./shared/Card";
import {FaTimes, FaEdit} from 'react-icons/fa'
import { FeedbackContext, deleteFeedback } from "../context/FeedbackContext";
import { useContext } from "react";

 function FeedbackItemCard({item}) {
  const {deleteFeedback, editFeedback} = useContext(FeedbackContext);

   return (
     <Card>
       <div className="num-display">{item.rating}</div>
       <button className="edit" onClick={() => editFeedback(item)}>
         <FaEdit color="purple" />
       </button>
       <button className="close" onClick={() => deleteFeedback(item.id)}>
         <FaTimes color="purple " />
       </button>

       <div className="text-display">{item.text}</div>
     </Card>
   );
 }


export default FeedbackItemCard;