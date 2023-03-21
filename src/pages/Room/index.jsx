import React from "react";
import { useParams } from 'react-router-dom'
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'

const RoomPage = () =>{
    const { roomId } = useParams();

    const myMeeting = async (ele) => {
        const appID = 1680348351;
        const serverSecret = "bb5be9d06ee5a0b4d55adc95005f71be";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(), "Deepak Khaire");
        const zc = ZegoUIKitPrebuilt.create(kitToken)
        zc.joinRoom({
            container : ele,
            sharedLinks : [
                {
                    name: 'Copy Link',
                    url: `http:localhost:3000/room/${roomId}`
                }
            ],
            scenario :{
                mode: ZegoUIKitPrebuilt.GroupCall
            },
            showScreenSharingButton : true,
        })
    }
    return <div>
        <div ref={myMeeting} />
    </div>
};

export default RoomPage;