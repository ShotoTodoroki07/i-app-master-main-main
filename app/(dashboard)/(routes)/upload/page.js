"use client"
import React, { useState, useEffect } from 'react'
import UploadForm from './_components/UploadForm'
import { app } from '../../../../firebaseConfig';
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { generateRandomString } from '../../../utils/GenerateRandomString';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';

function Upload() {
    const { user } = useUser();  // <-- เพิ่มตรงนี้ ดึง user มาใช้
    const [uploadCompleted, setUploadCompleted] = useState(false);
    const [progress, setProgress] = useState(0)
    const router=useRouter();
    const storage=getStorage(app)
    const db = getFirestore(app); 
    const [fileDocId,setFileDocId]=useState();
    const uploadFile=(file)=>{
        const metadata = {
            contentType: file.type
        };
        const storageRef = ref(storage, 'file-upload/' + file.name);
        const uploadTask = uploadBytesResumable(storageRef, file, metadata);
        uploadTask.on('state_changed',
        (snapshot) => {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(progress);  // อัพเดต progress
            console.log('Upload is ' + progress + '% done');
        },
            (error) => {
            console.error("Upload failed:", error);
        },
        () => {

            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log('File available at', downloadURL);
                saveInfo(file, downloadURL, user);
            });
    }, )
    }
    const saveInfo=async(file,fileUrl,user)=>{
        const docId=generateRandomString().toString();
        const userEmail = user?.primaryEmailAddress?.emailAddress || null;
        const userName = user?.fullName || "Unknown";
        
         const fileData = {
        fileName: file?.name,
        fileSize: file?.size,
        fileType: file?.type,
        fileUrl: fileUrl,
        userEmail: userEmail,
        userName: userName,
        password: '',
        id: docId,
        shortUrl: process.env.NEXT_PUBLIC_BASE_URL + generateRandomString()
        };
        setFileDocId(docId)

    }
    

    useEffect(()=>{
        console.log("Trigger")
        progress==100&& setTimeout(()=>{
            setUploadCompleted(true);
        },2000)
    },[progress==100]);

    useEffect(()=>{
        uploadCompleted&&
        setTimeout(()=>{
        setUploadCompleted(false);
        router.push('/file-preview/'+fileDocId);
        },2000)
    },[uploadCompleted==true])

    return (
        <div className='p-5 px-8 md:px-28'>
            <h2 className='text-[20px] trxt-center m-5'>Start 
                <strong className='text-primary'>Uploading </strong>
                File and <strong className='text-primary'>Share</strong> it</h2>
            <UploadForm uploadBtnClick={(file)=>uploadFile(file)} />
        </div>
    )
}

export default Upload