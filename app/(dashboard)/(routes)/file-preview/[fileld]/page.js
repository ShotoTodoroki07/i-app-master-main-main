"use client"
import React, { useEffect, useState } from 'react'
import { app } from '../../../../../firebaseConfig';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import FileInfo from '../_components/FileInfo';
import FileShareForm from '../_components/FileShareForm';
import Link from 'next/link';
import { ArrowLeftSquare } from 'lucide-react'; // ถ้าใช้ icon นี้

function FilePreview(params) {
  const db = getFirestore(app);
  const [file,setFile]=useState();
    useEffect(()=>{
        console.log(params?.fileId)
        params?.fileId&&getFileInfo();
    },[])

    const getFileInfo=async()=>{
      const docRef = doc(db, "uploadedFile", params?.fileId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
         console.log("Document data:", docSnap.data());
         setFile(docSnap.data());
        } else {
          // docSnap.data() will be undefined in this case
           console.log("No such document!");
        }
    }

    const onPasswordSave=async(password)=>{
        const docRef=doc(db,"uploadedFile",params?.fileId);
        await updateDoc(docRef,{
          password:password
        })
    }

  return (
    <div className='py-10 px-20'>
      <Link href='/upload' className='flex gap-3'>
      <ArrowLeftSquare/> Go to Upload </Link>
      <div className='grid grid-cols-1 md:grid-cols-2 mt-5'>
      <FileInfo file={file} />
      <FileShareForm file={file}
        onPasswordSave={(password) => onPasswordSave(password)}/>
    </div>
  </div>
  );
}

export default FilePreview
