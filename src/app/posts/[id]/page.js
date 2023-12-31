import Link from "next/link";

export async function generateStaticParams() {
   const res = await fetch("http://localhost:5000/posts");
   const posts = await res.json();
   const ids = posts.map((post) =>{
      return {
         id: post.id + "",
      };  
   })
   console.log(ids);
   return ids;
 }

const DetailPage = async ({ params }) => {
   // console.log(params.id);
   const res = await fetch(`http://localhost:5000/posts/${params.id}`);
   const post = await res.json();
   console.log(post);
   return (
      <div>
         <h1> Post Detail Page</h1>
         <div className="card w-full bg-orange-100">
            <div className="card-body">
               <h2>Id: {post.id}</h2>
               <h2>Title : {post.title}</h2>
               <p>Description: {post.description}</p>
               <div className="card-actions justify-end">
                  <Link href={'/posts'}>
                  <button className="btn">Back Now</button></Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default DetailPage;