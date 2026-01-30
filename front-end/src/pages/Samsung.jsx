import { Link } from "react-router-dom";
import samsungS from "../assets/Samsung/Samsung-S.png"
import Galaxy from "../pages/Galaxy"
import SamsungS from "./SamsungS";
import { useDispatch } from "react-redux";
import { selectModel } from "../redux/features/selectModel/selectModelSlice";
export default function Samsung() {

    
    const brandInfo = [

            { 
                name: "Galaxy S",
                logo: samsungS,
                href : "/Samsung/Samsung-S"
            },
            { 
                name: "Galaxy Z",
                logo: samsungS,
                href : "/Samsung/Samsung-Z"
            },
            { 
                name: "Galaxy A",
                logo: samsungS,
                href : "/Samsung"
            },
            { 
                name: "Galaxy M",
                logo: samsungS,
                href : "/Samsung"
            },
            { 
                name: "Galaxy F",
                logo: samsungS,
                href : "/Samsung"
            },
            
    ]
    const dispatch = useDispatch()


    const handleSelectedModel = (product) =>{
        dispatch(selectModel(product))
    }
    
    return(
        <main>
            {<p></p>}
            <h1 className="brand-name">samsung</h1>
            <div className="intro">
                
            {   
                brandInfo.map((item)=>(
                    <>
                        <Link  className="intro-container" to={item.href} key={item.name} onClick={() => handleSelectedModel(item.name)} >
                            <h1 >{item.name}</h1>
                            <h2>View all</h2>
                            <img src={item.logo} alt={item.name} />
                        </Link>
                    </>
                ))
            }
            
            </div>
        </main>
    )
}