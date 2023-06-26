import { useNavigate } from "react-router-dom";
//  export const Guest = () => {
//     const navigate = useNavigate();
export function Guest () {

    return(
        <>
    <header>  Guest Page</header>
    <div>
        Thanks 
        for
        accepting my invite
    </div>
    <div className="front">
            {/* Place your front image here */}
          </div>
          <button>Read only</button>
        </>
    )
};
 