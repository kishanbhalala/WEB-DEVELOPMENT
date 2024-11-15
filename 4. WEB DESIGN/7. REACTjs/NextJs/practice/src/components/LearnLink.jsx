import Link from "next/link";

const LearnLink = () => {
  const id = 2
  return (
    <div>
      <Link href="/admin/dashb">go to admin dashboard /</Link>
      <Link href={`/user/profile/${id}`}> go to profile</Link>
    </div>
  )
}

export default LearnLink
