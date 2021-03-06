import React, {useEffect} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogType, MessageType} from "../../bll/dialogReducer";
import * as yup from "yup";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@mui/material/Grid";

type PropsType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
    isAuth: boolean
    addNewMessageAC: (textForMessageInDialog: string) => void
}

export const Dialogs = ({addNewMessageAC, dialogs, messages, ...props}: PropsType) => {
    let dialogElements = dialogs.map((d) => <DialogItem name={d.name} key={d.id}
                                                        id={d.id}/>)
    let messageElements = messages.map(m => <Message message={m.message} img={m.img}
                                                     isYou={m.isYou}
                                                     key={m.id}/>)


    return (
        <Grid container className={s.dialogsBlock}>
            <Grid item xs={2} className={s.dialogsItems}>
                {dialogElements}
            </Grid>
            <Grid item container xs={10} className={s.dialogsContent}>
                <Grid item xs={12} className={s.messages}>
                    {messageElements}
                </Grid>
                <Grid item xs={12} className={s.typeAndSend}>
                    <AddMessageForm addNewMessageAC={addNewMessageAC}/>
                </Grid>
            </Grid>
        </Grid>
    )
}

// NEW COMPONENT
type AddPostFormPropsType = {
    addNewMessageAC: (textForMessageInDialog: string) => void
}
type IFormInputs = {
    'message_area': string
}

export const AddMessageForm = ({addNewMessageAC, ...props}: AddPostFormPropsType) => {

    const schema = yup.object().shape({
        message_area: yup.string().required("Required"),
    })

    const {
        handleSubmit,
        control,
        formState: {errors, isSubmitSuccessful},
        reset
    } = useForm<IFormInputs>({resolver: yupResolver(schema)})

    useEffect(() => {
        reset({message_area: ''})
    }, [isSubmitSuccessful, reset])

    const formSubmitHandler: SubmitHandler<any> = (data: IFormInputs) => {
        addNewMessageAC(data.message_area)
    }

    return (
        <div style={{width: '100%', display: 'flex', justifyContent: "center"}}>
            <form onSubmit={handleSubmit(formSubmitHandler)}>
                <FormGroup>
                    <Controller name={'message_area'} control={control}
                                render={({field}) => (
                                    <TextField {...field} label="Type your message here"
                                               type='text'
                                               margin="normal"
                                               error={!!errors.message_area}
                                               defaultValue=""
                                    />
                                )}/>
                    <Button style={{width: '100%'}} type='submit'
                            variant={"contained"}>Send</Button>
                </FormGroup>
            </form>
        </div>
    )
}
