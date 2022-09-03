
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
    news.forEach(newsCategory => {
        const {category_name,category_id} = newsCategory;
        const createDiv =document.createElement('li');
        createDiv.classList.add("fw-bold");
        createDiv.innerHTML=`
        <a onclick="lodeAllNewsDitails(${category_id})">${category_name}</a>
        `;
        categoryContainer.appendChild(createDiv)
        
    });
}

const lodeAllNewsDitails = async(id) =>{

    const url =`https://openapi.programming-hero.com/api/news/category/0${id}`
   try{
    const res =await fetch (url)
    const data = await res.json()
    displayNewsOnCard(data.data)
   }
   catch(error){
    console.log(error);
   }  
}

const displayNewsOnCard = cards =>{
 
    const getCardSection = document.getElementById('news-card-section');
    getCardSection.textContent =""
    cards.forEach(card =>{
     
        const {image_url,thumbnail_url,title,details,author,total_view,} = card;
        const {name,published_date,img} =author;

        const creatCardDiv =document.createElement("div");

        creatCardDiv.classList.add("col-lg-3",  "col-sm-6","mt-6")
        creatCardDiv.innerHTML =`
                   
        <div class="card">
        <img src="${thumbnail_url}" class="card-img-top w-100 img-fluid" alt="...">

        <div class="d-flex">
        <div class=" mx-1">
          <i class="fa-solid fa-eye "></i> 
        </div>
        <div class="text-muted">
        <p><span>${total_view ? total_view : "0"} M</span></p> 
        </div>
        <p style=" margin-left:80px;" class=" text-muted">${published_date ? published_date : "published date not found"}</p>
       </div>

        <div class="card-body m-0">
          <h4 class="card-title">${title > 8 ? title.slice(0,8) + "....." : title}</h4>
          <p>${details.length > 50 ? details.slice(0,50) + " ....." : details}</p>
        </div>

        <div class="mr-3 d-flex">
        <img class="w-25 ms-3 mb-2 rounded-circle" src="${img ? img : "img not found"}" alt="">
        <p class="mx-3 mt-4 text-muted">${name ? name : "name not found"}</p>
        </div>
         
     

       </div>              
        `;
        getCardSection.appendChild(creatCardDiv)
    })
}
 lodeAllNewsDitails()
 lodeAllNews()
