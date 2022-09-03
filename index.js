// loadCategory 
const lodeAllNews  = async() =>{
    const url ="https://openapi.programming-hero.com/api/news/categories"
   try{
    const res =await fetch (url)
    const data = await res.json()
    displayNews(data.data.news_category)
   }
   catch(error){
    console.log(error);
   }   
}


const displayNews = async (news)=>{
    const categoryContainer =document.getElementById('news-catagory-section');
    news.forEach(category => {
        const {category_name,category_id} = category;
        const createDiv =document.createElement('li');
        createDiv.classList.add("fw-bold");
        createDiv.innerHTML=`
        <a onclick="loadCard(${category_id})">${category_name}</a>
        `;
        categoryContainer.appendChild(createDiv)
        
    });
}

 lodeAllNews()
