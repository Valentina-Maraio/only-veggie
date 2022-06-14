import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { loadPosts } from '../store/user'
import {useEffect} from 'react'



const Users = () => {

    const dispatch = useDispatch();
    const users = useSelector((state) => state.list);

    useEffect(() => {
        dispatch(loadPosts());
    }, [dispatch]);

  return (
    <div>
        <h2>Users</h2>
        <ul>
            {
                users.map((user) => {
                    return <div>
                        <p>
                        {user.name} : {user.phone}
                        </p>
                    </div>
                })
            }
        </ul>
    </div>
  )
}

export default Users