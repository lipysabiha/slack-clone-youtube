import React, { useRef } from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { db } from "../firebase";
import firebase from 'firebase';

function ChatInput({channelName, channelId}) {
    const [input, setInput] = useState("");

    const sendMessage = (e) => {
        e.preventDefault(); //Prevents refresh

        if (channelId) {
            return false;
        }

        db.collection('room').doc(channelId).collection('messages').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: 'Slack',
            userImage: "https://images.pexels.com/photos/5417837/pexels-photo-5417837.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",

                // "https://pbs.twimg.com/profile_image/1339192504382590976/2WxMn8cm_400*4000.jpg"

        });

        setInput("");
    };

    return (
        <ChatInputContainer>
            <form>
                <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={`Message #ROOM`}
                />
                <Button hidden type='submit' onClick={sendMessage}>
                    SEND
                </Button>
            </form>
        </ChatInputContainer>
    );
}

export default ChatInput;

const ChatInputContainer = styled.div`
    border-radius: 20px;

    > form {
        position: relative;
        display: flex;
        justify-content: center;
    }

    > form > input {
        position: fixed;
        bottom: 30px;
        width: 60%;
        border: 1px solid gray;
        padding: 20px;
        outline: none;
    }

    > form > button {
        display: none !important;
    }
`;
``