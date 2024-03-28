import BoardWriteUI from "./BoardWrite.presenter";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { CREATE_BOARD, FETCH_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";

export default function BoardWrite(props){
  const router = useRouter();
  
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const [isActive,setIsActive] = useState(false)
  const [writer,setWriter] = useState("");
  const [password,setPassword] = useState("");
  const [title,setTitle] = useState("");
  const [contents,setContents] = useState("");

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  const onChangeWriter = (event) => {
    setWriter(event.currentTarget.value)
  
    if(event.target.value !== ""){
      setWriterError("")
    }
    if (event.target.value && password && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }
  const onChangePassword = (event) => {
    setPassword(event.target.value)
    
    if(event.target.value !== ""){
      setPasswordError("")
    }
    if (writer && event.target.value && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }
  const onChangeTitle = (event) => {
    setTitle(event.target.value)
    
    if(event.target.value !== ""){
      setTitleError("")
    }
    if (writer && password && event.target.value && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }
  const onChangeContents = (event) => {
    setContents(event.target.value)
    
    if(event.target.value !== ""){
      setContentsError("")
    }
    if (writer && password && title && event.target.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  const onClickSubmit = async() => {
    if(!writer){
      setWriterError("작성자를 입력해주세요")
    }
    if(!password){
      setPasswordError("비밀번호를 입력해주세요")
    }
    if(!title){
      setTitleError("제목을 입력해주세요")
    }
    if(!contents){
      setContentsError("내용을 입력해주세요")
    }
    
    if(writer && password && title && contents){
      try{
        const result = await createBoard({
          variables:{
            createBoardInput:{
              writer,
              password,
              title,
              contents
            }
          }
        })
          router.push(`/boards/${result?.data.createBoard._id}`)
      }
      catch(error){
        alert(error.message)
      }
    }

  }
  const onClickEdit = async() => {

    /* 값이 변경된 부분만 수정하기 위해서
      updateBoardInput(수정하기에 들어가는 내용)과 동일한 항목을 가진 배열을 하나 생성하고
      title과 contents의 true false값을 이용해서 값이 존재하면 updateBoardInput에 추가해주어 입력된 값만 수정하게 한다.
    */
    const updateBoardInput = {};
    if(title) updateBoardInput.title = title;
    if(contents) updateBoardInput.contents = contents;

    try{
      const update = await updateBoard({

        variables:{
          boardId: router.query.boardId,
          password,
          updateBoardInput
        }
      })
      router.push(`/boards/${update.data?.updateBoard._id}`)
    }catch(error){
      alert(error.message)
    }
    
  }


  return(
    <BoardWriteUI
      writer = {writer}
      writerError = {writerError}
      password = {password}
      passwordError = {passwordError}
      title = {title}
      titleError = {titleError}
      contents = {contents}
      contentsError = {contentsError}
      onChangeWriter = {onChangeWriter}
      onChangePassword = {onChangePassword}
      onChangeTitle = {onChangeTitle}
      onChangeContents = {onChangeContents}
      onClickSubmit = {onClickSubmit}
      onClickEdit = {onClickEdit}
      isActive = {isActive}
      isEdit = {props.isEdit}
      data = {props.data}
    />
  )
}