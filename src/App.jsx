import { useState,useEffect } from 'react'
import ViewID from './components/ViewId.jsx';
import './App.css'
function App() {
  const [selectedImage, setSelectedImage] = useState('');
  const [filePath,setFilePath]=useState('');

  function handleFileChange(e){
    const file=e.target.files[0]
    setSelectedImage(file.name)
  }

  function combineTerms(){
    const file=`${filePath}\\${selectedImage}`
    console.log('file here',file)
    return file;
  }
  useEffect(()=>{
    combineTerms();
  },[selectedImage,filePath])
  return (
    <>
    {/* <input type="text" onChange={(e)=>setFilePath(e.target.value)}/>
    <input type="file" accept="image/*" onChange={handleFileChange}/>
    {console.log(combineTerms())}
      <img src={combineTerms()} />asdf */}
      <ViewID />
    </>
  )
}

export default App
