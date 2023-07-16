import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {

    return (
        <div className="background">
            <PrettyChatWindow
                projectId={"71d3c7f5-fe02-4966-a30c-3e724a4e41c3"}
                username={props.user.username}
                secret={props.user.secret}
            />
        </div>
    );
};

export default ChatsPage;