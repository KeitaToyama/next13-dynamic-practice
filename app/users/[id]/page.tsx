export const  fetchJson = async (q: string) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${q}` )
    // console.log(res.text())
    return res.json();
  }


export default async function userPage({params}: any) {
    const user = await fetchJson(params.id);
    return (
        <div>{user.username} {user.email}
        </div>
    )
}