import Link from "next/link";


const PostsPage = async () => {
   const res = await fetch('http://localhost:5000/post',{
      cache: "no-store", //both dynamic rendering client and server side
      // next: {
      //    revalidate: 5, // if data changes then after 5s it'll automatic rebuild
      // }
      // cache: "force-cache", for pre rendaring at time of production
      // force cache 
   });
   const posts = await res.json();
   // console.log(posts);

   return (
      <div className="container mx-auto">
         <h1 className="text-3xl font-semibold my-6 text-center">Total Post: {posts.length}</h1>
         <div className="grid grid-cols-1 gap-5">
         {
            posts.map(post => <div key={post.id} 
            className="card w-full bg-gray-100 px-10">
            <div className="card-body ">
              <h2 className="card-title">{post.title}</h2>
              <p>{post.description}</p>
              <h2>Total Likes: {post.likeCount}</h2>
              <div className="card-actions justify-end">
                <Link href={`/posts/${post.id}`}><button className="btn btn-primary">See More</button>
                </Link>
                
              </div>
            </div>
          </div>)
         }
         </div>
      </div>
   );
};

export default PostsPage;