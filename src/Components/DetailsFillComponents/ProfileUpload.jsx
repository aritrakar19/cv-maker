import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { updateState} from '../../ReduxManager/dataStoreSlice'
  
function App() {
    const imageFile= useSelector(state=> state.dataStore.imageFile)
    const dispatch = useDispatch();
    
    function handleChange(e) {
        
        let file = e.target.files[0]
        const  fileType = file['type'];
        const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
        if (validImageTypes.includes(fileType)) {
            let temp=URL.createObjectURL(file)

            dispatch(updateState({
                key:'imageFile',
                value:temp,
            }))
        }
        else{
            alert('Uploaded file type should be jpg/png!')
        }
    }
    return (
        <div className="container">
    
            <div className="row" style={{justifyContent: 'flex-end'}}>
                <img style={{height:'150px', width:'100px', background:'grey',padding:0}} src={imageFile} alt='profile'/>
            </div>
            <div className="row" style={{justifyContent: 'flex-end'}}>
                <input type="file" onChange={handleChange} />
            </div>
            
  
        </div>
    );
} 
export default App;
