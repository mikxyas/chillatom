import { useUserStore } from "../global-stores/useUserStore";

const Card: React.FC<{content: any}> = (props) => {
    const user = useUserStore(state => state.user)
    console.log(user)
    return(
        <div className={`aqua-effect h-auto mb-3 lg:mb-0  lg:h-80 w-auto rounded-3xl p-4 ${user.theme} bg-opacity-20 bg-clip-padding backdrop-filter backdrop-blur-lg shadow-lg backdrop-saturate-150`} >
            {props.content}
        </div>
    )
}

export default Card;