import { useDispatch } from 'react-redux'
import {setToken} from '../../redux/reducerSlice/userSlice'
import { logout } from '../../redux/reducerSlice/userSlice'
const Home = (props)=> {
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(logout())
        
      }
    return (
        <div>
        i am Admin page
        <button onClick={handleLogout}>Logout</button>
      </div>
    )
}

export default Home