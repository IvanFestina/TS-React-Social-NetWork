import {v1} from "uuid";

const initialState = {
    messages: [
        {
            id: '1',
            isYou: false,
            message: 'Hello',
            img: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
        },
        {
            id: '2',
            isYou: true,
            message: "Hi, I'm Ivan, I have a proposal for you!",
            img: 'https://www.nicepng.com/png/detail/914-9142519_doge-meme-dog-doggo-funny-sticker-momo-png.png'
        },
        {
            id: '3',
            isYou: false,
            message: "Yea? What's up with a proposal?!",
            img: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png'
        },
    ],
    textForMessageInDialog: '',
    dialogs: [
        {id: '1', name: 'Sergey'},
        {id: '2', name: 'Mark'},
        {id: '3', name: 'Alexandr'},
        {id: '4', name: 'Mike'},
        {id: '5', name: 'John'},
        {id: '6', name: 'Fill'}
    ]
}

//REDUCER

export const dialogsReducer = (state: InitialStateDialogsType = initialState, action: ActionsDialogTypes): InitialStateDialogsType => {

    switch (action.type) {
        case "ADD-NEW-MESSAGE":
            const newMessage: messageObjectType = {
                id: v1(),
                isYou: true,
                message: action.newMessage,
                img: 'https://www.nicepng.com/png/detail/914-9142519_doge-meme-dog-doggo-funny-sticker-momo-png.png'
            }
            return {
                ...state,
                messages: [...state.messages, {...newMessage}],
                textForMessageInDialog: '',
            };
        case "UPDATE-NEW-MESSAGE-TEXT":
            return {...state, textForMessageInDialog: action.newText};
        default:
            return state
    }
}

//ACTION

export const addNewMessageAC = (newMessage: string) => {
    return {
        type: "ADD-NEW-MESSAGE",
        newMessage: newMessage
    } as const
}
export const updateNewMessageTextAC = (newText: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-TEXT",
        newText: newText
    } as const
}

//THUNK

//TYPES
export type InitialStateDialogsType = typeof initialState

// export type dialogObjectType = {
//     id: string;
//     name: string
// }
export type messageObjectType = {
    id: string;
    message: string
    img: string
    isYou: boolean
}


export type ActionsDialogTypes = ReturnType<typeof addNewMessageAC>
    | ReturnType<typeof updateNewMessageTextAC>
