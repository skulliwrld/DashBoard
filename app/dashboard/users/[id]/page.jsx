import React from 'react'
import { fetchUserData } from '@/utills/dataFETCH'
import { UpdateUserForm } from '@/components/userUpdateTable'

async function singleUserPage({params}) {
    // {WE WILL ACTIVATE OUR SERVERLESS HTTP PATCH CALL TO OUR API/USERS/[ID]/ POST HERE}
    const {id} = params
    console.log(id)
    const user = await fetchUserData(id)
  return (
    <section>
        <UpdateUserForm content={JSON.parse(JSON.stringify(user))}/>
    </section>
  )
}

export default singleUserPage