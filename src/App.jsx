// App.jsx
import { useEffect, useState } from "react";


export default function App() {
const [media, setMedia] = useState([]);
const [page, setPage] = useState(1);
const pageSize = 20;


useEffect(() => {
fetch("/manifest.json")
.then((res) => res.json())
.then((data) => setMedia(data));
}, []);


const paginated = media.slice(0, page * pageSize);


return (
<div className="container">
<h1>Briannah Gallery</h1>


<div className="grid">
{paginated.map((item, i) => (
item.type === "image" ? (
<img key={i} src={item.src} alt="media" loading="lazy" />
) : (
<video key={i} src={item.src} controls preload="metadata" />
)
))}
</div>


{paginated.length < media.length && (
<button className="load-btn" onClick={() => setPage(page + 1)}>
Load More
</button>
)}
</div>
);
}