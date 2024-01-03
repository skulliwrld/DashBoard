"use server"
import SearchAddComponent from '@/components/ui/dashboard/Remaining_Fields/SearchAdd'
import Pagination from '@/components/ui/dashboard/Remaining_Fields/Pagination'
import Table from '@/components/ui/dashboard/Remaining_Fields/UserTable'
import { fetchUser } from '@/utills/dataFETCH'

async function UserPage({searchParams}) {
  //SEARCH DATA ACTIVATIONS
  const q = searchParams?.q || ""
  const page =  searchParams?.page || 1
  
  const {users, count}  = await fetchUser(q ,page)
  return (
    <section className="bg-[#0c162c]">
        <SearchAddComponent title="user" url="/dashboard/users/user_form"/>
        <Table Datas={JSON.parse(JSON.stringify(users))}/>
        <Pagination count={count}/>
    </section>
  )
}
export default UserPage
